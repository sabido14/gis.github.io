ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([124.466693, 8.164606, 125.331634, 8.585625]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ManoloFortichLandBoundary_1 = new ol.format.GeoJSON();
var features_ManoloFortichLandBoundary_1 = format_ManoloFortichLandBoundary_1.readFeatures(json_ManoloFortichLandBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ManoloFortichLandBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ManoloFortichLandBoundary_1.addFeatures(features_ManoloFortichLandBoundary_1);
var lyr_ManoloFortichLandBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ManoloFortichLandBoundary_1, 
                style: style_ManoloFortichLandBoundary_1,
                popuplayertitle: 'Manolo Fortich Land Boundary',
                interactive: true,
                title: '<img src="styles/legend/ManoloFortichLandBoundary_1.png" /> Manolo Fortich Land Boundary'
            });
var format_PUMPSTATIONSSYSTEM2_2 = new ol.format.GeoJSON();
var features_PUMPSTATIONSSYSTEM2_2 = format_PUMPSTATIONSSYSTEM2_2.readFeatures(json_PUMPSTATIONSSYSTEM2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PUMPSTATIONSSYSTEM2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUMPSTATIONSSYSTEM2_2.addFeatures(features_PUMPSTATIONSSYSTEM2_2);
var lyr_PUMPSTATIONSSYSTEM2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUMPSTATIONSSYSTEM2_2, 
                style: style_PUMPSTATIONSSYSTEM2_2,
                popuplayertitle: 'PUMP STATIONS - SYSTEM 2',
                interactive: true,
                title: '<img src="styles/legend/PUMPSTATIONSSYSTEM2_2.png" /> PUMP STATIONS - SYSTEM 2'
            });
var format_PUMPSTATIONSSYSTEM1_3 = new ol.format.GeoJSON();
var features_PUMPSTATIONSSYSTEM1_3 = format_PUMPSTATIONSSYSTEM1_3.readFeatures(json_PUMPSTATIONSSYSTEM1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PUMPSTATIONSSYSTEM1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUMPSTATIONSSYSTEM1_3.addFeatures(features_PUMPSTATIONSSYSTEM1_3);
var lyr_PUMPSTATIONSSYSTEM1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUMPSTATIONSSYSTEM1_3, 
                style: style_PUMPSTATIONSSYSTEM1_3,
                popuplayertitle: 'PUMP STATIONS - SYSTEM 1',
                interactive: true,
                title: '<img src="styles/legend/PUMPSTATIONSSYSTEM1_3.png" /> PUMP STATIONS - SYSTEM 1'
            });
var format_VALVES_4 = new ol.format.GeoJSON();
var features_VALVES_4 = format_VALVES_4.readFeatures(json_VALVES_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_VALVES_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VALVES_4.addFeatures(features_VALVES_4);
var lyr_VALVES_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VALVES_4, 
                style: style_VALVES_4,
                popuplayertitle: 'VALVES',
                interactive: true,
                title: '<img src="styles/legend/VALVES_4.png" /> VALVES'
            });
var format_RESERVOIRSYSTEM2_5 = new ol.format.GeoJSON();
var features_RESERVOIRSYSTEM2_5 = format_RESERVOIRSYSTEM2_5.readFeatures(json_RESERVOIRSYSTEM2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RESERVOIRSYSTEM2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESERVOIRSYSTEM2_5.addFeatures(features_RESERVOIRSYSTEM2_5);
var lyr_RESERVOIRSYSTEM2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESERVOIRSYSTEM2_5, 
                style: style_RESERVOIRSYSTEM2_5,
                popuplayertitle: 'RESERVOIR - SYSTEM 2',
                interactive: true,
                title: '<img src="styles/legend/RESERVOIRSYSTEM2_5.png" /> RESERVOIR - SYSTEM 2'
            });
var format_RESERVOIRSYSTEM1_6 = new ol.format.GeoJSON();
var features_RESERVOIRSYSTEM1_6 = format_RESERVOIRSYSTEM1_6.readFeatures(json_RESERVOIRSYSTEM1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RESERVOIRSYSTEM1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESERVOIRSYSTEM1_6.addFeatures(features_RESERVOIRSYSTEM1_6);
var lyr_RESERVOIRSYSTEM1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESERVOIRSYSTEM1_6, 
                style: style_RESERVOIRSYSTEM1_6,
                popuplayertitle: 'RESERVOIR - SYSTEM 1',
                interactive: true,
                title: '<img src="styles/legend/RESERVOIRSYSTEM1_6.png" /> RESERVOIR - SYSTEM 1'
            });
