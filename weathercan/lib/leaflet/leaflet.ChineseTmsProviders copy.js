L.TileLayer.ChinaProvider = L.TileLayer.extend({

    initialize: function(type, options) { // (type, Object)
        var providers = L.TileLayer.ChinaProvider.providers;

        var parts = type.split('.');

        var providerName = parts[0];
        var mapName = parts[1];
        var mapType = parts[2];

        var url = providers[providerName][mapName][mapType];
        if(!options){
            options = {
                maxZoom: 18,
                minZoom: 1
            }
        }
        options.subdomains = providers[providerName].Subdomains;

        L.TileLayer.prototype.initialize.call(this, url, options);
    }
});

L.TileLayer.ChinaProvider.providers = {
    TianDiTu: {
        Normal: {
            Map: "http://t{s}.tianditu.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}",
            Annotion: "http://t{s}.tianditu.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}",
        },
        Satellite: {
            Map: "http://t{s}.tianditu.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}",
            Annotion: "http://t{s}.tianditu.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}",
        },
        Terrain: {
            Map: "http://t{s}.tianditu.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}",
            Annotion: "http://t{s}.tianditu.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}",
        },
        Subdomains: ['0', '1', '2', '3', '4', '5', '6', '7']
    },

    GaoDe: {
        Normal: {
            Map: 'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
        },
        Satellite: {
            Map: 'http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
            Annotion: 'http://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}'
        },
        Subdomains: ["1", "2", "3", "4"]
    },

    Google: {
     
        m1:{
            Map: "http://www.google.cn/maps/vt?lyrs=p@189&gl=cn&x={x}&y={y}&z={z}"
        },
        m2:{
            Map: "http://www.google.cn/maps/vt?lyrs=t@189&gl=cn&x={x}&y={y}&z={z}"
        },
        m3:{
            Map: "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
        },
        m4:{
            Map: "http://www.google.cn/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}"
        },
        m5:{
            Map: "http://www.google.cn/maps/vt?lyrs=h@189&gl=cn&x={x}&y={y}&z={z}"
        },        
        m6: {
            Map: "http://www.google.cn/maps/vt?lyrs=r@189&gl=cn&x={x}&y={y}&z={z}"
        },
        m7: {
            Map: "http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
        },
        Subdomains: []
    },

    Geoq: {
        Normal: {
            Map: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}",
            Color: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetColor/MapServer/tile/{z}/{y}/{x}",
            PurplishBlue: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
            Gray: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}",
            Warm: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}",
            Cold: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetCold/MapServer/tile/{z}/{y}/{x}",
            Simple:"http://map.geoq.cn/ArcGIS/rest/services/SimpleFeature/ChinaBoundaryLine/MapServer/tile/{z}/{y}/{x}",
                  //http://map.geoq.cn/arcgis/rest/services/SimpleFeature/ChinaBoundaryLine/MapServer
            jxh: "http://10.172.35.55:10002/MapFile/Google/XingZheng/Mercator/{x}/{y}/{z}.png",
            sh:"http://10.172.8.103/ARCGIS/REST/services/sxdzzhdem/MapServer/tile/{z}/{y}/{x}.png",
            sx:"http://10.172.13.31:10002/Files/MapFile/HW/shanxi&touming/Mercator/{x}{y}{z}.png",
            test: "http://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}"

        },
        Subdomains: []
    },
    other:{
        google:{
            g1:'http://mt2.google.cn/vt/lyrs=m&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}'
        },
        Subdomains: []
    }
};

L.tileLayer.chinaProvider = function(type, options) {
    return new L.TileLayer.ChinaProvider(type, options);
};
