// function precarica(img) {
//     $(img).each(function() {
//         $('<img/>')[0].src = this;
//     });
// }
// precarica([
//     './pic/taiwan map.png',

// ]);

/*******jQuery for external title*********/

// $(document).ready(function() {

//     $('.North').mouseout(function() {
//             $("#map").attr('src', 'pic/taiwan.png');
//         }),
//         $('.North').mouseover(function() {
//             console.log("!!!")
//             $("#map").attr('src', 'pic/north.png');
//         });
//     $('.center').mouseout(function() {
//             $("#map").attr('src', 'pic/taiwan.png');
//         }),
//         $('.center').mouseover(function() {
//             $("#map").attr('src', 'pic/center.png');
//         });
//     $('.south').mouseout(function() {
//             $("#map").attr('src', 'pic/taiwan.png');
//         }),
//         $('.south').mouseover(function() {
//             $("#map").attr('src', 'pic/south.png');
//         });
//     $('.east').mouseout(function() {
//             $("#map").attr('src', 'pic/taiwan.png');
//         }),
//         $('.east').mouseover(function() {
//             $("#map").attr('src', 'pic/east.png');
//         });




//     //
//     $('#taipei').mouseout(function() {
//             $("#map").attr('src', 'pic/taiwan.png');
//             $(".taipeiInf").attr('style', 'display:none')
//         }),
//         $('#taipei').mouseover(function() {

//             $(".taipeiInf").attr('style', 'display:block')
//             $("#map").attr('src', 'pic/taipei.png');
//         });
//     //here

//     $('#Yilan').mouseout(function() {
//             $("#map").attr('src', 'pic/taiwan.png');
//             $(".yilanInf").attr('style', 'display:none');
//         }),
//         $('#Yilan').mouseover(function() {
//             $(".yilanInf").attr('style', 'display:block')
//             $("#map").attr('src', 'pic/Yilan.png');
//         });
//     //

//     $('#keelung').mouseout(function() {
//             $("#map").attr('src', 'pic/taiwan.png');
//             $(".keelungInf").attr('style', 'display:none');
//         }),
//         $('#keelung').mouseover(function() {
//             $(".keelungInf").attr('style', 'display:block')
//             $("#map").attr('src', 'pic/keelong.png');
//         });

//     $('#taipei_2').mouseout(function() {
//             $("#map").attr('src', 'pic/taiwan.png');
//             $(".taipei_2Inf").attr('style', 'display:none');
//         }),
//         $('#taipei_2').mouseover(function() {
//             $(".taipei_2Inf").attr('style', 'display:block')
//             $("#map").attr('src', 'pic/taipei_2.png');
//         });



//     //
//     $('#Taoyuan').mouseout(function() {
//             $("#map").attr('src', 'pic/taiwan.png');
//             $(".taoyuanInf").attr('style', 'display:none');

//         }),
//         $('#Taoyuan').mouseover(function() {
//             $(".taoyuanInf").attr('style', 'display:block')
//             $("#map").attr('src', 'pic/Taoyuan.png');
//         });
//     //

//     //
//     $('#Hsinchu').mouseout(function() {
//             $("#map").attr('src', 'pic/taiwan.png');
//             $(".HsinchuInf").attr('style', 'display:none');
//         }),
//         $('#Hsinchu').mouseover(function() {
//             $(".HsinchuInf").attr('style', 'display:block')
//             $("#map").attr('src', 'pic/Hsinchu.png');
//         });
//     //

//     $('#Miaoli').mouseout(function() {
//             $("#map").attr('src', 'pic/taiwan.png');
//             $(".MiaoliInf").attr('style', 'display:none');
//         }),
//         $('#Miaoli').mouseover(function() {
//             $(".MiaoliInf").attr('style', 'display:block')
//             $("#map").attr('src', 'pic/Miaoli.png');
//         });
//     //

//     $('#Taichung').mouseout(function() {
//             $("#map").attr('src', 'pic/taiwan.png');
//             $(".TaichungInf").attr('style', 'display:none');
//         }),
//         $('#Taichung').mouseover(function() {
//             $(".TaichungInf").attr('style', 'display:block')
//             $("#map").attr('src', 'pic/Taichung.png');
//         });
//     // 

