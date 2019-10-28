<template>
    <div :class="wrapClasses" :style="styles">
        <div :class="[prefixCls + '-tail']" style="display:block;"><i></i></div>
        <div :class="[prefixCls + '-head']">
            <div :class="[prefixCls + '-head-inner']">
                <span v-if="!icon && currentStatus != 'finish' && currentStatus != 'error'">{{ stepNumber }}</span>
                <span v-else :class="iconClasses"></span>
            </div>
        </div>
        <div :class="[prefixCls + '-main']">
            <div :class="[prefixCls + '-title']">{{ title }}</div>
            <slot>
                <div v-if="operatorTime" :class="[prefixCls + '-content']">{{ operatorTime }}</div>
                <div v-if="operator" :class="[prefixCls + '-content']">{{ operator }}</div>
                <div v-if="remark" :class="[prefixCls + '-content']">{{ remark }}</div>
            </slot>
        </div>
    </div>
</template>
<script>
    import Emitter from '../../mixins/emitter';
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-steps';
    const iconPrefixCls = 'ivu-icon';

    export default {
        name: 'StepNode',
        mixins: [ Emitter ],
        props: {
            status: {
                validator (value) {
                    return oneOf(value, ['wait', 'process', 'finish', 'error']);
                }
            },
            title: {
                type: String,
                default: ''
            },
            content: {
                type: String
            },
            operatorTime: {
                type: String
            },
            operator: {
                type: String
            },
            remark: {
                type: String
            },
            icon: {
                type: String
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                stepNumber: '',
                nextError: false,
                total: 1,
                currentStatus: ''
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-item`,
                    `${prefixCls}-status-${this.currentStatus}`,
                    {
                        [`${prefixCls}-custom`]: !!this.icon,
                        [`${prefixCls}-next-error`]: this.nextError
                    }
                ];
            },
            iconClasses () {
                let icon = '';

                if (this.icon) {
                    icon = this.icon;
                } else {
                    if (this.currentStatus == 'finish') {
                        icon = 'ios-checkmark';
                    } else if (this.currentStatus == 'error') {
                        icon = 'ios-close';
                    }
                }

                return [
                    `${prefixCls}-icon`,
                    `${iconPrefixCls}`,
                    {
                        [`${iconPrefixCls}-${icon}`]: icon != ''
                    }
                ];
            },
            styles () {
                return {
                    width: `${1/this.total*100}%`
                };
            }
        },
        watch: {
            status (val) {
                this.currentStatus = val;
                if (this.currentStatus == 'error') {
                    this.$parent.setNextError();
                }
            }
        },
        created () {
            this.currentStatus = this.status;
        },
        mounted () {
            this.dispatch('Steps', 'append');
        },
        beforeDestroy () {
            this.dispatch('Steps', 'remove');
        }
    };
</script>
<style scoped>
.ivu-steps-vertical .ivu-steps-item.ivu-steps-status-process .ivu-steps-tail > i, .ivu-steps-vertical .ivu-steps-item.ivu-steps-status-process .ivu-steps-tail > i:after {
    background: #e9eaec!important;
}
.ivu-steps-vertical .ivu-steps-item.ivu-steps-status-wait .ivu-steps-tail > i, .ivu-steps-vertical .ivu-steps-item.ivu-steps-status-wait .ivu-steps-tail > i:after {
    background: #e9eaec!important;
}
.ivu-steps-vertical .ivu-steps-item.ivu-steps-status-finish .ivu-steps-tail > i, .ivu-steps-vertical .ivu-steps-item.ivu-steps-status-finish .ivu-steps-tail > i:after {
    background: #2d8cf0!important;
}
.ivu-steps-vertical .ivu-steps-main .ivu-steps-content {
    padding-bottom: 4px;
}
.ivu-steps-vertical .ivu-steps-item:last-child .ivu-steps-tail {
    display: none!important;
}
</style>