var format_SYSTEM2POINT_7 = new ol.format.GeoJSON();
var features_SYSTEM2POINT_7 = format_SYSTEM2POINT_7.readFeatures(json_SYSTEM2POINT_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SYSTEM2POINT_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SYSTEM2POINT_7.addFeatures(features_SYSTEM2POINT_7);
var lyr_SYSTEM2POINT_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SYSTEM2POINT_7, 
                style: style_SYSTEM2POINT_7,
                popuplayertitle: 'SYSTEM 2-POINT',
                interactive: true,
                title: '<img src="styles/legend/SYSTEM2POINT_7.png" /> SYSTEM 2-POINT'
            });
var format_SYSTEM2LINESTRING_8 = new ol.format.GeoJSON();
var features_SYSTEM2LINESTRING_8 = format_SYSTEM2LINESTRING_8.readFeatures(json_SYSTEM2LINESTRING_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SYSTEM2LINESTRING_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SYSTEM2LINESTRING_8.addFeatures(features_SYSTEM2LINESTRING_8);
var lyr_SYSTEM2LINESTRING_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SYSTEM2LINESTRING_8, 
                style: style_SYSTEM2LINESTRING_8,
                popuplayertitle: 'SYSTEM 2-LINESTRING',
                interactive: true,
    title: 'SYSTEM 2-LINESTRING<br />\
    <img src="styles/legend/SYSTEM2LINESTRING_8_0.png" /> 50<br />\
    <img src="styles/legend/SYSTEM2LINESTRING_8_1.png" /> 64<br />\
    <img src="styles/legend/SYSTEM2LINESTRING_8_2.png" /> 75<br />\
    <img src="styles/legend/SYSTEM2LINESTRING_8_3.png" /> 100<br />\
    <img src="styles/legend/SYSTEM2LINESTRING_8_4.png" /> 150<br />\
    <img src="styles/legend/SYSTEM2LINESTRING_8_5.png" /> 200<br />\
    <img src="styles/legend/SYSTEM2LINESTRING_8_6.png" /> <br />' });
