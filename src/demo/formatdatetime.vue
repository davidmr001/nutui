<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <br>
        <div><nut-formatdatetime :datetime="1280977330748" dateformat="yyyy-mm-dd hh:ii:ss"></nut-formatdatetime></div>
        <br>
        <div><nut-formatdatetime datetime="2015-02-18 15:23:48" dateformat="mm/dd/yyyy hh:ii:ss"></nut-formatdatetime></div>
        <br>
        <div><nut-formatdatetime datetime="1280977330748" dateformat="yyyy-mm-dd"></nut-formatdatetime></div>
        <br>
        <div><nut-formatdatetime datetime="1280977330748" dateformat="hh:ii"></nut-formatdatetime></div>
        
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    data(){
        return{
          demo1:'<nut-formatdatetime :datetime="1280977330748" dateformat="yyyy-mm-dd hh:ii:ss"></nut-formatdatetime>',
          demo2:'<nut-formatdatetime datetime="2015-02-18 15:23:48" dateformat="mm/dd/yyyy hh:ii:ss"></nut-formatdatetime>',
          demo3:'<nut-formatdatetime datetime="1280977330748" dateformat="yyyy-mm-dd"></nut-formatdatetime>',
          demo4:'<nut-formatdatetime datetime="1280977330748" dateformat="hh:ii"></nut-formatdatetime>',
        }
    }
}
</script>

<style>
</style>