//     $('#Changhua').mouseout(function() {
//             $("#map").attr('src', 'pic/taiwan.png');
//             $(".ChanghuaInf").attr('style', 'display:none');
//         }),
//         $('#Changhua').mouseover(function() {
//             $(".ChanghuaInf").attr('style', 'display:block')
//             $("#map").attr('src', 'pic/Changhua.png');
//         });


//     //

//     $('#Nantou').mouseout(function() {
//             $("#map").attr('src', 'pic/taiwan.png');
//             $(".NantouInf").attr('style', 'display:none');
//         }),
//         $('#Nantou').mouseover(function() {
//             $(".NantouInf").attr('style', 'display:block')
//             $("#map").attr('src', 'pic/Nantou.png');
//         });
//     //
//     $('#Yunlin').mouseout(function() {
//             $("#map").attr('src', 'pic/taiwan.png');
//             $(".YunlinInf").attr('style', 'display:none');
//         }),
//         $('#Yunlin').mouseover(function() {
//             $(".YunlinInf").attr('style', 'display:block')
//             $("#map").attr('src', 'pic/Yunlin.png');
//         });

//     //
//     $('#Chiayi').mouseout(function() {
//             $("#map").attr('src', 'pic/taiwan.png');
//             $(".ChiayiInf").attr('style', 'display:none');
//         }),
//         $('#Chiayi').mouseover(function() {
//             $(".ChiayiInf").attr('style', 'display:block')
//             $("#map").attr('src', 'pic/Chiayi.png');
//         });

//     //
//     $('#Tainan').mouseout(function() {
//             $("#map").attr('src', 'pic/taiwan.png');
//             $(".TainanInf").attr('style', 'display:none');
//         }),
//         $('#Tainan').mouseover(function() {
//             $(".TainanInf").attr('style', 'display:block')
//             $("#map").attr('src', 'pic/Tainan.png');
//         });


//     //
//     $('#Kaohsiung').mouseout(function() {
//             $("#map").attr('src', 'pic/taiwan.png');
//             $(".KaohsiungInf").attr('style', 'display:none');
//         }),
//         $('#Kaohsiung').mouseover(function() {
//             $(".KaohsiungInf").attr('style', 'display:block')
//             $("#map").attr('src', 'pic/Kaohsiung.png');
//         });
//     //
//     $('#Pingtung').mouseout(function() {
//             $("#map").attr('src', 'pic/taiwan.png');
//             $(".PingtungInf").attr('style', 'display:none');
//         }),
//         $('#Pingtung').mouseover(function() {
//             $(".PingtungInf").attr('style', 'display:block')
//             $("#map").attr('src', 'pic/Pingtung.png');
//         });

//     //
//     $('#Hualien').mouseout(function() {
//             $("#map").attr('src', 'pic/taiwan.png');
//             $(".HualienInf").attr('style', 'display:none');
//         }),
//         $('#Hualien').mouseover(function() {
//             $(".HualienInf").attr('style', 'display:block')
//             $("#map").attr('src', 'pic/Hualien.png');
//         });
//     //
//     $('#Taitung').mouseout(function() {
//             $("#map").attr('src', 'pic/taiwan.png');
//             $(".TaitungInf").attr('style', 'display:none');
//         }),
//         $('#Taitung').mouseover(function() {
//             $(".TaitungInf").attr('style', 'display:block')
//             $("#map").attr('src', 'pic/Taitung.png');
//         });

//hover text
// $('#Yilan').mouseout(function() {
//         $("#map").attr('src', 'pic/taiwan.png');
//     }),
//     $('#Yilan').mouseover(function() {
//         $("#map").attr('src', 'pic/Yilan.png');
//         $("#Yilan").attr('Yilan', 'pic/taiwan');
//     });

// $('#Yilan').mouseover(function() {
//     console.log("!!!!!Taipei")
//     $(".yilanInf").attr('style', 'display:block')
//     $("#map").attr('src', 'pic/Yilan.png');
// });


//mouseover text

// });

// $('.tooltip').tooltip({
//     tooltipClass: "pictooltip"
// });

// $(document).ready(function() {
//     $('.tooltip').tooltipster({

//     });
//     $('.tooltip').tooltipster({
//         tooltipClass: "tooltip"
//     });
// });


