import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const eventsData = {
  Hyderabad: [
    {
      id: 1,
      name: "Agam - Arrival of the ethereal",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyIEF1Zw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-text,ie-UFJPTU9URUQ%3D,co-FFFFFF,bg-DC354B,ff-Roboto,fs-20,lx-N16,ly-12,lfo-top_right,pa-12_14_12_14,r-6,l-end/et00450046-xefztgzrrc-portrait.jpg",
      category: "Music",
      date: "Aug 2"
    },
    {
      id: 2,
      name: "Sun burn Arena ft. DJ snake",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNyBTZXA%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00451700-suwdqrjclp-portrait.jpg",
      category: "Music",
      date: "Sep 27"
    },
    {
      id: 3,
      name: "Karthik Live Fusion Edition",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyMiBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-text,ie-UFJPTU9URUQ%3D,co-FFFFFF,bg-DC354B,ff-Roboto,fs-20,lx-N16,ly-12,lfo-top_right,pa-12_14_12_14,r-6,l-end/et00455218-nvfrpjtauv-portrait.jpg",
      category: "Music",
      date: "Aug 22"
    },
    {
      id: 4,
      name: "Armaan Malik Live",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMSBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00446350-krsynyaugt-portrait.jpg",
      category: "Music",
      date: "Apr 18"
    },
    {
      id: 5,
      name: "Gaurav Gupta Live india tour",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMyBTZXA%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00358468-ukaudszjmz-portrait.jpg",
      category: "Comedy",
      date: "sep 13"
    },
    {
      id: 6,
      name: "Late night Standup Comedy show",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAzMCBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00397814-uskabpxjwb-portrait.jpg",
      category: "Comedy",
      date: "Jul 30"
    },
     {
      id: 7,
      name: "Anirudh Suswaram Live Performance",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyIEF1Zw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00455716-wkyxyvydas-portrait.jpg",
      category: "Music",
      date: "Aug 2"
    },
    {
      id: 8,
      name: "Animation COsPlay india Tour",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00445738-hgaultrpdp-portrait.jpg",
      category: "Anime",
      date: "Dec 21"
    }
  ],
  Mumbai: [
    {
      id: 9,
      name: "Ab hai ABki Baari",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCA3IEF1Zw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-text,ie-UFJPTU9URUQ%3D,co-FFFFFF,bg-DC354B,ff-Roboto,fs-20,lx-N16,ly-12,lfo-top_right,pa-12_14_12_14,r-6,l-end/et00453059-pznhckpydt-portrait.jpg",
      category: "Comedy",
      date: "Aug 7"
    },
    {
      id: 10,
      name: "Daniel Sloss: The New show",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxOSBTZXA%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00455753-cjmcnksakv-portrait.jpg",
      category: "Comedy",
      date: "19 sep"
    },
    {
      id: 11,
      name: "Rehmatein-11",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00454432-bvblegwalr-portrait.jpg",
      category: "Music",
      date: "17 oct"
    },
    {
      id: 12,
      name: "Papon Live in concert MUMBAI",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMyBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00428020-rfhmurxkdq-portrait.jpg",
      category: "Music",
      date: "23 Nov"
    },
    {
      id: 13,
      name: "Kailash Kher- Live ",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMyBTZXA%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00455667-hlzhvujjkx-portrait.jpg",
      category: "Music",
      date: "13 Sep"
    },
    {
      id: 14,
      name: "Hare Krishna Vishwa Bharatam",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNyBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00454900-gqgrzkrehn-portrait.jpg",
      category: "Dance",
      date: "Aug 17"
    }
  ],
   Bengaluru: [
    {
      id: 15,
      name: "Church street Boys: AN improved comedy show",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyIEF1ZyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-text,ie-UFJPTU9URUQ%3D,co-FFFFFF,bg-DC354B,ff-Roboto,fs-20,lx-N16,ly-12,lfo-top_right,pa-12_14_12_14,r-6,l-end/et00337870-qavtwlgkzv-portrait.jpg",
      category:"Comedy",
      date: "Aug 2"
    },
    {
      id: 16,
      name: "SUnburn Arena ft Dj snke Concert",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyOCBTZXA%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00451699-vqvppctasa-portrait.jpg",
      category:"Music",
      date:"28 sep"
    },
    {
      id: 17,
      name: "Kumar Sanu LIve ",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA5IEF1Zw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00440937-qtyrsjpqty-portrait.jpg",
      category:"Music",
      date:"9 Aug"
    },
    {
      id: 18,
      name: "Armaan Malik Live",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMyBTZXA%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00442951-efgysxurur-portrait.jpg",
      category:"Music",
      date:"13 Sep"
    },
    {
      id: 19,
      name: "CHitra 45",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00447365-jwnqtgxtmv-portrait.jpg",
      category:"Music",
      date:"16 Aug"
    },
    {
      id: 20,
      name: "Who are you by Rahul",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA5IEF1ZyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00384155-wjjsvjjsms-portrait.jpg",
      category:"Comedy",
      date:"Aug 9"
    },
    {
      id: 21,
      name: "Daily KA KAam Hai By Aakash",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxIEF1ZyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00426536-bptqcjvepa-portrait.jpg",
      category:"Comedy",
      date:"Aug 1"
    },
    {
      id: 22,
      name: "Kisi Ko BAtana Mat FT. Anubhav",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyMiBBdWcgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00355125-btfcrkmekn-portrait.jpg",
      category:"Music",
      date:"Aug 22"
    },
    {
      id: 23,
      name: "Master Peace_ COmedy",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzIEF1ZyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00350072-mrnglkkdka-portrait.jpg",
      category:"Comedy",
      date:"sun,3 Aug"
    },
    {
      id: 24,
      name: "Parimsh Verma - Live",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzMCBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00454831-clelqjwglb-portrait.jpg",
      category:"Music",
      date:"30 Aug"
    },
   
  ],
  Delhi: [
    {
      id: 27,
      name: "Swarajya COnclave 2025",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyMSBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-text,ie-UFJPTU9URUQ%3D,co-FFFFFF,bg-DC354B,ff-Roboto,fs-20,lx-N16,ly-12,lfo-top_right,pa-12_14_12_14,r-6,l-end/et00454285-exjluxcwbn-portrait.jpg",
       category:"Business",
      date:"21 Aug"

    },
    {
      id: 28,
      name: "Van Gogh- AN impressive story",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCA1IEF1ZyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00440776-dkwphtzzln-portrait.jpg",
       category:"Antiques",
      date:"Aug 5"

    },
    {
      id: 29,
      name: "Youth Spoken Fest 2025",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxMCBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00450899-mgsutltysd-portrait.jpg",
       category:"Education",
      date:"Aug 10"

    },
    {
      id: 30,
      name: "Strangers Meet",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyIEF1ZyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00437161-newzaxdvzs-portrait.jpg",
       category:"Business",
      date:"Aug 2"

    },
    {
      id: 31,
      name: " A night of Laughter Gaurav Gupta",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxMCBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00400535-fhcgnbaeqb-portrait.jpg",
       category:"Comedy",
      date:"Aug 10"

    },
    {
      id: 32,
      name: "Sonu Nigam Live Concert",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxIE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00439782-nuqxzjwjtg-portrait.jpg",
       category:"Music",
      date:"Nov 1"

    },
  

  ],
  Chennai: [
    {
      id: 35,
      name: "Samay Raina Still - Live",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxOSBTZXAgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-text,ie-UFJPTU9URUQ%3D,co-FFFFFF,bg-DC354B,ff-Roboto,fs-20,lx-N16,ly-12,lfo-top_right,pa-12_14_12_14,r-6,l-end/et00454335-mustpgublg-portrait.jpg",
       category:"Comedy",
      date:"Sep 19"
      

    },
    {
      id: 36,
      name: "Kollywood dance Workhop",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyIEF1Zw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00390338-ufedsxpstm-portrait.jpg",
       category:"Dance",
      date:"Aug 2"

    },
    {
      id: 37,
      name: "Secrets - A Tamil standup Comedy",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA5IEF1Zw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00364786-wdkjjwswpq-portrait.jpg",
       category:"Comedy",
      date:"Aug 9"

    },
    {
      id: 38,
     name: "Bad Drawing Party",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyIEF1ZyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00380239-vndqwfbbda-portrait.jpg",
       category:"Arts And Crafts",
      date:"AUg 2"
    },
    {
      id: 39,
      name: "Barkha Ritu - Chennai",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzIEF1Zw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00449607-bescvmenur-portrait.jpg",
       category:"Music",
      date:" Aug 3"
    },
    {
      id: 40,
      name: "Passenger India Tour - 2025",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00448828-hnhrggkduc-portrait.jpg",
       category:"Music",
      date:" 22 Nov"
    },
   
  ],
  Pune: [
    {
      id: 43,
      name: "High Risk , Low return ",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxMCBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-text,ie-UFJPTU9URUQ%3D,co-FFFFFF,bg-DC354B,ff-Roboto,fs-20,lx-N16,ly-12,lfo-top_right,pa-12_14_12_14,r-6,l-end/et00358502-hnjgvzjhwt-portrait.jpg",
       category:"Comedy",
      date:"Aug 10"
    },
    {
      id: 44,
     name: "Jo Bolta hai Wahi Hota Hai ",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyIEF1Zw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-text,ie-UFJPTU9URUQ%3D,co-FFFFFF,bg-DC354B,ff-Roboto,fs-20,lx-N16,ly-12,lfo-top_right,pa-12_14_12_14,r-6,l-end/et00145294-ubncfsbduf-portrait.jpg",
       category:"Comedy",
      date:"Aug 2"
    },
    {
      id: 45,
      name: "Papa CJ- Still Standing UP",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNCBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-text,ie-UFJPTU9URUQ%3D,co-FFFFFF,bg-DC354B,ff-Roboto,fs-20,lx-N16,ly-12,lfo-top_right,pa-12_14_12_14,r-6,l-end/et00447261-hlwzkvdpvx-portrait.jpg",
       category:"Comedy",
      date:"Aug 24"
    },
    {
      id: 46,
       name: "Do Kishor",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCA0IEF1Zw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00453932-szqjdufkyb-portrait.jpg",
       category:"Music",
      date:"Aug 4"
    },
    {
      id: 47,
      name: "Nakshatranche Dene",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMyBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00453150-pbepwhvqmg-portrait.jpg",
       category:"Music",
      date:"Aug 23"
    },
    {
      id: 48,
      name: "Infinite Magic Show",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA5IEF1ZyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00404569-xufnvjtspr-portrait.jpg",
       category:"Music",
      date:"Aug 9"
    },
   
  ],
  Kolkata: [
    {
      id: 51,
      name: "The warehouse",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxNSBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-text,ie-UFJPTU9URUQ%3D,co-FFFFFF,bg-DC354B,ff-Roboto,fs-20,lx-N16,ly-12,lfo-top_right,pa-12_14_12_14,r-6,l-end/et00446945-fellbptgvg-portrait.jpg",
       category:"Club GIgs",
      date:"Aug 15"
    },
     {
      id: 52,
    name: "Halki Halki Fati?",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxMCBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-text,ie-UFJPTU9URUQ%3D,co-FFFFFF,bg-DC354B,ff-Roboto,fs-20,lx-N16,ly-12,lfo-top_right,pa-12_14_12_14,r-6,l-end/et00407605-mvmyeprjgb-portrait.jpg",
       category:"Comedy",
      date:""
    },
     {
      id: 53,
      name: "Dhandho by Munawar Faruqui",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNyBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00447087-gvazznucza-portrait.jpg",
       category:"Comedy",
      date:"Aug 17"
    },
     {
      id: 54,
      name: "Udaan",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IFNlcA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00454943-fezjuhgnwl-portrait.jpg",
       category:"Music",
      date:"Sep 6"
    },
     {
      id: 55,
      name: "Dash e Dash",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00455511-sbuajgpayf-portrait.jpg",
       category:"Music",
      date:"Aug 16"
    },
     {
      id: 56,
     name: "TradeIQ: India's Biggest Trading...",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzMSBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00450464-qjcrhxkspe-portrait.jpg",
       category:"Education",
      date:"Aug 31"
    },
    
  ],
  Ahmedabad: [
    {
      id: 59,
      name: "Aashish Solanki",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyIEF1Zw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-text,ie-UFJPTU9URUQ%3D,co-FFFFFF,bg-DC354B,ff-Roboto,fs-20,lx-N16,ly-12,lfo-top_right,pa-12_14_12_14,r-6,l-end/et00452405-sjammpxkje-portrait.jpg",
       category:"Comedy",
      date:"Aug 2"
    },
     {
      id: 60,
      name: "Allow ME!",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNCBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00453944-vfcjmdcfyp-portrait.jpg",
       category:"Comedy",
      date:"Aug 24"
    },
     {
      id: 61,
      name: "Bhuwin Experience",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNyBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00438419-zynhrtqkea-portrait.jpg",
       category:"Music",
      date:"Aug 17"
    },
     {
      id: 62,
      name: "Rahgir Live",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IFNlcA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00455173-gtdufwujym-portrait.jpg",
       category:"Music",
      date:"Sep 6"
    },
     {
      id: 63,
      name: "Kumar Sanu - Live",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNSBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00439804-xbwxrywxuv-portrait.jpg",
       category:"Music",
      date:"Nov 15"
    },
     {
      id: 64,
     name: "Ahmedabad's Funniest",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyIEF1ZyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00324954-gfkwsfxxbl-portrait.jpg",
       category:"Comedy",
      date:"Aug 2"
    },
     {
      id: 65,
       name: "Majja Ma Mic",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCA0IEF1Zw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00451538-bgwhztqjcy-portrait.jpg",
       category:"Comedy",
      date:"Aug 4"
    },
     {
      id: 66,
     name: "Knife paint Workshop",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxMCBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00455868-xlffkanvcl-portrait.jpg",
       category:"Arts & Crafts",
      date:"Aug 10"
    },
  ],
  Chandigarh: [
    {
      id: 67,
     name: "Chasing Light Ragini Tandan",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCA3IEF1ZyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00454434-zfzsefbsvl-portrait.jpg",
       category:"Music",
      date:"Aug 7"
    },
      {
      id: 68,
      name: "Sonu nigam - live",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA4IE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00448296-ffjbjhbate-portrait.jpg",
       category:"Music",
      date:"Nov 8"
    },
      {
      id: 69,
      name: "PS - I Love You By Pranav Sharma",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IFNlcA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00452096-fmglqfxdcv-portrait.jpg",
       category:"Comedy",
      date:"Sep 6"
    },
      {
      id: 70,
     name: "2 Good By Ashish Malhotra",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMSBTZXA%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00450819-bmsgksyhcb-portrait.jpg",
       category:"Comedy",
      date:"Sep 21"
    },
      {
      id: 71,
      name: "Priya Malik's Ishq Hai",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA3IFNlcA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00450254-sfbvlkcpxd-portrait.jpg",
       category:"Poetry",
      date:"Sep 7"
    },
      {
      id: 72,
      name: "Toxic Chora by Chetna Balhara",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzMCBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00449897-xtdrraepeg-portrait.jpg",
       category:"Comic",
      date:"Aug 30"
    },
      {
      id: 73,
     name: " Psycho Shayar Live",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA1IE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00453053-xmcrlfmvnd-portrait.jpg",
       category:"Poetry",
      date:"Oct 5"
    },
      {
      id: 74,
      name: "Grown Up! ",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNCBTZXA%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00451577-vtmmtnwgss-portrait.jpg",
       category:"Comedy",
      date:"Sep 14"
    },
  ],
};

