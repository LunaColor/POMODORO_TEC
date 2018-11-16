Vue.component('wave-ball', {
    props: ['ballSize', 'ballColor', 'spaceColor', 'waveTop', 'ballText'],//waveTop接收0~1的浮點數!
    computed: {
        getWaveTopStr: function ()//-108~-198
        { return this.waveTop <= 0 ? '-100%' : this.waveTop >= 1 ? '-250%' : (-108 - (this.waveTop * 90)) + '%' }
    },
    template: '<div class="box" v-bind:style="{width:ballSize,height: ballSize}">\
    <div class="container" v-bind:style="{color: ballColor,\'border-color\':ballColor,\'background-color\':spaceColor}">\
    <div class="sea" v-bind:style="{\'background-color\':ballColor}">\
        <div class="wave" v-bind:style="{top:getWaveTopStr,\'background-color\':spaceColor}"></div>\
        <div class="text_block" >{{ballText}}</div>\
    </div></div></div> ',
})