// $(function() {
//     $(document).tooltip({
//         position: {
//             my: "center bottom-20",
//             at: "center top",
//             using: function(position, feedback) {
//                 $(this).css(position);
//                 $("<div>")
//                     .addClass("arrow")
//                     .addClass(feedback.vertical)
//                     .addClass(feedback.horizontal)
//                     .appendTo(this);
//             }
//         },
//         tooltipClass: "tooltip"
//     });
// });
$(document).ready(function() {
    // information of every region
    let areaInfo = [{
            name: "New Taipei 新北",
            id: "c-1",
            density: "7,500/km2",
            population: " 8,535,000",
            facts: "</br>The New Taipei City government has established museums of tea culture, pottery and ceramics, and other sites to help preserve the memory of the common history and culture."
        },
        { name: "Yilan 宜蘭", id: "c-6", density: "210/km2", population: " 454,287", facts: "<br/>Yilan sits on the Yilan Plain, a combined alluvial plain created by Lanyang River and other minor streams with a rough shape of triangle" },
        { name: "Hsinchu 新竹", id: "c-14", density: "4,700/km2", population: " 1,881,204", facts: "<br/> Hsinchu County is home to the largest Hakka community in Taiwan. Most of the early Hakka immigrants to this region landed at Hongmao Harbor and Nanliao Harbor, the majority coming from Haifeng and Lufeng in China." },
        { name: "Taoyuan 桃園", id: "c-15", density: "7,500/km2", population: " 2,245,059", facts: "<br/>The cultural diversity of Taoyuan City is paralleled by an equal abundance of natural attractions, earning the county the nicknames of the flower kingdom and the land of a thousand ponds." },
        {
            name: "Taipei 台北",
            id: "c-16",
            density: " 9,700/km2",
            population: " 2,646,204",
            facts: "<br/> <br/>Taipei is Taiwan's largest city as well as its economic, political, and cultural center. From the world's tallest building-Taipei 101 to the biggest collection of Chinese art, Taipei invites you into a world of fascinating contrasts - a mix of the modern and traditionalenerous dish."
        },
        { name: "Taichung 台中", id: "c-7", density: "5,400/km2", population: "2,813,397", facts: "<br/>the city was named under Japanese rule, and became a major economic and cultural hub. Originally composed of several scattered hamlets, the city of Taichung was planned and developed by the Japanese." },
        {
            name: "Miaoli 苗栗",
            id: "c-8",
            density: "310/km2",
            population: " 567,132",
            facts: "<br/>Evidence of settlement in Miaoli dates back a thousand years. Many archaeological artifacts have been found showing that during the prehistoric era, people lived in the river terrace. "
        },

        {
            name: "Nantou 南投",
            id: "c-9",
            density: " 130/km2",
            population: "514,315",
            facts: "<br/>ts mountainous area makes it a tourist destination; Sun Moon Lake is located in this county. Other well-known areas of the county are Hehuanshan and Sitou."
        },
        { name: "Yunlin 雲林", id: "c-12", density: " 530/km2", population: "682,066", facts: "<br/>Yunlin is part of the Chianan Plain, a flat land known for its agriculture. Agricultural products of Yunlin County include pomelo, tea leaves, suan cai, papaya and muskmelon." },
        { name: "Changhua 彰化", id: "c-13", density: " 3,600/km2", population: "235,022", facts: "<br/> Changhua is known as the granary of Taiwan. Surrounded by mountains to the north, south, and east, the city faces the Taiwan Straits to the west." },
        { name: "Pingtung 屏東", id: "c-2", density: " 300/km2", population: " 839,001", facts: "<br/> Pingtung  is a county in southern Taiwan known for its agriculture and tourism. In recent years, it promotes specialties such as tuna and wax apples. " },
        { name: "Kaohsiung 高雄", id: "c-5", density: " 7,100/km2", population: " 2,773,127", facts: "<br/>Kaohsiung is a city in southern Taiwan. The city proper is a special municipality. The Port of Kaohsiung is the largest and busiest harbour in Taiwan " },
        { name: "Tainan 台南", id: "c-10", density: " 4,700/km2", population: " 1,881,204", facts: "<br/> Tainan is the oldest city on the island of Taiwan and also commonly known as the Capital City for its over 200 years of history as the capital of Taiwan under Koxinga and later Qing rule." },
        { name: "Chiayi 嘉義", id: "c-11", density: " 4,500/km2", population: " 270,254", facts: "<br/>Chiayi City is located on the north side of Chianan Plain, south west of Taiwan Island. On the east side is the Mount Ali, on the west side is the Chiayi Airport, on the north side is the Puzi River " },
        { name: "Hualien 花蓮", id: "c-3", density: "100/km2", population: " 333,392", facts: "<br/>It is the largest county by area, yet due to its mountainous terrain, has one of the lowest populations in the country." },
        { name: "Taitung 台東", id: "c-4", density: "970/km2", population: "106,929", facts: "<br/>From coastal areas to mountain highs, Taitung greets visitors to a land of ecological richness and scenic beauty. The county is also known for its distinctive local products, from premium rice, day lilies, and hibiscus " }
    ]

    // tooltip , I make it from ui plug-in
    $.each(areaInfo, function(index, item) {
        $area = $('#' + item.id)

        $area.tooltip({
            items: '#' + item.id,
            content: item.name + '<br/>Density: ' + item.density + '<br/>Population: ' + item.population + '<br/>Fun Facts:' + item.facts,
            track: true
        })
    })

    // set the color of regions
    function hoverArea(hover_item, target, hover_color, ogi_color) {
        hover_item.on({
            'mouseover': function() {
                target.css('fill', hover_color)
            },
            'mouseout': function() {
                target.css('fill', ogi_color)
            }
        })
    }
    // set the color of these four main regions
    let hover_color = '#eccf89'
    let ori_color = '#68a2dc'

    hoverArea($('#north'), $('.north-area'), hover_color, ori_color)
    hoverArea($('#center'), $('.center-area'), hover_color, ori_color)
    hoverArea($('#south'), $('.south-area'), hover_color, ori_color)
    hoverArea($('#east'), $('.east-area'), hover_color, ori_color)

    $('.county-area').on({
        'mouseover': function() {
            $(this).css('fill', hover_color)
        },
        'mouseout': function() {
            $(this).css('fill', ori_color)
        }
    })

    // functions for quiz()
    function unifiedText(text) {
        let unifiedText = text;
        unifiedText = unifiedText.toLowerCase().trim().replace(/\+/g, '')
        return unifiedText
    }

    function identifyEgOrChi(str) {
        let condition = str.charCodeAt(0) >= 97 && str.charCodeAt(0) < 123
        if (condition) { return 0 } else { return 1 }
    }

    function newQuestion() {
        let random = Math.floor(Math.random() * 50)
        let index = random % areaInfo.length
        return index
    }

    //create new quiz()
    function quiz(target_index) {
        $('.county-area').css('fill', ori_color)
        $('#btn-start').hide()
        $('.input-area').show()

        let target = areaInfo[target_index]
        $('#' + target.id).css('fill', hover_color)

        $('#btn-outcome').click(function() {
            $('.outcome').text('')
            let userInput_q1 = $('#userInput_1').val();
            let covertedInput = unifiedText(userInput_q1)
            let answer_index = identifyEgOrChi(unifiedText(userInput_q1))
            let answer = unifiedText(target.name.split(' ')[answer_index])

            let condition1 = covertedInput == answer;

            let outcome_text = ''
            if (condition1) {
                outcome_text = 'Correct answer'
            } else if (userInput_q1 == '') {
                outcome_text = 'Please type your answer'
            } else {
                outcome_text = 'Wrong answer'
            }

            $('.outcome').text(outcome_text)
            $('.continueOrnot').show()

        })
        $('#userInput_1').val('')
    }

    //btn functions
    function start() {
        let target_index = newQuestion()
        if (arguments.length === 0) {
            quiz(target_index)
            return target_index
        }
        if (arguments.length === 1) {
            while (true) {
                if (target_index === arguments[0]) {
                    target_index = newQuestion()
                } else {
                    break
                }
            }
            quiz(target_index)
        }
    }

    function restart(target_index) {
        outcome_text = ''
        $('.outcome').text('')

        start(target_index)
    }

    function end() {
        outcome_text = ''
        $('.outcome').text('')

        $('.county-area').css('fill', ori_color)
        $('#btn-start').show()
        $('.input-area').hide()
        $('.continueOrnot').hide()
    }

    //btn function settings
    $('#btn-start').click(function() {
        let last_index = start()

        $('#btn-restart').click(function() {
            restart(last_index)
        })

        $('#btn-end').click(function() {
            end()
        })
    })
})