const CategoryBadge = ({ category }) => {
  const categoryColors = {
    Music: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
    Comedy: "bg-gradient-to-r from-yellow-400 to-orange-500 text-white",
    Festival: "bg-gradient-to-r from-green-400 to-blue-500 text-white",
    Poetry: "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
  };
  
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[category] || 'bg-gray-500 text-white'} 
                     shadow-lg transform hover:scale-105 transition-all duration-200`}>
      {category}
    </span>
  );
};

const LoadingShimmer = () => (
  <div className="animate-pulse">
    <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_infinite] h-80 rounded-xl"></div>
    <div className="mt-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_infinite] h-4 rounded"></div>
  </div>
);

const EventCard = ({ event, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl 
                  transform transition-all duration-500 hover:-translate-y-3 hover:rotate-1
                  ${isHovered ? 'scale-105' : 'scale-100'} cursor-pointer
                  animate-[fadeInUp_0.6s_ease-out] animation-delay-${index * 100}ms`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
     
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 
                      rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      animate-[spin_3s_linear_infinite]"></div>
      
    
      <div className="relative bg-white rounded-2xl p-1">
       
        <div className="relative overflow-hidden rounded-xl">
          {!imageLoaded && <LoadingShimmer />}
          <img 
            src={event.image} 
            alt={event.name}
            className={`w-full h-80 object-cover transition-all duration-700 
                       ${imageLoaded ? 'opacity-100' : 'opacity-0'}
                       group-hover:scale-110 group-hover:brightness-110`}
            onLoad={() => setImageLoaded(true)}
          />
          
          /* Gradient overlay */
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          /* Category badge */
          <div className="absolute top-4 left-4 transform -translate-y-8 group-hover:translate-y-0 
                          transition-transform duration-300">
            <CategoryBadge category={event.category} />
          </div>
          
          /* Date badge */
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 
                          transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-sm font-bold text-gray-800">{event.date}</span>
          </div>
          
          /* Floating action button */
          <div className="absolute bottom-4 right-4 transform translate-y-12 group-hover:translate-y-0 
                          transition-transform duration-500">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full 
                             shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200
                             hover:from-purple-700 hover:to-pink-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>
        
        /* Card content */
        <div className="p-6">
          <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-purple-600 
                         transition-colors duration-300 line-clamp-2">
            {event.name}
          </h3>
          
          /* Interactive elements */
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 
                                          border-2 border-white transform transition-transform duration-200
                                          ${isHovered ? 'scale-110' : 'scale-100'}`} 
                       style={{ animationDelay: `${i * 50}ms` }}></div>
                ))}
              </div>
              <span className="text-sm text-gray-600">+124 interested</span>
            </div>
            
            /* Heart icon */
            <button className="text-gray-400 hover:text-red-500 transform hover:scale-125 
                             transition-all duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      /* Ripple effect */
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 rounded-2xl transition-all duration-1000
                        ${isHovered ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10' : 'bg-transparent'}`}></div>
      </div>
    </div>
  );
};

