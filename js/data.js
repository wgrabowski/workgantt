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


data = {
days: {
        "monday": monday,
        "tuesday":tuesday,
        "wednesday":tuesday,
        "thursday": monday,
        "friday": monday
}};