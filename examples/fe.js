
var data = [1,2,3,4,5];

d3.selectAll('.bar').data(data)
  .style('width',function(d,i){
    return d + '%';
  })
