require.config({
    paths: {
        echarts: './js/dist'
    }
});
//页面中所需要的图标
require(
    [
        "echarts",
        "echarts/chart/line",// 按需加载所需图表，如需动态类型切换功能，别忘了同时加载相应图表
        "echarts/chart/bar",
        "echarts/chart/gauge",
        "echarts/theme/macrons"  //主题
    ],
    function (ec) {
        var chart01 = ec.init(document.getElementById("chart01"));
        option = {
            title:{
                text:"学习人数比例",
                subtext:""  //子标题
            },
            tooltip:{
                formatter:"{a}<br>{b}%{c}",  //与下面的data数据相关
                trigger:""  //可拖拽
            },
            series:[
                {
                    type:"pie",
                    data:[
                        {value:250,name:"未通过"},
                        {value:666,name:"已通过"}
                    ]
                }
            ]
        }
    }
)