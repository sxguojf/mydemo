L.TileLayer.ChinaProvider = L.TileLayer.extend({

    initialize: function(type, options) { // (type, Object)
        var providers = L.TileLayer.ChinaProvider.providers;

        var parts = type.split('.');

        var providerName = parts[0];
        var mapName = parts[1];
        var mapType = parts[2];

        var url = providers[providerName][mapName][mapType];
        options.subdomains = providers[providerName].Subdomains;
        options.key = options.key || providers[providerName].key;
        L.TileLayer.prototype.initialize.call(this, url, options);
    }
});

L.TileLayer.ChinaProvider.providers = {
    TianDiTu: {
        Normal: {
                 //https://t2.tianditu.gov.cn/DataServer?T=cva_w&x=49&y=25&l=6&tk=8971e4c7b3640d506c2dc111221af6a0
            Map: "http://10.172.8.94:8500/map/tianditu/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk={key}",
            Annotion: "http://10.172.8.94:8500/map/tianditu/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk={key}",
            line: "http://10.172.8.94:8500/map/tianditu/DataServer?T=ibo_w&X={x}&Y={y}&L={z}&tk={key}",
            river: "http://10.172.8.94:8500/map/tianditu/DataServer?T=wat_w&X={x}&Y={y}&L={z}&tk={key}",
        },
        Satellite: {
            Map: "http://10.172.8.94:8500/map/tianditu/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk={key}",
            Annotion: "http://10.172.8.94:8500/map/tianditu/DataServer?T=cia_w&X={x}&Y={y}&L={z}&tk={key}"
        },
        Terrain: {
            //Map: "http://10.172.8.94:8500/map/tianditu/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk={key}",
            Map: "http://10.172.8.94:8500/map/tianditu/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk={key}",
            Annotion: "http://10.172.8.94:8500/map/tianditu/DataServer?T=cta_w&X={x}&Y={y}&L={z}&tk={key}"
        },
        Subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
        key: "d9c14f7a4d55d8e7a5eff40c6ff5d3d2_"
    },

    GaoDe: {
        Normal: {
            Map: 'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
        },
        Satellite: {
            Map: 'http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
            Annotion: 'http://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}'
        },
        Subdomains: ['0', '1', '2', '3', '4', '5', '6', '7']
    },

    Google: {
        Normal: {
            Map: "http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
        },
        Satellite: {
            Map: "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
        },
        Subdomains: []
    },

    Geoq: {
        Normal: {
            //Map: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}",
            Map: "http://10.172.8.94:8500/map/arcgis/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}",
            PurplishBlue: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
            Gray: "http://10.172.8.94:8500/map/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}",
            //Gray: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}",
            Warm: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}",
            Line: "http://map.geoq.cn/arcgis/rest/services/SimpleFeature/ChinaBoundaryLine/MapServer/tile/{z}/{y}/{x}"
        },
        Theme: {
            Hydro: "http://thematic.geoq.cn/arcgis/rest/services/ThematicMaps/WorldHydroMap/MapServer/tile/{z}/{y}/{x}"
        },
        Subdomains: []
    },

    OSM: {
        Normal: {
            Map: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
            Stamen: "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.png",
        },
        gray: {
            // location ^~ /map/windy/ {
            //     expires 10d;
            //     proxy_pass https://tiles.windy.com/tiles/;
            // }
            //Map: "https://tiles.windy.com/tiles/v9.0/darkmap/{z}/{x}/{y}.png",
                  //https://tiles.windy.com/tiles/v9.0/darkmap/6/50/24.png
            Map: "http://10.172.8.94:8500/map/windy/v9.0/darkmap/{z}/{x}/{y}.png",
        },
        Subdomains: ['a', 'b', 'c','d']
    }

};

L.tileLayer.chinaProvider = function(type, options) {
    return new L.TileLayer.ChinaProvider(type, options);
};