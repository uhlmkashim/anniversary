var mobage = {};
mobage.shellapp = {};

mobage.shellapp.AudioManifest = {};
mobage.shellapp.AudioManifest.list = {};
mobage.shellapp.AudioManifest.load = async function() {
    console.debug("load called!");
    var names = ["bgm_001.ogg", "bgm_002.ogg", "bgm_003.ogg", "bgm_004.ogg", "bgm_005.ogg", "bgm_007.ogg", "bgm_009.ogg", "bgm_011.ogg", "bgm_012.ogg", "bgm_013.ogg", "bgm_014.ogg", "bgm_episode_01.ogg", "bgm_episode_02.ogg", "bgm_episode_03.ogg", "bgm_event_f_01.ogg", "bgm_event_f_02.ogg", "bgm_event_f_03.ogg", "bgm_event_f_04.ogg", "bgm_event_f_05.ogg", "bgm_event_f_06.ogg", "bgm_event_f_07.ogg", "bgm_event_f_08.ogg", "bgm_event_f_09.ogg", "bgm_event_f_11.ogg", "bgm_event_f_12.ogg", "bgm_event_f_13.ogg", "bgm_event_f_14.ogg", "bgm_event_f_15.ogg", "bgm_event_f_16.ogg", "bgm_event_f_17.ogg", "bgm_event_f_18.ogg", "bgm_event_f_22.ogg", "bgm_event_f_23.ogg", "bgm_event_f_25.ogg", "bgm_event_f_27.ogg", "bgm_gacha.ogg", "bgm_gacha_draw.ogg", "bgm_main.ogg", "bgm_petit_01.ogg", "bgm_petit_06.ogg", "se_001.ogg", "se_002.ogg", "se_003.ogg", "se_004.ogg", "se_005.ogg", "se_006.ogg", "se_007.ogg", "se_008.ogg", "se_009.ogg", "se_010.ogg", "se_011.ogg", "se_012.ogg", "se_013.ogg", "se_013_2.ogg", "se_013_3.ogg", "se_014.ogg", "se_015.ogg", "se_015_2.ogg", "se_016.ogg", "se_017.ogg", "se_018.ogg", "se_019.ogg", "se_020.ogg", "se_021.ogg", "se_022.ogg", "se_023.ogg", "se_024.ogg", "se_025.ogg", "se_026.ogg", "se_027.ogg", "se_027_2.ogg", "se_028.ogg", "se_029.ogg", "se_030.ogg", "se_032.ogg", "se_033.ogg", "se_033_2.ogg", "se_034.ogg", "se_035.ogg", "se_036.ogg", "se_037.ogg", "se_037_1.ogg", "se_037_2.ogg", "se_038.ogg", "se_039.ogg", "se_040.ogg", "se_041.ogg", "se_041_1.ogg", "se_041_2.ogg", "se_042.ogg", "se_043.ogg", "se_044.ogg", "se_045.ogg", "se_046.ogg", "se_047.ogg", "se_048.ogg", "se_049.ogg", "se_050.ogg", "se_051.ogg", "se_052.ogg", "se_053.ogg", "se_054.ogg", "se_055.ogg", "se_056.ogg", "se_057.ogg", "se_058.ogg", "se_059.ogg", "se_060.ogg", "se_061.ogg", "se_062.ogg", "se_063.ogg", "se_063_2.ogg", "se_063_3.ogg", "se_064.ogg", "se_064_2.ogg", "se_064_3.ogg", "se_064_4.ogg", "se_065.ogg", "se_066.ogg", "se_067.ogg", "se_068.ogg", "se_069.ogg", "se_070.ogg", "se_071.ogg", "se_072.ogg", "se_073.ogg", "se_074.ogg", "se_075.ogg", "se_076.ogg", "se_077.ogg", "se_078.ogg", "se_079.ogg", "se_080.ogg", "se_081.ogg", "se_082.ogg", "se_083.ogg", "se_084.ogg", "se_085.ogg", "se_086.ogg", "se_087.ogg", "se_088.ogg", "se_089.ogg", "se_090.ogg", "se_091.ogg", "se_092.ogg", "se_093.ogg", "se_094.ogg", "se_095.ogg", "se_096.ogg", "se_096_2.ogg", "se_096_3.ogg", "se_097.ogg", "se_097_2.ogg", "se_097_3.ogg", "se_098.ogg", "se_099.ogg", "se_100.ogg", "se_101.ogg", "se_102.ogg", "se_103.ogg", "se_104.ogg", "se_105.ogg", "se_106.ogg", "se_107.ogg", "se_108.ogg", "se_109.ogg", "se_110.ogg", "se_111.ogg", "se_113.ogg", "se_114.ogg", "se_115.ogg", "se_116.ogg", "se_117.ogg", "se_118.ogg", "se_119.ogg", "se_120.ogg", "se_121.ogg", "se_122.ogg", "se_123.ogg", "se_124.ogg", "se_126.ogg", "se_126_2.ogg", "se_127.ogg", "se_129.ogg", "se_130.ogg", "se_131.ogg", "se_132.ogg", "se_133.ogg", "se_134.ogg", "se_134_2.ogg", "se_135.ogg", "se_136.ogg", "se_136_2.ogg", "se_138.ogg", "se_138_2.ogg", "se_138_3.ogg", "se_139.ogg", "se_140.ogg", "se_141.ogg", "se_141_2.ogg", "se_142.ogg", "se_142_2.ogg", "se_142_3.ogg", "se_142_4.ogg", "se_143.ogg", "se_144.ogg", "se_144_2.ogg", "se_144_3.ogg", "se_145.ogg", "se_karen.ogg"];
    
    await Promise.all(names.map(async (name) => {
        var cacheStorage = await caches.open("shellapp");
        var url = "/anniversary/sound/shellapp/" + name;
        var response = await cacheStorage.match(url);
        var audio = new Audio();
        
        if (!response) {
            response = await fetch(url);
            await cacheStorage.put(url, response);
            response = await cacheStorage.match(url);
        }
        var obj = window.URL.createObjectURL(await response.blob());
        audio.src = obj;
        mobage.shellapp.AudioManifest.list[name] = audio;
    }));
};