var format_SYSTEM1LINESTRING_9 = new ol.format.GeoJSON();
var features_SYSTEM1LINESTRING_9 = format_SYSTEM1LINESTRING_9.readFeatures(json_SYSTEM1LINESTRING_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SYSTEM1LINESTRING_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SYSTEM1LINESTRING_9.addFeatures(features_SYSTEM1LINESTRING_9);
var lyr_SYSTEM1LINESTRING_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SYSTEM1LINESTRING_9, 
                style: style_SYSTEM1LINESTRING_9,
                popuplayertitle: 'SYSTEM 1-LINESTRING',
                interactive: true,
    title: 'SYSTEM 1-LINESTRING<br />\
    <img src="styles/legend/SYSTEM1LINESTRING_9_0.png" /> 20<br />\
    <img src="styles/legend/SYSTEM1LINESTRING_9_1.png" /> 25<br />\
    <img src="styles/legend/SYSTEM1LINESTRING_9_2.png" /> 40<br />\
    <img src="styles/legend/SYSTEM1LINESTRING_9_3.png" /> 50<br />\
    <img src="styles/legend/SYSTEM1LINESTRING_9_4.png" /> 65<br />\
    <img src="styles/legend/SYSTEM1LINESTRING_9_5.png" /> 75<br />\
    <img src="styles/legend/SYSTEM1LINESTRING_9_6.png" /> 85<br />\
    <img src="styles/legend/SYSTEM1LINESTRING_9_7.png" /> 100<br />\
    <img src="styles/legend/SYSTEM1LINESTRING_9_8.png" /> 150<br />\
    <img src="styles/legend/SYSTEM1LINESTRING_9_9.png" /> 200<br />\
    <img src="styles/legend/SYSTEM1LINESTRING_9_10.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_ManoloFortichLandBoundary_1.setVisible(true);lyr_PUMPSTATIONSSYSTEM2_2.setVisible(true);lyr_PUMPSTATIONSSYSTEM1_3.setVisible(true);lyr_VALVES_4.setVisible(true);lyr_RESERVOIRSYSTEM2_5.setVisible(true);lyr_RESERVOIRSYSTEM1_6.setVisible(true);lyr_SYSTEM2POINT_7.setVisible(true);lyr_SYSTEM2LINESTRING_8.setVisible(true);lyr_SYSTEM1LINESTRING_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ManoloFortichLandBoundary_1,lyr_PUMPSTATIONSSYSTEM2_2,lyr_PUMPSTATIONSSYSTEM1_3,lyr_VALVES_4,lyr_RESERVOIRSYSTEM2_5,lyr_RESERVOIRSYSTEM1_6,lyr_SYSTEM2POINT_7,lyr_SYSTEM2LINESTRING_8,lyr_SYSTEM1LINESTRING_9];
lyr_ManoloFortichLandBoundary_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'ID_3': 'ID_3', 'NAME_3': 'NAME_3', 'NL_NAME_3': 'NL_NAME_3', 'VARNAME_3': 'VARNAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'PROVINCE': 'PROVINCE', 'REGION': 'REGION', });
lyr_PUMPSTATIONSSYSTEM2_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', });
lyr_PUMPSTATIONSSYSTEM1_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', });
lyr_VALVES_4.set('fieldAliases', {'Name': 'Name', });
lyr_RESERVOIRSYSTEM2_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', });
lyr_RESERVOIRSYSTEM1_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', });
lyr_SYSTEM2POINT_7.set('fieldAliases', {'Name': 'Name', });
lyr_SYSTEM2LINESTRING_8.set('fieldAliases', {'Name': 'Name', 'pipe_size': 'pipe_size', 'length': 'length', });
lyr_SYSTEM1LINESTRING_9.set('fieldAliases', {'Name': 'Name', 'pipe_size': 'pipe_size', 'length': 'length', });
lyr_ManoloFortichLandBoundary_1.set('fieldImages', {'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'ID_2': 'Range', 'NAME_2': 'TextEdit', 'ID_3': 'Range', 'NAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'PROVINCE': 'TextEdit', 'REGION': 'TextEdit', });
lyr_PUMPSTATIONSSYSTEM2_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_PUMPSTATIONSSYSTEM1_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_VALVES_4.set('fieldImages', {'Name': 'TextEdit', });
lyr_RESERVOIRSYSTEM2_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_RESERVOIRSYSTEM1_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_SYSTEM2POINT_7.set('fieldImages', {'Name': 'TextEdit', });
lyr_SYSTEM2LINESTRING_8.set('fieldImages', {'Name': 'TextEdit', 'pipe_size': 'Range', 'length': 'TextEdit', });
lyr_SYSTEM1LINESTRING_9.set('fieldImages', {'Name': 'TextEdit', 'pipe_size': 'Range', 'length': 'TextEdit', });
lyr_ManoloFortichLandBoundary_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'ID_3': 'no label', 'NAME_3': 'no label', 'NL_NAME_3': 'no label', 'VARNAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'PROVINCE': 'no label', 'REGION': 'no label', });
lyr_PUMPSTATIONSSYSTEM2_2.set('fieldLabels', {'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', });
lyr_PUMPSTATIONSSYSTEM1_3.set('fieldLabels', {'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', });
lyr_VALVES_4.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_RESERVOIRSYSTEM2_5.set('fieldLabels', {'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', });
lyr_RESERVOIRSYSTEM1_6.set('fieldLabels', {'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', });
lyr_SYSTEM2POINT_7.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_SYSTEM2LINESTRING_8.set('fieldLabels', {'Name': 'inline label - visible with data', 'pipe_size': 'inline label - visible with data', 'length': 'inline label - visible with data', });
lyr_SYSTEM1LINESTRING_9.set('fieldLabels', {'Name': 'inline label - visible with data', 'pipe_size': 'inline label - visible with data', 'length': 'inline label - visible with data', });
lyr_SYSTEM1LINESTRING_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});