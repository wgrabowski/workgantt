function generateTimeline(from,to){
        var ret = {events:[]};
        for(var i = from,j=0;i <= to;i++,j++){
            ret.events[j] = {
                type:""+i+"",
                title:""+i+"",
                comment:"From "+ i + " to "+ (i+1) +"",
                from:""+i+"",
                to:""+(i+1)+""
            }
        }
        return ret;
};
var timeline = generateTimeline(6,23);
var monday = {
            guys:{
                "wojtek":{
            events:[{
                type: "work",
                title:"work",
                comment: "optional comment",
                from: 6,
                to: 7
            },
            {
                type: "work",
                title:"work",
                comment: "optional comment",
                from: 7,
                to: 9
            },
            {
                type: "work",
                title:"work",
                comment: "optional comment",
                from: 9,
                to: 11
            },
            {
                type: "work",
                title:"work",
                comment: "optional comment",
                from: 11,
                to: 14
            }
        ]},
      "mateusz":{
            events:[{
                type: "work",
                title:":)",
                comment: "optional comment",
                from: 7,
                to: 12
            },
            {
                type: "school",
                title:"laborki",
                comment: "oleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                from: 14,
                to: 22
            }
        ]},  "time":timeline
    }};
var tuesday = monday;

generated = '{"monday":{"guys":{"time":{"events":[{"type":"6","title":"6","comment":"From 6 to 7","from":"6","to":"7"},{"type":"7","title":"7","comment":"From 7 to 8","from":"7","to":"8"},{"type":"8","title":"8","comment":"From 8 to 9","from":"8","to":"9"},{"type":"9","title":"9","comment":"From 9 to 10","from":"9","to":"10"},{"type":"10","title":"10","comment":"From 10 to 11","from":"10","to":"11"},{"type":"11","title":"11","comment":"From 11 to 12","from":"11","to":"12"},{"type":"12","title":"12","comment":"From 12 to 13","from":"12","to":"13"},{"type":"13","title":"13","comment":"From 13 to 14","from":"13","to":"14"},{"type":"14","title":"14","comment":"From 14 to 15","from":"14","to":"15"},{"type":"15","title":"15","comment":"From 15 to 16","from":"15","to":"16"},{"type":"16","title":"16","comment":"From 16 to 17","from":"16","to":"17"},{"type":"17","title":"17","comment":"From 17 to 18","from":"17","to":"18"},{"type":"18","title":"18","comment":"From 18 to 19","from":"18","to":"19"},{"type":"19","title":"19","comment":"From 19 to 20","from":"19","to":"20"},{"type":"20","title":"20","comment":"From 20 to 21","from":"20","to":"21"},{"type":"21","title":"21","comment":"From 21 to 22","from":"21","to":"22"},{"type":"22","title":"22","comment":"From 22 to 23","from":"22","to":"23"},{"type":"23","title":"23","comment":"From 23 to 24","from":"23","to":"24"}]},"wojtek":{"events":[{"from":"6","to":"13","type":"unavailable","title":"nie ma mnie"},{"from":"13","to":"21","type":"available","title":"mogie pracować"}]},"mateusz":{"events":[{"from":"8","to":"16","type":"work","title":""}]}}},"tuesday":{"guys":{"time":{"events":[{"type":"6","title":"6","comment":"From 6 to 7","from":"6","to":"7"},{"type":"7","title":"7","comment":"From 7 to 8","from":"7","to":"8"},{"type":"8","title":"8","comment":"From 8 to 9","from":"8","to":"9"},{"type":"9","title":"9","comment":"From 9 to 10","from":"9","to":"10"},{"type":"10","title":"10","comment":"From 10 to 11","from":"10","to":"11"},{"type":"11","title":"11","comment":"From 11 to 12","from":"11","to":"12"},{"type":"12","title":"12","comment":"From 12 to 13","from":"12","to":"13"},{"type":"13","title":"13","comment":"From 13 to 14","from":"13","to":"14"},{"type":"14","title":"14","comment":"From 14 to 15","from":"14","to":"15"},{"type":"15","title":"15","comment":"From 15 to 16","from":"15","to":"16"},{"type":"16","title":"16","comment":"From 16 to 17","from":"16","to":"17"},{"type":"17","title":"17","comment":"From 17 to 18","from":"17","to":"18"},{"type":"18","title":"18","comment":"From 18 to 19","from":"18","to":"19"},{"type":"19","title":"19","comment":"From 19 to 20","from":"19","to":"20"},{"type":"20","title":"20","comment":"From 20 to 21","from":"20","to":"21"},{"type":"21","title":"21","comment":"From 21 to 22","from":"21","to":"22"},{"type":"22","title":"22","comment":"From 22 to 23","from":"22","to":"23"},{"type":"23","title":"23","comment":"From 23 to 24","from":"23","to":"24"}]}}},"wednesday":{"guys":{"time":{"events":[{"type":"6","title":"6","comment":"From 6 to 7","from":"6","to":"7"},{"type":"7","title":"7","comment":"From 7 to 8","from":"7","to":"8"},{"type":"8","title":"8","comment":"From 8 to 9","from":"8","to":"9"},{"type":"9","title":"9","comment":"From 9 to 10","from":"9","to":"10"},{"type":"10","title":"10","comment":"From 10 to 11","from":"10","to":"11"},{"type":"11","title":"11","comment":"From 11 to 12","from":"11","to":"12"},{"type":"12","title":"12","comment":"From 12 to 13","from":"12","to":"13"},{"type":"13","title":"13","comment":"From 13 to 14","from":"13","to":"14"},{"type":"14","title":"14","comment":"From 14 to 15","from":"14","to":"15"},{"type":"15","title":"15","comment":"From 15 to 16","from":"15","to":"16"},{"type":"16","title":"16","comment":"From 16 to 17","from":"16","to":"17"},{"type":"17","title":"17","comment":"From 17 to 18","from":"17","to":"18"},{"type":"18","title":"18","comment":"From 18 to 19","from":"18","to":"19"},{"type":"19","title":"19","comment":"From 19 to 20","from":"19","to":"20"},{"type":"20","title":"20","comment":"From 20 to 21","from":"20","to":"21"},{"type":"21","title":"21","comment":"From 21 to 22","from":"21","to":"22"},{"type":"22","title":"22","comment":"From 22 to 23","from":"22","to":"23"},{"type":"23","title":"23","comment":"From 23 to 24","from":"23","to":"24"}]},"mateusz":{"events":[{"from":"13","to":"18","type":"work","title":""}]}}},"thursday":{"guys":{"time":{"events":[{"type":"6","title":"6","comment":"From 6 to 7","from":"6","to":"7"},{"type":"7","title":"7","comment":"From 7 to 8","from":"7","to":"8"},{"type":"8","title":"8","comment":"From 8 to 9","from":"8","to":"9"},{"type":"9","title":"9","comment":"From 9 to 10","from":"9","to":"10"},{"type":"10","title":"10","comment":"From 10 to 11","from":"10","to":"11"},{"type":"11","title":"11","comment":"From 11 to 12","from":"11","to":"12"},{"type":"12","title":"12","comment":"From 12 to 13","from":"12","to":"13"},{"type":"13","title":"13","comment":"From 13 to 14","from":"13","to":"14"},{"type":"14","title":"14","comment":"From 14 to 15","from":"14","to":"15"},{"type":"15","title":"15","comment":"From 15 to 16","from":"15","to":"16"},{"type":"16","title":"16","comment":"From 16 to 17","from":"16","to":"17"},{"type":"17","title":"17","comment":"From 17 to 18","from":"17","to":"18"},{"type":"18","title":"18","comment":"From 18 to 19","from":"18","to":"19"},{"type":"19","title":"19","comment":"From 19 to 20","from":"19","to":"20"},{"type":"20","title":"20","comment":"From 20 to 21","from":"20","to":"21"},{"type":"21","title":"21","comment":"From 21 to 22","from":"21","to":"22"},{"type":"22","title":"22","comment":"From 22 to 23","from":"22","to":"23"},{"type":"23","title":"23","comment":"From 23 to 24","from":"23","to":"24"}]}}},"friday":{"guys":{"time":{"events":[{"type":"6","title":"6","comment":"From 6 to 7","from":"6","to":"7"},{"type":"7","title":"7","comment":"From 7 to 8","from":"7","to":"8"},{"type":"8","title":"8","comment":"From 8 to 9","from":"8","to":"9"},{"type":"9","title":"9","comment":"From 9 to 10","from":"9","to":"10"},{"type":"10","title":"10","comment":"From 10 to 11","from":"10","to":"11"},{"type":"11","title":"11","comment":"From 11 to 12","from":"11","to":"12"},{"type":"12","title":"12","comment":"From 12 to 13","from":"12","to":"13"},{"type":"13","title":"13","comment":"From 13 to 14","from":"13","to":"14"},{"type":"14","title":"14","comment":"From 14 to 15","from":"14","to":"15"},{"type":"15","title":"15","comment":"From 15 to 16","from":"15","to":"16"},{"type":"16","title":"16","comment":"From 16 to 17","from":"16","to":"17"},{"type":"17","title":"17","comment":"From 17 to 18","from":"17","to":"18"},{"type":"18","title":"18","comment":"From 18 to 19","from":"18","to":"19"},{"type":"19","title":"19","comment":"From 19 to 20","from":"19","to":"20"},{"type":"20","title":"20","comment":"From 20 to 21","from":"20","to":"21"},{"type":"21","title":"21","comment":"From 21 to 22","from":"21","to":"22"},{"type":"22","title":"22","comment":"From 22 to 23","from":"22","to":"23"},{"type":"23","title":"23","comment":"From 23 to 24","from":"23","to":"24"}]},"mateusz":{"events":[{"from":"9","to":"11","type":"school","title":"laborki"}]}}}}' 
data = {
days: JSON.parse(generated)};










