var tooltip = d3.selectAll(".tooltip:not(.css)");
var HTMLmouseTip = d3.select("div.tooltip.mouse");

var json;
$.getJSON("http://antakasa.github.io/ddj_antti/js/data.json", function(myjson){
    json = myjson; 
});

/* If this seems like a lot of different variables,
   remember that normally you'd only implement one 
   type of tooltip! */

/* I'm using d3 to add the event handlers to the area
   and set positioning attributes on the tooltips, but
   you could use JQuery or plain Javascript. */
var area = d3.select("svg").select("g").selectAll("path")
area.on("mouseover", function () {
        $('.tooltip').css('display','initial');
        tooltip.style("opacity", "1"); 
        var t = d3.select(this).attr("id");
        for (var i = 0; i < json.length; i++) {
            var obj = json[i]
            if (obj.AREACODE == t) {
                d3.select("div.areaname").html(obj.AREA + " " + "(" + obj.POSTCODE + ")")
                d3.select("div.rooms").html(obj.ROOMS)
                d3.select("div.flatmate_median_budget").html(obj.FLATMATE_MEDIAN_BUDGET)
                d3.select("div.flatmate_ads").html(obj.FLATMATE_ADS)
                d3.select("div.median_price").html(obj.MEDIAN_PRICE)  
                d3.select("div.price_budget").html(obj.PRICE_BUDGET)  
            } else {  
                continue
        }}
     
    })
    .on("mousemove", function () {        
        /***** For an HTML tooltip *****/ 
      
        //mouse coordinates relative to the page as a whole
        //can be accessed directly from the click event object
        //(which d3 stores as d3.event)
        HTMLmouseTip
            .style("left", Math.max(0, d3.event.pageX - 150) + "px")
            .style("top", (d3.event.pageY + 20) + "px")
            
    })
    .on("mouseout", function () {
        return tooltip.style("opacity", "0");
    });

