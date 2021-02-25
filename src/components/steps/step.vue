<template>
    <div :class="wrapClasses" :style="styles">
        <div v-if="showTail" :class="[prefixCls + '-tail']"><i></i></div>
        <Steps :current="index" :currentNode="currentIdx" direction="vertical" :root="false">
            <StepNode v-for="(item, idx) in stepList" :key="idx" :status="item.status" :title="item.Desc" :operatorTime="item.OperatorTime" :operator="item.Operator" :remark="item.remark"></StepNode>
        </Steps>
        <span v-if="tabLineWidth" :class="[`${prefixCls}-tabline`]" :style="{width: `${tabLineWidth * 200}px`}"></span>
        <span v-if="!showTail" :class="[prefixCls + '-tablineHead']" :style="styleLine" ></span>
    </div>
</template>
<script>
    import Emitter from '../../mixins/emitter';
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-steps';
    const iconPrefixCls = 'ivu-icon';

    export default {
        name: 'Step',
        mixins: [ Emitter ],
        props: {
            status: {
                validator (value) {
                    return oneOf(value, ['wait', 'process', 'finish', 'error']);
                }
            },
            currentIdx: {
                type: Number
            },
            stepList: {
                type: Array
            },
            title: {
                type: String,
                default: ''
            },
            content: {
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
                index: 0,
                prefixCls: prefixCls,
                stepNumber: '',
                nextError: false,
                total: 1,
                currentStatus: '',
                tabLineWidth:false,  //换行折线
                showTail: true,       //流程横线
                height:0
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
                    // width: `${1/this.total*100}%`
                    width: '200px',
                    marginBottom:'60px'
                };
            },
            styleLine(){
                return{
                    width:'1px',
                    height:`${this.height}px`,
                    position:'absolute',
                    top:'3px',
                    left:'13px',
                    zIndex: '-11'
                };
            }
        },
        methods: {
        },
        watch: {
            status (val) {
                this.currentStatus = val;
                if (this.currentStatus == 'error') {
                    this.$parent.setNextError();
                }
            },
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