mobage.shellapp.App = new function () {
    this.getVersionName = function () {
        return '14.0';
    };
    this.getVersionCode = function () {
        return 101;
    };
};

mobage.shellapp.SoundEffect = new function () {
    this.play = function (soundId) {
        mobage.shellapp.AudioManifest.list[soundId].play()
    };
};

mobage.shellapp.Music = {};
mobage.shellapp.Music.activeAudio = null;
mobage.shellapp.Music.play = function (musicId, duration, loop) {
    if (mobage.shellapp.Music.activeAudio) {
        mobage.shellapp.Music.activeAudio.pause();
    }
    mobage.shellapp.Music.activeAudio = mobage.shellapp.AudioManifest[musicId];
    mobage.shellapp.Music.activeAudio.loop = loop;
    mobage.shellapp.Music.activeAudio.play();
};
mobage.shellapp.Music.stop = function (duration) {
    if (mobage.shellapp.Music.activeAudio) {
    mobage.shellapp.Music.activeAudio.pause();
    mobage.shellapp.Music.activeAudio.currentTime = 0;
    }
};
mobage.shellapp.Music.pause = function (duration) {
    if (mobage.shellapp.Music.activeAudio) {
        mobage.shellapp.Music.activeAudio.pause();
    }
};
mobage.shellapp.Music.resume = function (duration) {
    if (mobage.shellapp.Music.activeAudio) {
        mobage.shellapp.Music.activeAudio.play()
    }
};

if (!mobage.shellapp.ready) {
    mobage.shellapp.AudioManifest.load();
    mobage.shellapp.ready = true;
    mobage.shellapp.event = document.createEvent('Event');
    mobage.shellapp.event.initEvent('onShellAppReady', true, true);
    document.dispatchEvent(mobage.shellapp.event);
}