const EventDetails = () => {
  const { city } = useParams();
  const events = eventsData[city] || [];
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [city]);

  const categories = ["All", ...new Set(events.map(event => event.category))];
  
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg mb-8 w-1/3 mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 shadow-lg">
                  <LoadingShimmer />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4">
      /* Floating particles background */
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-300 rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        /* Header Section */
        <div className="text-center mb-12 animate-[fadeInDown_0.8s_ease-out]">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 
                         bg-clip-text text-transparent mb-4 animate-[textGradient_3s_ease-in-out_infinite]">
            Events in {city || "Selected City"}
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover amazing events happening in your city. Book now and create unforgettable memories!
          </p>
        </div>

        /* Search and Filter Section */
        <div className="mb-8 animate-[fadeInUp_0.8s_ease-out] animation-delay-200ms">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            /* Search Bar */
            <div className="relative max-w-md w-full">
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 rounded-full border-2 border-purple-200 focus:border-purple-500 
                          focus:outline-none bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300
                          hover:shadow-xl focus:shadow-xl"
              />
              <svg className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105
                            ${selectedCategory === category 
                              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                              : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
                            } backdrop-blur-sm border border-purple-200`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

       
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 animate-[fadeInUp_0.8s_ease-out]">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">🎭</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No events found</h3>
              <p className="text-gray-600">
                {searchTerm || selectedCategory !== "All" 
                  ? "Try adjusting your search or filter criteria" 
                  : `No events available for ${city}. Try selecting a different city.`}
              </p>
            </div>
          </div>
        )}
      </div>

     
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        @keyframes textGradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default EventDetails;