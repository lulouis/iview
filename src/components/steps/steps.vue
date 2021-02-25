<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-steps';
    // 防抖功能
    function debounce(fn) {
        let waiting;
        return function() {
            if (waiting) return;
            waiting = true;
            const context = this,
                args = arguments;
            const later = function() {
                waiting = false;
                fn.apply(context, args);
            };
            this.$nextTick(later);
        };
    }

    export default {
        name: 'Steps',
        props: {
            current: {
                type: Number,
                default: 0
            },
            currentNode: {
                type: Number,
                default: 0
            },
            status: {
                validator (value) {
                    return oneOf(value, ['wait', 'process', 'finish', 'error']);
                },
                default: 'process'
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small']);
                }
            },
            direction: {
                validator (value) {
                    return oneOf(value, ['horizontal', 'vertical']);
                },
                default: 'horizontal'
            },
            root: {
                type: Boolean,
                default: true,
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-${this.direction}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size
                    }
                ];
            }
        },
        methods: {
            updateChildProps (isInit) {
                const total = this.$children.length;
                this.$children.forEach((child, index) => {
                    child.stepNumber = this.currentNode + 1;
                    if (this.direction === 'horizontal') {
                        child.total = total;
                    }

                    // 如果已存在status,且在初始化时,则略过
                    // todo 如果当前是error,在current改变时需要处理
                    if (!(isInit && child.currentStatus)) {
                        if (index == this.current) {
                            if (this.status != 'error') {
                                child.currentStatus = 'process';
                            }
                        } else if (index < this.current) {
                            child.currentStatus = 'finish';
                        } else {
                            child.currentStatus = 'wait';
                        }
                    }

                    if (child.currentStatus != 'error' && index != 0) {
                        this.$children[index - 1].nextError = false;
                    }
                });
            },
            setNextError () {
                this.$children.forEach((child, index) => {
                    if (child.currentStatus == 'error' && index != 0) {
                        this.$children[index - 1].nextError = true;
                    }
                });
            },
            updateCurrent (isInit) {
                // 防止溢出边界
                if (this.current < 0 || this.current >= this.$children.length ) {
                    return;
                }
                if (isInit) {
                    const current_status = this.$children[this.current].currentStatus;
                    if (!current_status) {
                        this.$children[this.current].currentStatus = this.status;
                    }
                } else {
                    this.$children[this.current].currentStatus = this.status;
                }
            },
            debouncedAppendRemove () {
                return debounce(function () {
                    this.updateSteps();
                });
            },
            updateSteps () {
                this.updateChildProps(true);
                this.setNextError();
                this.updateCurrent(true);
            },
            checkWidth() {
                // 获取容器的宽度
                const elWidth = this.$el.offsetWidth;
                // 获取一行显示多少个节点
                const t = Math.floor(elWidth/200);
                const slots = this.$slots.default;
                if(!slots) return;
                // 找出每行最后一个的节点去掉'____',并给下一个添加换行曲折线
                [...slots].forEach((vm,index) => {
                    vm.componentInstance.tabLineWidth = index && index % t === 0 ? t - 1 : 0;
                    vm.componentInstance.showTail = t !== 0 ? (index + 1) % t !== 0 : false;
                    if(index === slots.length - 1) return;
                    if(t && t !== 1 && !vm.componentInstance.showTail) {
                        const arr = slots.slice(index + 1 - t, index + 1).map(el=>  el.elm.offsetHeight);
                        const maxLength = Math.max(...arr);
                        vm.componentInstance.height = maxLength;
                    } else if (t <= 1) {
                        vm.componentInstance.height = vm.elm.offsetHeight + 60;
                    }
                });
            }
        },
        mounted () {
            if(this.root) {
                setTimeout(() => this.checkWidth(), 100); 
                window.onresize = () => this.checkWidth();
            }
            this.updateSteps();
            this.$on('append', this.debouncedAppendRemove());
            this.$on('remove', this.debouncedAppendRemove());
        },
        watch: {
            current (val) {
                this.updateChildProps();
            },
            status () {
                this.updateCurrent();
            }
        }
    };
</script>
