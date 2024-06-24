
// ________________________

const menuBtn =  document.querySelector('.menu-bar-btn');
const sideNav =  document.querySelector('.side-nav-comp');
const header =  document.querySelector('.top-header-comp');
const mainWrap =  document.querySelector('.wrap-section');


menuBtn.addEventListener("click", () => {

    sideNav.classList.toggle("sidenavactive");
    header.classList.toggle("navactive");
    mainWrap.classList.toggle('mainwrapactive')

    
})

// ___________________________-

const profBtn =  document.querySelector('.avatar-logo');
const profMenu =  document.querySelector('.profile-main');

profBtn.addEventListener("click", () => {
    profMenu.classList.toggle('profileactive');
})

// ____________________________________
var AreaChart = {
    series: [{
    name: 'Sale',
    // type: 'area',
    data: [28, 45, 35, 50, 30, 55, 25, 60]
  }, {
    name: 'Purchase',
    // type: 'line',
    data: [14, 25, 20, 25, 12, 20, 15, 27]
  }],
    chart: {
    height: 300,
    type: 'area',
    toolbar : {
        show : false,
    }
  },
  color : ["#ca9113" , "#10b981"],
  dataLabels : {
    enabled : false,
  },
  stroke: {
    curve: 'smooth'
  },
//   fill: {
//     type:'solid',
//     opacity: [0.35, 1],
//   },
  labels: ['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug',],
  markers: {
    size: 0
  },
//   yaxis: [
//     {
    
//     },
//     {
//       opposite: true,
     
//     },
//   ],
  tooltip: {
    shared: true,
    intersect: false,
   
  }
  };

  var areaChart = new ApexCharts(document.querySelector("#area-chart"), AreaChart );
  areaChart.render();
