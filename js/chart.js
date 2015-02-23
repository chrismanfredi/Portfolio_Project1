
var barSpacing = 0;
var barWidth = 0;
var chartHeight = 0;
var chartHeightArea = 0;
var chartScale = 0;
var maxValue = 0;
var highestYlabel = 0;
var valueMultiplier = 0;

//Create a doucment ready.  Runs once everything opens
$(document).ready(function(){
	window.chartHeight = Number($('.chart-area').height());
	window.barWidth = $('.chart-area .chart-bar').width();
	window.highestYlabel = Number($('.chart-y-axis p').first().html());
	window.chartHeightArea = window.chartHeight - Number($('p.axis-value').first().height());
	window.chartScale = chartHeightArea / window.highestYlabel;
	window.barSpacing = Number($('.chart-area').attr('bar-spacing'));
	positionBars();
});

function positionBars(){
	//Pick out each instance of a chart bar
	
	$('.chart-area .chart-bar').each(function(index){
		var barPosition = (window.barWidth * index) + (index*window.barSpacing) + window.barSpacing;
		
		$(this).css('left', barPosition+'px');
		$(this).html('<p>'+$(this).attr('bar-value')+'</p>')
		$('.chart-x-axis').append('<p style="left:'+(barPosition - (window.barWidth/2))+'px;">'+$(this).attr('label')+'</p>');
		
		var barValue = Number($(this).attr('bar-value'));
		if(barValue >window.maxValue){
			window.maxValue = barValue;
			window.valueMultiplier = window.maxValue /window.highestYlabel;
		}
	});
	
	animateChart();
	
}

//animatino for the chart
function animateChart(){
	//get each bar and animate it to its proper height
	$(".chart-area .chart-bar").each(function(index){
		//height relative to height
		var revisedValue = Number($(this).attr("bar-value")) * window.chartScale;
		//create a variable for delay
		var newDelay = 125*index;
		//animate the bar
		$(this).delay(newDelay).animate({height:revisedValue},1000, function(){
			//fade in our <p> tags
			$(this).children("p").delay(500).fadeIn(250);
		});
	});
}



