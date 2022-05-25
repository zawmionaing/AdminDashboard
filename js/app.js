$(window).on("load",function () {
    $('.loader-container').fadeOut(500,function () {
        $(this).remove();
    });
});

$(".search-btn").click(function(){
    let result =$(".search-box").hasClass('d-none')
    if(result){
        $(".search-box").removeClass('d-none').addClass('d-block')
    }else {
        $(".search-box").removeClass('d-block').addClass('d-none')
    }
})

// chart js
const visit = document.getElementById('visit').getContext('2d');
        const pie = new Chart(visit, {
            type: 'pie',
            data: {
                labels: ['Amason', 'Ebay', 'Flipkart'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },

                legend:{
                    color:'red',
                    display: true,
                    position: 'bottom',
                    labels: {
                        fontColor: '#475F7B',
                        usePointStyle:true
                    }
                }
            }
        });

        const marketingChart1 = document.getElementById('marketing-chart-1').getContext('2d');
        const doughnut = new Chart(marketingChart1, {
            type: 'doughnut',
            data: {
                labels: ['Amason', 'Ebay', 'Flipkart'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                legend:{
                    display: false,
                    
                }
            }
        });

        const marketingChart2 = document.getElementById('marketing-chart-2').getContext('2d');
        const doughnut1 = new Chart(marketingChart2, {
            type: 'doughnut',
            data: {
                labels: ['Amason', 'Ebay', 'Flipkart'],
                datasets: [{
                    label: '# of Votes',
                    data: [15, 10, 20],
                    backgroundColor: [
                        'rgba(156, 0, 222, 0.5)',
                        'rgba(255, 91, 92, 0.5)',
                        'rgba(71, 95, 123, 0.5)'
                    ],
                    borderColor: [
                        'rgba(156 ,0, 222, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(71, 95, 123, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                legend:{
                    display: false,
                    
                }
            }
        });

        const revenueGrowth = document.getElementById('revenueGrowth').getContext('2d');
        const bar = new Chart(revenueGrowth, {
            type: 'bar',
            data: {
                labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'],
                datasets: [{
                    label: 'Growth of',
                    data: [3, 5, 7, 9, 8, 7, 6, 5, 7, 9, 12, 13, 12, 11, 9, 8, 10, 12, 11, 9,],
                    backgroundColor: [
                        'rgba(54, 162, 235)',
                        'rgba(54, 162, 235)',
                        'rgba(54, 162, 235)',
                        'rgba(54, 162, 235)',
                        'rgba(54, 162, 235)',
                        'rgba(54, 162, 235)',
                        'rgba(54, 162, 235)',
                        'rgba(54, 162, 235)',
                        'rgba(54, 162, 235)',
                        'rgba(54, 162, 235)',
                        'rgba(54, 162, 235)',
                        'rgba(54, 162, 235)',
                        'rgba(54, 162, 235)',
                        'rgba(54, 162, 235)',
                        'rgba(54, 162, 235)',
                        'rgba(54, 162, 235)',
                        'rgba(54, 162, 235)',
                        'rgba(54, 162, 235)',
                        'rgba(54, 162, 235)',
                        'rgba(54, 162, 235)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 0.1)',
                        'rgba(54, 162, 235, 0.1)',
                        'rgba(54, 162, 235, 0.1)',
                        'rgba(54, 162, 235, 0.1)',
                        'rgba(54, 162, 235, 0.1)',
                        'rgba(54, 162, 235, 0.1)',
                        'rgba(54, 162, 235, 0.1)',
                        'rgba(54, 162, 235, 0.1)',
                        'rgba(54, 162, 235, 0.1)',
                        'rgba(54, 162, 235, 0.1)',
                        'rgba(54, 162, 235, 0.1)',
                        'rgba(54, 162, 235, 0.1)',
                        'rgba(54, 162, 235, 0.1)',
                        'rgba(54, 162, 235, 0.1)',
                        'rgba(54, 162, 235, 0.1)',
                        'rgba(54, 162, 235, 0.1)',
                        'rgba(54, 162, 235, 0.1)',
                        'rgba(54, 162, 235, 0.1)',
                        'rgba(54, 162, 235, 0.1)',
                        'rgba(54, 162, 235, 0.1)',
                    ],
                    barPercentage: 0.5, 
                    barThickness: 6,
                    maxBarThickness: 8,
                    minBarLength: 2,
                    borderRadius:20,
                    hoverBorderRadius:200,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes:[
                        {
                            display:false,
                            beginAtZero:true,
                            ticks:{
                                display:true,
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'probability'
                              }
                        }
                    ],
                    xAxes: [{
                        display:true,
                        gridLines: {
                         display: false,
                         },
                      }],
                },

                legend:{
                    display: true,
                    position: 'bottom',
                    labels: {
                        fontColor: '#475F7B',
                        usePointStyle:true
                    }
                }
            }
        });


        
let dateArr=['M','T','W','T','F','S','S'];
let orderCountArr=[3,6,10,6,7,4,6];
let viewCountArr=[4,3,7,5,9,7,4];

const order = document.getElementById('order-summary').getContext('2d');
const ovChart = new Chart(order, {
    type: 'line',
    data: {
        labels: dateArr,
        datasets: [{
            label: 'Monthly',
            data: orderCountArr,
            backgroundColor: [
                '#0d6efd30',
                
            ],
             
            borderDash:([5, 15]),
            borderColor: [
                '#0d6efd',
                
            ],
            borderWidth: 1,
            tension:0.3,
            
        },
        {
            label: 'Weekly',
            data: viewCountArr,
            backgroundColor: [
                '#28a74530',
                
            ],
            borderColor: [
                '#28a745',
                
            ],
            borderWidth: 1,
            tension:0.3,
            
        }   
    ]
    },
    options: {
        scales: {
            yAxes:[
                {
                    display:false,
                    beginAtZero:true,
                    ticks:{
                        display:true,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'probability'
                      }
                }
            ],
            xAxes: [{
                display:true,
                gridLines: {
                 display: false,
                 },
              }],
        },
        legend:{
            display: true,
            position: 'top',
            align:'end',
            labels: {
                fontColor: '#475F7B',
                usePointStyle:true
            }
        }
            
    }
});

// Counter Up
$('.counter-up').counterUp({
    delay:10,
    time:1000
});

// slide show 


$('.seller-items-slide').slick({
    nfinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 700,
    arrows: false,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
      
//   custom dropdowns 
  $('#menu-dropdown-eco').click(function(){
    let result =$("#menu-dropdown-eco-items").hasClass('d-none')
    if(result){
        $("#menu-dropdown-eco-items").removeClass('d-none').addClass('d-block')
        $('.eco-icon').removeClass('fa-angle-right').addClass('fa-angle-down');
    }else {
        $("#menu-dropdown-eco-items").removeClass('d-block').addClass('d-none')
        $('.eco-icon').removeClass('fa-angle-down').addClass('fa-angle-right');
    }
  });

  $('#menu-dropdown-levels').click(function(){
    let result =$("#menu-dropdown-levels-items").hasClass('d-none')
    if(result){
        $("#menu-dropdown-levels-items").removeClass('d-none').addClass('d-block')
        $('.levels-icon').removeClass('fa-angle-right').addClass('fa-angle-down');
    }else {
        $("#menu-dropdown-levels-items").removeClass('d-block').addClass('d-none')
        $('.levels-icon').removeClass('fa-angle-down').addClass('fa-angle-right');

    }
  });

  $('#menu-dropdown-1-level').click(function(){
    let result =$("#menu-dropdown-1-level-items").hasClass('d-none')
    if(result){
        $("#menu-dropdown-1-level-items").removeClass('d-none').addClass('d-block')
        $('.1-level-icon').removeClass('fa-angle-right').addClass('fa-angle-down');
    }else {
        $("#menu-dropdown-1-level-items").removeClass('d-block').addClass('d-none')
        $('.1-level-icon').removeClass('fa-angle-down').addClass('fa-angle-right');

    }
  });

  $('#menu-dropdown-2-level').click(function(){
    let result =$("#menu-dropdown-2-level-items").hasClass('d-none')
    if(result){
        $("#menu-dropdown-2-level-items").removeClass('d-none').addClass('d-block')
        $('.2-level-icon').removeClass('fa-angle-right').addClass('fa-angle-down');
    }else {
        $("#menu-dropdown-2-level-items").removeClass('d-block').addClass('d-none')
        $('.2-level-icon').removeClass('fa-angle-down').addClass('fa-angle-right');

    }
  });



//   wow js for animation start
  wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
)
wow.init();

//   wow js for animation start stop

// for  tablet and phone section 
$(".show_sidebar_btn").click(function(){
    $(".sidebar").animate({marginLeft:0});
});

$(".hide_sidebar_btn").click(function(){
    $(".sidebar").animate({marginLeft:"-100%"});
});


$('.mode-change-btn').click(function(){
    document.body.classList.toggle("night-mode");
    document.getElementById("modeIcon").classList.toggle("fa-sun");

});