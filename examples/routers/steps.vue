<template>
<div>
    <Steps :current="index">
        <Step v-for="(item, index) in BoxListNew" :key="index" :stepList="item.Nodes" :currentIdx="index" :status="item.Nodes[0].status"></Step>
    </Steps>
    <br><br><br><br>
    <!-- <Button @click="change">change</Button> -->
    <br><br><br><br>
</div>
</template>
<script>
    export default {
        data () {
            return {
                total: 512,
                current: 0,
                index:0,
                BoxListNew: [],
                BoxList: [
                    {
                        Nodes: [
                            {
                                Name: 'node1',
                                Desc: '中心负责人1-1',
                                Tag: '中心负责人',
                                Scope: '',
                                SystemName: '管理后台',
                                Actions: [
                                    {
                                        ActionName: 'ok',
                                        ActionDesc: '通过'
                                    },
                                    {
                                        ActionName: 'no',
                                        ActionDesc: '拒绝'
                                    },
                                    {
                                        ActionName: 'back',
                                        ActionDesc: '打回'
                                    }
                                ],
                                PlanningLeader: '00209',
                                Operator: '',
                                OperatorTime: '2019-10-24',
                                ActionName: '',
                                ActionDesc: '',
                                Flag: 1,
                                BackNodeName: '',
                                BackNodeDesc: ''
                            }
                        ],
                        AllYes: false,
                        Agent: null
                    },
                    {
                        Nodes: [
                            {
                                Name: 'node2',
                                Desc: '中心负责人2-1',
                                Tag: '中心负责人',
                                Scope: '',
                                SystemName: '管理后台',
                                Actions: [
                                    {
                                        ActionName: 'ok',
                                        ActionDesc: '通过'
                                    },
                                    {
                                        ActionName: 'no',
                                        ActionDesc: '拒绝'
                                    },
                                    {
                                        ActionName: 'back',
                                        ActionDesc: '打回'
                                    }
                                ],
                                PlanningLeader: '00209',
                                Operator: '',
                                OperatorTime: '2019-10-24',
                                ActionName: '',
                                ActionDesc: '',
                                Flag: 1,
                                BackNodeName: '',
                                BackNodeDesc: ''
                            },
                            {
                                Name: 'node2',
                                Desc: '中心负责人2-2',
                                Tag: '中心负责人',
                                Scope: '',
                                SystemName: '管理后台',
                                Actions: [
                                    {
                                        ActionName: 'ok',
                                        ActionDesc: '通过'
                                    },
                                    {
                                        ActionName: 'no',
                                        ActionDesc: '拒绝'
                                    },
                                    {
                                        ActionName: 'back',
                                        ActionDesc: '打回'
                                    }
                                ],
                                PlanningLeader: '00209',
                                Operator: '',
                                OperatorTime: '2019-10-24',
                                ActionName: '',
                                ActionDesc: '',
                                Flag: 1,
                                BackNodeName: '',
                                BackNodeDesc: ''
                            }
                        ],
                        AllYes: false,
                        Agent: null
                    },
                    {
                        Nodes: [
                            {
                                Name: 'node2',
                                Desc: '中心负责人2-1',
                                Tag: '中心负责人',
                                Scope: '',
                                SystemName: '管理后台',
                                Actions: [
                                    {
                                        ActionName: 'ok',
                                        ActionDesc: '通过'
                                    },
                                    {
                                        ActionName: 'no',
                                        ActionDesc: '拒绝'
                                    },
                                    {
                                        ActionName: 'back',
                                        ActionDesc: '打回'
                                    }
                                ],
                                PlanningLeader: '00209',
                                Operator: '',
                                OperatorTime: '2019-10-24',
                                ActionName: '',
                                ActionDesc: '',
                                Flag: 1,
                                BackNodeName: '',
                                BackNodeDesc: ''
                            },
                            {
                                Name: 'node2',
                                Desc: '中心负责人2-2',
                                Tag: '中心负责人',
                                Scope: '',
                                SystemName: '管理后台',
                                Actions: [
                                    {
                                        ActionName: 'ok',
                                        ActionDesc: '通过'
                                    },
                                    {
                                        ActionName: 'no',
                                        ActionDesc: '拒绝'
                                    },
                                    {
                                        ActionName: 'back',
                                        ActionDesc: '打回'
                                    }
                                ],
                                PlanningLeader: '00209',
                                Operator: '',
                                OperatorTime: '2019-10-24',
                                ActionName: '',
                                ActionDesc: '',
                                Flag: 1,
                                BackNodeName: '',
                                BackNodeDesc: ''
                            }
                        ],
                        AllYes: false,
                        Agent: null
                    },
                    {
                        Nodes: [
                            {
                                Name: 'node2',
                                Desc: '中心负责人2-1',
                                Tag: '中心负责人',
                                Scope: '',
                                SystemName: '管理后台',
                                Actions: [
                                    {
                                        ActionName: 'ok',
                                        ActionDesc: '通过'
                                    },
                                    {
                                        ActionName: 'no',
                                        ActionDesc: '拒绝'
                                    },
                                    {
                                        ActionName: 'back',
                                        ActionDesc: '打回'
                                    }
                                ],
                                PlanningLeader: '00209',
                                Operator: '',
                                OperatorTime: '2019-10-24',
                                ActionName: '',
                                ActionDesc: '',
                                Flag: 1,
                                BackNodeName: '',
                                BackNodeDesc: ''
                            },
                            {
                                Name: 'node2',
                                Desc: '中心负责人2-2',
                                Tag: '中心负责人',
                                Scope: '',
                                SystemName: '管理后台',
                                Actions: [
                                    {
                                        ActionName: 'ok',
                                        ActionDesc: '通过'
                                    },
                                    {
                                        ActionName: 'no',
                                        ActionDesc: '拒绝'
                                    },
                                    {
                                        ActionName: 'back',
                                        ActionDesc: '打回'
                                    }
                                ],
                                PlanningLeader: '00209',
                                Operator: '',
                                OperatorTime: '2019-10-24',
                                ActionName: '',
                                ActionDesc: '',
                                Flag: 1,
                                BackNodeName: '',
                                BackNodeDesc: ''
                            }
                        ],
                        AllYes: false,
                        Agent: null
                    },
                    {
                        Nodes: [
                            {
                                Name: 'node2',
                                Desc: '中心负责人3-1',
                                Tag: '中心负责人',
                                Scope: '',
                                SystemName: '管理后台',
                                Actions: [
                                    {
                                        ActionName: 'ok',
                                        ActionDesc: '通过'
                                    },
                                    {
                                        ActionName: 'no',
                                        ActionDesc: '拒绝'
                                    },
                                    {
                                        ActionName: 'back',
                                        ActionDesc: '打回'
                                    }
                                ],
                                PlanningLeader: '00209',
                                Operator: '',
                                OperatorTime: '2019-10-24',
                                ActionName: '',
                                ActionDesc: '',
                                Flag: 0,
                                BackNodeName: '',
                                BackNodeDesc: ''
                            },
                            {
                                Name: 'node2',
                                Desc: '中心负责人3-2',
                                Tag: '中心负责人',
                                Scope: '',
                                SystemName: '管理后台',
                                Actions: [
                                    {
                                        ActionName: 'ok',
                                        ActionDesc: '通过'
                                    },
                                    {
                                        ActionName: 'no',
                                        ActionDesc: '拒绝'
                                    },
                                    {
                                        ActionName: 'back',
                                        ActionDesc: '打回'
                                    }
                                ],
                                PlanningLeader: '00209',
                                Operator: '',
                                OperatorTime: '2019-10-24',
                                ActionName: '',
                                ActionDesc: '',
                                Flag: 0,
                                BackNodeName: '',
                                BackNodeDesc: ''
                            }
                        ],
                        AllYes: false,
                        Agent: null
                    },
                    {
                        Nodes: [
                            {
                                Name: 'node3',
                                Desc: '中心负责人4-1',
                                Tag: '中心负责人',
                                Scope: '',
                                SystemName: '管理后台',
                                Actions: [
                                    {
                                        ActionName: 'ok',
                                        ActionDesc: '通过'
                                    },
                                    {
                                        ActionName: 'no',
                                        ActionDesc: '拒绝'
                                    },
                                    {
                                        ActionName: 'back',
                                        ActionDesc: '打回'
                                    }
                                ],
                                PlanningLeader: '00209',
                                Operator: '',
                                OperatorTime: '',
                                ActionName: '',
                                ActionDesc: '',
                                Flag: 2,
                                BackNodeName: '',
                                BackNodeDesc: ''
                            }
                        ],
                        AllYes: false,
                        Agent: null
                    },
                    {
                        Nodes: [
                            {
                                Name: 'node3',
                                Desc: '中心负责人4-1',
                                Tag: '中心负责人',
                                Scope: '',
                                SystemName: '管理后台',
                                Actions: [
                                    {
                                        ActionName: 'ok',
                                        ActionDesc: '通过'
                                    },
                                    {
                                        ActionName: 'no',
                                        ActionDesc: '拒绝'
                                    },
                                    {
                                        ActionName: 'back',
                                        ActionDesc: '打回'
                                    }
                                ],
                                PlanningLeader: '00209',
                                Operator: '',
                                OperatorTime: '',
                                ActionName: '',
                                ActionDesc: '',
                                Flag: 2,
                                BackNodeName: '',
                                BackNodeDesc: ''
                            }
                        ],
                        AllYes: false,
                        Agent: null
                    },
                    {
                        Nodes: [
                            {
                                Name: 'node3',
                                Desc: '中心负责人4-1',
                                Tag: '中心负责人',
                                Scope: '',
                                SystemName: '管理后台',
                                Actions: [
                                    {
                                        ActionName: 'ok',
                                        ActionDesc: '通过'
                                    },
                                    {
                                        ActionName: 'no',
                                        ActionDesc: '拒绝'
                                    },
                                    {
                                        ActionName: 'back',
                                        ActionDesc: '打回'
                                    }
                                ],
                                PlanningLeader: '00209',
                                Operator: '',
                                OperatorTime: '',
                                ActionName: '',
                                ActionDesc: '',
                                Flag: 2,
                                BackNodeName: '',
                                BackNodeDesc: ''
                            }
                        ],
                        AllYes: false,
                        Agent: null
                    },
                    {
                        Nodes: [
                            {
                                Name: 'node3',
                                Desc: '中心负责人4-1',
                                Tag: '中心负责人',
                                Scope: '',
                                SystemName: '管理后台',
                                Actions: [
                                    {
                                        ActionName: 'ok',
                                        ActionDesc: '通过'
                                    },
                                    {
                                        ActionName: 'no',
                                        ActionDesc: '拒绝'
                                    },
                                    {
                                        ActionName: 'back',
                                        ActionDesc: '打回'
                                    }
                                ],
                                PlanningLeader: '00209',
                                Operator: '',
                                OperatorTime: '',
                                ActionName: '',
                                ActionDesc: '',
                                Flag: 2,
                                BackNodeName: '',
                                BackNodeDesc: ''
                            }
                        ],
                        AllYes: false,
                        Agent: null
                    },
                    {
                        Nodes: [
                            {
                                Name: 'node3',
                                Desc: '中心负责人4-1',
                                Tag: '中心负责人',
                                Scope: '',
                                SystemName: '管理后台',
                                Actions: [
                                    {
                                        ActionName: 'ok',
                                        ActionDesc: '通过'
                                    },
                                    {
                                        ActionName: 'no',
                                        ActionDesc: '拒绝'
                                    },
                                    {
                                        ActionName: 'back',
                                        ActionDesc: '打回'
                                    }
                                ],
                                PlanningLeader: '00209',
                                Operator: '',
                                OperatorTime: '',
                                ActionName: '',
                                ActionDesc: '',
                                Flag: 2,
                                BackNodeName: '',
                                BackNodeDesc: ''
                            }
                        ],
                        AllYes: false,
                        Agent: null
                    },
                    {
                        Nodes: [
                            {
                                Name: 'node3',
                                Desc: '中心负责人4-1',
                                Tag: '中心负责人',
                                Scope: '',
                                SystemName: '管理后台',
                                Actions: [
                                    {
                                        ActionName: 'ok',
                                        ActionDesc: '通过'
                                    },
                                    {
                                        ActionName: 'no',
                                        ActionDesc: '拒绝'
                                    },
                                    {
                                        ActionName: 'back',
                                        ActionDesc: '打回'
                                    }
                                ],
                                PlanningLeader: '00209',
                                Operator: '',
                                OperatorTime: '',
                                ActionName: '',
                                ActionDesc: '',
                                Flag: 2,
                                BackNodeName: '',
                                BackNodeDesc: ''
                            }
                        ],
                        AllYes: false,
                        Agent: null
                    },
                    {
                        Nodes: [
                            {
                                Name: 'node3',
                                Desc: '中心负责人4-1',
                                Tag: '中心负责人',
                                Scope: '',
                                SystemName: '管理后台',
                                Actions: [
                                    {
                                        ActionName: 'ok',
                                        ActionDesc: '通过'
                                    },
                                    {
                                        ActionName: 'no',
                                        ActionDesc: '拒绝'
                                    },
                                    {
                                        ActionName: 'back',
                                        ActionDesc: '打回'
                                    }
                                ],
                                PlanningLeader: '00209',
                                Operator: '',
                                OperatorTime: '',
                                ActionName: '',
                                ActionDesc: '',
                                Flag: 2,
                                BackNodeName: '',
                                BackNodeDesc: ''
                            }
                        ],
                        AllYes: false,
                        Agent: null
                    },
                    {
                        Nodes: [
                            {
                                Name: 'node3',
                                Desc: '中心负责人4-1',
                                Tag: '中心负责人',
                                Scope: '',
                                SystemName: '管理后台',
                                Actions: [
                                    {
                                        ActionName: 'ok',
                                        ActionDesc: '通过'
                                    },
                                    {
                                        ActionName: 'no',
                                        ActionDesc: '拒绝'
                                    },
                                    {
                                        ActionName: 'back',
                                        ActionDesc: '打回'
                                    }
                                ],
                                PlanningLeader: '00209',
                                Operator: '',
                                OperatorTime: '',
                                ActionName: '',
                                ActionDesc: '',
                                Flag: 2,
                                BackNodeName: '',
                                BackNodeDesc: ''
                            }
                        ],
                        AllYes: false,
                        Agent: null
                    },
                    {
                        Nodes: [
                            {
                                Name: 'node3',
                                Desc: '中心负责人4-1',
                                Tag: '中心负责人',
                                Scope: '',
                                SystemName: '管理后台',
                                Actions: [
                                    {
                                        ActionName: 'ok',
                                        ActionDesc: '通过'
                                    },
                                    {
                                        ActionName: 'no',
                                        ActionDesc: '拒绝'
                                    },
                                    {
                                        ActionName: 'back',
                                        ActionDesc: '打回'
                                    }
                                ],
                                PlanningLeader: '00209',
                                Operator: '',
                                OperatorTime: '',
                                ActionName: '',
                                ActionDesc: '',
                                Flag: 2,
                                BackNodeName: '',
                                BackNodeDesc: ''
                            }
                        ],
                        AllYes: false,
                        Agent: null
                    },
                    {
                        Nodes: [
                            {
                                Name: 'node3',
                                Desc: '中心负责人4-1',
                                Tag: '中心负责人',
                                Scope: '',
                                SystemName: '管理后台',
                                Actions: [
                                    {
                                        ActionName: 'ok',
                                        ActionDesc: '通过'
                                    },
                                    {
                                        ActionName: 'no',
                                        ActionDesc: '拒绝'
                                    },
                                    {
                                        ActionName: 'back',
                                        ActionDesc: '打回'
                                    }
                                ],
                                PlanningLeader: '00209',
                                Operator: '',
                                OperatorTime: '',
                                ActionName: '',
                                ActionDesc: '',
                                Flag: 2,
                                BackNodeName: '',
                                BackNodeDesc: ''
                            }
                        ],
                        AllYes: false,
                        Agent: null
                    },
                ]
            };
        },
        methods: {
            next () {
                if (this.current == 3) {
                    this.current = 0;
                } else {
                    this.current += 1;
                }
            },
            change () {
                this.activitiList = this.activitiList.concat(this.changeList);
            }
        },
        mounted () {
            var BoxListData = this.BoxList;
            BoxListData.forEach(item => {
                item.Nodes.forEach(node => {
                    node.Operator = '可达鸭(10086)';
                    if (node.Flag) {
                        node.status  = 'finish';
                        node.remark  = '同意';
                    } else {
                        node.status  = 'error';
                        node.remark  = '拒绝';
                    }
                    if (node.Flag === 2) { 
                        node.status  = 'wait';
                        node.remark  = '待审批';
                    }
                });
            });
            this.BoxListNew = BoxListData;
        }
    };
</script>
