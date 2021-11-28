(function(a, k) {
    function H() {
        var c = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        c.gotoAndStop(this.currentFrame);
        c.paused = this.paused;
        c.framerate = this.framerate;
        return c
    }

    function g(c, e, d) {
        c = a.extend(c, a.MovieClip);
        c.clone = H;
        c.nominalBounds = e;
        c.frameBounds = d;
        return c
    }
    var f, b = {},
        I = {},
        h = {};
    b.ssMetadata = [];
    (b.bg = function() {
        this.initialize(h.sp_027_op_10th_bg)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 640);
    (b.bg_book = function() {
        this.initialize(h.sp_027_op_10th_bg_book)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 640);
    (b.bg_fumika = function() {
        this.initialize(h.sp_027_op_10th_bg_fumika)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 1150, 1400);
    (b.bg_fumika_time = function() {
        this.initialize(h.sp_027_op_10th_bg_fumika_time)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 1019, 793);
    (b.bg_pabe = function() {
        this.initialize(h.sp_027_op_10th_bg_pabe)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 640);
    (b.chihiro_base =
        function() {
            this.initialize(h.sp_027_op_10th_chihiro_base)
        }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 280, 600);
    (b.chihiro_face_close = function() {
        this.initialize(h.sp_027_op_10th_chihiro_face_close)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 140, 70);
    (b.chihiro_face_laugh = function() {
        this.initialize(h.sp_027_op_10th_chihiro_face_laugh)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 140, 140);
    (b.chihiro_face_sad = function() {
        this.initialize(h.sp_027_op_10th_chihiro_face_sad)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 140, 140);
    (b.chihiro_face_sad2 = function() {
        this.initialize(h.sp_027_op_10th_chihiro_face_sad2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 140, 140);
    (b.chihiro_face_smile = function() {
        this.initialize(h.sp_027_op_10th_chihiro_face_smile)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 140, 140);
    (b.chihiro_face_strong = function() {
        this.initialize(h.sp_027_op_10th_chihiro_face_strong)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds =
        new a.Rectangle(0, 0, 140, 140);
    (b.chihiro_face_surprise1 = function() {
        this.initialize(h.sp_027_op_10th_chihiro_face_surprise1)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 140, 140);
    (b.chihiro_face_surprise2 = function() {
        this.initialize(h.sp_027_op_10th_chihiro_face_surprise2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 140, 140);
    (b.circre_rainbaw_small = function() {
        this.initialize(h.sp_027_op_10th_circre_rainbaw_small)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,
        0, 320, 320);
    (b.countdown_num_0 = function() {
        this.initialize(h.sp_027_op_10th_countdown_num_0)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 364, 136);
    (b.countdown_num_0_w = function() {
        this.initialize(h.sp_027_op_10th_countdown_num_0_w)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 364, 136);
    (b.countdown_num_1 = function() {
        this.initialize(h.sp_027_op_10th_countdown_num_1)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 364, 136);
    (b.countdown_num_1_w = function() {
        this.initialize(h.sp_027_op_10th_countdown_num_1_w)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 364, 136);
    (b.countdown_star1 = function() {
        this.initialize(h.sp_027_op_10th_countdown_star1)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 68, 136);
    (b.countdown_star2 = function() {
        this.initialize(h.sp_027_op_10th_countdown_star2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 43, 95);
    (b.countdown_star3 = function() {
        this.initialize(h.sp_027_op_10th_countdown_star3)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,
        0, 51, 95);
    (b.countdown_star4 = function() {
        this.initialize(h.sp_027_op_10th_countdown_star4)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 68, 136);
    (b.countdown_text = function() {
        this.initialize(h.sp_027_op_10th_countdown_text)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 344, 78);
    (b.ef_book = function() {
        this.initialize(h.sp_027_op_10th_ef_book)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 800);
    (b.ef_fumika_kira1 = function() {
        this.initialize(h.sp_027_op_10th_ef_fumika_kira1)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 856, 1057);
    (b.ef_fumika_kira2 = function() {
        this.initialize(h.sp_027_op_10th_ef_fumika_kira2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 898, 1098);
    (b.eff_star_a = function() {
        this.initialize(h.sp_027_op_10th_eff_star_a)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 87, 87);
    (b.Feather01 = function() {
        this.initialize(h.sp_027_op_10th_Feather01)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 264, 265);
    (b.Feather01_blur =
        function() {
            this.initialize(h.sp_027_op_10th_Feather01_blur)
        }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 264, 265);
    (b.Feather02 = function() {
        this.initialize(h.sp_027_op_10th_Feather02)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 330, 359);
    (b.Feather02_blur = function() {
        this.initialize(h.sp_027_op_10th_Feather02_blur)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 325, 354);
    (b.fumika_armL1 = function() {
        this.initialize(h.sp_027_op_10th_fumika_armL1)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 148, 125);
    (b.fumika_armL2 = function() {
        this.initialize(h.sp_027_op_10th_fumika_armL2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 106, 200);
    (b.fumika_armL3 = function() {
        this.initialize(h.sp_027_op_10th_fumika_armL3)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 121, 143);
    (b.fumika_armL4 = function() {
        this.initialize(h.sp_027_op_10th_fumika_armL4)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 112, 53);
    (b.fumika_armL5 =
        function() {
            this.initialize(h.sp_027_op_10th_fumika_armL5)
        }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 42, 33);
    (b.fumika_armR1 = function() {
        this.initialize(h.sp_027_op_10th_fumika_armR1)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 59, 152);
    (b.fumika_armR2 = function() {
        this.initialize(h.sp_027_op_10th_fumika_armR2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 120, 60);
    (b.fumika_armR3 = function() {
        this.initialize(h.sp_027_op_10th_fumika_armR3)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 85, 63);
    (b.fumika_body = function() {
        this.initialize(h.sp_027_op_10th_fumika_body)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 265, 314);
    (b.fumika_body_acc1 = function() {
        this.initialize(h.sp_027_op_10th_fumika_body_acc1)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 39, 18);
    (b.fumika_body_acc2 = function() {
        this.initialize(h.sp_027_op_10th_fumika_body_acc2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 32,
        30);
    (b.fumika_body_acc3 = function() {
        this.initialize(h.sp_027_op_10th_fumika_body_acc3)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 24, 33);
    (b.fumika_body_acc4 = function() {
        this.initialize(h.sp_027_op_10th_fumika_body_acc4)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 116, 93);
    (b.fumika_cheek1 = function() {
        this.initialize(h.sp_027_op_10th_fumika_cheek1)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 162, 103);
    (b.fumika_cheek2 = function() {
        this.initialize(h.sp_027_op_10th_fumika_cheek2)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 162, 101);
    (b.fumika_eye1 = function() {
        this.initialize(h.sp_027_op_10th_fumika_eye1)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 130, 73);
    (b.fumika_eye2 = function() {
        this.initialize(h.sp_027_op_10th_fumika_eye2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 125, 70);
    (b.fumika_eye_close = function() {
        this.initialize(h.sp_027_op_10th_fumika_eye_close)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 127, 50);
    (b.fumika_eyebrows1 =
        function() {
            this.initialize(h.sp_027_op_10th_fumika_eyebrows1)
        }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 133, 54);
    (b.fumika_eyebrows2 = function() {
        this.initialize(h.sp_027_op_10th_fumika_eyebrows2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 132, 54);
    (b.fumika_face = function() {
        this.initialize(h.sp_027_op_10th_fumika_face)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 179, 188);
    (b.fumika_footL1 = function() {
        this.initialize(h.sp_027_op_10th_fumika_footL1)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 182, 286);
    (b.fumika_footL2 = function() {
        this.initialize(h.sp_027_op_10th_fumika_footL2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 117, 84);
    (b.fumika_footL3 = function() {
        this.initialize(h.sp_027_op_10th_fumika_footL3)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 86, 131);
    (b.fumika_footR = function() {
        this.initialize(h.sp_027_op_10th_fumika_footR)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 164, 759);
    (b.fumika_hair0png =
        function() {
            this.initialize(h.sp_027_op_10th_fumika_hair0png)
        }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 30, 91);
    (b.fumika_hair1 = function() {
        this.initialize(h.sp_027_op_10th_fumika_hair1)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 119, 239);
    (b.fumika_hair10 = function() {
        this.initialize(h.sp_027_op_10th_fumika_hair10)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 108, 156);
    (b.fumika_hair2 = function() {
        this.initialize(h.sp_027_op_10th_fumika_hair2)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 52, 149);
    (b.fumika_hair3 = function() {
        this.initialize(h.sp_027_op_10th_fumika_hair3)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 53, 215);
    (b.fumika_hair4 = function() {
        this.initialize(h.sp_027_op_10th_fumika_hair4)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 337, 186);
    (b.fumika_hair5_1 = function() {
        this.initialize(h.sp_027_op_10th_fumika_hair5_1)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 114, 332);
    (b.fumika_hair5_2 =
        function() {
            this.initialize(h.sp_027_op_10th_fumika_hair5_2)
        }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 153, 229);
    (b.fumika_hair6 = function() {
        this.initialize(h.sp_027_op_10th_fumika_hair6)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 217, 219);
    (b.fumika_hair7 = function() {
        this.initialize(h.sp_027_op_10th_fumika_hair7)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 20, 112);
    (b.fumika_hair8 = function() {
        this.initialize(h.sp_027_op_10th_fumika_hair8)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 243, 181);
    (b.fumika_hair9 = function() {
        this.initialize(h.sp_027_op_10th_fumika_hair9)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 126, 189);
    (b.fumika_hair_back1 = function() {
        this.initialize(h.sp_027_op_10th_fumika_hair_back1)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 235, 411);
    (b.fumika_hair_back2 = function() {
        this.initialize(h.sp_027_op_10th_fumika_hair_back2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,
        0, 229, 250);
    (b.fumika_hair_back3 = function() {
        this.initialize(h.sp_027_op_10th_fumika_hair_back3)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 75, 152);
    (b.fumika_head_acc1 = function() {
        this.initialize(h.sp_027_op_10th_fumika_head_acc1)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 200, 147);
    (b.fumika_head_acc2 = function() {
        this.initialize(h.sp_027_op_10th_fumika_head_acc2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 59, 35);
    (b.fumika_head_acc3 = function() {
        this.initialize(h.sp_027_op_10th_fumika_head_acc3)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 63, 40);
    (b.fumika_head_acc4 = function() {
        this.initialize(h.sp_027_op_10th_fumika_head_acc4)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 150, 50);
    (b.fumika_head_acc5 = function() {
        this.initialize(h.sp_027_op_10th_fumika_head_acc5)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 125, 44);
    (b.fumika_head_acc6 = function() {
        this.initialize(h.sp_027_op_10th_fumika_head_acc6)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,
        0, 106, 84);
    (b.fumika_head_acc7 = function() {
        this.initialize(h.sp_027_op_10th_fumika_head_acc7)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 108, 60);
    (b.fumika_mouth1 = function() {
        this.initialize(h.sp_027_op_10th_fumika_mouth1)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 32, 27);
    (b.fumika_mouth2 = function() {
        this.initialize(h.sp_027_op_10th_fumika_mouth2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 34, 29);
    (b.fumika_skirtA = function() {
        this.initialize(h.sp_027_op_10th_fumika_skirtA)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 224, 151);
    (b.fumika_skirtB1 = function() {
        this.initialize(h.sp_027_op_10th_fumika_skirtB1)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 308, 319);
    (b.fumika_skirtB2 = function() {
        this.initialize(h.sp_027_op_10th_fumika_skirtB2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 187, 173);
    (b.fumika_skirtC1 = function() {
        this.initialize(h.sp_027_op_10th_fumika_skirtC1)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0,
        501, 483);
    (b.fumika_skirtC2 = function() {
        this.initialize(h.sp_027_op_10th_fumika_skirtC2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 344, 181);
    (b.fumika_skirtD1 = function() {
        this.initialize(h.sp_027_op_10th_fumika_skirtD1)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 241, 321);
    (b.fumika_skirtD2 = function() {
        this.initialize(h.sp_027_op_10th_fumika_skirtD2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 405, 408);
    (b.fumika_skirtD3 = function() {
        this.initialize(h.sp_027_op_10th_fumika_skirtD3)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 476, 492);
    (b.fumika_skirtE1 = function() {
        this.initialize(h.sp_027_op_10th_fumika_skirtE1)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 268, 224);
    (b.fumika_skirtE2 = function() {
        this.initialize(h.sp_027_op_10th_fumika_skirtE2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 174, 215);
    (b.fumika_skirtE3 = function() {
        this.initialize(h.sp_027_op_10th_fumika_skirtE3)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0,
        137, 114);
    (b.kira_m = function() {
        this.initialize(h.sp_027_op_10th_kira_m)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 60, 60);
    (b.logo = function() {
        this.initialize(h.sp_027_op_10th_logo)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 400, 314);
    (b.logo_cg = function() {
        this.initialize(h.sp_027_op_10th_logo_cg)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 448, 135);
    (b.logo_solo = function() {
        this.initialize(h.sp_027_op_10th_logo_solo)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 750, 450);
    (b.material_book_white_side = function() {
        this.initialize(h.sp_027_op_10th_material_book_white_side)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 40, 654);
    (b.material_book_white_under = function() {
        this.initialize(h.sp_027_op_10th_material_book_white_under)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 507, 19);
    (b.material_bookcover_back = function() {
        this.initialize(h.sp_027_op_10th_material_bookcover_back)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 494, 650);
    (b.material_bookcover_front = function() {
        this.initialize(h.sp_027_op_10th_material_bookcover_front)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 520, 660);
    (b.material_bookcover_front_op = function() {
        this.initialize(h.sp_027_op_10th_material_bookcover_front_op)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 520, 660);
    (b.material_bookcover_front_op_glow = function() {
        this.initialize(h.sp_027_op_10th_material_bookcover_front_op_glow)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 520, 660);
    (b.material_bookcover_side = function() {
        this.initialize(h.sp_027_op_10th_material_bookcover_side)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 34, 659);
    (b.of = function() {
        this.initialize(h.sp_027_op_10th_of)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 300, 300);
    (b.page_mov = function() {
        this.initialize(h.sp_027_op_10th_page_mov)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 640);
    (b.page_open01 =
        function() {
            this.initialize(h.sp_027_op_10th_page_open01)
        }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 520, 660);
    (b.page_open02 = function() {
        this.initialize(h.sp_027_op_10th_page_open02)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 520, 660);
    (b.page_open03 = function() {
        this.initialize(h.sp_027_op_10th_page_open03)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 520, 660);
    (b.page_open04 = function() {
        this.initialize(h.sp_027_op_10th_page_open04)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 520, 660);
    (b.page_open05 = function() {
        this.initialize(h.sp_027_op_10th_page_open05)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 520, 660);
    (b.page_open06 = function() {
        this.initialize(h.sp_027_op_10th_page_open06)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 503, 660);
    (b.page_open07 = function() {
        this.initialize(h.sp_027_op_10th_page_open07)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 430, 660);
    (b.page_open08 =
        function() {
            this.initialize(h.sp_027_op_10th_page_open08)
        }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 314, 660);
    (b.page_open09 = function() {
        this.initialize(h.sp_027_op_10th_page_open09)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 174, 660);
    (b.page_open10 = function() {
        this.initialize(h.sp_027_op_10th_page_open10)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 49, 660);
    (b.scene3_bg = function() {
        this.initialize(h.sp_027_op_10th_scene3_bg)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 800);
    (b.scroll_bg = function() {
        this.initialize(h.sp_027_op_10th_scroll_bg)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 960, 2319);
    (b.scroll_vertical = function() {
        this.initialize(h.sp_027_op_10th_scroll_vertical)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 384, 74);
    (b.scroll_vertical_w = function() {
        this.initialize(h.sp_027_op_10th_scroll_vertical_w)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 384, 74);
    (b.star1 =
        function() {
            this.initialize(h.sp_027_op_10th_star1)
        }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 120, 120);
    (b.star_rainbow = function() {
        this.initialize(h.sp_027_op_10th_star_rainbow)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 792, 774);
    (b.kira_m_gra = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.kira_m;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, 0, 30, 30);
    (b.memories = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.scroll_bg;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .25, .25);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.memories, new a.Rectangle(0, 0, 240, 579.8), null);
    (b.mc_count0_w = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.countdown_num_0_w;
        this.instance.parent = this;
        this.instance.setTransform(-91, -34, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.mc_count0_w, new a.Rectangle(-91, -34, 182, 68), null);
    (b.mc_count0 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.countdown_num_0;
        this.instance.parent = this;
        this.instance.setTransform(-91, -34, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.mc_count0, new a.Rectangle(-91, -34, 182, 68), null);
    (b.logo_solo_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.logo_solo;
        this.instance.parent = this;
        this.instance.setTransform(-151, -132, .25, .25);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.logo_solo_1, new a.Rectangle(-151, -132, 187.5, 112.5), null);
    (b.logo_cg_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.logo_cg;
        this.instance.parent = this;
        this.instance.setTransform(-90.7, -16.8, .4004, .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.logo_cg_1, new a.Rectangle(-90.7, -16.8, 179.4, 54), null);
    (b.countdown_text_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.countdown_text;
        this.instance.parent = this;
        this.instance.setTransform(-80,
            -19.5, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.countdown_text_1, new a.Rectangle(-80, -19.5, 172, 39), null);
    (b.countdown_num_1_w_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.countdown_num_1_w;
        this.instance.parent = this;
        this.instance.setTransform(-91, -34, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.countdown_num_1_w_1, new a.Rectangle(-91, -34, 182, 68), null);
    (b.countdown_num_1_1 = function(c, e, d) {
        this.initialize(c,
            e, d, {});
        this.instance = new b.countdown_num_1;
        this.instance.parent = this;
        this.instance.setTransform(-91, -34, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.countdown_num_1_1, new a.Rectangle(-91, -34, 182, 68), null);
    (b.star_inner = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.star_rainbow;
        this.instance.parent = this;
        this.instance.setTransform(-198, -193.5, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.star_inner, new a.Rectangle(-198,
        -193.5, 396, 387), null);
    (b.spread_flower_circle_pink = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["rgba(255,79,156,0.2)", "#FF4194"], [0, 1], 0, 0, 0, 0, 0, 47.8).s().p("AlPFQQiLiLAAjFQAAjECLiLQCLiLDEAAQDFAACLCLQCLCLAADEQAADFiLCLQiLCLjFAAQjEAAiLiLg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.spread_flower_circle_pink, new a.Rectangle(-47.5, -47.5, 95, 95), null);
    (b.scene3_bg_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.scene3_bg;
        this.instance.parent = this;
        this.instance.setTransform(-120, -200, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.scene3_bg_1, new a.Rectangle(-120, -200, 240, 400), null);
    (b.powder_paper_core_inner_color4 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_0 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(5));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFCC66").s().p("AgXgFIAWgZIAZAuIgFAPg");
        this.shape.setTransform(2.425, 3.05);
        this.shape_1 =
            new a.Shape;
        this.shape_1.graphics.f("#84FFFF").s().p("AgXgFIAWgZIAZAuIgFAPg");
        this.shape_1.setTransform(2.425, 3.05);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#FFC4FF").s().p("AgXgFIAWgZIAZAuIgFAPg");
        this.shape_2.setTransform(2.425, 3.05);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("#FFFF8D").s().p("AgXgFIAWgZIAZAuIgFAPg");
        this.shape_3.setTransform(2.425, 3.05);
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.f("#B2FF93").s().p("AgXgFIAWgZIAZAuIgFAPg");
        this.shape_4.setTransform(2.425, 3.05);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).to({
            state: [{
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_3
            }]
        }, 1).to({
            state: [{
                t: this.shape_4
            }]
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, 0, 4.9, 6.1);
    (b.powder_paper_core_inner_color3 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_0 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(5));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFCC66").s().p("AgXAYIAagzIAVAUIgIAjg");
        this.shape.setTransform(2.4, 2.775);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#84FFFF").s().p("AgXAYIAagzIAVAUIgIAjg");
        this.shape_1.setTransform(2.4, 2.775);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#FFC4FF").s().p("AgXAYIAagzIAVAUIgIAjg");
        this.shape_2.setTransform(2.4, 2.775);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("#FFFF8D").s().p("AgXAYIAagzIAVAUIgIAjg");
        this.shape_3.setTransform(2.4, 2.775);
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.f("#B2FF93").s().p("AgXAYIAagzIAVAUIgIAjg");
        this.shape_4.setTransform(2.4, 2.775);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).to({
            state: [{
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_3
            }]
        }, 1).to({
            state: [{
                t: this.shape_4
            }]
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, 0, 4.8, 5.6);
    (b.powder_paper_core_inner_color2 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_0 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(5));
        this.shape =
            new a.Shape;
        this.shape.graphics.f("#FFCC66").s().p("AgQgdIAeAMIADAhIgSAOg");
        this.shape.setTransform(1.725, 2.95);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#84FFFF").s().p("AgQgdIAeAMIADAhIgSAOg");
        this.shape_1.setTransform(1.725, 2.95);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#FFC4FF").s().p("AgQgdIAeAMIADAhIgSAOg");
        this.shape_2.setTransform(1.725, 2.95);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("#FFFF8D").s().p("AgQgdIAeAMIADAhIgSAOg");
        this.shape_3.setTransform(1.725, 2.95);
        this.shape_4 =
            new a.Shape;
        this.shape_4.graphics.f("#B2FF93").s().p("AgQgdIAeAMIADAhIgSAOg");
        this.shape_4.setTransform(1.725, 2.95);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).to({
            state: [{
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_3
            }]
        }, 1).to({
            state: [{
                t: this.shape_4
            }]
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, 0, 3.5, 5.9);
    (b.powder_paper_core_inner_color1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_0 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(5));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFCC66").s().p("AgYAOIAAguIArAeIAFAjg");
        this.shape.setTransform(2.45, 3.275);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#84FFFF").s().p("AgYAOIAAguIArAeIAFAjg");
        this.shape_1.setTransform(2.45, 3.275);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#FFC4FF").s().p("AgYAOIAAguIArAeIAFAjg");
        this.shape_2.setTransform(2.45, 3.275);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("#FFFF8D").s().p("AgYAOIAAguIArAeIAFAjg");
        this.shape_3.setTransform(2.45, 3.275);
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.f("#B2FF93").s().p("AgYAOIAAguIArAeIAFAjg");
        this.shape_4.setTransform(2.45, 3.275);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).to({
            state: [{
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_3
            }]
        }, 1).to({
            state: [{
                t: this.shape_4
            }]
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, 0, 4.9, 6.6);
    (b.pointGlitter2 = function(c, e, d) {
        this.initialize(c,
            e, d, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("AlaAAIFalaIFaFaIlaFag");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-34.6, -34.6, 69.30000000000001, 69.30000000000001);
    (b.parts_particle1_3 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("Ag9gOIBLgvIAwBLIhMAwg");
        this.shape.setTransform(-.25, .525);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#FFFFFF").s().p("AgVgvIA8AAIgQBfIg9AAg");
        this.shape_1.setTransform(-.1, .8);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-6.4, -5.7, 12.4, 12.5);
    (b.of_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.of;
        this.instance.parent = this;
        this.instance.setTransform(-75, -75, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.of_1, new a.Rectangle(-75, -75, 150, 150), null);
    (b.kira_mc = function(c,
        e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.eff_star_a;
        this.instance.parent = this;
        this.instance.setTransform(-43, -28.5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.kira_mc, new a.Rectangle(-43, -28.5, 87, 87), null);
    (b.guide_parts_particle_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_0 = function() {
            this.visible = 0
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("Ag5A6IAAhzIBzAAIAABzg");
        this.shape.setTransform(.575, -.225);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f().s("#6600FF").ss(1, 1, 1).p("ArJN9QB4gDCIhCQEPiGBOk+QAgiAA8kbQA6j/BEibQBbjQCFhrQCbh+DhgC");
        this.shape_1.setTransform(71.375, -89.3);
        this.timeline.addTween(a.Tween.get(this.shape_1).wait(1))
    }).prototype = g(b.guide_parts_particle_1, new a.Rectangle(-5.2, -179.6, 149, 185.2), null);
    (b.grip = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FF0000").s().p("AkkAAIEkkkIElEkIklElg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.grip, new a.Rectangle(-29.3, -29.3, 58.7, 58.7), null);
    (b.flower_pink4 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FE8BC5").s().p("AgXA3QgOgGAIgTQAGgOANgMQgOABgRgGQgTgIAGgOQAGgOATAIQAQAIAKALQgBgOAGgRQAJgTANAGQAOAHgIASQgHAQgMAKQAOgBARAGQATAJgGANQgGAOgTgIQgQgHgKgMQABAOgGARQgHAOgJAAIgGgBg");
        this.shape.setTransform(.0156, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-5.6, -5.6, 11.3, 11.3);
    (b.flower_pink3 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FF99CC").s().p("AgXA3QgOgGAIgTQAGgOANgMQgOABgRgGQgTgIAGgOQAGgOATAIQAQAIAKALQgBgOAGgRQAJgTANAGQAOAHgIASQgHAQgMAKQAOgBARAGQATAJgGANQgGAOgTgIQgQgHgKgMQABAOgGARQgHAOgJAAIgGgBg");
        this.shape.setTransform(.0156, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-5.6, -5.6, 11.3, 11.3);
    (b.flower_pink2 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FF74BA").s().p("AgXA3QgOgGAIgTQAGgOANgMQgOABgRgGQgTgIAGgOQAGgOATAIQAQAIAKALQgBgOAGgRQAJgTANAGQAOAHgIASQgHAQgMAKQAOgBARAGQATAJgGANQgGAOgTgIQgQgHgKgMQABAOgGARQgHAOgJAAIgGgBg");
        this.shape.setTransform(.0156, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-5.6,
        -5.6, 11.3, 11.3);
    (b.flower_pink1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFA9E9").s().p("AgCBHQgJgcADgZQgTASgbAJQggAKgIgXQgIgYAhgKQAbgJAZADQgRgRgKgdQgKggAXgIQAYgIAKAhQAJAbgDAaQAQgRAegKQAggLAIAXQAIAYghAKQgbAJgagDQASARAJAdQAMAggYAIQgFABgFAAQgQAAgIgZg");
        this.shape.setTransform(.017, -.0159);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-9.6, -9.6, 19.299999999999997, 19.299999999999997);
    (b.flare_white = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["#FFFFFF", "rgba(255,255,255,0)", "rgba(255,255,255,0)"], [.392, 1, 1], 0, 0, 0, 0, 0, 130.2).s().p("AuRORQl6l6AAoXQAAoWF6l7QF7l6IWAAQIXAAF6F6QF7F7AAIWQAAIXl7F6Ql6F7oXAAQoWAAl7l7g");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.flare_white, new a.Rectangle(-129.2, -129.2, 258.4, 258.4), null);
    (b.Feather02_blur_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.Feather02_blur;
        this.instance.parent = this;
        this.instance.setTransform(-122.25, -107.75, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.Feather02_blur_1, new a.Rectangle(-122.2, -107.7, 162.5, 177), null);
    (b.Feather02_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.Feather02;
        this.instance.parent = this;
        this.instance.setTransform(-296.5, -273);
        this.timeline.addTween(a.Tween.get(this.instance).wait(2).to({
            skewY: 55,
            x: -170.05,
            y: -515.85
        }, 0).wait(2).to({
                skewY: 114.0001,
                x: 120.55,
                y: -543.85
            },
            0).wait(2).to({
            skewY: -40.0011,
            x: -227,
            y: -82.55
        }, 0).wait(2))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-296.5, -543.8, 417.1, 820.3);
    (b.Feather01_blur_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.Feather01_blur;
        this.instance.parent = this;
        this.instance.setTransform(-66, -52, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.Feather01_blur_1, new a.Rectangle(-66, -52, 132, 132.5), null);
    (b.Feather01_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.Feather01;
        this.instance.parent = this;
        this.instance.setTransform(-132, -132.5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.Feather01_1, new a.Rectangle(-132, -132.5, 264, 265), null);
    (b.effect_001 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.circre_rainbaw_small;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.effect_001, new a.Rectangle(0, 0, 160, 160),
        null);
    (b.efa_\u8449\u3063\u30713_p = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#00CCFF").ss(1, 1, 1).p("EgkfgAzQAOgHAQgHQB4gyGNhCQEjgwGfgPQJVgWJ7A+QA2AGCvAqQBtAaFABOQLeCsMaCC");
        this.shape.setTransform(3.0125, .0119);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#000099").s().p("AhzgIICfhIIATAqIA1B3g");
        this.shape_1.setTransform(-236.875, -1.375);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }).prototype = g(b.efa_\u8449\u3063\u30713_p, new a.Rectangle(-248.5, -26, 486.1, 52.1), null);
    (b.efa_\u8449\u3063\u30712_p = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#00CCFF").ss(1, 1, 1).p("EghjADvQAfgUA7gZQB4gyCTgbQHVhWKMDgQKNDgNUkqQA6gUA5gUQMBkRGsja");
        this.shape.setTransform(0,
            -.0061);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.efa_\u8449\u3063\u30712_p, new a.Rectangle(-215.7, -36.1, 431.5, 72.2), null);
    (b.efa_\u8449\u3063\u30711_p = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#000099").s().p("AgOAoQgQgGgIgQQgHgQAGgQQAGgRAQgHQAQgHAQAGQAQAGAIAQQAHAQgGAQQgGAQgQAIQgJAEgJAAQgGAAgIgDg");
        this.shape.setTransform(-214.675,
            23.9199);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f().s("#00CCFF").ss(1, 1, 1).p("EghjADvQAfgUA7gZQB4gyCTgbQHVhWKMDgQKNDgNUkqQA6gUA5gUQMBkRGsja");
        this.shape_1.setTransform(0, -.0061);
        this.timeline.addTween(a.Tween.get(this.shape_1).wait(1))
    }).prototype = g(b.efa_\u8449\u3063\u30711_p, new a.Rectangle(-218.9, -36.1, 434.70000000000005, 72.2), null);
    (b.drop2 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#456CC4").ss(1,
            1, 1).p("AhOAiIAbgjQAhgjAjgBQAwAAAMAhQALAegnALQgKABgmgHQghgHguAKg");
        this.shape.setTransform(.004, .0059, 1, 1, 0, 0, 180);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#F0FAFF").s().p("AABAfQghgHguAKIAbgjQAhgjAjgBQAwAAAMAhQALAegnALIgDABQgMAAghgHg");
        this.shape_1.setTransform(.004, .0059, 1, 1, 0, 0, 180);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-8.9, -4.7, 17.8, 9.5);
    (b.drop1 = function(c, e, d) {
        this.initialize(c,
            e, d, {});
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#456CC4").ss(1, 1, 1).p("AA4hDQAgAYgfAmQgJAHgrASQglAQgmAqQgDgZAFgdQAJg5AjgZQAvghAhAYg");
        this.shape.setTransform(1.2129, 1.7575, 1, 1, 0, 0, 180);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#F0FAFF").s().p("AhEAYQAJg5AjgZQAvghAhAYQAgAYgfAmQgJAHgrASQglAQgmAqQgDgZAFgdg");
        this.shape_1.setTransform(1.2129, 1.7575, 1, 1, 0, 0, 180);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-7, -7, 16.5, 17.6);
    (b.cursor_inner = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("Al7lIIL3AAIl8KRg");
        this.shape.setTransform(-.025, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.cursor_inner, new a.Rectangle(-38, -32.8, 76, 65.69999999999999), null);
    (b.btn = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
        this.shape.setTransform(120, 160);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.btn, new a.Rectangle(0, 0, 240, 320), null);
    (b.bg_white = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("A0TakMAAAg1HMAonAAAMAAAA1Hg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.bg_white, new a.Rectangle(-130, -170, 260, 340), null);
    (b.bg_black = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("A0TakMAAAg1HMAonAAAMAAAA1Hg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.bg_black, new a.Rectangle(-130, -170, 260, 340), null);
    (b.asset_efc_flashWhite2 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["#FFFFFF", "rgba(255,255,255,0)", "rgba(255,255,255,0)"], [.392, 1, 1], 0, 0, 0, 0, 0, 130.2).s().p("AuRORQl6l6AAoXQAAoWF6l7QF7l6IWAAQIXAAF6F6QF7F7AAIWQAAIXl7F6Ql6F7oXAAQoWAAl7l7g");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.asset_efc_flashWhite2,
        new a.Rectangle(-129.2, -129.2, 258.4, 258.4), null);
    (b.anniversary_text_w = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.scroll_vertical_w;
        this.instance.parent = this;
        this.instance.setTransform(-192, -37);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.anniversary_text_w, new a.Rectangle(-192, -37, 384, 74), null);
    (b.anniversary_text = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.scroll_vertical;
        this.instance.parent = this;
        this.instance.setTransform(-192,
            -37);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.anniversary_text, new a.Rectangle(-192, -37, 384, 74), null);
    (b.asset_efc_ring = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#FFFFFF").ss(1, 1, 1).p("AHznyQDODPAAEjQAAEkjODPQjPDOkkAAQkjAAjPjOQjOjPAAkkQAAkjDOjPQDPjOEjAAQEkAADPDOg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.asset_efc_ring, new a.Rectangle(-71.5, -71.5, 143, 143), null);
    (b.asset_efc_flashLine_p =
        function(c, e, d) {
            this.initialize(c, e, d, {});
            this.shape = new a.Shape;
            this.shape.graphics.lf(["#FFFFFF", "rgba(255,255,255,0)"], [0, 1], -3.8, .1, 31.6, .1).s().p("AlVBRIAGikIKmhcIAAFfg");
            this.shape.setTransform(47.9, 0);
            this.timeline.addTween(a.Tween.get(this.shape).wait(1))
        }).prototype = g(b.asset_efc_flashLine_p, new a.Rectangle(13.7, -17.6, 68.5, 35.3), null);
    (b.asset_efc_flashBlade = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("A3IAAIXIgcIXJAcI3JAdg");
        this.shape.setTransform(0,
            .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.asset_efc_flashBlade, new a.Rectangle(-148.1, -2.9, 296.29999999999995, 5.9), null);
    (b.arrow_inner = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.702)").s().p("AAjA0IhMAAIAAgfIAoAAIg0gyIAWgWIA1A2IAAgqIAfAAIAABIQACATgRAAIgDAAg");
        this.shape.setTransform(-4.7448, -4.7198);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.arrow_inner, new a.Rectangle(-10.1,
        -9.9, 10.7, 10.4), null);
    (b.spread_star_inner = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.star1;
        this.instance.parent = this;
        this.instance.setTransform(-30, -33, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.spread_star_inner, new a.Rectangle(-30, -33, 60, 60), null);
    (b.guideline = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_0 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1))
    }).prototype = g(b.guideline, new a.Rectangle(-1,
        -356, 2, 357), null);
    (b.shock = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#FFCC00").ss(.5, 1, 1).p("AgJAGIAciWIhpBvIgbkKIg4EaIhbiVIBFDUQA6AJAWAYQAWAXAHAZQAHAYgCAfICGB2Igzh/ICcgCIiWhEID5iRg");
        this.shape.setTransform(11.625, -8.3);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.rf(["#FFD200", "rgba(255,198,88,0.498)"], [0, 1], -18.7, 10.2, 0, -18.7, 10.2, 24.1).s().p("AhNC1QACgegHgZQgHgYgWgYQgWgXg6gKIhFjTIBbCVIA4kaIAbELIBphwIgcCWIEOgwIj5CRICWBEIicABIAzCAg");
        this.shape_1.setTransform(11.625,
            -8.3);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-15.5, -39.2, 54.3, 61.900000000000006);
    (b.gr_ring = function(c, e, d) {
        null == d && (d = !1);
        this.initialize(c, e, d, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["rgba(255,255,255,0)", "rgba(255,255,255,0.788)", "#FFFFFF"], [.471, .722, 1], 0, 0, 0, 0, 0, 129.8).s().p("AuIOJQl3l3AAoSQAAoRF3l3QF3l3IRAAQISAAF3F3QF3F3AAIRQAAISl3F3Ql3F3oSAAQoRAAl3l3g");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        g(b.gr_ring, new a.Rectangle(-128, -128, 256, 256), null);
    (b.gr_bubble_parts = function(c, e, d) {
        null == d && (d = !1);
        this.initialize(c, e, d, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["rgba(252,194,242,0)", "rgba(255,255,255,0.6)", "rgba(255,196,238,0)"], [.251, .855, .882], 0, 0, 0, 0, 0, 70.4).s().p("AnuHvQjNjMAAkjQAAkiDNjMQDMjNEiAAQEjAADMDNQDNDMAAEiQAAEjjNDMQjMDNkjAAQkiAAjMjNg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.gr_bubble_parts, new a.Rectangle(-70, -70, 140, 140), null);
    (b.gr_lux3 =
        function(c, e, d) {
            null == d && (d = !1);
            this.initialize(c, e, d, {});
            this.frame_0 = function() {};
            this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(6));
            this.shape = new a.Shape;
            this.shape.graphics.rf(["#FFFFFF", "rgba(234,156,255,0.6)", "rgba(255,0,224,0)", "rgba(102,0,255,0)"], [.012, .086, 1, 1], 0, 0, 0, 0, 0, 18.7).s().p("AgMC4QhEgFgxgxQg2g2AAhMQAAg6AhguQAJgNAMgMQAxgxBEgFIAMAAQBMAAA2A2QA2A2AABLQAABMg2A2Qg2A2hMAAIgMAAg");
            this.shape_1 = new a.Shape;
            this.shape_1.graphics.rf(["#FFFFFF", "rgba(2,192,255,0.6)", "rgba(0,205,255,0)",
                "rgba(102,0,255,0)"
            ], [0, .086, 1, 1], 0, 0, 0, 0, 0, 9.3).s().p("AgFBcQgjgCgYgZQgbgbAAgmQAAgdAQgWIALgNQAYgZAjgCIAFAAQAmAAAbAbQAbAbAAAlQAAAmgbAbQgbAbgmAAIgFAAg");
            this.shape_1.setTransform(0, 0, 2, 2);
            this.shape_2 = new a.Shape;
            this.shape_2.graphics.rf(["#FFFFFF", "rgba(255,172,46,0.6)", "rgba(255,154,0,0)"], [0, .106, 1], 0, 0, 0, 0, 0, 8.6).s().p("AgFBcQgjgCgYgZQgbgbAAgmQAAgdAQgWIALgNQAYgZAjgCIAFAAQAmAAAbAbQAbAbAAAlQAAAmgbAbQgbAbgmAAIgFAAg");
            this.shape_2.setTransform(0, 0, 2.0245, 2.0245);
            this.timeline.addTween(a.Tween.get({}).to({
                state: [{
                    t: this.shape
                }]
            }).to({
                    state: [{
                        t: this.shape_1
                    }]
                },
                1).to({
                state: [{
                    t: this.shape_2
                }]
            }, 1).to({
                state: [{
                    t: this.shape
                }]
            }, 1).to({
                state: [{
                    t: this.shape_1
                }]
            }, 1).to({
                state: [{
                    t: this.shape_2
                }]
            }, 1).wait(1))
        }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-18.6, -18.6, 37.3, 37.3);
    (b.gr_lux = function(c, e, d) {
        null == d && (d = !1);
        this.initialize(c, e, d, {});
        this.frame_0 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(6));
        this.shape = new a.Shape;
        this.shape.graphics.rf(["#FFFFFF", "rgba(156,241,255,0.6)", "rgba(0,247,255,0)", "rgba(102,0,255,0)"],
            [.059, .086, 1, 1], 0, 0, 0, 0, 0, 9.3).s().p("AgFBcQgjgCgYgZQgbgbAAgmQAAgdAQgWIALgNQAYgZAjgCIAFAAQAmAAAbAbQAbAbAAAlQAAAmgbAbQgbAbgmAAIgFAAg");
        this.shape.setTransform(0, 0, 2, 2);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.rf(["#FFFFFF", "rgba(186,255,2,0.6)", "rgba(187,255,0,0)"], [0, .086, .784], 0, 0, 0, 0, 0, 9.3).s().p("AgFBcQgjgCgYgZQgbgbAAgmQAAgdAQgWIALgNQAYgZAjgCIAFAAQAmAAAbAbQAbAbAAAlQAAAmgbAbQgbAbgmAAIgFAAg");
        this.shape_1.setTransform(0, 0, 2, 2);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.rf(["#FFFFFF", "rgba(255,46,115,0.6)",
            "rgba(255,28,0,0)"
        ], [0, .106, .867], 0, 0, 0, 0, 0, 9.3).s().p("AgFBcQgjgCgYgZQgbgbAAgmQAAgdAQgWIALgNQAYgZAjgCIAFAAQAmAAAbAbQAbAbAAAlQAAAmgbAbQgbAbgmAAIgFAAg");
        this.shape_2.setTransform(0, 0, 1.663, 1.663);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).to({
            state: [{
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape
            }]
        }, 1).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).to({
            state: [{
                t: this.shape_2
            }]
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-18.4,
        -18.4, 36.8, 36.8);
    (b.chihiro_face_close_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.chihiro_face_close;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.chihiro_face_close_1, new a.Rectangle(0, 0, 70, 35), null);
    (b.character1_base = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.instance = new b.chihiro_base;
        this.instance.parent = this;
        this.instance.setTransform(-70, -290, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.character1_base, new a.Rectangle(-70, -290, 140, 300), null);
    (b.fumika_skirtE3_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_skirtE3;
        this.instance.parent = this;
        this.instance.setTransform(-4, -65);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_skirtE3_1, new a.Rectangle(-4, -65, 137, 114), null);
    (b.fumika_skirtE2_1 =
        function(c, e, d) {
            this.initialize(c, e, d, {});
            this.instance = new b.fumika_skirtE2;
            this.instance.parent = this;
            this.instance.setTransform(-48, -155);
            this.timeline.addTween(a.Tween.get(this.instance).wait(1))
        }).prototype = g(b.fumika_skirtE2_1, new a.Rectangle(-48, -155, 174, 215), null);
    (b.fumika_skirtE1_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_skirtE1;
        this.instance.parent = this;
        this.instance.setTransform(-77, -107);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.fumika_skirtE1_1, new a.Rectangle(-77, -107, 268, 224), null);
    (b.fumika_skirtD1_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_skirtD1;
        this.instance.parent = this;
        this.instance.setTransform(0, -54);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_skirtD1_1, new a.Rectangle(0, -54, 241, 321), null);
    (b.fumika_skirtC2_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_skirtC2;
        this.instance.parent = this;
        this.instance.setTransform(-344,
            -181);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_skirtC2_1, new a.Rectangle(-344, -181, 344, 181), null);
    (b.fumika_skirtC1_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_skirtC1;
        this.instance.parent = this;
        this.instance.setTransform(-164, 0);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_skirtC1_1, new a.Rectangle(-164, 0, 501, 483), null);
    (b.fumika_skirtB2_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance =
            new b.fumika_skirtB2;
        this.instance.parent = this;
        this.instance.setTransform(0, 2);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_skirtB2_1, new a.Rectangle(0, 2, 187, 173), null);
    (b.fumika_skirtB1_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_skirtB1;
        this.instance.parent = this;
        this.instance.setTransform(3.95, -31.7);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_skirtB1_1, new a.Rectangle(4, -31.7, 308, 319), null);
    (b.fumika_mouth2_1 =
        function(c, e, d) {
            this.initialize(c, e, d, {});
            this.instance = new b.fumika_mouth2;
            this.instance.parent = this;
            this.instance.setTransform(-16.65, -16.1);
            this.timeline.addTween(a.Tween.get(this.instance).wait(1))
        }).prototype = g(b.fumika_mouth2_1, new a.Rectangle(-16.6, -16.1, 34, 29), null);
    (b.fumika_mouth1_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_mouth1;
        this.instance.parent = this;
        this.instance.setTransform(-16, -13.5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.fumika_mouth1_1, new a.Rectangle(-16, -13.5, 32, 27), null);
    (b.fumika_hair10_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_hair10;
        this.instance.parent = this;
        this.instance.setTransform(0, -10);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_hair10_1, new a.Rectangle(0, -10, 108, 156), null);
    (b.fumika_hair9_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_hair9;
        this.instance.parent = this;
        this.instance.setTransform(-3, -13);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.fumika_hair9_1, new a.Rectangle(-3, -13, 126, 189), null);
    (b.fumika_hair8_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_hair8;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_hair8_1, new a.Rectangle(0, 0, 243, 181), null);
    (b.fumika_hair7_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_hair7;
        this.instance.parent = this;
        this.instance.setTransform(0, -4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.fumika_hair7_1, new a.Rectangle(0, -4, 20, 112), null);
    (b.fumika_hair6_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_hair6;
        this.instance.parent = this;
        this.instance.setTransform(-41, -64);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_hair6_1, new a.Rectangle(-41, -64, 217, 219), null);
    (b.fumika_hair5_2_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_hair5_2;
        this.instance.parent = this;
        this.instance.setTransform(-18.05, -39.05);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_hair5_2_1, new a.Rectangle(-18, -39, 153, 229), null);
    (b.fumika_hair5_1_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_hair5_1;
        this.instance.parent = this;
        this.instance.setTransform(0, -66);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_hair5_1_1, new a.Rectangle(0, -66, 114, 332), null);
    (b.fumika_hair4_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_hair4;
        this.instance.parent = this;
        this.instance.setTransform(0, -28);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_hair4_1, new a.Rectangle(0, -28, 337, 186), null);
    (b.fumika_hair3_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_hair3;
        this.instance.parent = this;
        this.instance.setTransform(0, -20);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_hair3_1, new a.Rectangle(0, -20, 53, 215), null);
    (b.fumika_hair2_1 = function(c, e, d) {
        this.initialize(c,
            e, d, {});
        this.instance = new b.fumika_hair2;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_hair2_1, new a.Rectangle(0, 0, 52, 149), null);
    (b.fumika_hair1_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_hair1;
        this.instance.parent = this;
        this.instance.setTransform(0, -10);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_hair1_1, new a.Rectangle(0, -10, 119, 239), null);
    (b.fumika_hair0 = function(c, e, d) {
        this.initialize(c,
            e, d, {});
        this.instance = new b.fumika_hair0png;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_hair0, new a.Rectangle(0, 0, 30, 91), null);
    (b.fumika_face_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_face;
        this.instance.parent = this;
        this.instance.setTransform(3, -20);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_face_1, new a.Rectangle(3, -20, 179, 188), null);
    (b.fumika_eyebrows2_1 = function(c,
        e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_eyebrows2;
        this.instance.parent = this;
        this.instance.setTransform(-65.9, -26.3);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_eyebrows2_1, new a.Rectangle(-65.9, -26.3, 132, 54), null);
    (b.fumika_eyebrows1_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_eyebrows1;
        this.instance.parent = this;
        this.instance.setTransform(-66.5, -27);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.fumika_eyebrows1_1, new a.Rectangle(-66.5, -27, 133, 54), null);
    (b.fumika_eye2_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_eye2;
        this.instance.parent = this;
        this.instance.setTransform(-63.05, -37.15);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_eye2_1, new a.Rectangle(-63, -37.1, 125, 70), null);
    (b.fumika_eye1_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_eye1;
        this.instance.parent = this;
        this.instance.setTransform(-63.7,
            -38.45);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_eye1_1, new a.Rectangle(-63.7, -38.4, 130, 73), null);
    (b.fumika_eye_close_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_eye_close;
        this.instance.parent = this;
        this.instance.setTransform(-63.45, -18.35);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_eye_close_1, new a.Rectangle(-63.4, -18.3, 127, 50), null);
    (b.fumika_cheek2_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_cheek2;
        this.instance.parent = this;
        this.instance.setTransform(-81, -50.5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_cheek2_1, new a.Rectangle(-81, -50.5, 162, 101), null);
    (b.fumika_cheek1_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_cheek1;
        this.instance.parent = this;
        this.instance.setTransform(-81, -50.5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_cheek1_1, new a.Rectangle(-81,
        -50.5, 162, 103), null);
    (b.fumika_head_acc7_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_head_acc7;
        this.instance.parent = this;
        this.instance.setTransform(0, -16);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_head_acc7_1, new a.Rectangle(0, -16, 108, 60), null);
    (b.fumika_head_acc6_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_head_acc6;
        this.instance.parent = this;
        this.instance.setTransform(-2, -6);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.fumika_head_acc6_1, new a.Rectangle(-2, -6, 106, 84), null);
    (b.fumika_head_acc5_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_head_acc5;
        this.instance.parent = this;
        this.instance.setTransform(-36, 2);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_head_acc5_1, new a.Rectangle(-36, 2, 125, 44), null);
    (b.fumika_head_acc4_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_head_acc4;
        this.instance.parent = this;
        this.instance.setTransform(-16,
            -26);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_head_acc4_1, new a.Rectangle(-16, -26, 150, 50), null);
    (b.fumika_head_acc3_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_head_acc3;
        this.instance.parent = this;
        this.instance.setTransform(2, 1);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_head_acc3_1, new a.Rectangle(2, 1, 63, 40), null);
    (b.fumika_head_acc2_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance =
            new b.fumika_head_acc2;
        this.instance.parent = this;
        this.instance.setTransform(2, 2);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_head_acc2_1, new a.Rectangle(2, 2, 59, 35), null);
    (b.fumika_head_acc1_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_head_acc1;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_head_acc1_1, new a.Rectangle(0, 0, 200, 147), null);
    (b.fumika_hair_back3_1 = function(c, e, d) {
        this.initialize(c,
            e, d, {});
        this.instance = new b.fumika_hair_back3;
        this.instance.parent = this;
        this.instance.setTransform(-32.9, -31.4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_hair_back3_1, new a.Rectangle(-32.9, -31.4, 75, 152), null);
    (b.fumika_hair_back2_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_hair_back2;
        this.instance.parent = this;
        this.instance.setTransform(-60, -88);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_hair_back2_1,
        new a.Rectangle(-60, -88, 229, 250), null);
    (b.fumika_hair_back1_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_hair_back1;
        this.instance.parent = this;
        this.instance.setTransform(-2, -156);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_hair_back1_1, new a.Rectangle(-2, -156, 235, 411), null);
    (b.fumika_footR_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_footR;
        this.instance.parent = this;
        this.instance.setTransform(0, -223);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.fumika_footR_1, new a.Rectangle(0, -223, 164, 759), null);
    (b.fumika_footL3_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_footL3;
        this.instance.parent = this;
        this.instance.setTransform(-5, -4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_footL3_1, new a.Rectangle(-5, -4, 86, 131), null);
    (b.fumika_body_acc3_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_body_acc3;
        this.instance.parent = this;
        this.instance.setTransform(0, 2);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.fumika_body_acc3_1, new a.Rectangle(0, 2, 24, 33), null);
    (b.fumika_body_acc2_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_body_acc2;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_body_acc2_1, new a.Rectangle(0, 0, 32, 30), null);
    (b.fumika_body_acc1_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_body_acc1;
        this.instance.parent = this;
        this.instance.setTransform(1, 0);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.fumika_body_acc1_1, new a.Rectangle(1, 0, 39, 18), null);
    (b.fumika_armR3_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_armR3;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_armR3_1, new a.Rectangle(0, 0, 85, 63), null);
    (b.fumika_armL5_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_armL5;
        this.instance.parent = this;
        this.instance.setTransform(-8, -4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.fumika_armL5_1, new a.Rectangle(-8, -4, 42, 33), null);
    (b.fumika_armL4_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_armL4;
        this.instance.parent = this;
        this.instance.setTransform(-6, 0);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.fumika_armL4_1, new a.Rectangle(-6, 0, 112, 53), null);
    (b.fumika_armL1_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_armL1;
        this.instance.parent = this;
        this.instance.setTransform(1.45, 2.55);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.fumika_armL1_1, new a.Rectangle(1.5, 2.6, 148, 125), null);
    (b.ef_fumika_kira2_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.ef_fumika_kira2;
        this.instance.parent = this;
        this.instance.setTransform(-449, -549);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.ef_fumika_kira2_1, new a.Rectangle(-449, -549, 898, 1098), null);
    (b.ef_fumika_kira1_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.ef_fumika_kira1;
        this.instance.parent = this;
        this.instance.setTransform(-428,
            -528.5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.ef_fumika_kira1_1, new a.Rectangle(-428, -528.5, 856, 1057), null);
    (b.bg_fumika_time_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.bg_fumika_time;
        this.instance.parent = this;
        this.instance.setTransform(-287, -94, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.bg_fumika_time_1, new a.Rectangle(-287, -94, 509.5, 396.5), null);
    (b.page_open_all = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_10 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(10).call(this.frame_10).wait(1));
        this.instance = new b.page_open01;
        this.instance.parent = this;
        this.instance.setTransform(0, -330);
        this.instance_1 = new b.page_open02;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, -330);
        this.instance_2 = new b.page_open03;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, -330);
        this.instance_3 = new b.page_open04;
        this.instance_3.parent = this;
        this.instance_3.setTransform(0,
            -330);
        this.instance_4 = new b.page_open05;
        this.instance_4.parent = this;
        this.instance_4.setTransform(0, -330);
        this.instance_5 = new b.page_open06;
        this.instance_5.parent = this;
        this.instance_5.setTransform(0, -330);
        this.instance_6 = new b.page_open07;
        this.instance_6.parent = this;
        this.instance_6.setTransform(0, -330);
        this.instance_7 = new b.page_open08;
        this.instance_7.parent = this;
        this.instance_7.setTransform(0, -330);
        this.instance_8 = new b.page_open09;
        this.instance_8.parent = this;
        this.instance_8.setTransform(0, -330);
        this.instance_9 = new b.page_open10;
        this.instance_9.parent = this;
        this.instance_9.setTransform(0, -330);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
                state: []
            },
            1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, -330, 520, 660);
    (b.page_mov_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.page_mov;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.page_mov_1, new a.Rectangle(0, 0, 480, 640), null);
    (b.page_close_all = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_10 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(10).call(this.frame_10).wait(1));
        this.instance =
            new b.page_open10;
        this.instance.parent = this;
        this.instance.setTransform(0, -330);
        this.instance_1 = new b.page_open09;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, -330);
        this.instance_2 = new b.page_open08;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, -330);
        this.instance_3 = new b.page_open07;
        this.instance_3.parent = this;
        this.instance_3.setTransform(0, -330);
        this.instance_4 = new b.page_open06;
        this.instance_4.parent = this;
        this.instance_4.setTransform(0, -330);
        this.instance_5 = new b.page_open05;
        this.instance_5.parent = this;
        this.instance_5.setTransform(0, -330);
        this.instance_6 = new b.page_open04;
        this.instance_6.parent = this;
        this.instance_6.setTransform(0, -330);
        this.instance_7 = new b.page_open03;
        this.instance_7.parent = this;
        this.instance_7.setTransform(0, -330);
        this.instance_8 = new b.page_open02;
        this.instance_8.parent = this;
        this.instance_8.setTransform(0, -330);
        this.instance_9 = new b.page_open01;
        this.instance_9.parent = this;
        this.instance_9.setTransform(0, -330);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
                state: [{
                    t: this.instance_1
                }]
            },
            1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: []
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, -330, 520, 660);
    (b.ef_book_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.ef_book;
        this.instance.parent = this;
        this.instance.setTransform(-240, -800);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.ef_book_1, new a.Rectangle(-240, -800, 480, 800), null);
    (b.countdown_star4_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.countdown_star4;
        this.instance.parent = this;
        this.instance.setTransform(-34, -10);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.countdown_star4_1, new a.Rectangle(-34, -10, 68, 136), null);
    (b.countdown_star3_1 = function(c, e, d) {
        this.initialize(c,
            e, d, {});
        this.instance = new b.countdown_star3;
        this.instance.parent = this;
        this.instance.setTransform(-25.5, -10);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.countdown_star3_1, new a.Rectangle(-25.5, -10, 51, 95), null);
    (b.countdown_star2_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.countdown_star2;
        this.instance.parent = this;
        this.instance.setTransform(-21.5, -10);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.countdown_star2_1, new a.Rectangle(-21.5,
        -10, 43, 95), null);
    (b.countdown_star1_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.countdown_star1;
        this.instance.parent = this;
        this.instance.setTransform(-34, -10);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.countdown_star1_1, new a.Rectangle(-34, -10, 68, 136), null);
    (b.bookcover_side = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.material_bookcover_side;
        this.instance.parent = this;
        this.instance.setTransform(0, -330);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.bookcover_side, new a.Rectangle(0, -330, 34, 659), null);
    (b.bookcover_front2_glow = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.material_bookcover_front_op_glow;
        this.instance.parent = this;
        this.instance.setTransform(-7, -325);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.bookcover_front2_glow, new a.Rectangle(-7, -325, 520, 660), null);
    (b.bookcover_front2 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.material_bookcover_front_op;
        this.instance.parent =
            this;
        this.instance.setTransform(-7, -325);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.bookcover_front2, new a.Rectangle(-7, -325, 520, 660), null);
    (b.bookcover_front1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.material_bookcover_front;
        this.instance.parent = this;
        this.instance.setTransform(-7, -325);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.bookcover_front1, new a.Rectangle(-7, -325, 520, 660), null);
    (b.bookcover_back = function(c,
        e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.material_bookcover_back;
        this.instance.parent = this;
        this.instance.setTransform(-7, -325);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.bookcover_back, new a.Rectangle(-7, -325, 494, 650), null);
    (b.book_white_under = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.material_book_white_under;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.book_white_under, new a.Rectangle(0,
        0, 507, 19), null);
    (b.book_white_side = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.material_book_white_side;
        this.instance.parent = this;
        this.instance.setTransform(0, -327);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.book_white_side, new a.Rectangle(0, -327, 40, 654), null);
    (b.bg_page = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.bg_pabe;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.bg_page, new a.Rectangle(0, 0, 240, 320), null);
    (b.bg_book_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.bg_book;
        this.instance.parent = this;
        this.instance.setTransform(-240, -320);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.bg_book_1, new a.Rectangle(-240, -320, 480, 640), null);
    (b.kira_m_mc_mov = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_0 = function() {};
        this.frame_29 = function() {
            this.gotoAndPlay(0)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));
        this.instance = new b.kira_m_gra;
        this.instance.parent = this;
        this.instance.setTransform(.2, 15.2, .5, .5, 0, 0, 0, 15.2, 15.2);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 45
        }, 2).to({
            scaleX: .3,
            scaleY: .3,
            rotation: 89.9825
        }, 6).wait(1).to({
            alpha: .0117
        }, 0).wait(21))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-21, -6.3, 42.4, 42.4);
    (b.star_sign_accentuator = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_0 = function() {};
        this.frame_1 = function() {};
        this.frame_2 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));
        this.instance = new b.star_inner;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(3))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-198, -193.5, 396, 387);
    (b.star_anim07 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.star_sign_accentuator;
        this.instance.parent = this;
        this.instance.setTransform(-12.35, -12.7, .1199, .1199, -19.0323);
        this.instance_1 = new b.star_inner;
        this.instance_1.parent = this;
        this.instance_1.setTransform(23.05, 36.55, .12, .12, 87.4997);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
                state: [{
                    t: this.instance
                }]
            },
            1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).wait(1));
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            rotation: 30.7579,
            x: 4.195,
            y: 10.3181
        }, 0).wait(1).to({
            rotation: 58.2811,
            x: 13.3408,
            y: 23.0422
        }, 0).wait(1).to({
            scaleX: .12,
            scaleY: .12,
            rotation: 67.8968,
            x: 16.5361,
            y: 27.4875
        }, 0).wait(1).to({
            rotation: 72.6655,
            x: 18.1207,
            y: 29.6921
        }, 0).wait(1).to({
            rotation: 75.5829,
            x: 19.0901,
            y: 31.0408
        }, 0).wait(1).to({
            rotation: 77.6067,
            x: 19.7626,
            y: 31.9764
        }, 0).wait(1).to({
            rotation: 79.1413,
            x: 20.2725,
            y: 32.6859
        }, 0).wait(1).to({
            rotation: 80.3881,
            x: 20.6869,
            y: 33.2623
        }, 0).wait(1).to({
            rotation: 81.4589,
            x: 21.0427,
            y: 33.7573
        }, 0).wait(1).to({
            rotation: 82.4205,
            x: 21.3622,
            y: 34.2019
        }, 0).wait(1).to({
            rotation: 83.3151,
            x: 21.6595,
            y: 34.6154
        }, 0).wait(1).to({
            rotation: 84.1704,
            x: 21.9437,
            y: 35.0109
        }, 0).wait(1).to({
            rotation: 85.0053,
            x: 22.2211,
            y: 35.3968
        }, 0).wait(1).to({
            rotation: 85.8327,
            x: 22.4961,
            y: 35.7794
        }, 0).wait(1).to({
            rotation: 86.662,
            x: 22.7716,
            y: 36.1627
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-42.3, -42.4, 89.9, 103.69999999999999);
    (b.star_anim06_copy = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.star_inner;
        this.instance.parent = this;
        this.instance.setTransform(-13.8, 15.1, .0599, .0599, -23.3403);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            scaleX: .06,
            scaleY: .06,
            rotation: 76.4065,
            x: -18.9284,
            y: 118.4118
        }, 0).wait(1).to({
                rotation: 86.7966,
                x: -19.4626,
                y: 129.1732
            },
            0).wait(1).to({
            rotation: 91.0762,
            x: -19.6826,
            y: 133.6058
        }, 0).wait(1).to({
            rotation: 94.2382,
            x: -19.8452,
            y: 136.8808
        }, 0).wait(1).to({
            rotation: 97.2498,
            x: -20,
            y: 140
        }, 0).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-33, -.2, 34.7, 153.5);
    (b.star_anim06 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.star_inner;
        this.instance.parent = this;
        this.instance.setTransform(-13.8, 15.1, .0599, .0599, -23.3403);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            scaleX: .06,
            scaleY: .06,
            rotation: 47.6416,
            x: -14.2709,
            y: 47.4153
        }, 0).wait(1).to({
            rotation: 72.3623,
            x: -14.4349,
            y: 58.6697
        }, 0).wait(1).to({
            rotation: 80.458,
            x: -14.4886,
            y: 62.3554
        }, 0).wait(1).to({
            rotation: 84.6067,
            x: -14.5161,
            y: 64.2441
        }, 0).wait(1).to({
            rotation: 87.254,
            x: -14.5337,
            y: 65.4493
        }, 0).wait(1).to({
            rotation: 89.1997,
            x: -14.5466,
            y: 66.3351
        }, 0).wait(1).to({
            rotation: 90.7856,
            x: -14.5571,
            y: 67.0571
        }, 0).wait(1).to({
            rotation: 92.1816,
            x: -14.5664,
            y: 67.6927
        }, 0).wait(1).to({
            rotation: 93.4811,
            x: -14.575,
            y: 68.2843
        }, 0).wait(1).to({
            rotation: 94.7387,
            x: -14.5833,
            y: 68.8568
        }, 0).wait(1).to({
            rotation: 95.9879,
            x: -14.5916,
            y: 69.4255
        }, 0).wait(1).to({
            rotation: 97.2498,
            x: -14.6,
            y: 70
        }, 0).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-30.7, -.2, 33, 83.5);
    (b.star_anim02 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.star_inner;
        this.instance.parent = this;
        this.instance.setTransform(-29, -1.65, .04, .04, 22.5492);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            scaleX: .0399,
            scaleY: .0399,
            rotation: -16.6973,
            x: -43.817,
            y: 21.9052
        }, 0).wait(1).to({
            rotation: -22.7881,
            x: -46.1165,
            y: 25.5609
        }, 0).wait(1).to({
            rotation: -24.9528,
            x: -46.9338,
            y: 26.8601
        }, 0).wait(1).to({
            rotation: -26.2418,
            x: -47.4204,
            y: 27.6337
        }, 0).wait(1).to({
            rotation: -27.252,
            x: -47.8018,
            y: 28.24
        }, 0).wait(1).to({
            rotation: -28.1786,
            x: -48.1516,
            y: 28.7962
        }, 0).wait(1).to({
            rotation: -29.1014,
            x: -48.5,
            y: 29.35
        }, 0).to({
            _off: !0
        }, 1).wait(16))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-59.1, -11.8, 40.400000000000006, 51.8);
    (b.star_anim01 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.star_inner;
        this.instance.parent = this;
        this.instance.setTransform(-10.75, -13.7, .0999, .0999, 13.0622);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            scaleX: .0937,
            scaleY: .0934,
            rotation: 37.864,
            x: 19.4984,
            y: -15.5672
        }, 0).wait(1).to({
            scaleX: .0918,
            scaleY: .0914,
            rotation: 45.356,
            x: 28.6357,
            y: -16.1312
        }, 0).wait(1).to({
            scaleX: .0911,
            scaleY: .0908,
            rotation: 47.8132,
            x: 31.6325,
            y: -16.3162
        }, 0).wait(1).to({
            scaleX: .0908,
            scaleY: .0904,
            rotation: 49.0896,
            x: 33.1892,
            y: -16.4123
        }, 0).wait(1).to({
            scaleX: .0906,
            scaleY: .0902,
            rotation: 49.9203,
            x: 34.2024,
            y: -16.4748
        }, 0).wait(1).to({
            scaleX: .0905,
            scaleY: .0901,
            rotation: 50.5472,
            x: 34.9669,
            y: -16.522
        }, 0).wait(1).to({
            scaleX: .0903,
            scaleY: .0899,
            rotation: 51.0736,
            x: 35.6089,
            y: -16.5617
        }, 0).wait(1).to({
            scaleX: .0902,
            scaleY: .0898,
            rotation: 51.5507,
            x: 36.1907,
            y: -16.5976
        }, 0).wait(1).to({
            scaleX: .0901,
            scaleY: .0897,
            rotation: 52.0063,
            x: 36.7464,
            y: -16.6319
        }, 0).wait(1).to({
            scaleX: .09,
            scaleY: .0896,
            rotation: 52.4566,
            x: 37.2956,
            y: -16.6658
        }, 0).wait(1).to({
            scaleX: .0899,
            scaleY: .0894,
            rotation: 52.9112,
            x: 37.85,
            y: -16.7
        }, 0).wait(1))
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-34.3, -41.5, 96.69999999999999, 51.6);
    (b.spread_flower_pink = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_7 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(7).call(this.frame_7).wait(1));
        this.instance = new b.flower_pink4("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(21.35, 5.15, .7153, .7153);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            scaleX: .9946,
            scaleY: .9946,
            rotation: -144.6153,
            x: 43.3235,
            y: 3.744,
            alpha: .6862
        }, 0).wait(1).to({
            scaleX: 1.081,
            scaleY: 1.081,
            rotation: -189.3044,
            x: 50.1138,
            y: 3.3095,
            alpha: .5892
        }, 0).wait(1).to({
            scaleX: 1.139,
            scaleY: 1.139,
            rotation: -219.35,
            x: 54.679,
            y: 3.0174,
            alpha: .524
        }, 0).wait(1).to({
            scaleX: 1.2095,
            scaleY: 1.2095,
            rotation: -255.8693,
            x: 60.2279,
            y: 2.6624,
            alpha: .4447
        }, 0).wait(1).to({
            scaleX: 1.4107,
            scaleY: 1.4107,
            rotation: -360,
            x: 76.05,
            y: 1.65,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_1 = new b.flower_pink2("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-14,
            -10.15);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            scaleX: 1.2152,
            scaleY: 1.2152,
            rotation: -144.6153,
            x: -24.1833,
            y: -24.009,
            alpha: .6862
        }, 0).wait(1).to({
            scaleX: 1.2817,
            scaleY: 1.2817,
            rotation: -189.3044,
            x: -27.3302,
            y: -28.2917,
            alpha: .5892
        }, 0).wait(1).to({
            scaleX: 1.3264,
            scaleY: 1.3264,
            rotation: -219.35,
            x: -29.4459,
            y: -31.171,
            alpha: .524
        }, 0).wait(1).to({
            scaleX: 1.3808,
            scaleY: 1.3808,
            rotation: -255.8693,
            x: -32.0175,
            y: -34.6708,
            alpha: .4447
        }, 0).wait(1).to({
            scaleX: 1.5357,
            scaleY: 1.5357,
            rotation: -360,
            x: -39.35,
            y: -44.65,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_2 = new b.flower_pink1("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(15.8, -6.5, .7927, .7927);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(1).to({
            scaleX: .9181,
            scaleY: .9181,
            rotation: -144.6153,
            x: 33.0735,
            y: -24.6372,
            alpha: .6862
        }, 0).wait(1).to({
            scaleX: .9569,
            scaleY: .9569,
            rotation: -189.3044,
            x: 38.4114,
            y: -30.2419,
            alpha: .5892
        }, 0).wait(1).to({
                scaleX: .9829,
                scaleY: .9829,
                rotation: -219.35,
                x: 42.0001,
                y: -34.0102,
                alpha: .524
            },
            0).wait(1).to({
            scaleX: 1.0146,
            scaleY: 1.0146,
            rotation: -255.8693,
            x: 46.3622,
            y: -38.5903,
            alpha: .4447
        }, 0).wait(1).to({
            scaleX: 1.1049,
            scaleY: 1.1049,
            rotation: -360,
            x: 58.8,
            y: -51.65,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_3 = new b.flower_pink4("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(-14.45, 14.3, .7153, .7153);
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(1).to({
            scaleX: .9946,
            scaleY: .9946,
            rotation: -144.6153,
            x: -28.0278,
            y: 32.5778,
            alpha: .6862
        }, 0).wait(1).to({
            scaleX: 1.081,
            scaleY: 1.081,
            rotation: -189.3044,
            x: -32.2236,
            y: 38.226,
            alpha: .5892
        }, 0).wait(1).to({
            scaleX: 1.139,
            scaleY: 1.139,
            rotation: -219.35,
            x: -35.0445,
            y: 42.0234,
            alpha: .524
        }, 0).wait(1).to({
            scaleX: 1.2095,
            scaleY: 1.2095,
            rotation: -255.8693,
            x: -38.4733,
            y: 46.639,
            alpha: .4447
        }, 0).wait(1).to({
            scaleX: 1.4107,
            scaleY: 1.4107,
            rotation: -360,
            x: -48.25,
            y: 59.8,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_4 = new b.flower_pink3("synched", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(5.6, 19);
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(1).to({
            scaleX: 1.1953,
            scaleY: 1.1953,
            rotation: -144.6153,
            x: 13.6543,
            y: 39.8085,
            alpha: .6862
        }, 0).wait(1).to({
            scaleX: 1.2556,
            scaleY: 1.2556,
            rotation: -189.3044,
            x: 16.1432,
            y: 46.2388,
            alpha: .5892
        }, 0).wait(1).to({
            scaleX: 1.2962,
            scaleY: 1.2962,
            rotation: -219.35,
            x: 17.8166,
            y: 50.562,
            alpha: .524
        }, 0).wait(1).to({
            scaleX: 1.3455,
            scaleY: 1.3455,
            rotation: -255.8693,
            x: 19.8505,
            y: 55.8168,
            alpha: .4447
        }, 0).wait(1).to({
            scaleX: 1.4861,
            scaleY: 1.4861,
            rotation: -360,
            x: 25.65,
            y: 70.8,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_5 = new b.flower_pink2("synched",
            0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(-20.9, 2.15);
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(1).to({
            scaleX: 1.3587,
            scaleY: 1.3587,
            rotation: -144.6153,
            x: -42.1705,
            y: 3.9577,
            alpha: .6862
        }, 0).wait(1).to({
            scaleX: 1.4695,
            scaleY: 1.4695,
            rotation: -189.3044,
            x: -48.7435,
            y: 4.5163,
            alpha: .5892
        }, 0).wait(1).to({
            scaleX: 1.544,
            scaleY: 1.544,
            rotation: -219.35,
            x: -53.1627,
            y: 4.8919,
            alpha: .524
        }, 0).wait(1).to({
            scaleX: 1.6346,
            scaleY: 1.6346,
            rotation: -255.8693,
            x: -58.5341,
            y: 5.3484,
            alpha: .4447
        }, 0).wait(1).to({
            scaleX: 1.8929,
            scaleY: 1.8929,
            rotation: -360,
            x: -73.85,
            y: 6.65,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_6 = new b.flower_pink1("synched", 0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(.3, -12.15, .7812, .7812, -44.9992);
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(1).to({
            scaleX: 1.0148,
            scaleY: 1.0148,
            rotation: 43.8468,
            x: -1.106,
            y: -37.9799,
            alpha: .6862
        }, 0).wait(1).to({
            scaleX: 1.087,
            scaleY: 1.087,
            rotation: -39.9454,
            x: -1.5405,
            y: -45.9619,
            alpha: .5892
        }, 0).wait(1).to({
            scaleX: 1.1355,
            scaleY: 1.1355,
            rotation: -96.281,
            x: -1.8326,
            y: -51.3284,
            alpha: .524
        }, 0).wait(1).to({
            scaleX: 1.1945,
            scaleY: 1.1945,
            rotation: -164.7547,
            x: -2.1876,
            y: -57.8511,
            alpha: .4447
        }, 0).wait(1).to({
            scaleX: 1.3627,
            scaleY: 1.3627,
            rotation: 0,
            x: -3.2,
            y: -76.45,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_7 = new b.spread_flower_circle_pink;
        this.instance_7.parent = this;
        this.instance_7.setTransform(0, 0, .5578, .5578);
        this.timeline.addTween(a.Tween.get(this.instance_7).to({
            scaleX: 1.2947,
            scaleY: 1.2947,
            alpha: .3984
        }, 1, a.Ease.get(1)).wait(1).to({
            scaleX: 1.3211,
            scaleY: 1.3211,
            alpha: .3767
        }, 0).wait(1).to({
            scaleX: 1.4,
            scaleY: 1.4,
            alpha: .3115
        }, 0).wait(1).to({
            scaleX: 1.5316,
            scaleY: 1.5316,
            alpha: .2029
        }, 0).wait(1).to({
            scaleX: 1.7159,
            scaleY: 1.7159,
            alpha: .0508
        }, 0).to({
            _off: !0
        }, 1).wait(2))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-84.4, -89.6, 168.5, 171.1);
    (b.powder_paper_core_inner = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_0 = function() {};
        this.frame_5 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));
        this.instance = new b.powder_paper_core_inner_color1;
        this.instance.parent = this;
        this.instance.setTransform(.35, -.3, 1, 1, 0, 0, 0, 2.5, 3.2);
        this.instance_1 = new b.powder_paper_core_inner_color2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-.7, -.1, 1, 1, 0, 0, 0, 1.7, 3);
        this.instance_2 = new b.powder_paper_core_inner_color3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-.6, -.25, 1, 1, 0, 0, 0, 2.4, 2.8);
        this.instance_3 = new b.powder_paper_core_inner_color4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(0,
            .4, 1, 1, 0, 0, 0, 2.8, 3.1);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 2).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: []
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-3, -3.5, 5.8, 6.9);
    (b.powder_paper_core = function(c, e, d) {
        this.initialize(c, e, d, {
            r: 58,
            "-": 151
        });
        this.frame_0 = function() {
            this.rotation += exportRoot._u.random(14);
            this.gotoAndPlay(exportRoot._u.random(65) + 15)
        };
        this.frame_151 =
            function() {
                this.gotoAndPlay("r")
            };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(151).call(this.frame_151).wait(1));
        this.instance = new b.powder_paper_core_inner;
        this.instance.parent = this;
        this.instance.setTransform(-1.4, -17.45);
        this.timeline.addTween(a.Tween.get(this.instance).wait(58).to({
            x: 0
        }, 0).to({
            x: 2.1,
            y: 692.85
        }, 93).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-3.5, -20.9, 8.4, 716.8);
    (b.powder_paper = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance =
            new b.powder_paper_core;
        this.instance.parent = this;
        this.instance.setTransform(-123.3, 58.7, 2.2434, 2.2434);
        this.instance_1 = new b.powder_paper_core;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-151.45, 55.15, 2.1479, 2.1479);
        this.instance_2 = new b.powder_paper_core;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-141.65, 38.15, .8151, .8151, 0, 0, 180);
        this.instance_3 = new b.powder_paper_core;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-50.85, 54.6, 1.482, 1.482, 0, 0, 180);
        this.instance_4 =
            new b.powder_paper_core;
        this.instance_4.parent = this;
        this.instance_4.setTransform(15.15, 59.6, 2.5131, 2.5131);
        this.instance_5 = new b.powder_paper_core;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-127, 43.5, .5916, .5916);
        this.instance_6 = new b.powder_paper_core;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-56.8, 31.1, .5775, .5775);
        this.instance_7 = new b.powder_paper_core;
        this.instance_7.parent = this;
        this.instance_7.setTransform(131.1, 34.25, .5106, .5106);
        this.instance_8 = new b.powder_paper_core;
        this.instance_8.parent = this;
        this.instance_8.setTransform(35.95, 52.4, .8962, .8962);
        this.instance_9 = new b.powder_paper_core;
        this.instance_9.parent = this;
        this.instance_9.setTransform(117.9, 39.2, .9937, .8943);
        this.instance_10 = new b.powder_paper_core;
        this.instance_10.parent = this;
        this.instance_10.setTransform(107.05, 38.25, .571, .571);
        this.instance_11 = new b.powder_paper_core;
        this.instance_11.parent = this;
        this.instance_11.setTransform(-11.85, 42);
        this.instance_12 = new b.powder_paper_core;
        this.instance_12.parent =
            this;
        this.instance_12.setTransform(4.65, 68.3, 4.1492, 4.1492);
        this.instance_13 = new b.powder_paper_core;
        this.instance_13.parent = this;
        this.instance_13.setTransform(-82.55, 37.2);
        this.instance_14 = new b.powder_paper_core;
        this.instance_14.parent = this;
        this.instance_14.setTransform(-103.6, 34.85, .5557, .5557, 2.4518);
        this.instance_15 = new b.powder_paper_core;
        this.instance_15.parent = this;
        this.instance_15.setTransform(-22.2, 34.75);
        this.instance_16 = new b.powder_paper_core;
        this.instance_16.parent = this;
        this.instance_16.setTransform(-113.6,
            52.9, 1.7537, 1.7537, 0, 0, 180);
        this.instance_17 = new b.powder_paper_core;
        this.instance_17.parent = this;
        this.instance_17.setTransform(79.85, 51.25, 1.611, 1.611);
        this.instance_18 = new b.powder_paper_core;
        this.instance_18.parent = this;
        this.instance_18.setTransform(63.85, 35.25);
        this.instance_19 = new b.powder_paper_core;
        this.instance_19.parent = this;
        this.instance_19.setTransform(-92.25, 47.85, 2.1838, 2.1838);
        this.instance_20 = new b.powder_paper_core;
        this.instance_20.parent = this;
        this.instance_20.setTransform(99.75, 49.9,
            2.5614, 2.5614);
        this.instance_21 = new b.powder_paper_core;
        this.instance_21.parent = this;
        this.instance_21.setTransform(29.45, 56.3, 2.4736, 2.4736);
        this.instance_22 = new b.powder_paper_core;
        this.instance_22.parent = this;
        this.instance_22.setTransform(51.55, 57, 1.9642, 1.9642);
        this.instance_23 = new b.powder_paper_core;
        this.instance_23.parent = this;
        this.instance_23.setTransform(-40.5, 33.4);
        this.instance_24 = new b.powder_paper_core;
        this.instance_24.parent = this;
        this.instance_24.setTransform(-58.75, 66.9, 3.3223, 3.3223);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.instance_24
                }, {
                    t: this.instance_23
                }, {
                    t: this.instance_22
                }, {
                    t: this.instance_21
                }, {
                    t: this.instance_20
                }, {
                    t: this.instance_19
                }, {
                    t: this.instance_18
                }, {
                    t: this.instance_17
                }, {
                    t: this.instance_16
                }, {
                    t: this.instance_15
                }, {
                    t: this.instance_14
                }, {
                    t: this.instance_13
                }, {
                    t: this.instance_12
                }, {
                    t: this.instance_11
                }, {
                    t: this.instance_10
                }, {
                    t: this.instance_9
                }, {
                    t: this.instance_8
                }, {
                    t: this.instance_7
                }, {
                    t: this.instance_6
                }, {
                    t: this.instance_5
                }, {
                    t: this.instance_4
                }, {
                    t: this.instance_3
                },
                {
                    t: this.instance_2
                }, {
                    t: this.instance_1
                }, {
                    t: this.instance
                }
            ]
        }).wait(1))
    }).prototype = g(b.powder_paper, new a.Rectangle(-159, -18.6, 290.8, 58.1), null);
    (b.parts_particle1_2 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_0 = function() {
            this.play()
        };
        this.frame_15 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(15));
        this.instance = new b.guide_parts_particle_1;
        this.instance.parent = this;
        this.instance.setTransform(0, .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(30));
        this.instance_1 = new b.parts_particle1_3;
        this.instance_1.parent = this;
        this.instance_1.setTransform(19.95, -4.05, .7674, .7674);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            regX: -.2,
            regY: .5,
            scaleX: .5693,
            scaleY: .5693,
            rotation: -174.9492,
            x: 63.45,
            y: -63.95,
            alpha: .7229
        }, 0).wait(1).to({
            scaleX: .5097,
            scaleY: .5097,
            rotation: -119.2289,
            x: 69.8,
            y: -92.6,
            alpha: .6395
        }, 0).wait(1).to({
            scaleX: .4735,
            scaleY: .4735,
            rotation: -85.4829,
            x: 73.05,
            y: -105.45,
            alpha: .5889
        }, 0).wait(1).to({
            scaleX: .4484,
            scaleY: .4484,
            rotation: -61.9876,
            x: 75,
            y: -112.55,
            alpha: .5538
        }, 0).wait(1).to({
            scaleX: .4299,
            scaleY: .4299,
            rotation: -44.682,
            x: 76.7,
            y: -118.25,
            alpha: .5278
        }, 0).wait(1).to({
            scaleX: .4159,
            scaleY: .4159,
            rotation: -31.6108,
            x: 78.15,
            y: -122.6,
            alpha: .5083
        }, 0).wait(1).to({
            scaleX: .4052,
            scaleY: .4052,
            rotation: -21.661,
            x: 79.25,
            y: -126,
            alpha: .4934
        }, 0).wait(1).to({
            scaleX: .3972,
            scaleY: .3972,
            rotation: -14.1306,
            x: 80.25,
            y: -128.7,
            alpha: .4821
        }, 0).wait(1).to({
            scaleX: .3912,
            scaleY: .3912,
            rotation: -8.5439,
            x: 81.05,
            y: -130.7,
            alpha: .4737
        }, 0).wait(1).to({
            scaleX: .3869,
            scaleY: .3869,
            rotation: -4.5615,
            x: 81.6,
            y: -132.1,
            alpha: .4678
        }, 0).wait(1).to({
            scaleX: .3841,
            scaleY: .3841,
            rotation: -1.9317,
            x: 82,
            y: -133.05,
            alpha: .4638
        }, 0).wait(1).to({
            scaleX: .3826,
            scaleY: .3826,
            rotation: -.4617,
            x: 82.25,
            y: -133.6,
            alpha: .4616
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: .382,
            scaleY: .382,
            rotation: 0,
            x: 82.45,
            y: -134,
            alpha: .4609
        }, 0).to({
            _off: !0
        }, 1).wait(16))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-5.2, -178.7, 148.5, 184.7);
    (b.parts_particle1_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_0 =
            function() {
                this.r = Math.floor(3 * Math.random() + 3);
                this.gotoAndPlay(this.r)
            };
        this.frame_21 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(15));
        this.instance = new b.guide_parts_particle_1;
        this.instance.parent = this;
        this.instance.setTransform(0, .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(36));
        this.instance_1 = new b.parts_particle1_3;
        this.instance_1.parent = this;
        this.instance_1.setTransform(19.95, -4.05, .7347, .7347);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            regX: -.2,
            regY: .5,
            scaleX: .5967,
            scaleY: .5967,
            rotation: 140.8707,
            x: 62,
            y: -58.8,
            alpha: .8319
        }, 0).wait(1).to({
            scaleX: .5493,
            scaleY: .5493,
            rotation: 189.3068,
            x: 68.95,
            y: -89.2,
            alpha: .774
        }, 0).wait(1).to({
            scaleX: .5163,
            scaleY: .5163,
            rotation: 222.9188,
            x: 73.15,
            y: -105.85,
            alpha: .7339
        }, 0).wait(1).to({
            scaleX: .4911,
            scaleY: .4911,
            rotation: 248.676,
            x: 76.1,
            y: -115.95,
            alpha: .7032
        }, 0).wait(1).to({
            scaleX: .4709,
            scaleY: .4709,
            rotation: 269.3198,
            x: 78.9,
            y: -124.3,
            alpha: .6785
        }, 0).wait(1).to({
            scaleX: .4543,
            scaleY: .4543,
            rotation: 286.2744,
            x: 81.55,
            y: -131.45,
            alpha: .6583
        }, 0).wait(1).to({
            scaleX: .4404,
            scaleY: .4404,
            rotation: 300.3959,
            x: 84.35,
            y: -137.6,
            alpha: .6415
        }, 0).wait(1).to({
            scaleX: .4288,
            scaleY: .4288,
            rotation: 312.2476,
            x: 86.7,
            y: -142.4,
            alpha: .6273
        }, 0).wait(1).to({
            scaleX: .4191,
            scaleY: .4191,
            rotation: 322.2242,
            x: 88.9,
            y: -146.25,
            alpha: .6154
        }, 0).wait(1).to({
            scaleX: .4108,
            scaleY: .4108,
            rotation: 330.6158,
            x: 90.9,
            y: -149.45,
            alpha: .6054
        }, 0).wait(1).to({
            scaleX: .404,
            scaleY: .404,
            rotation: 337.643,
            x: 92.75,
            y: -152.15,
            alpha: .597
        }, 0).wait(1).to({
            scaleX: .3982,
            scaleY: .3982,
            rotation: 343.4783,
            x: 94.3,
            y: -154.45,
            alpha: .59
        }, 0).wait(1).to({
            scaleX: .3936,
            scaleY: .3936,
            rotation: 348.2599,
            x: 95.7,
            y: -156.2,
            alpha: .5843
        }, 0).wait(1).to({
            scaleX: .3898,
            scaleY: .3898,
            rotation: 352.1005,
            x: 96.9,
            y: -157.65,
            alpha: .5797
        }, 0).wait(1).to({
            scaleX: .3869,
            scaleY: .3869,
            rotation: 355.0937,
            x: 97.85,
            y: -158.75,
            alpha: .5762
        }, 0).wait(1).to({
            scaleX: .3847,
            scaleY: .3847,
            rotation: 357.3179,
            x: 98.6,
            y: -159.55,
            alpha: .5735
        }, 0).wait(1).to({
            scaleX: .3832,
            scaleY: .3832,
            rotation: 358.8401,
            x: 99.1,
            y: -160.1,
            alpha: .5717
        }, 0).wait(1).to({
            scaleX: .3823,
            scaleY: .3823,
            rotation: 359.7175,
            x: 99.4,
            y: -160.4,
            alpha: .5706
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: .382,
            scaleY: .382,
            rotation: 360,
            x: 99.8,
            y: -160.55,
            alpha: .5703
        }, 0).to({
            _off: !0
        }, 1).wait(16))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-5.2, -178.7, 148.5, 184.7);
    (b.of_anim = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_54 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(54).call(this.frame_54).wait(1));
        this.instance = new b.of_1;
        this.instance.parent = this;
        this.instance.setTransform(-107.4,
            -3.45, 2, 2);
        this.instance.compositeOperation = "lighter";
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            x: -107.2946
        }, 0).wait(1).to({
            x: -106.9716
        }, 0).wait(1).to({
            x: -106.42
        }, 0).wait(1).to({
            x: -105.6282
        }, 0).wait(1).to({
            x: -104.584
        }, 0).wait(1).to({
            x: -103.2741
        }, 0).wait(1).to({
            x: -101.6849
        }, 0).wait(1).to({
            x: -99.8019
        }, 0).wait(1).to({
            x: -97.6097
        }, 0).wait(1).to({
            x: -95.0926
        }, 0).wait(1).to({
            x: -92.234
        }, 0).wait(1).to({
            x: -89.017
        }, 0).wait(1).to({
            x: -85.4248
        }, 0).wait(1).to({
            x: -81.4405
        }, 0).wait(1).to({
                x: -77.0478
            },
            0).wait(1).to({
            x: -72.2316
        }, 0).wait(1).to({
            x: -66.9791
        }, 0).wait(1).to({
            x: -61.2801
        }, 0).wait(1).to({
            x: -55.1287
        }, 0).wait(1).to({
            x: -48.5247
        }, 0).wait(1).to({
            x: -41.4753
        }, 0).wait(1).to({
            x: -33.9963
        }, 0).wait(1).to({
            x: -26.1147
        }, 0).wait(1).to({
            x: -17.8691
        }, 0).wait(1).to({
            x: -9.3113
        }, 0).wait(1).to({
            x: -.5058
        }, 0).wait(1).to({
            x: 8.4714
        }, 0).wait(1).to({
            x: 17.5349
        }, 0).wait(1).to({
            x: 26.5941
        }, 0).wait(1).to({
            x: 35.5573
        }, 0).wait(1).to({
            x: 44.336
        }, 0).wait(1).to({
            x: 52.8495
        }, 0).wait(1).to({
            x: 61.0278
        }, 0).wait(1).to({
            x: 68.8138
        }, 0).wait(1).to({
                x: 76.1639
            },
            0).wait(1).to({
            x: 83.0474
        }, 0).wait(1).to({
            x: 89.4456
        }, 0).wait(1).to({
            x: 95.3503
        }, 0).wait(1).to({
            x: 100.7612
        }, 0).wait(1).to({
            x: 105.685
        }, 0).wait(1).to({
            x: 110.133
        }, 0).wait(1).to({
            x: 114.1203
        }, 0).wait(1).to({
            x: 117.6641
        }, 0).wait(1).to({
            x: 120.7832
        }, 0).wait(1).to({
            x: 123.4967
        }, 0).wait(1).to({
            x: 125.8244
        }, 0).wait(1).to({
            x: 127.7854
        }, 0).wait(1).to({
            x: 129.3985
        }, 0).wait(1).to({
            x: 130.6819
        }, 0).wait(1).to({
            x: 131.6527
        }, 0).wait(1).to({
            x: 132.3275
        }, 0).wait(1).to({
            x: 132.7217
        }, 0).wait(1).to({
            x: 132.85
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-257.4, -153.5, 540.3, 300.1);
    (b.kira_srare_01 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_14 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(14).call(this.frame_14).wait(1));
        this.instance = new b.star_anim06_copy;
        this.instance.parent = this;
        this.instance.setTransform(-8.4, -29.1, .4197, .4197, -135.0015);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            alpha: .0117
        }, 6, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(7));
        this.instance_1 =
            new b.star_anim06_copy;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-27.6, -20.85, .4198, .4198, 149.9996, 0, 0, .1, .1);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(2).to({
            alpha: .0117
        }, 6, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(6));
        this.instance_2 = new b.star_anim06;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-15.45, -19.4, .9759, .9759, -133.866, 0, 0, 0, -.1);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(1).to({
            _off: !1
        }, 0).wait(4).to({
                alpha: .0117
            },
            6, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(3));
        this.instance_3 = new b.star_anim06;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-25, -20.45, .7213, .7213, -174.814);
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(5).to({
            alpha: .0117
        }, 6, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(3));
        this.instance_4 = new b.star_anim06;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-23.8, 3.6, 1, 1, 119.9989);
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(5).to({
            alpha: .0117
        }, 6, a.Ease.get(1)).to({
                _off: !0
            },
            1).wait(3));
        this.instance_5 = new b.star_anim01;
        this.instance_5.parent = this;
        this.instance_5.setTransform(15.1, .85, .7627, .7627);
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(1).to({
            _off: !1
        }, 0).wait(3).to({
            alpha: .0117
        }, 6, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(4));
        this.instance_6 = new b.star_anim02;
        this.instance_6.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(3).to({
            alpha: 0
        }, 7, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(4));
        this.instance_7 = new b.star_anim06;
        this.instance_7.parent = this;
        this.instance_7.setTransform(0, -11.6);
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(6).to({
            alpha: .0117
        }, 5, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(3));
        this.instance_8 = new b.star_anim07;
        this.instance_8.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(5).to({
            alpha: 0
        }, 6, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(3))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-42.9, -42.4, 67.9, 61.3);
    (b.kira_mc_mov = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_38 = function() {
            this.gotoAndPlay(1)
        };
        this.timeline.addTween(a.Tween.get(this).wait(38).call(this.frame_38).wait(1));
        this.instance = new b.kira_mc;
        this.instance.parent = this;
        this.instance.setTransform(-.3, 21.05, .45, .45, 45, 0, 0, 0, 15);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            scaleX: .5,
            scaleY: .5,
            y: 20.8
        }, 2).to({
            y: 20.3,
            alpha: .8906
        }, 6).to({
            alpha: .1914
        }, 1).to({
            alpha: .8906
        }, 1).to({
            alpha: .1914
        }, 1).to({
            alpha: .8906
        }, 1).to({
            y: 20.05
        }, 7).to({
            y: 19.55,
            alpha: .1914
        }, 8).to({
            _off: !0
        }, 1).wait(11))
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-30.9, -11, 61.599999999999994, 62.8);
    (b.glitter_first_inner = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.pointGlitter2("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .0121, .6227, 59.2024);
        this.instance_1 = new b.pointGlitter2("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, .0109, .7287, -30.7981);
        this.shape = new a.Shape;
        this.shape.graphics.rf(["#FFFFFF", "#FFFFFF", "rgba(255,252,237,0.051)", "rgba(255,255,255,0)"],
            [0, .055, .761, 1], 0, 0, 0, 0, 0, 5.4).s().p("AgZAtQgTgLgFgUQgGgVALgSQALgTAUgFQAVgGASALQATALAFAUQAGAVgLASQgLATgUAFQgIACgGAAQgNAAgMgHg");
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = g(b.glitter_first_inner, new a.Rectangle(-18.5, -21.7, 37.1, 43.4), null);
    (b.glitter_first = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_8 = function() {};
        this.timeline.addTween(a.Tween.get(this).wait(8).call(this.frame_8).wait(10));
        this.instance =
            new b.grip;
        this.instance.parent = this;
        this.instance.alpha = .6602;
        this.timeline.addTween(a.Tween.get(this.instance).to({
            _off: !0
        }, 1).wait(17));
        this.instance_1 = new b.glitter_first_inner;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, .6427, .6427, -44.822);
        this.instance_1.alpha = .4297;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            scaleX: 3.7607,
            scaleY: 3.7607,
            rotation: -11.2055,
            alpha: .8574
        }, 0).wait(1).to({
            scaleX: 4.8,
            scaleY: 4.8,
            rotation: 0,
            alpha: 1
        }, 0).wait(1).to({
            scaleX: 4.722,
            scaleY: 4.722,
            rotation: 1.9399,
            alpha: .971
        }, 0).wait(1).to({
            scaleX: 4.5026,
            scaleY: 4.5026,
            rotation: 7.4005,
            alpha: .8893
        }, 0).wait(1).to({
            scaleX: 4.1415,
            scaleY: 4.1415,
            rotation: 16.3817,
            alpha: .7549
        }, 0).wait(1).to({
            scaleX: 3.6391,
            scaleY: 3.6391,
            rotation: 28.8836,
            alpha: .5678
        }, 0).wait(1).to({
            scaleX: 2.9951,
            scaleY: 2.9951,
            rotation: 44.9061,
            alpha: .3281
        }, 0).to({
            _off: !0
        }, 1).wait(10))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-90, -105, 180, 210.1);
    (b.efa_t2_\u8449\u3063\u30713 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_33 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(33).call(this.frame_33).wait(1));
        this.instance = new b.Feather01_blur_1;
        this.instance.parent = this;
        this.instance.setTransform(9.25, -4.85, .3994, .3994, 57.8911, 0, 0, .1, -.1);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regX: 0,
            regY: 14.2,
            rotation: 54.4357,
            x: 32.85,
            y: -11.6
        }, 0).wait(1).to({
            rotation: 51.0867,
            x: 67.1,
            y: -17.7
        }, 0).wait(1).to({
            scaleX: .3995,
            scaleY: .3995,
            rotation: 47.8439,
            x: 91.65,
            y: -20.55
        }, 0).wait(1).to({
            rotation: 44.7075,
            x: 117.85,
            y: -22.35
        }, 0).wait(1).to({
            rotation: 41.6774,
            x: 141.2,
            y: -23.15
        }, 0).wait(1).to({
            scaleX: .3996,
            scaleY: .3996,
            rotation: 38.7536,
            x: 162.55,
            y: -23.4
        }, 0).wait(1).to({
            rotation: 35.9361,
            x: 183.6,
            y: -23.1
        }, 0).wait(1).to({
            rotation: 33.2249,
            x: 203.8,
            y: -22.4
        }, 0).wait(1).to({
            scaleX: .3997,
            scaleY: .3997,
            rotation: 30.6201,
            x: 223.05,
            y: -21.3
        }, 0).wait(1).to({
            rotation: 28.1216,
            x: 241.35,
            y: -20
        }, 0).wait(1).to({
            rotation: 25.7294,
            x: 258.85,
            y: -18.4
        }, 0).wait(1).to({
            rotation: 23.4435,
            x: 280.15,
            y: -14.3
        }, 0).wait(1).to({
            scaleX: .3998,
            scaleY: .3998,
            rotation: 21.264,
            x: 299.75,
            y: -9.55
        }, 0).wait(1).to({
            rotation: 19.1907,
            x: 321.95,
            y: -4.15
        }, 0).wait(1).to({
            rotation: 17.2238,
            x: 336.8,
            y: -.6
        }, 0).wait(1).to({
            rotation: 15.3632,
            x: 350.25,
            y: 2.45
        }, 0).wait(1).to({
            scaleX: .3999,
            scaleY: .3999,
            rotation: 13.6089,
            x: 363.05,
            y: 5.3
        }, 0).wait(1).to({
            rotation: 11.961,
            x: 375.05,
            y: 7.85
        }, 0).wait(1).to({
            rotation: 10.4193,
            x: 386.25,
            y: 10.2
        }, 0).wait(1).to({
            rotation: 8.984,
            x: 396.65,
            y: 12.3
        }, 0).wait(1).to({
            rotation: 7.655,
            x: 406.3,
            y: 14.25
        }, 0).wait(1).to({
            rotation: 6.4323,
            x: 415.15,
            y: 15.95
        }, 0).wait(1).to({
            rotation: 5.316,
            x: 423.2,
            y: 17.5
        }, 0).wait(1).to({
            scaleX: .4,
            scaleY: .4,
            rotation: 4.306,
            x: 430.45,
            y: 18.85
        }, 0).wait(1).to({
            rotation: 3.4022,
            x: 437,
            y: 20.05
        }, 0).wait(1).to({
            rotation: 2.6048,
            x: 442.75,
            y: 21.05
        }, 0).wait(1).to({
            rotation: 1.9138,
            x: 447.7,
            y: 22
        }, 0).wait(1).to({
            rotation: 1.329,
            x: 451.9,
            y: 22.75
        }, 0).wait(1).to({
            rotation: .8506,
            x: 455.35,
            y: 23.3
        }, 0).wait(1).to({
            rotation: .4784,
            x: 458,
            y: 23.8
        }, 0).wait(1).to({
            rotation: .2126,
            x: 459.95,
            y: 24.1
        }, 0).wait(1).to({
            rotation: .0532,
            x: 461.05,
            y: 24.3
        }, 0).wait(1).to({
                regY: 0,
                rotation: 0,
                x: 461.55,
                y: 18.3
            },
            0).wait(1));
        this.instance_1 = new b.efa_\u8449\u3063\u30713_p;
        this.instance_1.parent = this;
        this.instance_1.setTransform(245.8, -2.85);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(34))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-32, -60.4, 520, 111.1);
    (b.efa_t2_\u8449\u3063\u30712 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_22 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(22).call(this.frame_22).wait(1));
        this.instance = new b.Feather01_1;
        this.instance.parent =
            this;
        this.instance.setTransform(9.25, -4.9, .1999, .1999, 174.9865, 0, 0, -.3, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regX: 0,
            regY: 0,
            rotation: 159.4402,
            x: 42.835,
            y: -16.6459
        }, 0).wait(1).to({
            rotation: 144.6169,
            x: 75.5861,
            y: -19.3655
        }, 0).wait(1).to({
            rotation: 130.5168,
            x: 111.3746,
            y: -15.5261
        }, 0).wait(1).to({
            rotation: 117.1397,
            x: 143.0319,
            y: -7.7579
        }, 0).wait(1).to({
            scaleX: .2,
            scaleY: .2,
            rotation: 104.4857,
            x: 169.9345,
            y: .5954
        }, 0).wait(1).to({
            rotation: 92.5548,
            x: 196.6613,
            y: 5.3272
        }, 0).wait(1).to({
            rotation: 81.347,
            x: 223.8002,
            y: 6.2032
        }, 0).wait(1).to({
            rotation: 70.8623,
            x: 249.0588,
            y: 3.9544
        }, 0).wait(1).to({
            rotation: 61.1007,
            x: 271.7175,
            y: -.2721
        }, 0).wait(1).to({
            rotation: 52.0621,
            x: 291.7259,
            y: -5.5633
        }, 0).wait(1).to({
            rotation: 43.7466,
            x: 309.252,
            y: -11.2938
        }, 0).wait(1).to({
            rotation: 36.1542,
            x: 324.4986,
            y: -16.7092
        }, 0).wait(1).to({
            rotation: 29.2849,
            x: 337.6206,
            y: -21.477
        }, 0).wait(1).to({
            rotation: 23.1387,
            x: 348.6636,
            y: -25.5781
        }, 0).wait(1).to({
            rotation: 17.7156,
            x: 358.5963,
            y: -29.3434
        }, 0).wait(1).to({
                rotation: 13.0155,
                x: 367.3009,
                y: -32.7096
            },
            0).wait(1).to({
            rotation: 9.0386,
            x: 374.7584,
            y: -35.648
        }, 0).wait(1).to({
            rotation: 5.7847,
            x: 380.9332,
            y: -38.1227
        }, 0).wait(1).to({
            rotation: 3.2539,
            x: 385.7914,
            y: -40.0985
        }, 0).wait(1).to({
            rotation: 1.4462,
            x: 389.2986,
            y: -41.5418
        }, 0).wait(1).to({
            rotation: .3615,
            x: 391.4223,
            y: -42.4229
        }, 0).wait(1).to({
            regX: .2,
            regY: -.2,
            rotation: 0,
            x: 392,
            y: -42.8
        }, 0).wait(1));
        this.instance_1 = new b.efa_\u8449\u3063\u30712_p;
        this.instance_1.parent = this;
        this.instance_1.setTransform(224, -28.8);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(23))
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-19.4, -69.2, 458.7, 107.7);
    (b.efa_t2_\u8449\u3063\u30711 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_24 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(24).call(this.frame_24).wait(1));
        this.instance = new b.Feather02_1;
        this.instance.parent = this;
        this.instance.setTransform(9.25, -4.9, .1, .1, 0, 0, 0, 0, -.5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regX: -88,
            regY: -133.7,
            rotation: 14.6875,
            x: 40.15,
            y: -32.35
        }, 0).wait(1).to({
            rotation: 28.75,
            x: 79.35,
            y: -35.2
        }, 0).wait(1).to({
            rotation: 42.1875,
            x: 121.65,
            y: -29.75
        }, 0).wait(1).to({
            rotation: 55,
            x: 158.6,
            y: -19.55
        }, 0).wait(1).to({
            rotation: 67.1875,
            x: 190.55,
            y: -10.15
        }, 0).wait(1).to({
            rotation: 78.75,
            x: 223.9,
            y: -5.05
        }, 0).wait(1).to({
            rotation: 89.6875,
            x: 255.85,
            y: -4.15
        }, 0).wait(1).to({
            rotation: 100,
            x: 284.7,
            y: -6.3
        }, 0).wait(1).to({
            rotation: 109.6875,
            x: 309.9,
            y: -10.2
        }, 0).wait(1).to({
            rotation: 118.75,
            x: 331.65,
            y: -14.85
        }, 0).wait(1).to({
            rotation: 127.1875,
            x: 350.7,
            y: -19.35
        }, 0).wait(1).to({
                rotation: 135,
                x: 364.95,
                y: -22.55
            },
            0).wait(1).to({
            rotation: 142.1875,
            x: 378,
            y: -25.8
        }, 0).wait(1).to({
            rotation: 148.75,
            x: 389.75,
            y: -29
        }, 0).wait(1).to({
            rotation: 154.6875,
            x: 400.4,
            y: -32.1
        }, 0).wait(1).to({
            rotation: 160,
            x: 409.85,
            y: -35.2
        }, 0).wait(1).to({
            rotation: 164.6875,
            x: 418.3,
            y: -38.1
        }, 0).wait(1).to({
            rotation: 168.75,
            x: 425.6,
            y: -40.9
        }, 0).wait(1).to({
            rotation: 172.1875,
            x: 431.8,
            y: -43.4
        }, 0).wait(1).to({
            rotation: 175,
            x: 436.95,
            y: -45.65
        }, 0).wait(1).to({
            rotation: 177.1875,
            x: 441.05,
            y: -47.45
        }, 0).wait(1).to({
            rotation: 178.75,
            x: 444,
            y: -48.85
        }, 0).wait(1).to({
            rotation: 179.6875,
            x: 445.75,
            y: -49.7
        }, 0).wait(1).to({
            regX: .5,
            regY: -.5,
            rotation: 180,
            x: 437.6,
            y: -63.3
        }, 0).wait(1));
        this.instance_1 = new b.efa_\u8449\u3063\u30711_p;
        this.instance_1.parent = this;
        this.instance_1.setTransform(224, -28.8);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(25))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-20.4, -71.9, 487.7, 83.2);
    (b.cursor = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_0 = function() {};
        this.frame_10 = function() {
            this.gotoAndPlay(0)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(1));
        this.instance = new b.cursor_inner;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            y: 1.0837
        }, 0).wait(1).to({
            y: 5.3947
        }, 0).wait(1).to({
            y: 13.7938
        }, 0).wait(1).to({
            y: 20.276
        }, 0).wait(1).to({
            y: 21.95
        }, 0).wait(1).to({
            y: 20.8663
        }, 0).wait(1).to({
            y: 16.5553
        }, 0).wait(1).to({
            y: 8.1562
        }, 0).wait(1).to({
            y: 1.674
        }, 0).wait(1).to({
            y: 0
        }, 0).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-38, -32.8, 76, 87.69999999999999);
    (b.asset_messageWindow2 = function(c, e, d) {
        this.initialize(c,
            e, d, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.instance = new b.cursor;
        this.instance.parent = this;
        this.instance.setTransform(106.05, 31.65, .1002, .1009, 0, 0, 0, 0, -.5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.702)").s().p("AwaFnQhjAAAAhjIAAoIQAAhiBjAAMAg1AAAQBjAAAABiIAAIIQAABjhjAAg");
        this.shape.setTransform(0, 4.75);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        g(b.asset_messageWindow2, new a.Rectangle(-115, -31.1, 230, 71.80000000000001), null);
    (b.arrows = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_8 = function() {
            this.gotoAndPlay(0)
        };
        this.timeline.addTween(a.Tween.get(this).wait(8).call(this.frame_8).wait(1));
        this.instance = new b.arrow_inner;
        this.instance.parent = this;
        this.instance.setTransform(-2.7, -2.7);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regX: -4.7,
            regY: -4.7,
            x: -7.25,
            y: -7.25
        }, 0).wait(1).to({
            x: -6.9,
            y: -6.9
        }, 0).wait(1).to({
            x: -6.6,
            y: -6.6
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -1.8,
            y: -1.8
        }, 0).wait(1).to({
            regX: -4.7,
            regY: -4.7,
            x: -6.6,
            y: -6.6
        }, 0).wait(1).to({
            x: -6.95,
            y: -6.95
        }, 0).wait(1).to({
            x: -7.25,
            y: -7.25
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -2.7,
            y: -2.7
        }, 0).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-12.8, -12.6, 11.600000000000001, 11.299999999999999);
    (b.spread_star = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_16 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(16).call(this.frame_16).wait(1));
        this.instance = new b.guideline;
        this.instance.parent = this;
        this.instance.setTransform(-.5, -.45, 1, 1, 0, 0, 0, .5, 1);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            _off: !0
        }, 16).wait(1));
        this.instance_1 = new b.spread_star_inner;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, .7487, .7487);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            regY: -3,
            scaleX: .8883,
            scaleY: .8883,
            rotation: -139.8709,
            x: -1.8,
            y: -87.35,
            alpha: .9392
        }, 0).wait(1).to({
            scaleX: .9721,
            scaleY: .9721,
            rotation: -7.7935,
            x: -.45,
            y: -145.75,
            alpha: .9028
        }, 0).wait(1).to({
            regX: -.1,
            regY: -.1,
            scaleX: 1,
            scaleY: 1,
            rotation: 36.2324,
            x: -.15,
            y: -160.85,
            alpha: .8906
        }, 0).wait(1).to({
            regX: 0,
            regY: -3,
            scaleX: .9455,
            scaleY: .9455,
            rotation: 43.0499,
            x: 1.85,
            y: -169.9,
            alpha: .8239
        }, 0).wait(1).to({
            scaleX: .891,
            scaleY: .891,
            rotation: 49.8675,
            x: 1.95,
            y: -176.75,
            alpha: .7572
        }, 0).wait(1).to({
            scaleX: .8365,
            scaleY: .8365,
            rotation: 56.685,
            x: 2,
            y: -183.6,
            alpha: .6904
        }, 0).wait(1).to({
            scaleX: .782,
            scaleY: .782,
            rotation: 63.5025,
            y: -190.45,
            alpha: .6237
        }, 0).wait(1).to({
            scaleX: .7275,
            scaleY: .7275,
            rotation: 70.3201,
            x: 1.95,
            y: -197.3,
            alpha: .557
        }, 0).wait(1).to({
            scaleX: .673,
            scaleY: .673,
            rotation: 77.1376,
            x: 1.85,
            y: -204.2,
            alpha: .4902
        }, 0).wait(1).to({
            scaleX: .6185,
            scaleY: .6185,
            rotation: 83.9552,
            x: 1.75,
            y: -211.15,
            alpha: .4235
        }, 0).wait(1).to({
            scaleX: .564,
            scaleY: .564,
            rotation: 90.7727,
            x: 1.6,
            y: -218.1,
            alpha: .3568
        }, 0).wait(1).to({
            scaleX: .5096,
            scaleY: .5096,
            rotation: 97.5903,
            x: 1.4,
            y: -225.1,
            alpha: .29
        }, 0).wait(1).to({
            scaleX: .4551,
            scaleY: .4551,
            rotation: 104.4078,
            x: 1.2,
            y: -232.15,
            alpha: .2233
        }, 0).wait(1).to({
            scaleX: .4006,
            scaleY: .4006,
            rotation: 111.2254,
            x: 1,
            y: -239.2,
            alpha: .1566
        }, 0).wait(1).to({
            regY: 0,
            scaleX: .3461,
            scaleY: .3461,
            rotation: 118.0429,
            x: -.1,
            y: -246.9,
            alpha: .0898
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-40.2, -260.4, 83.80000000000001, 280.59999999999997);
    (b.effect_star = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.spread_star;
        this.instance.parent = this;
        this.instance.setTransform(.7, 5.55, .5235, .5235, -177.0259, 0, 0, -.1, -.1);
        this.instance_1 = new b.spread_star;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-16.9, -2.2, .4695, .4695, -81.4512);
        this.instance_2 = new b.spread_star;
        this.instance_2.parent = this;
        this.instance_2.setTransform(14.75, -5.65, .416, .416, 66.1694);
        this.instance_3 = new b.spread_star;
        this.instance_3.parent = this;
        this.instance_3.setTransform(15.05, 5.9, .416, .416, 118.5873);
        this.instance_4 = new b.spread_star;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-3.85, -14, .4603, .4603, -23.464);
        this.instance_5 = new b.spread_star;
        this.instance_5.parent =
            this;
        this.instance_5.setTransform(9.05, -15.9, .3386, .3386, 44.3135);
        this.instance_6 = new b.spread_star;
        this.instance_6.parent = this;
        this.instance_6.setTransform(3.15, -1.2, .5521, .5521, -147.5499);
        this.instance_7 = new b.spread_star;
        this.instance_7.parent = this;
        this.instance_7.setTransform(.4, 1.1, .5521, .5521, 90.4165, 0, 0, .1, -.1);
        this.instance_8 = new b.spread_star;
        this.instance_8.parent = this;
        this.instance_8.setTransform(12.25, 14.2, .4101, .4101, 155.3315);
        this.instance_9 = new b.spread_star;
        this.instance_9.parent =
            this;
        this.instance_9.setTransform(-11.05, 5.95, .4731, .4731, -116.6808);
        this.instance_10 = new b.spread_star;
        this.instance_10.parent = this;
        this.instance_10.setTransform(-11.8, -5.8, .5201, .5201, -44.477);
        this.instance_11 = new b.spread_star;
        this.instance_11.parent = this;
        this.instance_11.setTransform(3.1, 11.3, .5316, .5316, 7.4749, 0, 0, .1, .1);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.instance_11
                }, {
                    t: this.instance_10
                }, {
                    t: this.instance_9
                }, {
                    t: this.instance_8
                }, {
                    t: this.instance_7
                }, {
                    t: this.instance_6
                }, {
                    t: this.instance_5
                },
                {
                    t: this.instance_4
                }, {
                    t: this.instance_3
                }, {
                    t: this.instance_2
                }, {
                    t: this.instance_1
                }, {
                    t: this.instance
                }
            ]
        }).wait(1))
    }).prototype = g(b.effect_star, new a.Rectangle(-29.9, -28.5, 58.4, 55.8), null);
    (b.mc_ring_move = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.gr_ring;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 1.55, 1.672);
        this.instance.alpha = .1992;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            scaleX: 1.5499,
            scaleY: 1.6718,
            alpha: .1995
        }, 0).wait(1).to({
            scaleX: 1.5495,
            scaleY: 1.6713,
            alpha: .2002
        }, 0).wait(1).to({
            scaleX: 1.5488,
            scaleY: 1.6705,
            alpha: .2016
        }, 0).wait(1).to({
            scaleX: 1.5478,
            scaleY: 1.6692,
            alpha: .2036
        }, 0).wait(1).to({
            scaleX: 1.5465,
            scaleY: 1.6675,
            alpha: .2064
        }, 0).wait(1).to({
            scaleX: 1.5447,
            scaleY: 1.6653,
            alpha: .21
        }, 0).wait(1).to({
            scaleX: 1.5425,
            scaleY: 1.6625,
            alpha: .2145
        }, 0).wait(1).to({
            scaleX: 1.5398,
            scaleY: 1.6592,
            alpha: .2199
        }, 0).wait(1).to({
            scaleX: 1.5367,
            scaleY: 1.6552,
            alpha: .2263
        }, 0).wait(1).to({
            scaleX: 1.5331,
            scaleY: 1.6507,
            alpha: .2336
        }, 0).wait(1).to({
            scaleX: 1.5291,
            scaleY: 1.6458,
            alpha: .2416
        }, 0).wait(1).to({
            scaleX: 1.525,
            scaleY: 1.6406,
            alpha: .25
        }, 0).wait(1).to({
            scaleX: 1.5209,
            scaleY: 1.6354,
            alpha: .2584
        }, 0).wait(1).to({
            scaleX: 1.5169,
            scaleY: 1.6304,
            alpha: .2664
        }, 0).wait(1).to({
            scaleX: 1.5133,
            scaleY: 1.6259,
            alpha: .2737
        }, 0).wait(1).to({
            scaleX: 1.5102,
            scaleY: 1.622,
            alpha: .2801
        }, 0).wait(1).to({
            scaleX: 1.5075,
            scaleY: 1.6186,
            alpha: .2855
        }, 0).wait(1).to({
            scaleX: 1.5053,
            scaleY: 1.6158,
            alpha: .29
        }, 0).wait(1).to({
            scaleX: 1.5035,
            scaleY: 1.6136,
            alpha: .2936
        }, 0).wait(1).to({
                scaleX: 1.5022,
                scaleY: 1.6119,
                alpha: .2964
            },
            0).wait(1).to({
            scaleX: 1.5012,
            scaleY: 1.6107,
            alpha: .2984
        }, 0).wait(1).to({
            scaleX: 1.5005,
            scaleY: 1.6098,
            alpha: .2998
        }, 0).wait(1).to({
            scaleX: 1.5001,
            scaleY: 1.6093,
            alpha: .3005
        }, 0).wait(1).to({
            scaleX: 1.5,
            scaleY: 1.6092,
            alpha: .3008
        }, 0).wait(1).to({
            scaleX: 1.5001,
            scaleY: 1.6093,
            alpha: .3006
        }, 0).wait(1).to({
            scaleX: 1.5004,
            scaleY: 1.6097,
            alpha: .2999
        }, 0).wait(1).to({
            scaleX: 1.501,
            scaleY: 1.6104,
            alpha: .2988
        }, 0).wait(1).to({
            scaleX: 1.5018,
            scaleY: 1.6115,
            alpha: .2971
        }, 0).wait(1).to({
            scaleX: 1.503,
            scaleY: 1.6129,
            alpha: .2948
        }, 0).wait(1).to({
            scaleX: 1.5044,
            scaleY: 1.6147,
            alpha: .2918
        }, 0).wait(1).to({
            scaleX: 1.5063,
            scaleY: 1.617,
            alpha: .2881
        }, 0).wait(1).to({
            scaleX: 1.5085,
            scaleY: 1.6198,
            alpha: .2836
        }, 0).wait(1).to({
            scaleX: 1.5111,
            scaleY: 1.6231,
            alpha: .2782
        }, 0).wait(1).to({
            scaleX: 1.5141,
            scaleY: 1.6269,
            alpha: .2721
        }, 0).wait(1).to({
            scaleX: 1.5175,
            scaleY: 1.6312,
            alpha: .2652
        }, 0).wait(1).to({
            scaleX: 1.5212,
            scaleY: 1.6358,
            alpha: .2578
        }, 0).wait(1).to({
            scaleX: 1.525,
            scaleY: 1.6406,
            alpha: .25
        }, 0).wait(1).to({
            scaleX: 1.5288,
            scaleY: 1.6454,
            alpha: .2422
        }, 0).wait(1).to({
            scaleX: 1.5325,
            scaleY: 1.65,
            alpha: .2348
        }, 0).wait(1).to({
            scaleX: 1.5359,
            scaleY: 1.6542,
            alpha: .2279
        }, 0).wait(1).to({
            scaleX: 1.5389,
            scaleY: 1.658,
            alpha: .2218
        }, 0).wait(1).to({
            scaleX: 1.5415,
            scaleY: 1.6613,
            alpha: .2164
        }, 0).wait(1).to({
            scaleX: 1.5437,
            scaleY: 1.6641,
            alpha: .2119
        }, 0).wait(1).to({
            scaleX: 1.5456,
            scaleY: 1.6664,
            alpha: .2082
        }, 0).wait(1).to({
            scaleX: 1.547,
            scaleY: 1.6683,
            alpha: .2052
        }, 0).wait(1).to({
            scaleX: 1.5482,
            scaleY: 1.6697,
            alpha: .2029
        }, 0).wait(1).to({
            scaleX: 1.549,
            scaleY: 1.6707,
            alpha: .2012
        }, 0).wait(1).to({
            scaleX: 1.5496,
            scaleY: 1.6714,
            alpha: .2001
        }, 0).wait(1).to({
            scaleX: 1.5499,
            scaleY: 1.6718,
            alpha: .1994
        }, 0).wait(1).to({
            scaleX: 1.55,
            scaleY: 1.672,
            alpha: .1992
        }, 0).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-198.4, -214, 396.8, 428);
    (b.mc_bubble = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_0 = function() {
            this.gotoAndPlay(Math.floor(20 * Math.random() + 1));
            this.scaleX = this.scaleY = Math.random();
            this.visible = !1
        };
        this.frame_21 = function() {
            this.visible = !0
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(25));
        this.buble = new b.gr_bubble_parts;
        this.buble.name = "buble";
        this.buble.parent = this;
        this.buble.setTransform(0, 0, .2, .2, 89.9956);
        this.timeline.addTween(a.Tween.get(this.buble).to({
            _off: !0
        }, 1).wait(20).to({
            _off: !1,
            scaleX: .5,
            scaleY: .5,
            rotation: 89.9983,
            alpha: .1016
        }, 0).to({
            scaleX: .6,
            scaleY: .6,
            rotation: 89.9985,
            alpha: 1
        }, 12).to({
            scaleX: .7,
            scaleY: .7,
            rotation: 89.9988,
            alpha: .1016
        }, 12).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-49, -49, 98, 98);
    (b.gr_lux_cnt3 = function(c, e, d) {
        this.initialize(c,
            e, d, {});
        this.frame_19 = function() {};
        this.timeline.addTween(a.Tween.get(this).wait(19).call(this.frame_19).wait(1));
        this.instance = new b.gr_lux3;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .7333, .7333);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            scaleX: .7471,
            scaleY: .7471,
            alpha: .9848
        }, 0).wait(1).to({
            scaleX: .7939,
            scaleY: .7939,
            alpha: .933
        }, 0).wait(1).to({
            scaleX: .883,
            scaleY: .883,
            alpha: .8346
        }, 0).wait(1).to({
            scaleX: 1.0199,
            scaleY: 1.0199,
            alpha: .6833
        }, 0).wait(1).to({
            scaleX: 1.1926,
            scaleY: 1.1926,
            alpha: .4924
        }, 0).wait(1).to({
            scaleX: 1.3628,
            scaleY: 1.3628,
            alpha: .3043
        }, 0).wait(1).to({
            scaleX: 1.4949,
            scaleY: 1.4949,
            alpha: .1583
        }, 0).wait(1).to({
            scaleX: 1.5802,
            scaleY: 1.5802,
            alpha: .0641
        }, 0).wait(1).to({
            scaleX: 1.6249,
            scaleY: 1.6249,
            alpha: .0146
        }, 0).wait(1).to({
            scaleX: 1.6381,
            scaleY: 1.6381,
            alpha: 0
        }, 0).wait(1).to({
            scaleX: 1.6209,
            scaleY: 1.6209,
            alpha: .019
        }, 0).wait(1).to({
            scaleX: 1.5617,
            scaleY: 1.5617,
            alpha: .0844
        }, 0).wait(1).to({
            scaleX: 1.4481,
            scaleY: 1.4481,
            alpha: .21
        }, 0).wait(1).to({
            scaleX: 1.2774,
            scaleY: 1.2774,
            alpha: .3987
        }, 0).wait(1).to({
            scaleX: 1.0812,
            scaleY: 1.0812,
            alpha: .6155
        }, 0).wait(1).to({
            scaleX: .9153,
            scaleY: .9153,
            alpha: .7989
        }, 0).wait(1).to({
            scaleX: .8064,
            scaleY: .8064,
            alpha: .9192
        }, 0).wait(1).to({
            scaleX: .7498,
            scaleY: .7498,
            alpha: .9818
        }, 0).wait(1).to({
            scaleX: .7333,
            scaleY: .7333,
            alpha: 1
        }, 0).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-30.1, -30.1, 60.3, 60.3);
    (b.gr_lux_cnt = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_27 = function() {};
        this.timeline.addTween(a.Tween.get(this).wait(27).call(this.frame_27).wait(1));
        this.instance = new b.gr_lux;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .7333, .7333);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            scaleX: .7402,
            scaleY: .7402,
            alpha: .9924
        }, 0).wait(1).to({
            scaleX: .7626,
            scaleY: .7626,
            alpha: .9677
        }, 0).wait(1).to({
            scaleX: .8038,
            scaleY: .8038,
            alpha: .9221
        }, 0).wait(1).to({
            scaleX: .8673,
            scaleY: .8673,
            alpha: .8519
        }, 0).wait(1).to({
            scaleX: .9555,
            scaleY: .9555,
            alpha: .7545
        }, 0).wait(1).to({
            scaleX: 1.0669,
            scaleY: 1.0669,
            alpha: .6314
        }, 0).wait(1).to({
            scaleX: 1.1926,
            scaleY: 1.1926,
            alpha: .4924
        }, 0).wait(1).to({
            scaleX: 1.3169,
            scaleY: 1.3169,
            alpha: .355
        }, 0).wait(1).to({
            scaleX: 1.4252,
            scaleY: 1.4252,
            alpha: .2354
        }, 0).wait(1).to({
            scaleX: 1.5099,
            scaleY: 1.5099,
            alpha: .1417
        }, 0).wait(1).to({
            scaleX: 1.5707,
            scaleY: 1.5707,
            alpha: .0745
        }, 0).wait(1).to({
            scaleX: 1.6101,
            scaleY: 1.6101,
            alpha: .031
        }, 0).wait(1).to({
            scaleX: 1.6316,
            scaleY: 1.6316,
            alpha: .0072
        }, 0).wait(1).to({
            scaleX: 1.6381,
            scaleY: 1.6381,
            alpha: 0
        }, 0).wait(1).to({
            scaleX: 1.6301,
            scaleY: 1.6301,
            alpha: .0088
        }, 0).wait(1).to({
                scaleX: 1.6038,
                scaleY: 1.6038,
                alpha: .0379
            },
            0).wait(1).to({
            scaleX: 1.5551,
            scaleY: 1.5551,
            alpha: .0918
        }, 0).wait(1).to({
            scaleX: 1.4797,
            scaleY: 1.4797,
            alpha: .1751
        }, 0).wait(1).to({
            scaleX: 1.3756,
            scaleY: 1.3756,
            alpha: .2902
        }, 0).wait(1).to({
            scaleX: 1.2475,
            scaleY: 1.2475,
            alpha: .4317
        }, 0).wait(1).to({
            scaleX: 1.1107,
            scaleY: 1.1107,
            alpha: .583
        }, 0).wait(1).to({
            scaleX: .9854,
            scaleY: .9854,
            alpha: .7215
        }, 0).wait(1).to({
            scaleX: .885,
            scaleY: .885,
            alpha: .8324
        }, 0).wait(1).to({
            scaleX: .8128,
            scaleY: .8128,
            alpha: .9122
        }, 0).wait(1).to({
            scaleX: .7662,
            scaleY: .7662,
            alpha: .9637
        }, 0).wait(1).to({
            scaleX: .741,
            scaleY: .741,
            alpha: .9916
        }, 0).wait(1).to({
            scaleX: .7333,
            scaleY: .7333,
            alpha: 1
        }, 0).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-30.1, -30.1, 60.3, 60.3);
    (b.character1_face_close = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.chihiro_face_close = new b.chihiro_face_close_1;
        this.chihiro_face_close.name = "chihiro_face_close";
        this.chihiro_face_close.parent = this;
        this.timeline.addTween(a.Tween.get(this.chihiro_face_close).wait(1))
    }).prototype = g(b.character1_face_close, new a.Rectangle(0,
        0, 70, 35), null);
    (b.character1_face = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_16 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(2));
        c = new a.Shape;
        c._off = !0;
        e = (new a.Graphics).p("AlTCdIAAk5IFFAAIFiCjIAACWg");
        d = (new a.Graphics).p("AjHClIAAlJIFFAAIBKAmIhWEjg");
        var p = (new a.Graphics).p("AhXAqIgihdIABgEIAFgMQAFgLAIgGQATgPAdgBIAZABIA3APIBOA1IASAdIgZA3IgkAWIhbAag"),
            n = (new a.Graphics).p("AlTCdIAAk5IFFAAIFiCjIAACWg"),
            q = (new a.Graphics).p("AhXAqIgihdIABgEIAFgMQAFgLAIgGQATgPAdgBIAZABIA3APIBOA1IASAdIgZA3IgkAWIhbAag");
        this.timeline.addTween(a.Tween.get(c).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(8).to({
            graphics: e,
            x: -.5,
            y: -209.2
        }).wait(1).to({
            graphics: d,
            x: -14.5125,
            y: -210
        }).wait(1).to({
            graphics: p,
            x: -7.15,
            y: -184.625
        }).wait(1).to({
            graphics: n,
            x: -.5,
            y: -209.2
        }).wait(1).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(1).to({
            graphics: q,
            x: -7.15,
            y: -184.625
        }).wait(1).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(4));
        this.chihiro_face_close = new b.chihiro_face_close_1;
        this.chihiro_face_close.name = "chihiro_face_close";
        this.chihiro_face_close.parent = this;
        this.chihiro_face_close.setTransform(-35.5, -227.5);
        this.instance = new b.chihiro_face_sad2;
        this.instance.parent = this;
        this.instance.setTransform(-35.5, -239, .5, .5);
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,0,0,0.898)").s().p("AhXAqIgihdIABgEIAFgMQAFgLAIgGQATgPAdgBIAZABIA3APIBOA1IASAdIgZA3IgkAWIhbAag");
        this.shape.setTransform(-7.15, -184.625);
        e = [this.chihiro_face_close, this.instance, this.shape];
        for (d = 0; d <
            e.length; d++) e[d].mask = c;
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.chihiro_face_close
            }]
        }, 8).to({
            state: [{
                t: this.instance
            }]
        }, 2).to({
            state: [{
                t: this.chihiro_face_close
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.shape
            }, {
                t: this.instance
            }]
        }, 1).to({
            state: []
        }, 1).wait(4));
        c = new a.Shape;
        c._off = !0;
        e = (new a.Graphics).p("AlTn9IAAqoIKnAAIAAKog");
        d = (new a.Graphics).p("AlTn9IAAqoIKnAAIAAKog");
        this.timeline.addTween(a.Tween.get(c).to({
            graphics: e,
            x: -.5035,
            y: -119.0015
        }).wait(16).to({
            graphics: d,
            x: -.5035,
            y: -119.0015
        }).wait(2));
        this.b = new b.character1_base;
        this.b.name = "b";
        this.b.parent = this;
        this.b.setTransform(.5, -.5, 1, 1, 0, 0, 0, .5, -.5);
        this.instance_1 = new b.chihiro_face_laugh;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-35.5, -239, .5, .5);
        this.instance_2 = new b.chihiro_face_smile;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-35.5, -239, .5, .5);
        this.instance_3 = new b.chihiro_face_surprise1;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-35.5, -239, .5, .5);
        this.instance_4 =
            new b.chihiro_face_strong;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-35.5, -239, .5, .5);
        this.instance_5 = new b.chihiro_face_sad;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-35.5, -239, .5, .5);
        this.instance_6 = new b.chihiro_face_surprise2;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-35.5, -239, .5, .5);
        this.instance_7 = new b.chihiro_face_sad2;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-35.5, -239, .5, .5);
        e = [this.b, this.instance_1, this.instance_2, this.instance_3,
            this.instance_4, this.instance_5, this.instance_6, this.instance_7
        ];
        for (d = 0; d < e.length; d++) e[d].mask = c;
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.b
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 2).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
                state: [{
                    t: this.instance_5
                }]
            },
            1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.b
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 2).wait(2))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-41.5, -239, 76, 73);
    (b.fumika_skirtD3_back = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_skirtE1_1("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-37.25, 189.25, 1, 1, 0, 0, 0, 100.3, -126.3);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            regX: 100.2,
            regY: -126.2,
            rotation: -.7073,
            x: -37.3,
            y: 189.35
        }, 29, a.Ease.quadInOut).to({
            regX: 100.3,
            regY: -126.3,
            rotation: 0,
            x: -37.25,
            y: 189.25
        }, 30, a.Ease.quadInOut).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-214.5, 207.5, 271, 227.3);
    (b.fumika_skirtD3_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_skirtC1_1("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-123, 97.9, 1, 1, 0, 0, 0, -165.1, 139.9);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            regX: -164.8,
            regY: 139.8,
            scaleY: 1.05,
            rotation: -1.4473,
            x: -122.95,
            y: 98.05
        }, 29, a.Ease.quadInOut).to({
            regX: -165.1,
            regY: 139.9,
            scaleY: 1,
            rotation: 0,
            x: -123,
            y: 97.9
        }, 30, a.Ease.quadInOut).wait(1));
        this.instance_1 = new b.fumika_skirtD1_1;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-119.25, 125.25, 1, 1, 0, 0, 0, 69.3, -15.3);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(60));
        this.instance_2 = new b.fumika_skirtD3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-117, -40);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(60))
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-188.5, -61.3, 576.3, 519.6);
    (b.fumika_skirtD2_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_skirtC2_1("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(347, 130.35, 1, 1, 0, 0, 0, -1.5, -37.6);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            regX: -1.4,
            regY: -37.5,
            scaleY: 1.0694,
            rotation: 4.0003,
            x: 347.1,
            y: 130.4
        }, 29, a.Ease.quadInOut).to({
            regX: -1.5,
            regY: -37.6,
            scaleY: 1,
            rotation: 0,
            x: 347,
            y: 130.35
        }, 30, a.Ease.quadInOut).wait(1));
        this.instance_1 = new b.fumika_skirtD2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, -52);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(60));
        this.instance_2 = new b.fumika_skirtE3_1("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(292.6, 101.55, 1, 1, 0, 0, 0, 197.6, -217.6);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(60))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, -52, 405, 420.2);
    (b.fumika_skirt = function(c, e, d) {
        this.initialize(c, e,
            d, {});
        this.instance = new b.fumika_skirtA;
        this.instance.parent = this;
        this.instance.setTransform(199, 87);
        this.timeline.addTween(a.Tween.get(this.instance).wait(60));
        this.instance_1 = new b.fumika_skirtB1_1("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(293.6, 134.3, 1, 1, 0, 0, 0, 53.6, 52.3);
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            regX: 53.7,
            regY: 52.5,
            rotation: -3.3889,
            x: 293.7,
            y: 134.45
        }, 25, a.Ease.quadInOut).to({
            regX: 53.6,
            regY: 52.3,
            rotation: 0,
            x: 293.6,
            y: 134.3
        }, 34, a.Ease.quadInOut).wait(1));
        this.instance_2 = new b.fumika_skirtB2_1("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(297.7, 138.3, 1, 1, 0, 0, 0, 198.7, 60.3);
        this.timeline.addTween(a.Tween.get(this.instance_2).to({
            regX: 198.8,
            regY: 60.4,
            rotation: 1.4497,
            x: 297.75,
            y: 138.45
        }, 25, a.Ease.quadInOut).to({
            regX: 198.7,
            regY: 60.3,
            rotation: 0,
            x: 297.7,
            y: 138.3
        }, 34, a.Ease.quadInOut).wait(1));
        this.instance_3 = new b.fumika_skirtD3_1("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(306.4, 153, 1, 1, 0, 0, 0, -113.6, 110);
        this.timeline.addTween(a.Tween.get(this.instance_3).to({
            regY: 110.1,
            rotation: -2.2238,
            y: 153.1,
            startPosition: 29
        }, 29, a.Ease.quadInOut).to({
            regY: 110,
            rotation: 0,
            y: 153,
            startPosition: 59
        }, 30, a.Ease.quadInOut).wait(1));
        this.instance_4 = new b.fumika_skirtD2_1("synched", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(303.3, 153, 1, 1, 0, 0, 0, 303.3, 106);
        this.timeline.addTween(a.Tween.get(this.instance_4).to({
            regX: 303.4,
            rotation: 1.2258,
            x: 303.4,
            y: 149.35,
            startPosition: 29
        }, 29, a.Ease.quadInOut).to({
            regX: 303.3,
            rotation: 0,
            x: 303.3,
            y: 153,
            startPosition: 59
        }, 30, a.Ease.quadInOut).wait(1));
        this.instance_5 = new b.fumika_skirtD3_back("synched", 0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(306.4, 153, 1, 1, 0, 0, 0, -113.6, 110);
        this.timeline.addTween(a.Tween.get(this.instance_5).to({
            regY: 110.1,
            rotation: -2.2238,
            y: 153.1,
            startPosition: 29
        }, 29, a.Ease.quadInOut).to({
            regY: 110,
            rotation: 0,
            y: 153,
            startPosition: 59
        }, 30, a.Ease.quadInOut).wait(1));
        this.instance_6 = new b.fumika_skirtE2_1("synched", 0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(311.7, 149.8, 1, 1, 0, 0, 0, -108.3, -309.2);
        this.timeline.addTween(a.Tween.get(this.instance_6).to({
            regX: -108.2,
            rotation: -1.4497,
            x: 311.85
        }, 32, a.Ease.quadInOut).to({
            regX: -108.3,
            rotation: 0,
            x: 311.7
        }, 27, a.Ease.quadInOut).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-5.3, -37.1, 825.6999999999999, 556.1);
    (b.fumika_head_last = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_head_acc1_1("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(185.05, 40, 1, 1, 0, 0, 0, 100.5, 74);
        this.timeline.addTween(a.Tween.get(this.instance).wait(114));
        this.instance_1 = new b.fumika_head_acc2_1("synched",
            0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(257.55, 108.8, 1, 1, 0, 0, 0, 15, 6.8);
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            rotation: -5.4654,
            x: 257.6,
            y: 108.75
        }, 16, a.Ease.quadInOut).to({
            rotation: 0,
            x: 257.55,
            y: 108.8
        }, 37, a.Ease.quadInOut).to({
            startPosition: 0
        }, 1, a.Ease.quadInOut).to({
            rotation: -5.4654,
            x: 257.6,
            y: 108.75
        }, 22, a.Ease.quadInOut).to({
            rotation: 0,
            x: 257.55,
            y: 108.8
        }, 37, a.Ease.quadInOut).wait(1));
        this.instance_2 = new b.fumika_head_acc3_1("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(267.85, 119.7, 1, 1, 0, 0, 0, 10.3, 9.7);
        this.timeline.addTween(a.Tween.get(this.instance_2).to({
            regY: 9.8,
            rotation: -11.2077,
            y: 119.8
        }, 20, a.Ease.quadInOut).to({
            regY: 9.7,
            rotation: 0,
            y: 119.7
        }, 33, a.Ease.quadInOut).to({
            startPosition: 0
        }, 1, a.Ease.quadInOut).to({
            regY: 9.8,
            rotation: -11.2077,
            y: 119.8
        }, 26, a.Ease.quadInOut).to({
            regY: 9.7,
            rotation: 0,
            y: 119.7
        }, 33, a.Ease.quadInOut).wait(1));
        this.instance_3 = new b.fumika_head_acc4_1("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(268.35,
            140.6, 1, 1, 0, 0, 0, -2.2, 3.6);
        this.timeline.addTween(a.Tween.get(this.instance_3).to({
            rotation: -6.6806,
            x: 268.3
        }, 23, a.Ease.quadInOut).to({
            rotation: 0,
            x: 268.35
        }, 30, a.Ease.quadInOut).to({
            startPosition: 0
        }, 1, a.Ease.quadInOut).to({
            rotation: -6.6806,
            x: 268.3
        }, 29, a.Ease.quadInOut).to({
            rotation: 0,
            x: 268.35
        }, 30, a.Ease.quadInOut).wait(1));
        this.instance_4 = new b.fumika_head_acc5_1("synched", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(281.15, 114.3, 1, 1, 0, 0, 0, -8.4, 8.3);
        this.timeline.addTween(a.Tween.get(this.instance_4).to({
            regX: -8.3,
            rotation: -5.2539,
            x: 281.25
        }, 13, a.Ease.quadInOut).to({
            regX: -8.4,
            rotation: 0,
            x: 281.15
        }, 40, a.Ease.quadInOut).to({
            startPosition: 0
        }, 1, a.Ease.quadInOut).to({
            regX: -8.3,
            rotation: -5.2539,
            x: 281.25
        }, 19, a.Ease.quadInOut).to({
            regX: -8.4,
            rotation: 0,
            x: 281.15
        }, 40, a.Ease.quadInOut).wait(1));
        this.instance_5 = new b.fumika_head_acc6_1("synched", 0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(257.05, 107.7, 1, 1, 0, 0, 0, 21.5, 1.7);
        this.timeline.addTween(a.Tween.get(this.instance_5).to({
            regX: 21.6,
            regY: 1.8,
            rotation: -7.2083,
            x: 257.25,
            y: 107.8
        }, 32, a.Ease.quadInOut).to({
            regX: 21.5,
            regY: 1.7,
            rotation: 0,
            x: 257.05,
            y: 107.7
        }, 21, a.Ease.quadInOut).to({
            startPosition: 0
        }, 1, a.Ease.quadInOut).to({
            regX: 21.6,
            regY: 1.8,
            rotation: -7.2083,
            x: 257.25,
            y: 107.8
        }, 38, a.Ease.quadInOut).to({
            regX: 21.5,
            regY: 1.7,
            rotation: 0,
            x: 257.05,
            y: 107.7
        }, 21, a.Ease.quadInOut).wait(1));
        this.instance_6 = new b.fumika_head_acc7_1("synched", 0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(252.55, 106.9, 1, 1, 0, 0, 0, 17, -30.1);
        this.timeline.addTween(a.Tween.get(this.instance_6).to({
            rotation: -3.1962,
            x: 252.5
        }, 26, a.Ease.quadInOut).to({
            rotation: 0,
            x: 252.55
        }, 27, a.Ease.quadInOut).to({
            startPosition: 0
        }, 1, a.Ease.quadInOut).to({
            rotation: -3.1962,
            x: 252.5
        }, 32, a.Ease.quadInOut).to({
            rotation: 0,
            x: 252.55
        }, 27, a.Ease.quadInOut).wait(1));
        this.instance_7 = new b.fumika_hair0;
        this.instance_7.parent = this;
        this.instance_7.setTransform(156.4, 24.5, 1, 1, 0, 0, 0, 7, 3.2);
        this.timeline.addTween(a.Tween.get(this.instance_7).to({
            regY: 3.3,
            rotation: -3.7454,
            y: 24.6
        }, 23, a.Ease.quadInOut).to({
            regY: 3.2,
            rotation: 0,
            y: 24.5
        }, 30, a.Ease.quadInOut).wait(1).to({
            regY: 3.3,
            rotation: -3.7454,
            y: 24.6
        }, 29, a.Ease.quadInOut).to({
            regY: 3.2,
            rotation: 0,
            y: 24.5
        }, 30, a.Ease.quadInOut).wait(1));
        this.instance_8 = new b.fumika_eyebrows1_1;
        this.instance_8.parent = this;
        this.instance_8.setTransform(150.5, 108);
        this.instance_9 = new b.fumika_eyebrows2_1;
        this.instance_9.parent = this;
        this.instance_9.setTransform(150.5, 108);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_8
            }]
        }).to({
            state: [{
                t: this.instance_9
            }]
        }, 38).wait(76));
        this.instance_10 = new b.fumika_hair1_1("synched", 0);
        this.instance_10.parent =
            this;
        this.instance_10.setTransform(248.2, 99.1, 1, 1, 0, 0, 0, 105.2, -.9);
        this.timeline.addTween(a.Tween.get(this.instance_10).to({
            rotation: -3.3022,
            y: 99.15
        }, 21, a.Ease.quadInOut).to({
            rotation: 0,
            y: 99.1
        }, 32, a.Ease.quadInOut).to({
            startPosition: 0
        }, 1, a.Ease.quadInOut).to({
            rotation: -3.3022,
            y: 99.15
        }, 27, a.Ease.quadInOut).to({
            rotation: 0,
            y: 99.1
        }, 32, a.Ease.quadInOut).wait(1));
        this.instance_11 = new b.fumika_hair2_1("synched", 0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(112.6, 38.7, 1, 1, 0, 0, 0, 51.6, 7.7);
        this.timeline.addTween(a.Tween.get(this.instance_11).to({
            regX: 51.7,
            regY: 7.8,
            rotation: -2.1923,
            x: 112.7,
            y: 38.75
        }, 28, a.Ease.quadInOut).to({
            regX: 51.6,
            regY: 7.7,
            rotation: 0,
            x: 112.6,
            y: 38.7
        }, 25, a.Ease.quadInOut).to({
            startPosition: 0
        }, 1, a.Ease.quadInOut).to({
            regX: 51.7,
            regY: 7.8,
            rotation: -2.1923,
            x: 112.7,
            y: 38.75
        }, 34, a.Ease.quadInOut).to({
            regX: 51.6,
            regY: 7.7,
            rotation: 0,
            x: 112.6,
            y: 38.7
        }, 25, a.Ease.quadInOut).wait(1));
        this.instance_12 = new b.fumika_hair3_1("synched", 0);
        this.instance_12.parent = this;
        this.instance_12.setTransform(65.2,
            105.2, 1, 1, 0, 0, 0, 25.2, 2.2);
        this.timeline.addTween(a.Tween.get(this.instance_12).to({
            regY: 2.3,
            rotation: -3.9478,
            y: 105.3
        }, 11, a.Ease.quadInOut).to({
            regY: 2.2,
            rotation: 0,
            y: 105.2
        }, 42, a.Ease.quadInOut).to({
            startPosition: 0
        }, 1, a.Ease.quadInOut).to({
            regY: 2.3,
            rotation: -3.9478,
            y: 105.3
        }, 17, a.Ease.quadInOut).to({
            regY: 2.2,
            rotation: 0,
            y: 105.2
        }, 42, a.Ease.quadInOut).wait(1));
        this.instance_13 = new b.fumika_hair4_1("synched", 0);
        this.instance_13.parent = this;
        this.instance_13.setTransform(68.3, 138.8, 1, 1, 0, 0, 0, 14.3, -2.2);
        this.timeline.addTween(a.Tween.get(this.instance_13).to({
            regY: -2.1,
            rotation: -3.2277,
            x: 68.35,
            y: 138.9
        }, 24, a.Ease.quadInOut).to({
            regY: -2.2,
            rotation: 0,
            x: 68.3,
            y: 138.8
        }, 29, a.Ease.quadInOut).to({
            startPosition: 0
        }, 1, a.Ease.quadInOut).to({
            regY: -2.1,
            rotation: -3.2277,
            x: 68.35,
            y: 138.9
        }, 30, a.Ease.quadInOut).to({
            regY: -2.2,
            rotation: 0,
            x: 68.3,
            y: 138.8
        }, 29, a.Ease.quadInOut).wait(1));
        this.instance_14 = new b.fumika_hair5_1_1;
        this.instance_14.parent = this;
        this.instance_14.setTransform(250.2, 98.8, 1, 1, 0, 0, 0, 9.8, -60.2);
        this.timeline.addTween(a.Tween.get(this.instance_14).to({
            regX: 9.9,
            regY: -60.1,
            rotation: -4.6545,
            x: 250.25,
            y: 98.9
        }, 16, a.Ease.quadInOut).to({
            regX: 9.8,
            regY: -60.2,
            rotation: 0,
            x: 250.2,
            y: 98.8
        }, 37, a.Ease.quadInOut).wait(1).to({
            regX: 9.9,
            regY: -60.1,
            rotation: -4.6545,
            x: 250.25,
            y: 98.9
        }, 22, a.Ease.quadInOut).to({
            regX: 9.8,
            regY: -60.2,
            rotation: 0,
            x: 250.2,
            y: 98.8
        }, 37, a.Ease.quadInOut).wait(1));
        this.instance_15 = new b.fumika_hair5_2_1;
        this.instance_15.parent = this;
        this.instance_15.setTransform(259.05, 120.4, 1, 1, 0, 0, 0, -9.6, -57);
        this.timeline.addTween(a.Tween.get(this.instance_15).to({
            regX: -9.5,
            rotation: -4.9993,
            x: 259.1,
            y: 120.35
        }, 20, a.Ease.quadInOut).to({
            regX: -9.6,
            rotation: 0,
            x: 259.05,
            y: 120.4
        }, 33, a.Ease.quadInOut).wait(1).to({
            regX: -9.5,
            rotation: -4.9993,
            x: 259.1,
            y: 120.35
        }, 26, a.Ease.quadInOut).to({
            regX: -9.6,
            rotation: 0,
            x: 259.05,
            y: 120.4
        }, 33, a.Ease.quadInOut).wait(1));
        this.instance_16 = new b.fumika_hair6_1("synched", 0);
        this.instance_16.parent = this;
        this.instance_16.setTransform(263.3, 149.4, 1, 1, 0, 0, 0, -15.7, -26.6);
        this.timeline.addTween(a.Tween.get(this.instance_16).to({
            regX: -15.6,
            regY: -26.5,
            rotation: -5.998,
            x: 263.4,
            y: 149.45
        }, 27, a.Ease.quadInOut).to({
            regX: -15.7,
            regY: -26.6,
            rotation: 0,
            x: 263.3,
            y: 149.4
        }, 26, a.Ease.quadInOut).to({
            startPosition: 0
        }, 1, a.Ease.quadInOut).to({
            regX: -15.6,
            regY: -26.5,
            rotation: -5.998,
            x: 263.4,
            y: 149.45
        }, 33, a.Ease.quadInOut).to({
            regX: -15.7,
            regY: -26.6,
            rotation: 0,
            x: 263.3,
            y: 149.4
        }, 26, a.Ease.quadInOut).wait(1));
        this.instance_17 = new b.fumika_hair7_1("synched", 0);
        this.instance_17.parent = this;
        this.instance_17.setTransform(152.6, 17.8, 1, 1, 0, 0, 0, 23.6, -7.2);
        this.timeline.addTween(a.Tween.get(this.instance_17).to({
            rotation: -1.9999,
            y: 17.75
        }, 35, a.Ease.quadInOut).to({
            rotation: 0,
            y: 17.8
        }, 18, a.Ease.quadInOut).to({
            startPosition: 0
        }, 1, a.Ease.quadInOut).to({
            rotation: -1.9999,
            y: 17.75
        }, 41, a.Ease.quadInOut).to({
            rotation: 0,
            y: 17.8
        }, 18, a.Ease.quadInOut).wait(1));
        this.instance_18 = new b.fumika_hair8_1("synched", 0);
        this.instance_18.parent = this;
        this.instance_18.setTransform(159, 85, 1, 1, 0, 0, 0, 119, 85);
        this.timeline.addTween(a.Tween.get(this.instance_18).wait(114));
        this.instance_19 = new b.fumika_hair9_1("synched", 0);
        this.instance_19.parent = this;
        this.instance_19.setTransform(86,
            48, 1, 1, 0, 0, 0, 86, 5);
        this.timeline.addTween(a.Tween.get(this.instance_19).to({
            rotation: -1.9509,
            x: 84.55
        }, 30, a.Ease.quadInOut).to({
            rotation: 0,
            x: 86
        }, 23, a.Ease.quadInOut).to({
            startPosition: 0
        }, 1, a.Ease.quadInOut).to({
            rotation: -1.9509,
            x: 84.55
        }, 36, a.Ease.quadInOut).to({
            rotation: 0,
            x: 86
        }, 23, a.Ease.quadInOut).wait(1));
        this.instance_20 = new b.fumika_hair10_1("synched", 0);
        this.instance_20.parent = this;
        this.instance_20.setTransform(99.9, 25.5, 1, 1, 0, 0, 0, 95.9, -6.5);
        this.timeline.addTween(a.Tween.get(this.instance_20).to({
                rotation: -2.1923
            },
            23, a.Ease.quadInOut).to({
            rotation: 0
        }, 30, a.Ease.quadInOut).to({
            startPosition: 0
        }, 1, a.Ease.quadInOut).to({
            rotation: -2.1923
        }, 29, a.Ease.quadInOut).to({
            rotation: 0
        }, 30, a.Ease.quadInOut).wait(1));
        this.instance_21 = new b.fumika_eye1_1;
        this.instance_21.parent = this;
        this.instance_21.setTransform(140, 141.5);
        this.instance_22 = new b.fumika_eye_close_1;
        this.instance_22.parent = this;
        this.instance_22.setTransform(140, 141.5);
        this.instance_23 = new b.fumika_eye2_1;
        this.instance_23.parent = this;
        this.instance_23.setTransform(140,
            141.5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_21
            }]
        }).to({
            state: [{
                t: this.instance_22
            }]
        }, 18).to({
            state: [{
                t: this.instance_21
            }]
        }, 2).to({
            state: [{
                t: this.instance_23
            }]
        }, 16).wait(78));
        this.instance_24 = new b.fumika_mouth1_1;
        this.instance_24.parent = this;
        this.instance_24.setTransform(122.6, 202.6);
        this.instance_25 = new b.fumika_mouth2_1;
        this.instance_25.parent = this;
        this.instance_25.setTransform(122.6, 202.6);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_24
            }]
        }).to({
                state: [{
                    t: this.instance_25
                }]
            },
            36).wait(78));
        this.instance_26 = new b.fumika_cheek1_1;
        this.instance_26.parent = this;
        this.instance_26.setTransform(150.25, 176.25);
        this.instance_27 = new b.fumika_cheek2_1;
        this.instance_27.parent = this;
        this.instance_27.setTransform(150.25, 176.25);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_26
            }]
        }).to({
            state: [{
                t: this.instance_27
            }]
        }, 36).wait(78));
        this.instance_28 = new b.fumika_face_1("synched", 0);
        this.instance_28.parent = this;
        this.instance_28.setTransform(150.5, 157, 1, 1, 0, 0, 0, 85.5, 84);
        this.timeline.addTween(a.Tween.get(this.instance_28).wait(114))
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-4.9, -34, 477.79999999999995, 459.2);
    (b.fumika_head = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_head_acc1_1("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(185.05, 40, 1, 1, 0, 0, 0, 100.5, 74);
        this.timeline.addTween(a.Tween.get(this.instance).wait(60));
        this.instance_1 = new b.fumika_head_acc2_1("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(257.55, 108.8, 1, 1, 0, 0, 0, 15, 6.8);
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            rotation: -5.4654,
            x: 257.6,
            y: 108.75
        }, 22, a.Ease.quadInOut).to({
            rotation: 0,
            x: 257.55,
            y: 108.8
        }, 37, a.Ease.quadInOut).wait(1));
        this.instance_2 = new b.fumika_head_acc3_1("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(267.85, 119.7, 1, 1, 0, 0, 0, 10.3, 9.7);
        this.timeline.addTween(a.Tween.get(this.instance_2).to({
            regY: 9.8,
            rotation: -11.2077,
            y: 119.8
        }, 26, a.Ease.quadInOut).to({
            regY: 9.7,
            rotation: 0,
            y: 119.7
        }, 33, a.Ease.quadInOut).wait(1));
        this.instance_3 = new b.fumika_head_acc4_1("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(268.35, 140.6, 1, 1, 0, 0, 0, -2.2, 3.6);
        this.timeline.addTween(a.Tween.get(this.instance_3).to({
            rotation: -6.6806,
            x: 268.3
        }, 29, a.Ease.quadInOut).to({
            rotation: 0,
            x: 268.35
        }, 30, a.Ease.quadInOut).wait(1));
        this.instance_4 = new b.fumika_head_acc5_1("synched", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(281.15, 114.3, 1, 1, 0, 0, 0, -8.4, 8.3);
        this.timeline.addTween(a.Tween.get(this.instance_4).to({
            regX: -8.3,
            rotation: -5.2539,
            x: 281.25
        }, 19, a.Ease.quadInOut).to({
            regX: -8.4,
            rotation: 0,
            x: 281.15
        }, 40, a.Ease.quadInOut).wait(1));
        this.instance_5 = new b.fumika_head_acc6_1("synched", 0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(257.05, 107.7, 1, 1, 0, 0, 0, 21.5, 1.7);
        this.timeline.addTween(a.Tween.get(this.instance_5).to({
            regX: 21.6,
            regY: 1.8,
            rotation: -7.2083,
            x: 257.25,
            y: 107.8
        }, 38, a.Ease.quadInOut).to({
            regX: 21.5,
            regY: 1.7,
            rotation: 0,
            x: 257.05,
            y: 107.7
        }, 21, a.Ease.quadInOut).wait(1));
        this.instance_6 = new b.fumika_head_acc7_1("synched", 0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(252.55,
            106.9, 1, 1, 0, 0, 0, 17, -30.1);
        this.timeline.addTween(a.Tween.get(this.instance_6).to({
            rotation: -3.1962,
            x: 252.5
        }, 32, a.Ease.quadInOut).to({
            rotation: 0,
            x: 252.55
        }, 27, a.Ease.quadInOut).wait(1));
        this.instance_7 = new b.fumika_hair0;
        this.instance_7.parent = this;
        this.instance_7.setTransform(156.4, 24.5, 1, 1, 0, 0, 0, 7, 3.2);
        this.timeline.addTween(a.Tween.get(this.instance_7).to({
            regY: 3.3,
            rotation: -3.7454,
            y: 24.6
        }, 29, a.Ease.quadInOut).to({
            regY: 3.2,
            rotation: 0,
            y: 24.5
        }, 30, a.Ease.quadInOut).wait(1));
        this.instance_8 = new b.fumika_eyebrows1_1;
        this.instance_8.parent = this;
        this.instance_8.setTransform(150.5, 108);
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(60));
        this.instance_9 = new b.fumika_hair1_1("synched", 0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(248.2, 99.1, 1, 1, 0, 0, 0, 105.2, -.9);
        this.timeline.addTween(a.Tween.get(this.instance_9).to({
            rotation: -3.3022,
            y: 99.15
        }, 27, a.Ease.quadInOut).to({
            rotation: 0,
            y: 99.1
        }, 32, a.Ease.quadInOut).wait(1));
        this.instance_10 = new b.fumika_hair2_1("synched", 0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(112.6, 38.7, 1, 1, 0, 0, 0, 51.6, 7.7);
        this.timeline.addTween(a.Tween.get(this.instance_10).to({
            regX: 51.7,
            regY: 7.8,
            rotation: -2.1923,
            x: 112.7,
            y: 38.75
        }, 34, a.Ease.quadInOut).to({
            regX: 51.6,
            regY: 7.7,
            rotation: 0,
            x: 112.6,
            y: 38.7
        }, 25, a.Ease.quadInOut).wait(1));
        this.instance_11 = new b.fumika_hair3_1("synched", 0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(65.2, 105.2, 1, 1, 0, 0, 0, 25.2, 2.2);
        this.timeline.addTween(a.Tween.get(this.instance_11).to({
                regY: 2.3,
                rotation: -3.9478,
                y: 105.3
            },
            17, a.Ease.quadInOut).to({
            regY: 2.2,
            rotation: 0,
            y: 105.2
        }, 42, a.Ease.quadInOut).wait(1));
        this.instance_12 = new b.fumika_hair4_1("synched", 0);
        this.instance_12.parent = this;
        this.instance_12.setTransform(68.3, 138.8, 1, 1, 0, 0, 0, 14.3, -2.2);
        this.timeline.addTween(a.Tween.get(this.instance_12).to({
            regY: -2.1,
            rotation: -3.2277,
            x: 68.35,
            y: 138.9
        }, 30, a.Ease.quadInOut).to({
            regY: -2.2,
            rotation: 0,
            x: 68.3,
            y: 138.8
        }, 29, a.Ease.quadInOut).wait(1));
        this.instance_13 = new b.fumika_hair5_1_1;
        this.instance_13.parent = this;
        this.instance_13.setTransform(250.2,
            98.8, 1, 1, 0, 0, 0, 9.8, -60.2);
        this.timeline.addTween(a.Tween.get(this.instance_13).to({
            regX: 9.9,
            regY: -60.1,
            rotation: -4.6545,
            x: 250.25,
            y: 98.9
        }, 22, a.Ease.quadInOut).to({
            regX: 9.8,
            regY: -60.2,
            rotation: 0,
            x: 250.2,
            y: 98.8
        }, 37, a.Ease.quadInOut).wait(1));
        this.instance_14 = new b.fumika_hair5_2_1;
        this.instance_14.parent = this;
        this.instance_14.setTransform(259.05, 120.4, 1, 1, 0, 0, 0, -9.6, -57);
        this.timeline.addTween(a.Tween.get(this.instance_14).to({
            regX: -9.5,
            rotation: -4.9993,
            x: 259.1,
            y: 120.35
        }, 26, a.Ease.quadInOut).to({
            regX: -9.6,
            rotation: 0,
            x: 259.05,
            y: 120.4
        }, 33, a.Ease.quadInOut).wait(1));
        this.instance_15 = new b.fumika_hair6_1("synched", 0);
        this.instance_15.parent = this;
        this.instance_15.setTransform(263.3, 149.4, 1, 1, 0, 0, 0, -15.7, -26.6);
        this.timeline.addTween(a.Tween.get(this.instance_15).to({
            regX: -15.6,
            regY: -26.5,
            rotation: -5.998,
            x: 263.4,
            y: 149.45
        }, 33, a.Ease.quadInOut).to({
            regX: -15.7,
            regY: -26.6,
            rotation: 0,
            x: 263.3,
            y: 149.4
        }, 26, a.Ease.quadInOut).wait(1));
        this.instance_16 = new b.fumika_hair7_1("synched", 0);
        this.instance_16.parent = this;
        this.instance_16.setTransform(152.6, 17.8, 1, 1, 0, 0, 0, 23.6, -7.2);
        this.timeline.addTween(a.Tween.get(this.instance_16).to({
            rotation: -1.9999,
            y: 17.75
        }, 41, a.Ease.quadInOut).to({
            rotation: 0,
            y: 17.8
        }, 18, a.Ease.quadInOut).wait(1));
        this.instance_17 = new b.fumika_hair8_1("synched", 0);
        this.instance_17.parent = this;
        this.instance_17.setTransform(159, 85, 1, 1, 0, 0, 0, 119, 85);
        this.timeline.addTween(a.Tween.get(this.instance_17).wait(60));
        this.instance_18 = new b.fumika_hair9_1("synched", 0);
        this.instance_18.parent = this;
        this.instance_18.setTransform(86,
            48, 1, 1, 0, 0, 0, 86, 5);
        this.timeline.addTween(a.Tween.get(this.instance_18).to({
            rotation: -1.9509,
            x: 84.55
        }, 36, a.Ease.quadInOut).to({
            rotation: 0,
            x: 86
        }, 23, a.Ease.quadInOut).wait(1));
        this.instance_19 = new b.fumika_hair10_1("synched", 0);
        this.instance_19.parent = this;
        this.instance_19.setTransform(99.9, 25.5, 1, 1, 0, 0, 0, 95.9, -6.5);
        this.timeline.addTween(a.Tween.get(this.instance_19).to({
            rotation: -2.1923
        }, 29, a.Ease.quadInOut).to({
            rotation: 0
        }, 30, a.Ease.quadInOut).wait(1));
        this.instance_20 = new b.fumika_eye1_1;
        this.instance_20.parent =
            this;
        this.instance_20.setTransform(140, 141.5);
        this.instance_21 = new b.fumika_eye_close_1;
        this.instance_21.parent = this;
        this.instance_21.setTransform(140, 141.5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_20
            }]
        }).to({
            state: [{
                t: this.instance_21
            }]
        }, 24).to({
            state: [{
                t: this.instance_20
            }]
        }, 2).wait(34));
        this.instance_22 = new b.fumika_mouth1_1;
        this.instance_22.parent = this;
        this.instance_22.setTransform(122.6, 202.6);
        this.timeline.addTween(a.Tween.get(this.instance_22).wait(60));
        this.instance_23 =
            new b.fumika_cheek1_1;
        this.instance_23.parent = this;
        this.instance_23.setTransform(150.25, 176.25);
        this.timeline.addTween(a.Tween.get(this.instance_23).wait(60));
        this.instance_24 = new b.fumika_face_1("synched", 0);
        this.instance_24.parent = this;
        this.instance_24.setTransform(150.5, 157, 1, 1, 0, 0, 0, 85.5, 84);
        this.timeline.addTween(a.Tween.get(this.instance_24).wait(60))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-4.9, -34, 477.79999999999995, 459.2);
    (b.fumika_hair_back = function(c, e, d) {
        this.initialize(c,
            e, d, {});
        this.instance = new b.fumika_hair_back2_1("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(131.1, -28, 1, 1, 0, 0, 0, -72.9, -93);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            rotation: -6.9439,
            y: -28.1
        }, 23, a.Ease.quadInOut).to({
            rotation: 0,
            y: -28
        }, 36, a.Ease.quadInOut).wait(1));
        this.instance_1 = new b.fumika_hair_back3_1("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(178.1, -50.2, 1, 1, 0, 0, 0, -60.9, -50.2);
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            regY: -50.3,
            rotation: -8.6744,
            y: -50.25
        }, 30, a.Ease.quadInOut).to({
            regY: -50.2,
            rotation: 0,
            y: -50.2
        }, 29, a.Ease.quadInOut).wait(1));
        this.instance_2 = new b.fumika_hair_back1_1("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(95.7, -38.5, 1, 1, 0, 0, 0, 95.7, -39.5);
        this.timeline.addTween(a.Tween.get(this.instance_2).to({
            regY: -39.4,
            rotation: -1.9763
        }, 37, a.Ease.quadInOut).to({
            regY: -39.5,
            rotation: 0
        }, 22, a.Ease.quadInOut).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-5.9, -159.7, 407.9,
        418.9);
    (b.fumika_footL2_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_footL2;
        this.instance.parent = this;
        this.instance.setTransform(1.9, -5.45);
        this.timeline.addTween(a.Tween.get(this.instance).wait(60));
        this.instance_1 = new b.fumika_footL3_1;
        this.instance_1.parent = this;
        this.instance_1.setTransform(93.2, 56.75, 1, 1, 0, 0, 0, 47.8, 21.9);
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            rotation: 6.2293,
            x: 91.5,
            y: 57.6
        }, 29, a.Ease.quadInOut).to({
            rotation: 0,
            x: 93.2,
            y: 56.75
        }, 30, a.Ease.quadInOut).wait(1))
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(1.9, -5.4, 125.5, 171.1);
    (b.fumika_footL1_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_footL1;
        this.instance.parent = this;
        this.instance.setTransform(2, -173);
        this.timeline.addTween(a.Tween.get(this.instance).wait(60));
        this.instance_1 = new b.fumika_footL2_1("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(1.5, 83.9, 1, 1, 0, 0, 0, 2, 20);
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            rotation: -9.4784,
            x: 2.4,
            y: 86.45,
            startPosition: 29
        }, 29, a.Ease.quadInOut).to({
            rotation: 0,
            x: 1.5,
            y: 83.9,
            startPosition: 59
        }, 30, a.Ease.quadInOut).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-1.8, -173, 185.8, 398.8);
    (b.fumika_body_acc4_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_body_acc1_1;
        this.instance.parent = this;
        this.instance.setTransform(112.6, 88.5, 1, 1, 0, 0, 0, -5, 5.4);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            regY: 5.5,
            rotation: 11.9989,
            x: 112.45
        }, 26, a.Ease.cubicInOut).to({
            regY: 5.4,
            rotation: 0,
            x: 112.6
        }, 33, a.Ease.cubicInOut).wait(1));
        this.instance_1 = new b.fumika_body_acc2_1;
        this.instance_1.parent = this;
        this.instance_1.setTransform(84.55, 90.2, 1, 1, 0, 0, 0, -5.6, -5.6);
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            regY: -5.5,
            rotation: 9.999,
            y: 90.3
        }, 29, a.Ease.cubicInOut).to({
            regY: -5.6,
            rotation: 0,
            y: 90.2
        }, 30, a.Ease.cubicInOut).wait(1));
        this.instance_2 = new b.fumika_body_acc3_1;
        this.instance_2.parent = this;
        this.instance_2.setTransform(50.4, 84.2, 1, 1, 0, 0, 0, .1, -3.2);
        this.timeline.addTween(a.Tween.get(this.instance_2).to({
            regY: -3.1,
            scaleX: .9999,
            scaleY: .9999,
            rotation: 7.9995
        }, 33, a.Ease.cubicInOut).to({
            regY: -3.2,
            scaleX: 1,
            scaleY: 1,
            rotation: 0
        }, 26, a.Ease.cubicInOut).wait(1));
        this.instance_3 = new b.fumika_body_acc4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(2, 2);
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(60))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(2, 2, 155.9, 129.8);
    (b.fumika_armR2_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_armR2;
        this.instance.parent = this;
        this.instance.setTransform(.95, -2.3);
        this.timeline.addTween(a.Tween.get(this.instance).wait(60));
        this.instance_1 = new b.fumika_armR3_1("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(16.3, 44.9, 1, 1, 0, 0, 0, 64.3, 49.6);
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            regX: 64.2,
            regY: 49.7,
            rotation: -6.0006,
            y: 43.85
        }, 44, a.Ease.quadInOut).to({
            regX: 64.3,
            regY: 49.6,
            rotation: 0,
            y: 44.9
        }, 15, a.Ease.quadInOut).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-52.7, -7.8,
        173.7, 71.6);
    (b.fumika_armR1_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_armR1;
        this.instance.parent = this;
        this.instance.setTransform(-.75, -41.25);
        this.timeline.addTween(a.Tween.get(this.instance).wait(60));
        this.instance_1 = new b.fumika_armR2_1("synched", 4);
        this.instance_1.parent = this;
        this.instance_1.setTransform(15.6, 114.1, 1, 1, 0, 0, 0, 105.7, 46);
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            regY: 46.1,
            rotation: -3.9996,
            x: 15.65,
            y: 114.2,
            startPosition: 33
        }, 29, a.Ease.quadInOut).to({
            regY: 46,
            rotation: 0,
            x: 15.6,
            y: 114.1,
            startPosition: 3
        }, 30, a.Ease.quadInOut).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-145, -41.2, 203.3, 183);
    (b.fumika_armL3_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_armL3;
        this.instance.parent = this;
        this.instance.setTransform(-3.65, -14.55);
        this.timeline.addTween(a.Tween.get(this.instance).wait(60));
        this.instance_1 = new b.fumika_armL4_1;
        this.instance_1.parent = this;
        this.instance_1.setTransform(104.8, 113.7, 1, 1, 0, 0, 0, 8.8, 23.9);
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            regY: 24,
            rotation: 9.7498,
            x: 104.85,
            y: 113.8
        }, 39, a.Ease.quadInOut).to({
            regY: 23.9,
            rotation: 0,
            x: 104.8,
            y: 113.7
        }, 20, a.Ease.quadInOut).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-3.6, -14.5, 208.29999999999998, 173.4);
    (b.fumika_armL2_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_armL2;
        this.instance.parent = this;
        this.instance.setTransform(-2, -5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(60));
        this.instance_1 = new b.fumika_armL3_1("synched", 4);
        this.instance_1.parent = this;
        this.instance_1.setTransform(82.3, 169.5, 1, 1, 0, 0, 0, 18.2, 24.1);
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            regY: 24.2,
            rotation: 3.9996,
            x: 82.25,
            y: 167.95,
            startPosition: 33
        }, 29, a.Ease.quadInOut).to({
            regY: 24.1,
            rotation: 0,
            x: 82.3,
            y: 169.5,
            startPosition: 3
        }, 30, a.Ease.quadInOut).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-2, -5, 268.4, 319);
    (b.ef_fumika_kira2_mov = function(c, e, d) {
        this.initialize(c, e,
            d, {});
        this.instance = new b.ef_fumika_kira2_1;
        this.instance.parent = this;
        this.instance.setTransform(0, .05, .5, .5, 0, 0, 0, 0, .1);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            alpha: 0
        }, 29).to({
            alpha: 1
        }, 29).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-224.5, -274.5, 449, 549);
    (b.ef_fumika_kira1_mov = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.ef_fumika_kira1_1;
        this.instance.parent = this;
        this.instance.setTransform(0, .05, .5, .5, 0, 0, 0, 0, .1);
        this.instance.compositeOperation =
            "lighter";
        this.timeline.addTween(a.Tween.get(this.instance).to({
            alpha: .1992
        }, 19).to({
            alpha: 1
        }, 20).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-214, -264.2, 428, 528.5);
    (b.bg_fumika_time_mov = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.bg_fumika_time_1;
        this.instance.parent = this;
        this.instance.setTransform(1.4, -.2, 1, 1, 0, 0, 0, 1.4, -.2);
        this.instance.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.instance).to({
            alpha: 1
        }, 25, a.Ease.quadInOut).to({
            alpha: 0
        }, 30, a.Ease.quadInOut).wait(1))
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-287, -94, 509.5, 396.5);
    (b.book_all = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_76 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(76).call(this.frame_76).wait(1));
        this.instance = new b.of_anim;
        this.instance.parent = this;
        this.instance.setTransform(247.7, -1.15, 2, 2);
        this.instance.alpha = .0117;
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(23).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 10).wait(38).to({
                alpha: .0117
            },
            4).to({
            _off: !0
        }, 1).wait(1));
        c = new a.Shape;
        c._off = !0;
        e = (new a.Graphics).p("AhIHiIAAvDIC2AAIAAPDg");
        d = (new a.Graphics).p("AhJHiIAAvDIC4AAIAAPDg");
        var p = (new a.Graphics).p("AhNHiIAAvDIC/AAIAAPDg"),
            n = (new a.Graphics).p("AhSHiIAAvDIDKAAIAAPDg"),
            q = (new a.Graphics).p("AhbHiIAAvDIDcAAIAAPDg"),
            z = (new a.Graphics).p("AhmHiIAAvDIDyAAIAAPDg"),
            A = (new a.Graphics).p("Ah0HiIAAvDIEOAAIAAPDg"),
            B = (new a.Graphics).p("AiFHiIAAvDIEwAAIAAPDg"),
            r = (new a.Graphics).p("AiZHiIAAvDIFYAAIAAPDg"),
            t = (new a.Graphics).p("AixHiIAAvDIGHAAIAAPDg"),
            u = (new a.Graphics).p("AjMHiIAAvDIG9AAIAAPDg"),
            v = (new a.Graphics).p("AjrHiIAAvDIH7AAIAAPDg"),
            w = (new a.Graphics).p("AkNHiIAAvDIJAAAIAAPDg"),
            x = (new a.Graphics).p("Ak0HiIAAvDIKNAAIAAPDg"),
            y = (new a.Graphics).p("AlfHiIAAvDILjAAIAAPDg"),
            m = (new a.Graphics).p("AmPHiIAAvDINCAAIAAPDg"),
            C = (new a.Graphics).p("AnDHiIAAvDIOqAAIAAPDg"),
            E = (new a.Graphics).p("An8HiIAAvDIQcAAIAAPDg"),
            F = (new a.Graphics).p("Ao5HiIAAvDISWAAIAAPDg"),
            l = (new a.Graphics).p("Ap8HiIAAvDIUbAAIAAPDg"),
            D = (new a.Graphics).p("ArDHiIAAvDIWpAAIAAPDg"),
            G = (new a.Graphics).p("AsPHiIAAvDIZBAAIAAPDg"),
            J = (new a.Graphics).p("AtfHiIAAvDIbhAAIAAPDg"),
            K = (new a.Graphics).p("AuzHiIAAvDIeJAAIAAPDg"),
            L = (new a.Graphics).p("AwKHiIAAvDMAg3AAAIAAPDg"),
            M = (new a.Graphics).p("AxlHiIAAvDMAjsAAAIAAPDg"),
            N = (new a.Graphics).p("AzBHiIAAvDMAmkAAAIAAPDg"),
            O = (new a.Graphics).p("A0dHiIAAvDMApcAAAIAAPDg"),
            P = (new a.Graphics).p("A16HiIAAvDMAsWAAAIAAPDg"),
            Q = (new a.Graphics).p("A3WHiIAAvDMAvNAAAIAAPDg"),
            R = (new a.Graphics).p("A4wHiIAAvDMAyAAAAIAAPDg"),
            S = (new a.Graphics).p("A6GHiIAAvDMA0tAAAIAAPDg"),
            T = (new a.Graphics).p("A7ZHiIAAvDMA3SAAAIAAPDg"),
            U = (new a.Graphics).p("A8oHiIAAvDMA5wAAAIAAPDg"),
            V = (new a.Graphics).p("A9yHiIAAvDMA8DAAAIAAPDg"),
            W = (new a.Graphics).p("A+2HiIAAvDMA+MAAAIAAPDg"),
            X = (new a.Graphics).p("A/2HiIAAvDMBALAAAIAAPDg"),
            Y = (new a.Graphics).p("EggwAHiIAAvDMBB/AAAIAAPDg"),
            Z = (new a.Graphics).p("EghlAHiIAAvDMBDpAAAIAAPDg"),
            aa = (new a.Graphics).p("EgiVAHiIAAvDMBFJAAAIAAPDg"),
            ba = (new a.Graphics).p("EgjAAHiIAAvDMBGfAAAIAAPDg"),
            ca = (new a.Graphics).p("EgjnAHiIAAvDMBHsAAAIAAPDg"),
            da = (new a.Graphics).p("EgkIAHiIAAvDMBIvAAAIAAPDg"),
            ea = (new a.Graphics).p("EgklAHiIAAvDMBJpAAAIAAPDg"),
            fa = (new a.Graphics).p("Egk+AHiIAAvDMBKbAAAIAAPDg"),
            ha = (new a.Graphics).p("EglTAHiIAAvDMBLEAAAIAAPDg"),
            ia = (new a.Graphics).p("EgllAHiIAAvDMBLoAAAIAAPDg"),
            ja = (new a.Graphics).p("EglyAHiIAAvDMBMCAAAIAAPDg"),
            ka = (new a.Graphics).p("Egl9AHiIAAvDMBMYAAAIAAPDg"),
            la = (new a.Graphics).p("EgmEAHiIAAvDMBMmAAAIAAPDg"),
            ma = (new a.Graphics).p("EgmIAHiIAAvDMBMuAAAIAAPDg"),
            na = (new a.Graphics).p("EgmOAHiIAAvDMBMxAAAIAAPDg");
        this.timeline.addTween(a.Tween.get(c).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(23).to({
            graphics: e,
            x: 10.9664,
            y: -11.15
        }).wait(1).to({
            graphics: d,
            x: 11.0783,
            y: -11.15
        }).wait(1).to({
            graphics: p,
            x: 11.4218,
            y: -11.15
        }).wait(1).to({
            graphics: n,
            x: 12.0089,
            y: -11.15
        }).wait(1).to({
            graphics: q,
            x: 12.8525,
            y: -11.15
        }).wait(1).to({
            graphics: z,
            x: 13.9663,
            y: -11.15
        }).wait(1).to({
            graphics: A,
            x: 15.3648,
            y: -11.15
        }).wait(1).to({
            graphics: B,
            x: 17.0635,
            y: -11.15
        }).wait(1).to({
            graphics: r,
            x: 19.0785,
            y: -11.15
        }).wait(1).to({
            graphics: t,
            x: 21.427,
            y: -11.15
        }).wait(1).to({
            graphics: u,
            x: 24.1266,
            y: -11.15
        }).wait(1).to({
            graphics: v,
            x: 27.1958,
            y: -11.15
        }).wait(1).to({
            graphics: w,
            x: 30.6531,
            y: -11.15
        }).wait(1).to({
            graphics: x,
            x: 34.5173,
            y: -11.15
        }).wait(1).to({
            graphics: y,
            x: 38.8067,
            y: -11.15
        }).wait(1).to({
            graphics: m,
            x: 43.5387,
            y: -11.15
        }).wait(1).to({
            graphics: C,
            x: 48.7286,
            y: -11.15
        }).wait(1).to({
            graphics: E,
            x: 54.389,
            y: -11.15
        }).wait(1).to({
            graphics: F,
            x: 60.5281,
            y: -11.15
        }).wait(1).to({
            graphics: l,
            x: 67.1483,
            y: -11.15
        }).wait(1).to({
            graphics: D,
            x: 74.2442,
            y: -11.15
        }).wait(1).to({
            graphics: G,
            x: 81.8005,
            y: -11.15
        }).wait(1).to({
            graphics: J,
            x: 89.7903,
            y: -11.15
        }).wait(1).to({
            graphics: K,
            x: 98.1727,
            y: -11.15
        }).wait(1).to({
            graphics: L,
            x: 106.8926,
            y: -11.15
        }).wait(1).to({
            graphics: M,
            x: 115.8797,
            y: -11.15
        }).wait(1).to({
            graphics: N,
            x: 125.0507,
            y: -11.15
        }).wait(1).to({
            graphics: O,
            x: 134.3116,
            y: -11.15
        }).wait(1).to({
            graphics: P,
            x: 143.5621,
            y: -11.15
        }).wait(1).to({
            graphics: Q,
            x: 152.7012,
            y: -11.15
        }).wait(1).to({
            graphics: R,
            x: 161.6322,
            y: -11.15
        }).wait(1).to({
            graphics: S,
            x: 170.2676,
            y: -11.15
        }).wait(1).to({
            graphics: T,
            x: 178.5331,
            y: -11.15
        }).wait(1).to({
            graphics: U,
            x: 186.3689,
            y: -11.15
        }).wait(1).to({
            graphics: V,
            x: 193.7311,
            y: -11.15
        }).wait(1).to({
            graphics: W,
            x: 200.59,
            y: -11.15
        }).wait(1).to({
            graphics: X,
            x: 206.9294,
            y: -11.15
        }).wait(1).to({
            graphics: Y,
            x: 212.7437,
            y: -11.15
        }).wait(1).to({
            graphics: Z,
            x: 218.0363,
            y: -11.15
        }).wait(1).to({
            graphics: aa,
            x: 222.8171,
            y: -11.15
        }).wait(1).to({
            graphics: ba,
            x: 227.1009,
            y: -11.15
        }).wait(1).to({
            graphics: ca,
            x: 230.9058,
            y: -11.15
        }).wait(1).to({
            graphics: da,
            x: 234.2517,
            y: -11.15
        }).wait(1).to({
            graphics: ea,
            x: 237.1599,
            y: -11.15
        }).wait(1).to({
            graphics: fa,
            x: 239.6518,
            y: -11.15
        }).wait(1).to({
            graphics: ha,
            x: 241.749,
            y: -11.15
        }).wait(1).to({
            graphics: ia,
            x: 243.4721,
            y: -11.15
        }).wait(1).to({
            graphics: ja,
            x: 244.8414,
            y: -11.15
        }).wait(1).to({
            graphics: ka,
            x: 245.8761,
            y: -11.15
        }).wait(1).to({
            graphics: la,
            x: 246.5945,
            y: -11.15
        }).wait(1).to({
            graphics: ma,
            x: 247.0137,
            y: -11.15
        }).wait(1).to({
            graphics: na,
            x: 246.7,
            y: -11.15
        }).wait(3));
        this.instance_1 = new b.anniversary_text;
        this.instance_1.parent = this;
        this.instance_1.setTransform(249.5, -12.05, 1.12, 1.12, 0, 0, 0, .1, .1);
        this.instance_1._off = !0;
        e = [this.instance_1];
        for (d = 0; d < e.length; d++) e[d].mask = c;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(23).to({
                _off: !1
            },
            0).wait(54));
        this.instance_2 = new b.bookcover_front2_glow;
        this.instance_2.parent = this;
        this.instance_2.alpha = .0117;
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(18).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 53).wait(6));
        this.instance_3 = new b.bookcover_front1("synched", 0);
        this.instance_3.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(3).to({
            startPosition: 0
        }, 0).to({
            alpha: 0
        }, 13, a.Ease.quadOut).to({
            _off: !0
        }, 1).wait(60));
        this.instance_4 = new b.bookcover_front2("synched",
            0);
        this.instance_4.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(77));
        this.instance_5 = new b.book_white_side("synched", 0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(474.25, 12.4, 1, 1, 0, 0, 0, .3, 0);
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(77));
        this.instance_6 = new b.book_white_under("synched", 0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(7.25, 320.4, 1, 1, 0, 0, 0, .3, 0);
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(77));
        this.instance_7 =
            new b.bookcover_side("synched", 0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(-2.4, 21.3, 1, 1, 0, 0, 0, .2, .2);
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(77));
        this.instance_8 = new b.bookcover_back("synched", 0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(275.75, 24.8, 1, 1, 0, 0, 0, 240, 0);
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(77))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-267.1, -325, 789.9, 675.1);
    (b.kira_mc_set2 = function(c, e, d) {
        this.initialize(c,
            e, d, {});
        this.frame_80 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(80).call(this.frame_80).wait(1));
        this.instance = new b.kira_m_mc_mov;
        this.instance.parent = this;
        this.instance.setTransform(234.55, 79.95, .648, .648, 0, 0, 0, 0, 15);
        this.timeline.addTween(a.Tween.get(this.instance).wait(81));
        this.instance_1 = new b.kira_m_mc_mov;
        this.instance_1.parent = this;
        this.instance_1.setTransform(109.45, 92.3, .81, .81, 0, 0, 0, .1, 15.1);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(10).to({
                _off: !1
            },
            0).wait(71));
        this.instance_2 = new b.kira_m_mc_mov;
        this.instance_2.parent = this;
        this.instance_2.setTransform(339.7, 369.7, .81, .81, 0, 0, 0, .1, 15.1);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(21).to({
            _off: !1
        }, 0).wait(60));
        this.instance_3 = new b.kira_m_mc_mov;
        this.instance_3.parent = this;
        this.instance_3.setTransform(15.15, 199.5, .648, .648, 0, 0, 0, .1, 15.1);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(35).to({
            _off: !1
        }, 0).wait(46));
        this.instance_4 =
            new b.kira_m_mc_mov;
        this.instance_4.parent = this;
        this.instance_4.setTransform(333.9, 277.1, .81, .81, 0, 0, 0, .1, 15.1);
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(47).to({
            _off: !1
        }, 0).wait(34));
        this.instance_5 = new b.kira_m_mc_mov;
        this.instance_5.parent = this;
        this.instance_5.setTransform(19.2, 401.6, .648, .648, 0, 0, 0, .1, 15.1);
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(44).to({
            _off: !1
        }, 0).wait(37));
        this.instance_6 = new b.kira_m_mc_mov;
        this.instance_6.parent =
            this;
        this.instance_6.setTransform(201.9, 236.85, .81, .81, 0, 0, 0, .1, 15.1);
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(14).to({
            _off: !1
        }, 0).wait(67));
        this.instance_7 = new b.kira_m_mc_mov;
        this.instance_7.parent = this;
        this.instance_7.setTransform(14.4, 309.5, .81, .81, 0, 0, 0, 0, 15.1);
        this.instance_7._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(23).to({
            _off: !1
        }, 0).wait(58));
        this.instance_8 = new b.kira_m_mc_mov;
        this.instance_8.parent = this;
        this.instance_8.setTransform(300.8,
            231.8, .81, .81, 0, 0, 0, .1, 15);
        this.instance_8._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(3).to({
            _off: !1
        }, 0).wait(78));
        this.instance_9 = new b.kira_m_mc_mov;
        this.instance_9.parent = this;
        this.instance_9.setTransform(306.45, 140.3, .81, .81, 0, 0, 0, .1, 15);
        this.instance_9._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_9).wait(17).to({
            _off: !1
        }, 0).wait(64));
        this.instance_10 = new b.kira_m_mc_mov;
        this.instance_10.parent = this;
        this.instance_10.setTransform(299.15, 342.8, .648, .648, 0, 0, 0, 0,
            15.1);
        this.instance_10._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_10).wait(30).to({
            _off: !1
        }, 0).wait(51));
        this.instance_11 = new b.kira_m_mc_mov;
        this.instance_11.parent = this;
        this.instance_11.setTransform(35.65, 158.85, .81, .81, 0, 0, 0, 0, 15.1);
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(81))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(8.4, 0, 337.40000000000003, 406.4);
    (b.kira_mc_set = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_80 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(80).call(this.frame_80).wait(1));
        this.instance = new b.kira_m_mc_mov;
        this.instance.parent = this;
        this.instance.setTransform(248.05, 42.25, .8, .8, 0, 0, 0, 0, 15);
        this.timeline.addTween(a.Tween.get(this.instance).wait(81));
        this.instance_1 = new b.kira_m_mc_mov;
        this.instance_1.parent = this;
        this.instance_1.setTransform(246.3, 85.45, 1, 1, 0, 0, 0, 0, 15);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(10).to({
            _off: !1
        }, 0).wait(71));
        this.instance_2 =
            new b.kira_m_mc_mov;
        this.instance_2.parent = this;
        this.instance_2.setTransform(192.3, 44.1, 1, 1, 0, 0, 0, 0, 15);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(21).to({
            _off: !1
        }, 0).wait(60));
        this.instance_3 = new b.kira_m_mc_mov;
        this.instance_3.parent = this;
        this.instance_3.setTransform(106.6, 85.95, .8, .8, 0, 0, 0, 0, 15);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(35).to({
            _off: !1
        }, 0).wait(46));
        this.instance_4 = new b.kira_m_mc_mov;
        this.instance_4.parent =
            this;
        this.instance_4.setTransform(76.6, 145.55, 1, 1, 0, 0, 0, 0, 15);
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(47).to({
            _off: !1
        }, 0).wait(34));
        this.instance_5 = new b.kira_m_mc_mov;
        this.instance_5.parent = this;
        this.instance_5.setTransform(90.65, 265.45, .8, .8, 0, 0, 0, 0, 15);
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(44).to({
            _off: !1
        }, 0).wait(37));
        this.instance_6 = new b.kira_m_mc_mov;
        this.instance_6.parent = this;
        this.instance_6.setTransform(207.65,
            235.85, 1, 1, 0, 0, 0, 0, 15);
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(14).to({
            _off: !1
        }, 0).wait(67));
        this.instance_7 = new b.kira_m_mc_mov;
        this.instance_7.parent = this;
        this.instance_7.setTransform(78.9, 240.35, 1, 1, 0, 0, 0, 0, 15);
        this.instance_7._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(23).to({
            _off: !1
        }, 0).wait(58));
        this.instance_8 = new b.kira_m_mc_mov;
        this.instance_8.parent = this;
        this.instance_8.setTransform(174.6, 262.4, 1, 1, 0, 0, 0, 0, 15);
        this.instance_8._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(3).to({
            _off: !1
        }, 0).wait(78));
        this.instance_9 = new b.kira_m_mc_mov;
        this.instance_9.parent = this;
        this.instance_9.setTransform(231.7, 163.4, 1, 1, 0, 0, 0, 0, 15);
        this.instance_9._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_9).wait(17).to({
            _off: !1
        }, 0).wait(64));
        this.instance_10 = new b.kira_m_mc_mov;
        this.instance_10.parent = this;
        this.instance_10.setTransform(242.6, 258.15, .8, .8, 0, 0, 0, 0, 15);
        this.instance_10._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_10).wait(30).to({
                _off: !1
            },
            0).wait(51));
        this.instance_11 = new b.kira_m_mc_mov;
        this.instance_11.parent = this;
        this.instance_11.setTransform(82.95, 46.2, 1, 1, 0, 0, 0, 0, 15);
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(81))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(44, 0, 240, 310);
    (b.bg_last = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.kira_mc_set;
        this.instance.parent = this;
        this.instance.setTransform(.05, 10.05, 1.3, 1.3, 0, 0, 0, 163, 157);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1));
        this.instance_1 = new b.bg;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-120, -160, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1))
    }).prototype = g(b.bg_last, new a.Rectangle(-120, -160, 240, 320), null);
    (b.set_particle1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.parts_particle1_2;
        this.instance.parent = this;
        this.instance.setTransform(-1.4, 38.65, .8585, .8585, -173.2888);
        this.instance_1 = new b.parts_particle1_1;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-26.5,
            10.95, .8544, .5085, 0, -124.1522, 76.2156, -59.8, -3.9);
        this.instance_2 = new b.parts_particle1_1;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-12, 28, .6032, .6714, 0, 102.0907, 76.0495);
        this.instance_3 = new b.parts_particle1_1;
        this.instance_3.parent = this;
        this.instance_3.setTransform(24, 22, .6032, .6032, 154.5512);
        this.instance_4 = new b.parts_particle1_2;
        this.instance_4.parent = this;
        this.instance_4.setTransform(10, 40, .67, .5378, 0, -151.6456, 57.8834);
        this.instance_5 = new b.parts_particle1_1;
        this.instance_5.parent =
            this;
        this.instance_5.setTransform(36, 16.45, 1.1194, 1.0589, 0, -118.0591, 42.7308);
        this.instance_6 = new b.parts_particle1_1;
        this.instance_6.parent = this;
        this.instance_6.setTransform(13.6, 24.65, .5924, .5292, 0, 155.0554, -24.9453);
        this.instance_7 = new b.parts_particle1_2;
        this.instance_7.parent = this;
        this.instance_7.setTransform(2.25, 20.95, .5292, .5292, 134.5199);
        this.instance_8 = new b.parts_particle1_2;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-38, 10, .5292, .5292, 0, -53.2543, 126.7457);
        this.instance_9 =
            new b.parts_particle1_1;
        this.instance_9.parent = this;
        this.instance_9.setTransform(-28, -14, .6032, .6714, 0, -58.4598, -84.5011);
        this.instance_10 = new b.parts_particle1_1;
        this.instance_10.parent = this;
        this.instance_10.setTransform(-6.95, -18.05, .6032, .6032, -115.4488);
        this.instance_11 = new b.parts_particle1_2;
        this.instance_11.parent = this;
        this.instance_11.setTransform(-30, 16, .67, .5379, 0, -103.6061, 105.9244);
        this.instance_12 = new b.parts_particle1_1;
        this.instance_12.parent = this;
        this.instance_12.setTransform(-24,
            30, 1.1194, 1.0589, 0, -28.0591, 132.7308);
        this.instance_13 = new b.parts_particle1_2;
        this.instance_13.parent = this;
        this.instance_13.setTransform(-32.05, -3.5, 1, 1, -135.4791);
        this.instance_14 = new b.parts_particle1_1;
        this.instance_14.parent = this;
        this.instance_14.setTransform(-14.65, 19.6, .5925, .5292, 0, -72.0065, 107.9907);
        this.instance_15 = new b.parts_particle1_2;
        this.instance_15.parent = this;
        this.instance_15.setTransform(6.55, -31.7, .8585, .8585, -6.5255);
        this.instance_16 = new b.parts_particle1_2;
        this.instance_16.parent =
            this;
        this.instance_16.setTransform(6.55, -31.7, .5292, .5292, 0, 36.7457, -143.2543);
        this.instance_17 = new b.parts_particle1_1;
        this.instance_17.parent = this;
        this.instance_17.setTransform(29.35, 1.45, .8544, .5085, 0, 20.643, -138.9898, -59.9, -3.9);
        this.instance_18 = new b.parts_particle1_1;
        this.instance_18.parent = this;
        this.instance_18.setTransform(4.65, -27.5, .6032, .6714, 0, -19.4377, -45.4796);
        this.instance_19 = new b.parts_particle1_1;
        this.instance_19.parent = this;
        this.instance_19.setTransform(10, -24, .6032, .6032, 19.5497);
        this.instance_20 = new b.parts_particle1_2;
        this.instance_20.parent = this;
        this.instance_20.setTransform(-7.15, -27.65, .67, .5378, 0, -7.3809, -157.8494);
        this.instance_21 = new b.parts_particle1_2;
        this.instance_21.parent = this;
        this.instance_21.setTransform(8, -18, 1, 1, -45.4791);
        this.instance_22 = new b.parts_particle1_1;
        this.instance_22.parent = this;
        this.instance_22.setTransform(-10.75, -12.3, .5925, .5292, 0, 17.9935, -162.0093);
        this.instance_23 = new b.parts_particle1_2;
        this.instance_23.parent = this;
        this.instance_23.setTransform(50,
            16, .8585, .8585, 61.4817);
        this.instance_24 = new b.parts_particle1_1;
        this.instance_24.parent = this;
        this.instance_24.setTransform(13.4, 36.85, .8544, .5085, 0, 110.643, -48.9898, -59.7, -3.7);
        this.instance_25 = new b.parts_particle1_1;
        this.instance_25.parent = this;
        this.instance_25.setTransform(24, -2, .6032, .6714, 0, 70.5623, 44.5204);
        this.instance_26 = new b.parts_particle1_1;
        this.instance_26.parent = this;
        this.instance_26.setTransform(38, 6, .6032, .6032, 64.5512);
        this.instance_27 = new b.parts_particle1_2;
        this.instance_27.parent =
            this;
        this.instance_27.setTransform(27.95, -3.15, .67, .5378, 0, 73.3557, -77.1152);
        this.instance_28 = new b.parts_particle1_1;
        this.instance_28.parent = this;
        this.instance_28.setTransform(28, -12, 1.1194, 1.0589, 0, 151.9409, -47.2692);
        this.instance_29 = new b.parts_particle1_1;
        this.instance_29.parent = this;
        this.instance_29.setTransform(13.6, 24.65, .5292, .5292, 61.4871);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.instance_29
                }, {
                    t: this.instance_28
                }, {
                    t: this.instance_27
                }, {
                    t: this.instance_26
                }, {
                    t: this.instance_25
                },
                {
                    t: this.instance_24
                }, {
                    t: this.instance_23
                }, {
                    t: this.instance_22
                }, {
                    t: this.instance_21
                }, {
                    t: this.instance_20
                }, {
                    t: this.instance_19
                }, {
                    t: this.instance_18
                }, {
                    t: this.instance_17
                }, {
                    t: this.instance_16
                }, {
                    t: this.instance_15
                }, {
                    t: this.instance_14
                }, {
                    t: this.instance_13
                }, {
                    t: this.instance_12
                }, {
                    t: this.instance_11
                }, {
                    t: this.instance_10
                }, {
                    t: this.instance_9
                }, {
                    t: this.instance_8
                }, {
                    t: this.instance_7
                }, {
                    t: this.instance_6
                }, {
                    t: this.instance_5
                }, {
                    t: this.instance_4
                }, {
                    t: this.instance_3
                }, {
                    t: this.instance_2
                }, {
                    t: this.instance_1
                }, {
                    t: this.instance
                }
            ]
        }).wait(1))
    }).prototype =
        g(b.set_particle1, new a.Rectangle(-259.5, -245.4, 503, 474.70000000000005), null);
    (b.powder_paper_container = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.instance = new b.powder_paper;
        this.instance.parent = this;
        this.instance.setTransform(69.05, 0, .489, .489);
        this.instance_1 = new b.powder_paper;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-66.05, 0, .489, .489);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.instance_1
                },
                {
                    t: this.instance
                }
            ]
        }).wait(1))
    }).prototype = g(b.powder_paper_container, new a.Rectangle(-143.8, -9.1, 277.3, 28.4), null);
    (b.kira_mc_set2_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_73 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(73).call(this.frame_73).wait(1));
        this.instance_12 = new b.kira_mc_mov;
        this.instance_12.parent = this;
        this.instance_12.setTransform(32.8, 144.3, .295, .295, 0, 0, 0, 0, 21.4);
        this.instance_12.alpha = .3984;
        this.instance_12._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_12).wait(23).to({
                _off: !1
            },
            0).wait(51));
        this.instance_13 = new b.kira_mc_mov;
        this.instance_13.parent = this;
        this.instance_13.setTransform(186.35, 143.35, .45, .45, 0, 0, 0, -.1, 21.4);
        this.instance_13._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_13).wait(21).to({
            _off: !1
        }, 0).wait(53));
        this.instance_14 = new b.kira_mc_mov;
        this.instance_14.parent = this;
        this.instance_14.setTransform(155.35, 64.15, .375, .375, 0, 0, 0, -.1, 21.4);
        this.instance_14._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_14).wait(20).to({
            _off: !1
        }, 0).wait(54));
        this.instance_15 = new b.kira_mc_mov;
        this.instance_15.parent = this;
        this.instance_15.setTransform(219.7, 246.45, .33, .33, 0, 0, 0, 0, 21.2);
        this.instance_15.alpha = .8008;
        this.instance_15._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_15).wait(20).to({
            _off: !1
        }, 0).wait(54));
        this.instance_16 = new b.kira_mc_mov;
        this.instance_16.parent = this;
        this.instance_16.setTransform(80.75, 38.3, .25, .25, 0, 0, 0, 0, 15.2);
        this.instance_16._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_16).wait(14).to({
            _off: !1
        }, 0).wait(60));
        this.instance_17 = new b.kira_mc_mov;
        this.instance_17.parent = this;
        this.instance_17.setTransform(72.1, 117.85, .23, .23, 0, 0, 0, 0, 15);
        this.instance_17._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_17).wait(8).to({
            _off: !1
        }, 0).wait(66));
        this.instance_18 = new b.kira_mc_mov;
        this.instance_18.parent = this;
        this.instance_18.setTransform(58.15, 255.5, .2, .2, 0, 0, 0, 0, 21.5);
        this.instance_18.alpha = .8008;
        this.instance_18._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_18).wait(7).to({
            _off: !1
        }, 0).wait(67));
        this.instance_19 = new b.kira_mc_mov;
        this.instance_19.parent = this;
        this.instance_19.setTransform(187.05, 195.15, .375, .375, 0, 0, 0, 0, 15.1);
        this.instance_19.alpha = .8008;
        this.timeline.addTween(a.Tween.get(this.instance_19).wait(74));
        this.instance_20 = new b.kira_mc_mov;
        this.instance_20.parent = this;
        this.instance_20.setTransform(16.05, 227.6, .385, .385, 0, 0, 0, -.1, 21.3);
        this.instance_20.alpha = .5;
        this.timeline.addTween(a.Tween.get(this.instance_20).wait(74))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(5.4,
        32.9, 223.4, 228.1);
    (b.g\uff4citter_rise_core = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_0 = function() {
            this.visible = !1;
            this.gotoAndPlay(1 + exportRoot._u.random(30))
        };
        this.frame_1 = function() {
            this.visible = !1;
            this.gotoAndPlay(this.timeline.position + exportRoot._u.random(20))
        };
        this.frame_31 = function() {
            this.visible = !0
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(30).call(this.frame_31).wait(9));
        this.instance = new b.glitter_first_inner;
        this.instance.parent =
            this;
        this.instance.setTransform(0, 0, .5144, .5144);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            _off: !0
        }, 1).wait(30).to({
            _off: !1,
            scaleX: .1949,
            scaleY: .1949,
            rotation: -44.8223,
            alpha: .4297
        }, 0).wait(1).to({
            scaleX: .4345,
            scaleY: .4345,
            rotation: -11.2056,
            alpha: .8574
        }, 0).wait(1).to({
            scaleX: .5144,
            scaleY: .5144,
            rotation: 0,
            alpha: 1
        }, 0).wait(1).to({
            scaleX: .5051,
            scaleY: .5051,
            rotation: 1.9401,
            alpha: .971
        }, 0).wait(1).to({
            scaleX: .479,
            scaleY: .479,
            rotation: 7.401,
            alpha: .8893
        }, 0).wait(1).to({
            scaleX: .436,
            scaleY: .436,
            rotation: 16.3829,
            alpha: .7549
        }, 0).wait(1).to({
            scaleX: .3762,
            scaleY: .3762,
            rotation: 28.8856,
            alpha: .5678
        }, 0).wait(1).to({
            scaleX: .2995,
            scaleY: .2995,
            rotation: 44.9092,
            alpha: .3281
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-9.6, -11.2, 19.299999999999997, 22.5);
    (b.glitters2 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_20 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(20).call(this.frame_20).wait(2));
        this.instance = new b.glitter_first;
        this.instance.parent = this;
        this.instance.setTransform(2.75, 3.8, .0849, .0849);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(7).to({
            _off: !1
        }, 0).wait(15));
        this.instance_1 = new b.glitter_first;
        this.instance_1.parent = this;
        this.instance_1.setTransform(20.85, 19.9, .1362, .1362);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(10).to({
            _off: !1
        }, 0).wait(12));
        this.instance_2 = new b.glitter_first;
        this.instance_2.parent = this;
        this.instance_2.setTransform(39.5,
            -10.95, .2555, .2555);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(14).to({
            _off: !1
        }, 0).wait(8));
        this.instance_3 = new b.glitter_first;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-38.85, 1.45, .1176, .1176);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(16).to({
            _off: !1
        }, 0).wait(6));
        this.instance_4 = new b.glitter_first;
        this.instance_4.parent = this;
        this.instance_4.setTransform(20.45, -16.65, .1138, .1138);
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(17).to({
            _off: !1
        }, 0).wait(5))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-42.3, -20, 89.3, 43.9);
    (b.mc_bubble_set = function(c, e, d) {
        null == d && (d = !1);
        this.initialize(c, e, d, {});
        this.instance = new b.mc_bubble;
        this.instance.parent = this;
        this.instance.setTransform(-98.3, 113.5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1));
        this.instance_1 = new b.mc_bubble;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-42.85, -26.7);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1));
        this.instance_2 = new b.mc_bubble;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-190.7, -62.2);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(1));
        this.instance_3 = new b.mc_bubble;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-46.6, 89.05);
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(1));
        this.instance_4 = new b.mc_bubble;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-277.25, 92.25);
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(1));
        this.instance_5 = new b.mc_bubble;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-77.25, -60.3);
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(1));
        this.instance_6 = new b.mc_bubble;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-177.4, 114.6);
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(1));
        this.instance_7 = new b.mc_bubble;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-266.95, -44.25);
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(1))
    }).prototype =
        g(b.mc_bubble_set, new a.Rectangle(-291.2, -119.5, 323.7, 248.1), null);
    (b.mc_lux3 = function(c, e, d) {
        null == d && (d = !1);
        this.initialize(c, e, d, {
            loop: 1
        });
        this.frame_0 = function() {
            this.gotoAndPlay(Math.floor(70 * Math.random() + 2))
        };
        this.frame_1 = function() {
            this.scaleX = this.scaleY = Math.random()
        };
        this.frame_65 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(64).call(this.frame_65).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#66CCFF").s().p("AgxAyIAAhjIBjAAIAABjg");
        this.timeline.addTween(a.Tween.get(this.shape).to({
            _off: !0
        }, 1).wait(65));
        this.lux = new b.gr_lux_cnt3;
        this.lux.name = "lux";
        this.lux.parent = this;
        this.instance = new b.gr_lux_cnt3;
        this.instance.parent = this;
        this.instance.setTransform(4.3, -16.6);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.lux
            }]
        }).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
                state: [{
                    t: this.instance
                }]
            },
            1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
                state: [{
                    t: this.instance
                }]
            },
            1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
                state: [{
                    t: this.instance
                }]
            },
            1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
                state: [{
                    t: this.instance
                }]
            },
            1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: []
        }, 1).wait(6));
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: .9905,
            scaleY: .9905,
            x: 5.4679,
            y: -23.385
        }, 0).wait(1).to({
            scaleX: .981,
            scaleY: .981,
            x: 6.5226,
            y: -30.993
        }, 0).wait(1).to({
            scaleX: .9714,
            scaleY: .9714,
            x: 7.3378,
            y: -38.2869
        }, 0).wait(1).to({
            scaleX: .9619,
            scaleY: .9619,
            x: 7.9686,
            y: -45.2181
        }, 0).wait(1).to({
            scaleX: .9524,
            scaleY: .9524,
            x: 8.4541,
            y: -52.061
        }, 0).wait(1).to({
            scaleX: .9429,
            scaleY: .9429,
            x: 8.8168,
            y: -59.3501
        }, 0).wait(1).to({
            scaleX: .9333,
            scaleY: .9333,
            x: 9.0254,
            y: -66.6525
        }, 0).wait(1).to({
            scaleX: .9238,
            scaleY: .9238,
            x: 9.0837,
            y: -73.9275
        }, 0).wait(1).to({
            scaleX: .9143,
            scaleY: .9143,
            x: 8.998,
            y: -81.1672
        }, 0).wait(1).to({
            scaleX: .9048,
            scaleY: .9048,
            x: 8.7747,
            y: -88.3675
        }, 0).wait(1).to({
            scaleX: .8952,
            scaleY: .8952,
            x: 8.4202,
            y: -95.5247
        }, 0).wait(1).to({
            scaleX: .8857,
            scaleY: .8857,
            x: 7.9406,
            y: -102.636
        }, 0).wait(1).to({
            scaleX: .8762,
            scaleY: .8762,
            x: 7.342,
            y: -109.6991
        }, 0).wait(1).to({
            scaleX: .8667,
            scaleY: .8667,
            x: 6.6302,
            y: -116.7122
        }, 0).wait(1).to({
            scaleX: .8571,
            scaleY: .8571,
            x: 5.8111,
            y: -123.6722
        }, 0).wait(1).to({
            scaleX: .8476,
            scaleY: .8476,
            x: 4.89,
            y: -130.5802
        }, 0).wait(1).to({
            scaleX: .8381,
            scaleY: .8381,
            x: 3.8718,
            y: -137.4357
        }, 0).wait(1).to({
            scaleX: .8286,
            scaleY: .8286,
            x: 2.7618,
            y: -144.2367
        }, 0).wait(1).to({
            scaleX: .8191,
            scaleY: .8191,
            x: 1.5645,
            y: -150.9844
        }, 0).wait(1).to({
            scaleX: .8095,
            scaleY: .8095,
            x: .2842,
            y: -157.6785
        }, 0).wait(1).to({
            scaleX: .8,
            scaleY: .8,
            x: -1.0748,
            y: -164.3192
        }, 0).wait(1).to({
            scaleX: .7905,
            scaleY: .7905,
            x: -2.4944,
            y: -170.8974
        }, 0).wait(1).to({
            scaleX: .781,
            scaleY: .781,
            x: -3.8586,
            y: -177.4668
        }, 0).wait(1).to({
            scaleX: .7714,
            scaleY: .7714,
            x: -5.143,
            y: -184.0557
        }, 0).wait(1).to({
            scaleX: .7619,
            scaleY: .7619,
            x: -6.3469,
            y: -190.6607
        }, 0).wait(1).to({
            scaleX: .7524,
            scaleY: .7524,
            x: -7.4701,
            y: -197.2799
        }, 0).wait(1).to({
            scaleX: .7429,
            scaleY: .7429,
            x: -8.5124,
            y: -203.9115
        }, 0).wait(1).to({
            scaleX: .7333,
            scaleY: .7333,
            x: -9.5,
            y: -210.55
        }, 0).wait(1).to({
            scaleX: .7322,
            scaleY: .7322,
            x: -10.348,
            y: -217.1572,
            alpha: .9667
        }, 0).wait(1).to({
            scaleX: .7311,
            scaleY: .7311,
            x: -11.1537,
            y: -223.8656,
            alpha: .9333
        }, 0).wait(1).to({
            scaleX: .73,
            scaleY: .73,
            x: -11.8783,
            y: -230.5855,
            alpha: .9
        }, 0).wait(1).to({
            scaleX: .7289,
            scaleY: .7289,
            x: -12.5214,
            y: -237.3136,
            alpha: .8667
        }, 0).wait(1).to({
            scaleX: .7278,
            scaleY: .7278,
            x: -13.0835,
            y: -244.0483,
            alpha: .8333
        }, 0).wait(1).to({
            scaleX: .7267,
            scaleY: .7267,
            x: -13.5646,
            y: -250.7877,
            alpha: .8
        }, 0).wait(1).to({
            scaleX: .7256,
            scaleY: .7256,
            x: -13.9652,
            y: -257.53,
            alpha: .7667
        }, 0).wait(1).to({
            scaleX: .7244,
            scaleY: .7244,
            x: -14.2858,
            y: -264.2734,
            alpha: .7333
        }, 0).wait(1).to({
            scaleX: .7233,
            scaleY: .7233,
            x: -14.5267,
            y: -271.0161,
            alpha: .7
        }, 0).wait(1).to({
            scaleX: .7222,
            scaleY: .7222,
            x: -14.6887,
            y: -277.7565,
            alpha: .6667
        }, 0).wait(1).to({
            scaleX: .7211,
            scaleY: .7211,
            x: -14.7723,
            y: -284.4929,
            alpha: .6333
        }, 0).wait(1).to({
            scaleX: .72,
            scaleY: .72,
            x: -14.7784,
            y: -291.2234,
            alpha: .6
        }, 0).wait(1).to({
            scaleX: .7189,
            scaleY: .7189,
            x: -14.7076,
            y: -297.9465,
            alpha: .5667
        }, 0).wait(1).to({
            scaleX: .7178,
            scaleY: .7178,
            x: -14.5609,
            y: -304.6609,
            alpha: .5333
        }, 0).wait(1).to({
            scaleX: .7167,
            scaleY: .7167,
            x: -14.3391,
            y: -311.3647,
            alpha: .5
        }, 0).wait(1).to({
            scaleX: .7156,
            scaleY: .7156,
            x: -14.0433,
            y: -318.0569,
            alpha: .4667
        }, 0).wait(1).to({
            scaleX: .7144,
            scaleY: .7144,
            x: -13.6744,
            y: -324.736,
            alpha: .4333
        }, 0).wait(1).to({
            scaleX: .7133,
            scaleY: .7133,
            x: -13.2335,
            y: -331.4006,
            alpha: .4
        }, 0).wait(1).to({
            scaleX: .7122,
            scaleY: .7122,
            x: -12.7258,
            y: -338.0194,
            alpha: .3667
        }, 0).wait(1).to({
            scaleX: .7111,
            scaleY: .7111,
            x: -12.2171,
            y: -343.9705,
            alpha: .3333
        }, 0).wait(1).to({
            scaleX: .71,
            scaleY: .71,
            x: -11.6926,
            y: -349.5515,
            alpha: .3
        }, 0).wait(1).to({
            scaleX: .7089,
            scaleY: .7089,
            x: -11.1068,
            y: -355.2388,
            alpha: .2667
        }, 0).wait(1).to({
            scaleX: .7078,
            scaleY: .7078,
            x: -10.4604,
            y: -360.9606,
            alpha: .2333
        }, 0).wait(1).to({
            scaleX: .7067,
            scaleY: .7067,
            x: -9.7445,
            y: -366.7324,
            alpha: .2
        }, 0).wait(1).to({
            scaleX: .7056,
            scaleY: .7056,
            x: -8.9494,
            y: -372.5631,
            alpha: .1667
        }, 0).wait(1).to({
            scaleX: .7044,
            scaleY: .7044,
            x: -8.0642,
            y: -378.4524,
            alpha: .1333
        }, 0).wait(1).to({
            scaleX: .7033,
            scaleY: .7033,
            x: -7.0738,
            y: -384.4113,
            alpha: .1
        }, 0).wait(1).to({
            scaleX: .7022,
            scaleY: .7022,
            x: -5.96,
            y: -390.4459,
            alpha: .0667
        }, 0).wait(1).to({
            scaleX: .7011,
            scaleY: .7011,
            x: -4.6977,
            y: -396.5686,
            alpha: .0333
        }, 0).wait(1).to({
            scaleX: .7,
            scaleY: .7,
            x: -3.7,
            y: -402.9,
            alpha: 0
        }, 0).to({
            _off: !0
        }, 1).wait(6))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-24.5, -412.3, 46.1, 425.8);
    (b.mc_lux = function(c, e, d) {
        this.initialize(c, e, d, {
            loop: 1
        });
        this.frame_0 = function() {
            this.gotoAndPlay(Math.floor(70 * Math.random() + 2))
        };
        this.frame_1 = function() {
            this.scaleX = this.scaleY = Math.random()
        };
        this.frame_85 = function() {
            this.gotoAndPlay("loop")
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(84).call(this.frame_85).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFCC00").s().p("AgxAyIAAhjIBjAAIAABjg");
        this.timeline.addTween(a.Tween.get(this.shape).to({
            _off: !0
        }, 1).wait(85));
        this.lux = new b.gr_lux_cnt;
        this.lux.name = "lux";
        this.lux.parent = this;
        this.instance = new b.gr_lux_cnt;
        this.instance.parent =
            this;
        this.instance.setTransform(-5.5, -18.45);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.lux
            }]
        }).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
                state: [{
                    t: this.instance
                }]
            },
            1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
                state: [{
                    t: this.instance
                }]
            },
            1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
                state: [{
                    t: this.instance
                }]
            },
            1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
                state: [{
                    t: this.instance
                }]
            },
            1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
                state: [{
                    t: this.instance
                }]
            },
            1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: []
        }, 1).wait(6));
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: .9939,
            scaleY: .9939,
            x: -6.385,
            y: -22.6826
        }, 0).wait(1).to({
            scaleX: .9879,
            scaleY: .9879,
            x: -7.2616,
            y: -27.4314
        }, 0).wait(1).to({
            scaleX: .9818,
            scaleY: .9818,
            x: -8.0252,
            y: -32.0888
        }, 0).wait(1).to({
            scaleX: .9758,
            scaleY: .9758,
            x: -8.6878,
            y: -36.609
        }, 0).wait(1).to({
            scaleX: .9697,
            scaleY: .9697,
            x: -9.2685,
            y: -41.0143
        }, 0).wait(1).to({
            scaleX: .9636,
            scaleY: .9636,
            x: -9.7795,
            y: -45.3037
        }, 0).wait(1).to({
            scaleX: .9576,
            scaleY: .9576,
            x: -10.24,
            y: -49.6694
        }, 0).wait(1).to({
            scaleX: .9515,
            scaleY: .9515,
            x: -10.6554,
            y: -54.2629
        }, 0).wait(1).to({
            scaleX: .9455,
            scaleY: .9455,
            x: -11.0026,
            y: -58.8715
        }, 0).wait(1).to({
            scaleX: .9394,
            scaleY: .9394,
            x: -11.2811,
            y: -63.4763
        }, 0).wait(1).to({
            scaleX: .9333,
            scaleY: .9333,
            x: -11.4923,
            y: -68.0742
        }, 0).wait(1).to({
            scaleX: .9273,
            scaleY: .9273,
            x: -11.6378,
            y: -72.6633
        }, 0).wait(1).to({
            scaleX: .9212,
            scaleY: .9212,
            x: -11.7191,
            y: -77.242
        }, 0).wait(1).to({
            scaleX: .9152,
            scaleY: .9152,
            x: -11.7379,
            y: -81.8086
        }, 0).wait(1).to({
            scaleX: .9091,
            scaleY: .9091,
            x: -11.6959,
            y: -86.3619
        }, 0).wait(1).to({
            scaleX: .903,
            scaleY: .903,
            x: -11.5946,
            y: -90.9005
        }, 0).wait(1).to({
            scaleX: .897,
            scaleY: .897,
            x: -11.4358,
            y: -95.4234
        }, 0).wait(1).to({
            scaleX: .8909,
            scaleY: .8909,
            x: -11.2211,
            y: -99.9289
        }, 0).wait(1).to({
            scaleX: .8849,
            scaleY: .8849,
            x: -10.9522,
            y: -104.4165
        }, 0).wait(1).to({
            scaleX: .8788,
            scaleY: .8788,
            x: -10.6308,
            y: -108.8857
        }, 0).wait(1).to({
            scaleX: .8727,
            scaleY: .8727,
            x: -10.2584,
            y: -113.3357
        }, 0).wait(1).to({
            scaleX: .8667,
            scaleY: .8667,
            x: -9.8367,
            y: -117.766
        }, 0).wait(1).to({
            scaleX: .8606,
            scaleY: .8606,
            x: -9.3672,
            y: -122.176
        }, 0).wait(1).to({
            scaleX: .8545,
            scaleY: .8545,
            x: -8.8514,
            y: -126.5653
        }, 0).wait(1).to({
            scaleX: .8485,
            scaleY: .8485,
            x: -8.2908,
            y: -130.9335
        }, 0).wait(1).to({
            scaleX: .8424,
            scaleY: .8424,
            x: -7.6869,
            y: -135.2804
        }, 0).wait(1).to({
            scaleX: .8364,
            scaleY: .8364,
            x: -7.0411,
            y: -139.605
        }, 0).wait(1).to({
            scaleX: .8303,
            scaleY: .8303,
            x: -6.3548,
            y: -143.9077
        }, 0).wait(1).to({
            scaleX: .8242,
            scaleY: .8242,
            x: -5.6293,
            y: -148.1887
        }, 0).wait(1).to({
            scaleX: .8182,
            scaleY: .8182,
            x: -4.866,
            y: -152.4472
        }, 0).wait(1).to({
            scaleX: .8121,
            scaleY: .8121,
            x: -4.0659,
            y: -156.6836
        }, 0).wait(1).to({
            scaleX: .8061,
            scaleY: .8061,
            x: -3.2305,
            y: -160.8979
        }, 0).wait(1).to({
            scaleX: .8,
            scaleY: .8,
            x: -2.3608,
            y: -165.0899
        }, 0).wait(1).to({
            scaleX: .7939,
            scaleY: .7939,
            x: -1.4643,
            y: -169.2601
        }, 0).wait(1).to({
            scaleX: .7879,
            scaleY: .7879,
            x: -.5919,
            y: -173.5348
        }, 0).wait(1).to({
            scaleX: .7818,
            scaleY: .7818,
            x: .2399,
            y: -177.9558
        }, 0).wait(1).to({
            scaleX: .7758,
            scaleY: .7758,
            x: 1.0013,
            y: -182.3673
        }, 0).wait(1).to({
            scaleX: .7697,
            scaleY: .7697,
            x: 1.6944,
            y: -186.7603
        }, 0).wait(1).to({
            scaleX: .7636,
            scaleY: .7636,
            x: 2.3225,
            y: -191.1346
        }, 0).wait(1).to({
            scaleX: .7576,
            scaleY: .7576,
            x: 2.8886,
            y: -195.4887
        }, 0).wait(1).to({
            scaleX: .7515,
            scaleY: .7515,
            x: 3.3957,
            y: -199.8228
        }, 0).wait(1).to({
            scaleX: .7455,
            scaleY: .7455,
            x: 3.8467,
            y: -204.1361
        }, 0).wait(1).to({
            scaleX: .7394,
            scaleY: .7394,
            x: 4.2441,
            y: -208.4288
        }, 0).wait(1).to({
            scaleX: .7333,
            scaleY: .7333,
            x: 4.6,
            y: -212.7
        }, 0).wait(1).to({
            scaleX: .7324,
            scaleY: .7324,
            x: 4.9707,
            y: -218.2608,
            alpha: .9706
        }, 0).wait(1).to({
            scaleX: .7314,
            scaleY: .7314,
            x: 5.3104,
            y: -224.5931,
            alpha: .9412
        }, 0).wait(1).to({
            scaleX: .7304,
            scaleY: .7304,
            x: 5.5566,
            y: -230.9725,
            alpha: .9118
        }, 0).wait(1).to({
            scaleX: .7294,
            scaleY: .7294,
            x: 5.7099,
            y: -237.3008,
            alpha: .8824
        }, 0).wait(1).to({
            scaleX: .7284,
            scaleY: .7284,
            x: 5.7766,
            y: -243.5675,
            alpha: .8529
        }, 0).wait(1).to({
            scaleX: .7275,
            scaleY: .7275,
            x: 5.7625,
            y: -249.7734,
            alpha: .8235
        }, 0).wait(1).to({
            scaleX: .7265,
            scaleY: .7265,
            x: 5.6732,
            y: -255.9203,
            alpha: .7941
        }, 0).wait(1).to({
            scaleX: .7255,
            scaleY: .7255,
            x: 5.5138,
            y: -262.0104,
            alpha: .7647
        }, 0).wait(1).to({
            scaleX: .7245,
            scaleY: .7245,
            x: 5.2887,
            y: -268.0458,
            alpha: .7353
        }, 0).wait(1).to({
            scaleX: .7235,
            scaleY: .7235,
            x: 5.002,
            y: -274.0285,
            alpha: .7059
        }, 0).wait(1).to({
            scaleX: .7226,
            scaleY: .7226,
            x: 4.6577,
            y: -279.9605,
            alpha: .6765
        }, 0).wait(1).to({
            scaleX: .7216,
            scaleY: .7216,
            x: 4.259,
            y: -285.8435,
            alpha: .6471
        }, 0).wait(1).to({
            scaleX: .7206,
            scaleY: .7206,
            x: 3.8091,
            y: -291.6795,
            alpha: .6176
        }, 0).wait(1).to({
            scaleX: .7196,
            scaleY: .7196,
            x: 3.3111,
            y: -297.4685,
            alpha: .5882
        }, 0).wait(1).to({
            scaleX: .7186,
            scaleY: .7186,
            x: 2.7675,
            y: -303.2141,
            alpha: .5588
        }, 0).wait(1).to({
            scaleX: .7176,
            scaleY: .7176,
            x: 2.1807,
            y: -308.918,
            alpha: .5294
        }, 0).wait(1).to({
            scaleX: .7167,
            scaleY: .7167,
            x: 1.5532,
            y: -314.5802,
            alpha: .5
        }, 0).wait(1).to({
            scaleX: .7157,
            scaleY: .7157,
            x: .8868,
            y: -320.2034,
            alpha: .4706
        }, 0).wait(1).to({
            scaleX: .7147,
            scaleY: .7147,
            x: .1836,
            y: -325.7884,
            alpha: .4412
        }, 0).wait(1).to({
            scaleX: .7137,
            scaleY: .7137,
            x: -.5547,
            y: -331.3366,
            alpha: .4118
        }, 0).wait(1).to({
            scaleX: .7127,
            scaleY: .7127,
            x: -1.3248,
            y: -336.8332,
            alpha: .3824
        }, 0).wait(1).to({
            scaleX: .7118,
            scaleY: .7118,
            x: -2.0861,
            y: -342.0456,
            alpha: .3529
        }, 0).wait(1).to({
            scaleX: .7108,
            scaleY: .7108,
            x: -2.836,
            y: -346.9985,
            alpha: .3235
        }, 0).wait(1).to({
            scaleX: .7098,
            scaleY: .7098,
            x: -3.6207,
            y: -352.0004,
            alpha: .2941
        }, 0).wait(1).to({
            scaleX: .7088,
            scaleY: .7088,
            x: -4.4375,
            y: -357.0237,
            alpha: .2647
        }, 0).wait(1).to({
                scaleX: .7078,
                scaleY: .7078,
                x: -5.2891,
                y: -362.0719,
                alpha: .2353
            },
            0).wait(1).to({
            scaleX: .7069,
            scaleY: .7069,
            x: -6.1774,
            y: -367.1462,
            alpha: .2059
        }, 0).wait(1).to({
            scaleX: .7059,
            scaleY: .7059,
            x: -7.1052,
            y: -372.249,
            alpha: .1765
        }, 0).wait(1).to({
            scaleX: .7049,
            scaleY: .7049,
            x: -8.0751,
            y: -377.3819,
            alpha: .1471
        }, 0).wait(1).to({
            scaleX: .7039,
            scaleY: .7039,
            x: -9.0899,
            y: -382.5447,
            alpha: .1176
        }, 0).wait(1).to({
            scaleX: .7029,
            scaleY: .7029,
            x: -10.1534,
            y: -387.7413,
            alpha: .0882
        }, 0).wait(1).to({
            scaleX: .702,
            scaleY: .702,
            x: -11.2692,
            y: -392.9725,
            alpha: .0588
        }, 0).wait(1).to({
            scaleX: .701,
            scaleY: .701,
            x: -12.4417,
            y: -398.2407,
            alpha: .0294
        }, 0).wait(1).to({
            scaleX: .7,
            scaleY: .7,
            x: -14.3,
            y: -403.4,
            alpha: 0
        }, 0).to({
            _off: !0
        }, 1).wait(6))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-24.1, -412.8, 39.8, 426.3);
    (b.character1_face_close_container = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.character1_face_close;
        this.instance.parent = this;
        this.instance.alpha = .1992;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
                regX: 35,
                regY: 17.5,
                x: 35,
                y: 17.5,
                alpha: .3015
            },
            0).wait(1).to({
            alpha: .0922
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0,
            alpha: 0
        }, 0).wait(2))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, 0, 70, 35);
    (b.fumika_body_all = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_armL1_1("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(378, 147, 1, 1, 0, 0, 0, 75, 64);
        this.timeline.addTween(a.Tween.get(this.instance).wait(60));
        this.instance_1 = new b.fumika_armL2_1("synched", 4);
        this.instance_1.parent = this;
        this.instance_1.setTransform(374.5,
            93.4, 1, 1, 0, 0, 0, 34.5, 23.4);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            regX: 134.5,
            regY: 155.1,
            rotation: .0445,
            x: 474.4,
            y: 225.15,
            startPosition: 5
        }, 0).wait(1).to({
            rotation: .099,
            x: 474.25,
            y: 225.25,
            startPosition: 6
        }, 0).wait(1).to({
            rotation: .1636,
            x: 474.1,
            y: 225.4,
            startPosition: 7
        }, 0).wait(1).to({
            rotation: .2384,
            x: 473.9,
            y: 225.5,
            startPosition: 8
        }, 0).wait(1).to({
            rotation: .3236,
            x: 473.7,
            y: 225.65,
            startPosition: 9
        }, 0).wait(1).to({
            rotation: .4192,
            x: 473.5,
            y: 225.85,
            startPosition: 10
        }, 0).wait(1).to({
            rotation: .5255,
            x: 473.3,
            y: 226,
            startPosition: 11
        }, 0).wait(1).to({
            rotation: .6426,
            x: 473,
            y: 226.2,
            startPosition: 12
        }, 0).wait(1).to({
            rotation: .7705,
            x: 472.7,
            y: 226.4,
            startPosition: 13
        }, 0).wait(1).to({
            rotation: .9095,
            x: 472.4,
            y: 226.7,
            startPosition: 14
        }, 0).wait(1).to({
            rotation: 1.0597,
            x: 472.05,
            y: 226.9,
            startPosition: 15
        }, 0).wait(1).to({
            rotation: 1.2212,
            x: 471.65,
            y: 227.15,
            startPosition: 16
        }, 0).wait(1).to({
            rotation: 1.3941,
            x: 471.25,
            y: 227.45,
            startPosition: 17
        }, 0).wait(1).to({
            rotation: 1.5787,
            x: 470.85,
            y: 227.8,
            startPosition: 18
        }, 0).wait(1).to({
            rotation: 1.7751,
            x: 470.35,
            y: 228.1,
            startPosition: 19
        }, 0).wait(1).to({
            rotation: 1.9834,
            x: 469.85,
            y: 228.45,
            startPosition: 20
        }, 0).wait(1).to({
            rotation: 2.2037,
            x: 469.35,
            y: 228.85,
            startPosition: 21
        }, 0).wait(1).to({
            rotation: 2.4363,
            x: 468.75,
            y: 229.2,
            startPosition: 22
        }, 0).wait(1).to({
            rotation: 2.6812,
            x: 468.2,
            y: 229.65,
            startPosition: 23
        }, 0).wait(1).to({
            rotation: 2.9386,
            x: 467.55,
            y: 230.05,
            startPosition: 24
        }, 0).wait(1).to({
            rotation: 3.2087,
            x: 466.95,
            y: 230.5,
            startPosition: 25
        }, 0).wait(1).to({
                rotation: 3.4916,
                x: 466.25,
                y: 230.95,
                startPosition: 26
            },
            0).wait(1).to({
            rotation: 3.7874,
            x: 465.55,
            y: 231.45,
            startPosition: 27
        }, 0).wait(1).to({
            rotation: 4.0964,
            x: 464.8,
            y: 231.9,
            startPosition: 28
        }, 0).wait(1).to({
            regX: 34.5,
            regY: 23.4,
            rotation: 4.4186,
            x: 374.45,
            y: 93.45,
            startPosition: 29
        }, 0).to({
            rotation: 0,
            x: 374.5,
            y: 93.4,
            startPosition: 3
        }, 34, a.Ease.quadInOut).wait(1));
        this.instance_2 = new b.fumika_armL5_1("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(406.5, 91.5, 1, 1, 0, 0, 0, 6.5, 9.5);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(60));
        this.instance_3 =
            new b.fumika_body;
        this.instance_3.parent = this;
        this.instance_3.setTransform(136, -14);
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(60));
        this.instance_4 = new b.fumika_armR1_1("synched", 4);
        this.instance_4.parent = this;
        this.instance_4.setTransform(181.9, 37.5, 1, 1, 0, 0, 0, 43.9, -12.5);
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(1).to({
            regX: -44,
            regY: 50.8,
            rotation: -.0403,
            x: 94.05,
            y: 100.85,
            startPosition: 5
        }, 0).wait(1).to({
            rotation: -.0896,
            x: 94.1,
            y: 100.9,
            startPosition: 6
        }, 0).wait(1).to({
            rotation: -.1481,
            x: 94.15,
            y: 101,
            startPosition: 7
        }, 0).wait(1).to({
            rotation: -.2158,
            x: 94.2,
            y: 101.1,
            startPosition: 8
        }, 0).wait(1).to({
            rotation: -.2929,
            x: 94.3,
            y: 101.2,
            startPosition: 9
        }, 0).wait(1).to({
            rotation: -.3795,
            x: 94.4,
            y: 101.35,
            startPosition: 10
        }, 0).wait(1).to({
            rotation: -.4757,
            x: 94.5,
            y: 101.5,
            startPosition: 11
        }, 0).wait(1).to({
            rotation: -.5816,
            x: 94.6,
            y: 101.65,
            startPosition: 12
        }, 0).wait(1).to({
            rotation: -.6974,
            x: 94.75,
            y: 101.85,
            startPosition: 13
        }, 0).wait(1).to({
            rotation: -.8232,
            x: 94.9,
            y: 102.05,
            startPosition: 14
        }, 0).wait(1).to({
            rotation: -.9592,
            x: 95.05,
            y: 102.25,
            startPosition: 15
        }, 0).wait(1).to({
            rotation: -1.1054,
            x: 95.25,
            y: 102.45,
            startPosition: 16
        }, 0).wait(1).to({
            rotation: -1.2619,
            x: 95.35,
            y: 102.7,
            startPosition: 17
        }, 0).wait(1).to({
            rotation: -1.429,
            x: 95.55,
            y: 102.95,
            startPosition: 18
        }, 0).wait(1).to({
            rotation: -1.6068,
            x: 95.75,
            y: 103.25,
            startPosition: 19
        }, 0).wait(1).to({
            rotation: -1.7953,
            x: 96,
            y: 103.5,
            startPosition: 20
        }, 0).wait(1).to({
            rotation: -1.9947,
            x: 96.25,
            y: 103.8,
            startPosition: 21
        }, 0).wait(1).to({
            rotation: -2.2052,
            x: 96.5,
            y: 104.1,
            startPosition: 22
        }, 0).wait(1).to({
            rotation: -2.4269,
            x: 96.75,
            y: 104.45,
            startPosition: 23
        }, 0).wait(1).to({
            rotation: -2.6599,
            x: 97,
            y: 104.8,
            startPosition: 24
        }, 0).wait(1).to({
            rotation: -2.9044,
            x: 97.3,
            y: 105.2,
            startPosition: 25
        }, 0).wait(1).to({
            rotation: -3.1605,
            x: 97.6,
            y: 105.55,
            startPosition: 26
        }, 0).wait(1).to({
            rotation: -3.4283,
            x: 97.95,
            y: 105.95,
            startPosition: 27
        }, 0).wait(1).to({
            rotation: -3.7079,
            x: 98.3,
            y: 106.35,
            startPosition: 28
        }, 0).wait(1).to({
            regX: 44,
            regY: -12.5,
            rotation: -3.9996,
            x: 182,
            y: 37.5,
            startPosition: 29
        }, 0).wait(1).to({
            regX: -44,
            regY: 50.8,
            rotation: -3.9708,
            x: 98.5,
            y: 106.7,
            startPosition: 30
        }, 0).wait(1).to({
            rotation: -3.9372,
            y: 106.65,
            startPosition: 31
        }, 0).wait(1).to({
            rotation: -3.8987,
            x: 98.45,
            y: 106.6,
            startPosition: 32
        }, 0).wait(1).to({
            rotation: -3.8552,
            x: 98.4,
            y: 106.5,
            startPosition: 33
        }, 0).wait(1).to({
            rotation: -3.8067,
            x: 98.3,
            y: 106.45,
            startPosition: 34
        }, 0).wait(1).to({
            rotation: -3.7532,
            x: 98.25,
            y: 106.4,
            startPosition: 35
        }, 0).wait(1).to({
            rotation: -3.6946,
            x: 98.2,
            y: 106.3,
            startPosition: 36
        }, 0).wait(1).to({
            rotation: -3.6308,
            x: 98.1,
            y: 106.2,
            startPosition: 37
        }, 0).wait(1).to({
            rotation: -3.5618,
            x: 98.05,
            y: 106.1,
            startPosition: 38
        }, 0).wait(1).to({
            rotation: -3.4876,
            x: 98,
            y: 106,
            startPosition: 39
        }, 0).wait(1).to({
            rotation: -3.4082,
            x: 97.85,
            y: 105.85,
            startPosition: 40
        }, 0).wait(1).to({
            rotation: -3.3233,
            x: 97.75,
            y: 105.7,
            startPosition: 41
        }, 0).wait(1).to({
            rotation: -3.2331,
            x: 97.6,
            y: 105.6,
            startPosition: 42
        }, 0).wait(1).to({
            rotation: -3.1374,
            x: 97.55,
            y: 105.4,
            startPosition: 43
        }, 0).wait(1).to({
            rotation: -3.0363,
            x: 97.4,
            y: 105.35,
            startPosition: 44
        }, 0).wait(1).to({
            rotation: -2.9296,
            x: 97.3,
            y: 105.15,
            startPosition: 45
        }, 0).wait(1).to({
            rotation: -2.8173,
            x: 97.15,
            y: 105,
            startPosition: 46
        }, 0).wait(1).to({
            rotation: -2.6993,
            x: 97.05,
            y: 104.8,
            startPosition: 47
        }, 0).wait(1).to({
            rotation: -2.5756,
            x: 96.9,
            y: 104.65,
            startPosition: 48
        }, 0).wait(1).to({
            rotation: -2.4462,
            x: 96.7,
            y: 104.45,
            startPosition: 49
        }, 0).wait(1).to({
            rotation: -2.311,
            x: 96.6,
            y: 104.2,
            startPosition: 50
        }, 0).wait(1).to({
            rotation: -2.1699,
            x: 96.4,
            y: 104,
            startPosition: 51
        }, 0).wait(1).to({
            rotation: -2.0229,
            x: 96.25,
            y: 103.8,
            startPosition: 52
        }, 0).wait(1).to({
            rotation: -1.8699,
            x: 96,
            y: 103.55,
            startPosition: 53
        }, 0).wait(1).to({
            rotation: -1.7109,
            x: 95.85,
            y: 103.35,
            startPosition: 54
        }, 0).wait(1).to({
            rotation: -1.5458,
            x: 95.65,
            y: 103.1,
            startPosition: 55
        }, 0).wait(1).to({
            rotation: -1.3746,
            x: 95.45,
            y: 102.85,
            startPosition: 56
        }, 0).wait(1).to({
            rotation: -1.1972,
            x: 95.25,
            y: 102.55,
            startPosition: 57
        }, 0).wait(1).to({
            rotation: -1.0136,
            x: 95.05,
            y: 102.3,
            startPosition: 58
        }, 0).wait(1).to({
            rotation: -.8237,
            x: 94.85,
            y: 102,
            startPosition: 59
        }, 0).wait(1).to({
            rotation: -.6274,
            x: 94.6,
            y: 101.7,
            startPosition: 0
        }, 0).wait(1).to({
            rotation: -.4248,
            x: 94.4,
            y: 101.4,
            startPosition: 1
        }, 0).wait(1).to({
            rotation: -.2156,
            x: 94.15,
            y: 101.05,
            startPosition: 2
        }, 0).wait(1).to({
            regX: 43.9,
            regY: -12.5,
            rotation: 0,
            x: 181.9,
            y: 37.5,
            startPosition: 3
        }, 0).wait(1));
        this.instance_5 = new b.fumika_body_acc4_1("synched", 0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(301.4, 250.8, 1, 1, 0, 0, 0, 9, 9.1);
        this.timeline.addTween(a.Tween.get(this.instance_5).to({
            regY: 9.2,
            rotation: -7.9993,
            x: 299.75,
            y: 249.25,
            startPosition: 38
        }, 38, a.Ease.quadInOut).to({
            regY: 9.1,
            rotation: 0,
            x: 301.4,
            y: 250.8,
            startPosition: 59
        }, 21, a.Ease.quadInOut).wait(1))
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-2.7, -14, 609.1, 413.7);
    (b.mc_scene1_logo = function(c, e, d) {
        this.initialize(c, e, d, {
            def: 0,
            gl: 1
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_1 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));
        this.glitters = new b.glitters2;
        this.glitters.name = "glitters";
        this.glitters.parent = this;
        this.glitters.setTransform(-1.35, -.2);
        this.glitters._off = !0;
        this.timeline.addTween(a.Tween.get(this.glitters).wait(1).to({
                _off: !1
            },
            0).wait(1));
        this.instance = new b.logo;
        this.instance.parent = this;
        this.instance.setTransform(-100, -78.5, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(2))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-100, -78.5, 200, 157);
    (b.logo_splo_all = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.glitters = new b.glitters2;
        this.glitters.name = "glitters";
        this.glitters.parent = this;
        this.glitters.setTransform(2, 5.8);
        this.timeline.addTween(a.Tween.get(this.glitters).wait(1));
        this.instance =
            new b.logo_solo_1;
        this.instance.parent = this;
        this.instance.setTransform(-4.65, 4.25, 1.25, 1.25, 0, 0, 0, -59.1, -71.7);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.logo_splo_all, new a.Rectangle(-119.5, -71.1, 234.3, 140.6), null);
    (b.g\uff4citter_rise_inner = function(c, e, d) {
        this.initialize(c, e, d, {
            r: 46,
            "-": 142
        });
        this.frame_0 = function() {
            this.rotation += exportRoot._u.random(14);
            this.gotoAndPlay(exportRoot._u.random(40) + 42)
        };
        this.frame_142 = function() {
            this.gotoAndPlay("r")
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(142).call(this.frame_142).wait(1));
        this.instance = new b.g\uff4citter_rise_core;
        this.instance.parent = this;
        this.instance.setTransform(0, -17.45);
        this.timeline.addTween(a.Tween.get(this.instance).wait(46).to({
            x: .6,
            y: 355.55
        }, 96).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-42.1, -28.7, 86.7, 395.5);
    (b.glitter_rise = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.g\uff4citter_rise_inner;
        this.instance.parent = this;
        this.instance.setTransform(105.4, 8.8, .6479, .6442);
        this.instance_1 = new b.g\uff4citter_rise_inner;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-103.35, 13.55, .6479, .6442);
        this.instance_2 = new b.g\uff4citter_rise_inner;
        this.instance_2.parent = this;
        this.instance_2.setTransform(133.05, 1.4, .3695, .3674);
        this.instance_3 = new b.g\uff4citter_rise_inner;
        this.instance_3.parent = this;
        this.instance_3.setTransform(120.35, 4.1, .3695, .3674);
        this.instance_4 = new b.g\uff4citter_rise_inner;
        this.instance_4.parent = this;
        this.instance_4.setTransform(91.85, 12.05, .6947, .692);
        this.instance_5 = new b.g\uff4citter_rise_inner;
        this.instance_5.parent = this;
        this.instance_5.setTransform(75.65, 14.3, .6947, .692);
        this.instance_6 = new b.g\uff4citter_rise_inner;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-76.5, 8.3, .3962, .3946);
        this.instance_7 = new b.g\uff4citter_rise_inner;
        this.instance_7.parent = this;
        this.instance_7.setTransform(93.05, 23.3, .3962, .3946);
        this.instance_8 = new b.g\uff4citter_rise_inner;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-64.8, 16.35, .6947, .692);
        this.instance_9 = new b.g\uff4citter_rise_inner;
        this.instance_9.parent = this;
        this.instance_9.setTransform(-119.75, 9.85, .6947, .692);
        this.instance_10 = new b.g\uff4citter_rise_inner;
        this.instance_10.parent = this;
        this.instance_10.setTransform(-94.85, 9.25, .6947, .692);
        this.instance_11 = new b.g\uff4citter_rise_inner;
        this.instance_11.parent = this;
        this.instance_11.setTransform(-85.05, -5.15, .3962, .3946);
        this.instance_12 = new b.g\uff4citter_rise_inner;
        this.instance_12.parent = this;
        this.instance_12.setTransform(-110.9, 7.45, .3962, .3946);
        this.instance_13 = new b.g\uff4citter_rise_inner;
        this.instance_13.parent = this;
        this.instance_13.setTransform(-73.3, 2.9, .6947, .692);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_13
            }, {
                t: this.instance_12
            }, {
                t: this.instance_11
            }, {
                t: this.instance_10
            }, {
                t: this.instance_9
            }, {
                t: this.instance_8
            }, {
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = g(b.glitter_rise, new a.Rectangle(-126.4, -16.9, 263, 37.8), null);
    (b.gliter_container =
        function(c, e, d) {
            this.initialize(c, e, d, {});
            this.instance = new b.glitter_rise;
            this.instance.parent = this;
            this.instance.setTransform(11.9, -34.95, 1.0489, 1.0489, 2.9285, 0, 0, 5.2, -.2);
            this.instance_1 = new b.glitter_rise;
            this.instance_1.parent = this;
            this.instance_1.setTransform(-39.95, 8.25, 1.155, 1.0852, .8008, 0, 0, .1, 6.5);
            this.instance_1.alpha = .6992;
            this.timeline.addTween(a.Tween.get({}).to({
                state: [{
                    t: this.instance_1
                }, {
                    t: this.instance
                }]
            }).wait(1))
        }).prototype = g(b.gliter_container, new a.Rectangle(-185.9, -57, 335.8,
        82.3), null);
    (b.mc_set_lux = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.mc_lux3;
        this.instance.parent = this;
        this.instance.setTransform(-98.15, -102, .2471, .2471);
        this.instance_1 = new b.mc_lux3;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-167.95, -78.15, .5547, .5547);
        this.instance_2 = new b.mc_lux3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(108.35, -73.65, .3879, .3879);
        this.instance_3 = new b.mc_lux3;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-183.8, -102.9,
            1.3946, 1.3946);
        this.instance_4 = new b.mc_lux3;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-150.65, -97.5, .6353, .6353);
        this.instance_5 = new b.mc_lux3;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-174.2, -95.8, .2471, .2471);
        this.instance_6 = new b.mc_lux3;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-173.05, -136.4, .2471, .2471);
        this.instance_7 = new b.mc_lux3;
        this.instance_7.parent = this;
        this.instance_7.setTransform(120.4, -117.15, .2471, .2471);
        this.instance_8 = new b.mc_lux3;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-123.55, -101.75, .5547, .5547);
        this.instance_9 = new b.mc_lux3;
        this.instance_9.parent = this;
        this.instance_9.setTransform(133.6, -78.1, .3879, .3879);
        this.instance_10 = new b.mc_lux3;
        this.instance_10.parent = this;
        this.instance_10.setTransform(-140.7, -107.15, .3013, .3013);
        this.instance_11 = new b.mc_lux3;
        this.instance_11.parent = this;
        this.instance_11.setTransform(173.25, -113.8, 1.3946, 1.3946);
        this.instance_12 = new b.mc_lux3;
        this.instance_12.parent = this;
        this.instance_12.setTransform(-203.85,
            -104.05, 1.0232, 1.0232);
        this.instance_13 = new b.mc_lux3;
        this.instance_13.parent = this;
        this.instance_13.setTransform(152.6, -93.15, 1.3946, 1.3946);
        this.instance_14 = new b.mc_lux3;
        this.instance_14.parent = this;
        this.instance_14.setTransform(150.45, -68.9, .6353, .6353);
        this.instance_15 = new b.mc_lux3;
        this.instance_15.parent = this;
        this.instance_15.setTransform(-168.3, -114.2, 1.6119, 1.6119);
        this.instance_16 = new b.mc_lux3;
        this.instance_16.parent = this;
        this.instance_16.setTransform(-137.85, -81.25, 1.2615, 1.2615);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.instance_16
                },
                {
                    t: this.instance_15
                }, {
                    t: this.instance_14
                }, {
                    t: this.instance_13
                }, {
                    t: this.instance_12
                }, {
                    t: this.instance_11
                }, {
                    t: this.instance_10
                }, {
                    t: this.instance_9
                }, {
                    t: this.instance_8
                }, {
                    t: this.instance_7
                }, {
                    t: this.instance_6
                }, {
                    t: this.instance_5
                }, {
                    t: this.instance_4
                }, {
                    t: this.instance_3
                }, {
                    t: this.instance_2
                }, {
                    t: this.instance_1
                }, {
                    t: this.instance
                }
            ]
        }).wait(1));
        this.instance_17 = new b.mc_lux;
        this.instance_17.parent = this;
        this.instance_17.setTransform(-114.05, -100.45, .8261, .8261);
        this.instance_18 = new b.mc_lux;
        this.instance_18.parent =
            this;
        this.instance_18.setTransform(155.15, -120.5, .7772, .7772);
        this.instance_19 = new b.mc_lux;
        this.instance_19.parent = this;
        this.instance_19.setTransform(-129.05, -93.9, .2191, .2191);
        this.instance_20 = new b.mc_lux;
        this.instance_20.parent = this;
        this.instance_20.setTransform(111.3, -93.35, 1.1889, 1.1889);
        this.instance_21 = new b.mc_lux;
        this.instance_21.parent = this;
        this.instance_21.setTransform(131.8, -118, .7772, .7772);
        this.instance_22 = new b.mc_lux;
        this.instance_22.parent = this;
        this.instance_22.setTransform(-200.25,
            -91.05, .2191, .2191);
        this.instance_23 = new b.mc_lux;
        this.instance_23.parent = this;
        this.instance_23.setTransform(157.35, -110.2, .2191, .2191);
        this.instance_24 = new b.mc_lux;
        this.instance_24.parent = this;
        this.instance_24.setTransform(-161.9, -90.25);
        this.instance_25 = new b.mc_lux;
        this.instance_25.parent = this;
        this.instance_25.setTransform(104.5, -115.6, .8261, .8261);
        this.instance_26 = new b.mc_lux;
        this.instance_26.parent = this;
        this.instance_26.setTransform(198.5, -99.9, .7772, .7772);
        this.instance_27 = new b.mc_lux;
        this.instance_27.parent =
            this;
        this.instance_27.setTransform(89.5, -109.05, .2191, .2191);
        this.instance_28 = new b.mc_lux;
        this.instance_28.parent = this;
        this.instance_28.setTransform(143.4, -106.9, 1.1889, 1.1889);
        this.instance_29 = new b.mc_lux;
        this.instance_29.parent = this;
        this.instance_29.setTransform(-151.9, -126.3, .7147, .7147);
        this.instance_30 = new b.mc_lux;
        this.instance_30.parent = this;
        this.instance_30.setTransform(128.9, -99.65, .7772, .7772);
        this.instance_31 = new b.mc_lux;
        this.instance_31.parent = this;
        this.instance_31.setTransform(-134,
            -116.65, 1.1682, 1.1682);
        this.instance_32 = new b.mc_lux;
        this.instance_32.parent = this;
        this.instance_32.setTransform(-183.8, -77.7);
        this.instance_33 = new b.mc_lux;
        this.instance_33.parent = this;
        this.instance_33.setTransform(181.85, -75.65);
        this.instance_34 = new b.mc_lux;
        this.instance_34.parent = this;
        this.instance_34.setTransform(-184.8, -125.7, .2593, .2593);
        this.instance_35 = new b.mc_lux;
        this.instance_35.parent = this;
        this.instance_35.setTransform(166.9, -90.15, .6658, .6658);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.instance_35
                },
                {
                    t: this.instance_34
                }, {
                    t: this.instance_33
                }, {
                    t: this.instance_32
                }, {
                    t: this.instance_31
                }, {
                    t: this.instance_30
                }, {
                    t: this.instance_29
                }, {
                    t: this.instance_28
                }, {
                    t: this.instance_27
                }, {
                    t: this.instance_26
                }, {
                    t: this.instance_25
                }, {
                    t: this.instance_24
                }, {
                    t: this.instance_23
                }, {
                    t: this.instance_22
                }, {
                    t: this.instance_21
                }, {
                    t: this.instance_20
                }, {
                    t: this.instance_19
                }, {
                    t: this.instance_18
                }, {
                    t: this.instance_17
                }
            ]
        }).wait(1))
    }).prototype = g(b.mc_set_lux, new a.Rectangle(-217.6, -139.7, 426.6, 79.39999999999999), null);
    (b.character1_face_container =
        function(c, e, d) {
            this.initialize(c, e, d, {
                init: 0,
                run: 5,
                stay: 10,
                blink1: 15,
                blink2: 21
            });
            this.frame_0 = function() {
                this.setBlink = function() {
                    this.cnt = Math.floor(Math.random() * this.blink)
                };
                this.next_face = this.current_face = 1;
                this.blink = 100;
                this.face2_blink = this.face1_blink = 1;
                this.face3_blink = 0;
                this.face4_blink = 1;
                this.face6_blink = this.face5_blink = 0;
                this.face7_blink = 1;
                this.face10_blink = this.face9_blink = this.face8_blink = 0;
                this.face11_blink = 1;
                this.cnt = this.face13_blink = this.face12_blink = 0;
                this.setBlink();
                this.gotoAndPlay("stay")
            };
            this.frame_5 = function() {
                this.f1_alpha.visible = !1;
                this.next_face == this.current_face ? this.gotoAndPlay("stay") : (this.f1.gotoAndStop(this.current_face - 1), this.f2.gotoAndStop(this.next_face - 1), this.f1.visible = 1 == this.current_face ? !1 : !0, 1 == this.next_face ? (this.f1.visible = !1, this.f2.visible = !1, this.f1_alpha.visible = !0, this.f1_alpha.gotoAndStop(this.current_face - 1)) : this.f2.visible = !0)
            };
            this.frame_7 = function() {
                this.gotoAndPlay("stay")
            };
            this.frame_10 = function() {
                this.current_face = this.next_face;
                this.f1.gotoAndStop(this.current_face -
                    1);
                this.f2.gotoAndStop(this.next_face - 1);
                this.f1.visible = !1;
                this.f2.visible = !0;
                this.face_blink = this["face" + this.current_face + "_blink"];
                0 < this.face_blink ? this.play() : this.stop()
            };
            this.frame_11 = function() {
                0 < this.cnt ? this.cnt-- : (this.setBlink(), this.gotoAndPlay("blink" + this.face_blink))
            };
            this.frame_12 = function() {
                this.gotoAndPlay(this.currentFrame - 1)
            };
            this.frame_15 = function() {
                this.f1.visible = !1;
                this.f2.visible = !0
            };
            this.frame_19 = function() {
                this.gotoAndPlay("stay")
            };
            this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(2).call(this.frame_7).wait(3).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(3).call(this.frame_15).wait(4).call(this.frame_19).wait(8));
            c = new a.Shape;
            c._off = !0;
            e = (new a.Graphics).p("ABlB6QgWgOgPgWQgTgbgtgQQgUgIglgHIgiAAIgXAGIg3AAQgngBgbgaQgYgVABgXIABgjQAAgFAHgMIAJgRQAIgTAkgKIBNgNIAhAAQAmAAAUATQAKAIANAYQADADACANQABALAFADQAPAPAaANIAhAAIAxgWIApAAQAagDAhA3QAfAyABAXIgCAWIgDAZQgDAIgMAMQgSASgVAAQg7AAgpgbg");
            this.timeline.addTween(a.Tween.get(c).to({
                graphics: null,
                x: 0,
                y: 0
            }).wait(15).to({
                graphics: e,
                x: -.7,
                y: -209.7
            }).wait(6).to({
                graphics: null,
                x: 0,
                y: 0
            }).wait(6));
            this.instance = new b.character1_face_close_container("synched", 0, !1);
            this.instance.parent =
                this;
            this.instance.setTransform(-35.5, -227.5);
            this.instance._off = !0;
            e = [this.instance];
            for (d = 0; d < e.length; d++) e[d].mask = c;
            this.timeline.addTween(a.Tween.get(this.instance).wait(15).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 6).wait(6));
            this.f2 = new b.character1_face;
            this.f2.name = "f2";
            this.f2.parent = this;
            this.timeline.addTween(a.Tween.get(this.f2).wait(5).to({
                alpha: .1992
            }, 0).wait(1).to({
                regX: -.5,
                regY: -119,
                x: -.5,
                y: -119,
                alpha: .7998
            }, 0).wait(1).to({
                regX: 0,
                regY: 0,
                x: 0,
                y: 0,
                alpha: 1
            }, 0).wait(20));
            this.f1 = new b.character1_face;
            this.f1.name = "f1";
            this.f1.parent = this;
            this.timeline.addTween(a.Tween.get(this.f1).wait(7).to({
                alpha: 0
            }, 0).wait(20));
            this.f1_alpha = new b.character1_face;
            this.f1_alpha.name = "f1_alpha";
            this.f1_alpha.parent = this;
            this.timeline.addTween(a.Tween.get(this.f1_alpha).wait(5).to({
                alpha: .8008
            }, 0).wait(1).to({
                regX: -.5,
                regY: -119,
                x: -.5,
                y: -119,
                alpha: .6006
            }, 0).wait(1).to({
                regX: 0,
                regY: 0,
                x: 0,
                y: 0,
                alpha: 0
            }, 0).wait(20))
        }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-82, -290, 240, 327.1);
    (b.character1_body =
        function(c, e, d) {
            this.initialize(c, e, d, {});
            this.frame_0 = function() {
                this.stop()
            };
            this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
            this.f = new b.character1_face_container;
            this.f.name = "f";
            this.f.parent = this;
            this.timeline.addTween(a.Tween.get(this.f).wait(1));
            this.b = new b.character1_base;
            this.b.name = "b";
            this.b.parent = this;
            this.timeline.addTween(a.Tween.get(this.b).wait(1))
        }).prototype = g(b.character1_body, new a.Rectangle(-70, -290, 140, 300), null);
    (b.fumika_mov_last = function(c, e, d) {
        this.initialize(c,
            e, d, {});
        this.instance = new b.fumika_head_last;
        this.instance.parent = this;
        this.instance.setTransform(-83.2, -284.8, 1, 1, .0245, 0, 0, 136.5, 206);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regX: 233.9,
            regY: 195.5,
            rotation: .0717,
            x: 13.7,
            y: -294.6
        }, 0).wait(1).to({
            rotation: .1245,
            x: 13.15,
            y: -293.95
        }, 0).wait(1).to({
            rotation: .1798,
            x: 12.55,
            y: -293.2
        }, 0).wait(1).to({
            rotation: .2341,
            x: 11.95,
            y: -292.5
        }, 0).wait(1).to({
            rotation: .2841,
            x: 11.4,
            y: -291.85
        }, 0).wait(1).to({
            rotation: .3279,
            x: 10.9,
            y: -291.25
        }, 0).wait(1).to({
            rotation: .3644,
            x: 10.5,
            y: -290.75
        }, 0).wait(1).to({
            rotation: .3935,
            x: 10.2,
            y: -290.4
        }, 0).wait(1).to({
            rotation: .4156,
            x: 9.95,
            y: -290.1
        }, 0).wait(1).to({
            rotation: .4315,
            x: 9.8,
            y: -289.9
        }, 0).wait(1).to({
            rotation: .4416,
            x: 9.65,
            y: -289.75
        }, 0).wait(1).to({
            regX: 136.6,
            regY: 206,
            rotation: .4468,
            x: -87.85,
            y: -280.05
        }, 0).to({
            rotation: 0,
            x: -81.75,
            y: -286.15
        }, 15, a.Ease.quadInOut).to({
            x: -94.25,
            y: -281.15
        }, 10, a.Ease.quadInOut).to({
            y: -286.15
        }, 46, a.Ease.quadInOut).to({
            x: -81.75
        }, 30, a.Ease.quadInOut).wait(1));
        this.instance_1 = new b.fumika_body_all;
        this.instance_1.parent =
            this;
        this.instance_1.setTransform(-101.75, -19.7, 1, 1, -.2675, 0, 0, 269.6, 262.4);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            regX: 301.4,
            regY: 194.3,
            rotation: -.3998,
            x: -70.4,
            y: -87.2
        }, 0).wait(1).to({
            rotation: -.5475,
            x: -70.6,
            y: -86.35
        }, 0).wait(1).to({
            rotation: -.7023,
            x: -70.75,
            y: -85.5
        }, 0).wait(1).to({
            rotation: -.8542,
            x: -70.95,
            y: -84.6
        }, 0).wait(1).to({
            rotation: -.9944,
            x: -71.1,
            y: -83.9
        }, 0).wait(1).to({
            rotation: -1.1169,
            x: -71.2,
            y: -83.15
        }, 0).wait(1).to({
            rotation: -1.219,
            x: -71.3,
            y: -82.55
        }, 0).wait(1).to({
            rotation: -1.3006,
            x: -71.45,
            y: -82.1
        }, 0).wait(1).to({
            rotation: -1.3626,
            x: -71.55,
            y: -81.75
        }, 0).wait(1).to({
            rotation: -1.4069,
            x: -71.6,
            y: -81.5
        }, 0).wait(1).to({
            rotation: -1.4353,
            y: -81.35
        }, 0).wait(1).to({
            regX: 269.6,
            regY: 262.5,
            rotation: -1.4497,
            x: -101.75,
            y: -12.35
        }, 0).to({
            regX: 269.5,
            rotation: -9E-4,
            x: -101.85,
            y: -21.65
        }, 15, a.Ease.quadInOut).to({
            regY: 262.4,
            rotation: -2.2151,
            y: -14.25
        }, 10, a.Ease.quadInOut).to({
            rotation: -2.2151,
            y: -16.75
        }, 46, a.Ease.quadInOut).to({
            regY: 262.5,
            rotation: -9E-4,
            y: -21.65
        }, 30, a.Ease.quadInOut).wait(1));
        this.instance_2 =
            new b.fumika_hair_back;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-85.1, -287.75, 1, 1, .056, 0, 0, 70.6, 43);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(1).to({
            regX: 198,
            regY: 49.7,
            rotation: .1616,
            x: 41.75,
            y: -280.1
        }, 0).wait(1).to({
            rotation: .2796,
            x: 41.15,
            y: -279.25
        }, 0).wait(1).to({
            rotation: .4032,
            x: 40.5,
            y: -278.35
        }, 0).wait(1).to({
            rotation: .5246,
            x: 39.9,
            y: -277.45
        }, 0).wait(1).to({
            rotation: .6365,
            x: 39.3,
            y: -276.65
        }, 0).wait(1).to({
            rotation: .7344,
            x: 38.8,
            y: -275.9
        }, 0).wait(1).to({
            rotation: .816,
            x: 38.35,
            y: -275.35
        }, 0).wait(1).to({
            rotation: .8811,
            x: 38.05,
            y: -274.85
        }, 0).wait(1).to({
            rotation: .9306,
            x: 37.7,
            y: -274.5
        }, 0).wait(1).to({
            rotation: .966,
            x: 37.5,
            y: -274.2
        }, 0).wait(1).to({
            rotation: .9887,
            x: 37.4,
            y: -274.05
        }, 0).wait(1).to({
            regX: 70.6,
            regY: 43.1,
            rotation: 1.0002,
            x: -89.9,
            y: -282.9
        }, 0).to({
            regX: 70.7,
            rotation: 0,
            x: -83.65,
            y: -289.05
        }, 15, a.Ease.quadInOut).to({
            x: -91.15
        }, 10, a.Ease.quadInOut).to({
            y: -292.8
        }, 46, a.Ease.quadInOut).to({
            x: -83.65,
            y: -289.05
        }, 30, a.Ease.quadInOut).wait(1));
        this.instance_3 = new b.fumika_skirt;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-107.25, -24.35, 1, 1, 0, 0, 0, 297.1, 144.3);
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(1).to({
            regX: 407.7,
            regY: 240.7,
            x: 3.35,
            y: 72.65
        }, 0).wait(1).to({
            y: 73.35
        }, 0).wait(1).to({
            y: 74
        }, 0).wait(1).to({
            y: 74.7
        }, 0).wait(1).to({
            y: 75.35
        }, 0).wait(1).to({
            y: 75.9
        }, 0).wait(1).to({
            y: 76.35
        }, 0).wait(1).to({
            y: 76.7
        }, 0).wait(1).to({
            y: 77
        }, 0).wait(1).to({
            y: 77.2
        }, 0).wait(1).to({
            y: 77.3
        }, 0).wait(1).to({
            regX: 297.1,
            regY: 144.3,
            x: -107.25,
            y: -19.05
        }, 0).to({
                y: -25.85
            }, 15,
            a.Ease.quadInOut).wait(10).to({
            y: -28.35
        }, 46, a.Ease.quadInOut).to({
            y: -25.85
        }, 30, a.Ease.quadInOut).wait(1));
        this.instance_4 = new b.fumika_footR_1;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-114.2, 73.55, 1, 1, -.2702, 0, 0, 144.2, -130.4);
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(1).to({
            regX: 82,
            regY: 156.5,
            rotation: -.4077,
            x: -174.35,
            y: 360.85
        }, 0).wait(1).to({
            rotation: -.5614,
            x: -173.5,
            y: 361.05
        }, 0).wait(1).to({
            rotation: -.7223,
            x: -172.7,
            y: 361.2
        }, 0).wait(1).to({
            rotation: -.8804,
            x: -171.85,
            y: 361.35
        }, 0).wait(1).to({
            rotation: -1.0261,
            x: -171.1,
            y: 361.5
        }, 0).wait(1).to({
            rotation: -1.1535,
            x: -170.45,
            y: 361.6
        }, 0).wait(1).to({
            rotation: -1.2598,
            x: -169.95,
            y: 361.75
        }, 0).wait(1).to({
            rotation: -1.3445,
            x: -169.5,
            y: 361.85
        }, 0).wait(1).to({
            rotation: -1.409,
            x: -169.15,
            y: 361.9
        }, 0).wait(1).to({
            rotation: -1.4551,
            x: -168.95
        }, 0).wait(1).to({
            rotation: -1.4847,
            x: -168.75,
            y: 362
        }, 0).wait(1).to({
            regX: 144.5,
            regY: -130.2,
            scaleX: .9999,
            scaleY: .9999,
            rotation: -1.4997,
            x: -114,
            y: 73.6
        }, 0).to({
            regX: 144.2,
            regY: -130.4,
            scaleX: 1,
            scaleY: 1,
            rotation: 0,
            x: -114.15,
            y: 73.45
        }, 15, a.Ease.quadInOut).wait(10).to({
            y: 70.95
        }, 46, a.Ease.quadInOut).to({
            y: 73.45
        }, 30, a.Ease.quadInOut).wait(1));
        this.instance_5 = new b.fumika_footL1_1;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-38.35, 124.6, 1, 1, .5359, 0, 0, 109, -80.3);
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(1).to({
            regX: 91.1,
            regY: 28.6,
            rotation: .8004,
            x: -57.75,
            y: 233.25
        }, 0).wait(1).to({
            rotation: 1.0957,
            x: -58.3,
            y: 233.2
        }, 0).wait(1).to({
            rotation: 1.4052,
            x: -58.9,
            y: 233.1
        }, 0).wait(1).to({
            rotation: 1.7089,
            x: -59.45,
            y: 233
        }, 0).wait(1).to({
            rotation: 1.9892,
            x: -59.95,
            y: 232.9
        }, 0).wait(1).to({
            rotation: 2.2341,
            x: -60.4,
            y: 232.85
        }, 0).wait(1).to({
            rotation: 2.4383,
            x: -60.8,
            y: 232.75
        }, 0).wait(1).to({
            rotation: 2.6012,
            x: -61.1,
            y: 232.7
        }, 0).wait(1).to({
            rotation: 2.7252,
            x: -61.3,
            y: 232.65
        }, 0).wait(1).to({
            rotation: 2.8138,
            x: -61.5,
            y: 232.6
        }, 0).wait(1).to({
            rotation: 2.8706,
            x: -61.6
        }, 0).wait(1).to({
            regX: 109.2,
            regY: -80.2,
            rotation: 2.8994,
            x: -38.2,
            y: 124.7
        }, 0).to({
            regX: 109.1,
            regY: -80.3,
            rotation: 0,
            x: -38.25,
            y: 124.55
        }, 15, a.Ease.quadInOut).to({
                x: -39.5
            },
            10, a.Ease.quadInOut).to({
            y: 122.05
        }, 46, a.Ease.quadInOut).to({
            x: -38.25,
            y: 124.55
        }, 30, a.Ease.quadInOut).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-404.3, -526.1, 799.1, 1269.4);
    (b.fumika_mov = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.fumika_head("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-81.75, -286.15, 1, 1, 0, 0, 0, 136.6, 206);
        this.timeline.addTween(a.Tween.get(this.instance).to({
                regY: 206.1,
                rotation: .4468,
                x: -87.85,
                y: -279.95,
                startPosition: 29
            },
            29, a.Ease.quadInOut).to({
            regY: 206,
            rotation: 0,
            x: -81.75,
            y: -286.15,
            startPosition: 59
        }, 30, a.Ease.quadInOut).wait(1));
        this.instance_1 = new b.fumika_body_all("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-101.75, -21.65, 1, 1, -9E-4, 0, 0, 269.6, 262.5);
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            rotation: -1.4497,
            y: -12.35,
            startPosition: 29
        }, 29, a.Ease.quadInOut).to({
            rotation: -9E-4,
            y: -21.65,
            startPosition: 59
        }, 30, a.Ease.quadInOut).wait(1));
        this.instance_2 = new b.fumika_hair_back("synched",
            0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-83.65, -289.05, 1, 1, 0, 0, 0, 70.7, 43.1);
        this.timeline.addTween(a.Tween.get(this.instance_2).to({
            rotation: 1.0002,
            x: -89.8,
            y: -282.9,
            startPosition: 30
        }, 30, a.Ease.quadInOut).to({
            rotation: 0,
            x: -83.65,
            y: -289.05,
            startPosition: 59
        }, 29, a.Ease.quadInOut).wait(1));
        this.instance_3 = new b.fumika_skirt("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(-107.25, -25.85, 1, 1, 0, 0, 0, 297.1, 144.3);
        this.timeline.addTween(a.Tween.get(this.instance_3).to({
            y: -19.05,
            startPosition: 30
        }, 30, a.Ease.quadInOut).to({
            y: -25.85,
            startPosition: 59
        }, 29, a.Ease.quadInOut).wait(1));
        this.instance_4 = new b.fumika_footR_1("synched", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(-114.15, 73.45, 1, 1, 0, 0, 0, 144.2, -130.4);
        this.timeline.addTween(a.Tween.get(this.instance_4).to({
            regX: 144.5,
            regY: -130.2,
            scaleX: .9999,
            scaleY: .9999,
            rotation: -1.4997,
            x: -114,
            y: 73.6
        }, 29, a.Ease.quadInOut).to({
            regX: 144.2,
            regY: -130.4,
            scaleX: 1,
            scaleY: 1,
            rotation: 0,
            x: -114.15,
            y: 73.45
        }, 30, a.Ease.quadInOut).wait(1));
        this.instance_5 = new b.fumika_footL1_1("synched", 0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(-38.25, 124.55, 1, 1, 0, 0, 0, 109.1, -80.3);
        this.timeline.addTween(a.Tween.get(this.instance_5).to({
            regX: 109.2,
            regY: -80.2,
            rotation: 2.8994,
            x: -38.2,
            y: 124.7,
            startPosition: 29
        }, 29, a.Ease.quadInOut).to({
            regX: 109.1,
            regY: -80.3,
            rotation: 0,
            x: -38.25,
            y: 124.55,
            startPosition: 59
        }, 30, a.Ease.quadInOut).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-409.6, -526.1, 825.7, 1269.5);
    (b.fumika_all_last =
        function(c, e, d) {
            this.initialize(c, e, d, {});
            this.frame_0 = function() {
                this.stop()
            };
            this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(65));
            this.instance = new b.fumika_mov_last;
            this.instance.parent = this;
            this.instance.setTransform(0, 0, .5, .5);
            this.timeline.addTween(a.Tween.get(this.instance).wait(65))
        }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-202.1, -262.3, 399.5, 632.6);
    (b.fumika_all = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(60));
        this.instance = new b.fumika_mov;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(60))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-202.1, -263, 399.5, 632.9);
    (b.bg_fumika_1 = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.instance = new b.ef_fumika_kira2_mov;
        this.instance.parent = this;
        this.instance.compositeOperation = "lighter";
        this.timeline.addTween(a.Tween.get(this.instance).wait(1));
        this.instance_1 = new b.bg_fumika_time_mov;
        this.instance_1.parent = this;
        this.instance_1.compositeOperation = "lighter";
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1));
        this.instance_2 = new b.kira_mc_set2;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-6.05, -115.8, 1.3, 1.3, 0, 0, 0, 163, 157);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(1));
        this.lighter_tgt = new b.mc_set_lux;
        this.lighter_tgt.name = "lighter_tgt";
        this.lighter_tgt.parent = this;
        this.lighter_tgt.setTransform(11.55, 416, 1.3026, 1.3026);
        this.lighter_tgt.compositeOperation =
            "lighter";
        this.timeline.addTween(a.Tween.get(this.lighter_tgt).wait(1));
        this.instance_3 = new b.bg_fumika;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-287.5, -350, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(1))
    }).prototype = g(b.bg_fumika_1, new a.Rectangle(-287.5, -350, 575, 700), null);
    (b.character1_container = function(c, e, d) {
        this.initialize(c, e, d, {
            stay: 11,
            enter: 1,
            jump: 13,
            nod: 23,
            nod2: 37,
            shy: 54,
            shock: 64,
            kokubi: 71,
            kokubi2: 84,
            swing1: 93,
            swing2: 113,
            swing3: 128,
            jump_flower: 168
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_1 = function() {
            this.play()
        };
        this.frame_12 = function() {
            this.stop()
        };
        this.frame_13 = function() {
            this.play()
        };
        this.frame_22 = function() {
            this.stop()
        };
        this.frame_23 = function() {
            this.play()
        };
        this.frame_35 = function() {
            this.stop()
        };
        this.frame_37 = function() {
            this.play()
        };
        this.frame_51 = function() {
            this.stop()
        };
        this.frame_54 = function() {
            this.play()
        };
        this.frame_63 = function() {
            this.stop()
        };
        this.frame_64 = function() {
            this.play()
        };
        this.frame_70 = function() {
            this.stop()
        };
        this.frame_71 =
            function() {
                this.play()
            };
        this.frame_83 = function() {
            this.stop()
        };
        this.frame_84 = function() {
            this.play()
        };
        this.frame_92 = function() {
            this.stop()
        };
        this.frame_93 = function() {
            this.play()
        };
        this.frame_112 = function() {
            this.stop()
        };
        this.frame_113 = function() {
            this.play()
        };
        this.frame_126 = function() {
            this.stop()
        };
        this.frame_128 = function() {
            this.play()
        };
        this.frame_157 = function() {
            this.stop()
        };
        this.frame_166 = function() {
            this.stop()
        };
        this.frame_168 = function() {
            this.play()
        };
        this.frame_193 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(11).call(this.frame_12).wait(1).call(this.frame_13).wait(9).call(this.frame_22).wait(1).call(this.frame_23).wait(12).call(this.frame_35).wait(2).call(this.frame_37).wait(14).call(this.frame_51).wait(3).call(this.frame_54).wait(9).call(this.frame_63).wait(1).call(this.frame_64).wait(6).call(this.frame_70).wait(1).call(this.frame_71).wait(12).call(this.frame_83).wait(1).call(this.frame_84).wait(8).call(this.frame_92).wait(1).call(this.frame_93).wait(19).call(this.frame_112).wait(1).call(this.frame_113).wait(13).call(this.frame_126).wait(2).call(this.frame_128).wait(29).call(this.frame_157).wait(9).call(this.frame_166).wait(2).call(this.frame_168).wait(25).call(this.frame_193).wait(2));
        this.instance = new b.drop1("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-41.95, -255.1);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(55).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 1.2,
            regY: 1.8,
            rotation: -33.7495,
            x: -63.95,
            y: -262.8,
            alpha: .4141
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            rotation: -44.9994,
            x: -73.95,
            y: -266.5,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(1).to({
            _off: !1,
            rotation: 0,
            x: -41.95,
            y: -255.1,
            alpha: 1
        }, 0).wait(1).to({
            regX: 1.2,
            regY: 1.8,
            rotation: -33.7495,
            x: -63.95,
            y: -262.8,
            alpha: .4141
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            rotation: -44.9994,
            x: -73.95,
            y: -266.5,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(133));
        this.instance_1 = new b.drop2("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-43.5, -246.7, .8481, .8481, 14.9996);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(55).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: .962,
            scaleY: .962,
            rotation: -18.7495,
            x: -70.5,
            y: -242.7625,
            alpha: .4141
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -29.9992,
            x: -79.5,
            y: -241.45,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(1).to({
            _off: !1,
            scaleX: .8481,
            scaleY: .8481,
            rotation: 14.9996,
            x: -43.5,
            y: -246.7,
            alpha: 1
        }, 0).wait(1).to({
            scaleX: .962,
            scaleY: .962,
            rotation: -18.7495,
            x: -70.5,
            y: -246.5125,
            alpha: .4141
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -29.9992,
            x: -79.5,
            y: -246.45,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(133));
        this.instance_2 = new b.shock("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-46.75, -261.95, .9932, .9932, -110.5226);
        this.instance_3 = new b.spread_flower_pink("synched",
            0, !1);
        this.instance_3.parent = this;
        this.instance_3.setTransform(-3.1, -209.05, 1.4808, 1.4808);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_2
            }]
        }, 64).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 99).to({
            state: []
        }, 20).wait(7));
        this.c = new b.character1_body;
        this.c.name = "c";
        this.c.parent = this;
        this.timeline.addTween(a.Tween.get(this.c).wait(1).to({
            y: 11
        }, 0).wait(1).to({
            regY: -140,
            y: -139.5
        }, 0).wait(1).to({
            y: -147
        }, 0).wait(1).to({
            y: -151.5
        }, 0).wait(1).to({
            regY: 0,
            y: -13
        }, 0).wait(1).to({
            regY: -140,
            y: -151.3
        }, 0).wait(1).to({
            y: -145
        }, 0).wait(1).to({
            y: -138.7
        }, 0).wait(1).to({
            regY: 0,
            y: 3
        }, 0).to({
            y: 0
        }, 2).wait(3).to({
            regY: -140,
            y: -149.05
        }, 0).wait(1).to({
            y: -152.1
        }, 0).wait(1).to({
            regY: 0,
            y: -13
        }, 0).wait(1).to({
            regY: -140,
            y: -141.8
        }, 0).wait(1).to({
            y: -138.1
        }, 0).wait(1).to({
            regY: 0,
            y: 3
        }, 0).wait(1).to({
            regY: -140,
            y: -138.7
        }, 0).wait(1).to({
            regY: 0,
            y: 1
        }, 0).wait(1).to({
            y: 0
        }, 0).wait(2).to({
                regY: -140,
                y: -139.8
            },
            0).wait(1).to({
            y: -139
        }, 0).wait(1).to({
            y: -137.5
        }, 0).wait(1).to({
            y: -136.05
        }, 0).wait(1).to({
            y: -135.25
        }, 0).wait(1).to({
            regY: 0,
            y: 5
        }, 0).wait(1).to({
            regY: -140,
            y: -135.25
        }, 0).wait(1).to({
            y: -136.05
        }, 0).wait(1).to({
            y: -137.5
        }, 0).wait(1).to({
            y: -139
        }, 0).wait(1).to({
            y: -139.8
        }, 0).wait(1).to({
            regY: 0,
            y: 0
        }, 0).wait(3).to({
            regY: -140,
            y: -139.8
        }, 0).wait(1).to({
            y: -138.9
        }, 0).wait(1).to({
            y: -137.15
        }, 0).wait(1).to({
            y: -134.9
        }, 0).wait(1).to({
            y: -133.15
        }, 0).wait(1).to({
            y: -132.25
        }, 0).wait(1).to({
            regY: 0,
            y: 8
        }, 0).wait(1).to({
            regY: -140,
            y: -132.25
        }, 0).wait(1).to({
            y: -133.15
        }, 0).wait(1).to({
            y: -134.9
        }, 0).wait(1).to({
            y: -137.15
        }, 0).wait(1).to({
            y: -138.9
        }, 0).wait(1).to({
            y: -139.8
        }, 0).wait(1).to({
            regY: 0,
            y: 0
        }, 0).wait(4).to({
            regY: -140,
            y: -139.5
        }, 0).wait(1).to({
            y: -137.5
        }, 0).wait(1).to({
            y: -135.55
        }, 0).wait(1).to({
            regY: 0,
            y: 5
        }, 0).wait(1).to({
            regY: -140,
            y: -135.65
        }, 0).wait(1).to({
            y: -138
        }, 0).wait(1).to({
            y: -140.35
        }, 0).wait(1).to({
            regY: 0,
            y: -1
        }, 0).wait(1).to({
            y: 0
        }, 0).wait(1).to({
            y: 3
        }, 0).wait(1).to({
            regY: -140,
            y: -140.6
        }, 0).wait(1).to({
            regY: 0,
            y: -2
        }, 0).wait(1).to({
            regY: -140,
            y: -139.15
        }, 0).wait(1).to({
            regY: 0,
            y: 2
        }, 0).wait(1).to({
            regY: -140,
            y: -139.45
        }, 0).wait(1).to({
            regY: 0,
            y: 0
        }, 0).wait(2).to({
            regY: -140,
            rotation: .0672,
            x: .15,
            y: -140
        }, 0).wait(1).to({
            rotation: .2998,
            x: .75
        }, 0).wait(1).to({
            rotation: .7254,
            x: 1.75
        }, 0).wait(1).to({
            rotation: 1.257,
            x: 3.05,
            y: -139.95
        }, 0).wait(1).to({
            rotation: 1.6913,
            x: 4.15
        }, 0).wait(1).to({
            rotation: 1.9307,
            x: 4.7,
            y: -139.9
        }, 0).wait(1).to({
            regY: 0,
            rotation: 1.9999,
            x: 0,
            y: 0
        }, 0).wait(7).to({
            regY: -140,
            rotation: 1.9325,
            x: 4.7,
            y: -139.9
        }, 0).wait(1).to({
            rotation: 1.6979,
            x: 4.15,
            y: -139.95
        }, 0).wait(1).to({
            rotation: 1.2673,
            x: 3.1
        }, 0).wait(1).to({
            rotation: .7325,
            x: 1.8,
            y: -140
        }, 0).wait(1).to({
            rotation: .302,
            x: .75
        }, 0).wait(1).to({
            rotation: .0674,
            x: .15
        }, 0).wait(1).to({
            regY: 0,
            rotation: 0,
            x: 0,
            y: 0
        }, 0).wait(3).to({
            regY: -140,
            rotation: .1008,
            x: .25,
            y: -140
        }, 0).wait(1).to({
            rotation: .4498,
            x: 1.1
        }, 0).wait(1).to({
            rotation: 1.0883,
            x: 2.65,
            y: -139.95
        }, 0).wait(1).to({
            rotation: 1.8857,
            x: 4.6
        }, 0).wait(1).to({
            rotation: 2.5372,
            x: 6.2,
            y: -139.85
        }, 0).wait(1).to({
            rotation: 2.8963,
            x: 7.05,
            y: -139.8
        }, 0).wait(1).to({
            regY: 0,
            rotation: 3.0001,
            x: 0,
            y: 0
        }, 0).wait(6).to({
            regY: -140,
            rotation: 2.899,
            x: 7.1,
            y: -139.8
        }, 0).wait(1).to({
            rotation: 2.5471,
            x: 6.2,
            y: -139.85
        }, 0).wait(1).to({
            rotation: 1.9012,
            x: 4.65,
            y: -139.95
        }, 0).wait(1).to({
            rotation: 1.0989,
            x: 2.7
        }, 0).wait(1).to({
            rotation: .453,
            x: 1.1,
            y: -140
        }, 0).wait(1).to({
            rotation: .1011,
            x: .25
        }, 0).wait(1).to({
            regY: 0,
            rotation: 0,
            x: 0,
            y: 0
        }, 0).wait(2).to({
            regY: -140,
            rotation: .0932,
            x: .25,
            y: -140
        }, 0).wait(1).to({
            rotation: .421,
            x: 1.05
        }, 0).wait(1).to({
            rotation: .9904,
            x: 2.4
        }, 0).wait(1).to({
            rotation: 1.5671,
            x: 3.85,
            y: -139.95
        }, 0).wait(1).to({
            rotation: 1.9039,
            x: 4.65,
            y: -139.9
        }, 0).wait(1).to({
            regY: 0,
            rotation: 1.9999,
            x: 0,
            y: 0
        }, 0).wait(1).to({
            regY: -140,
            rotation: 1.9327,
            x: 4.7,
            y: -139.9
        }, 0).wait(1).to({
            rotation: 1.7,
            x: 4.15,
            y: -139.95
        }, 0).wait(1).to({
            rotation: 1.2744,
            x: 3.1
        }, 0).wait(1).to({
            rotation: .7428,
            x: 1.8,
            y: -140
        }, 0).wait(1).to({
            rotation: .3086,
            x: .75
        }, 0).wait(1).to({
            rotation: .0692,
            x: .15
        }, 0).wait(1).to({
            regY: 0,
            rotation: 0,
            x: 0,
            y: 0
        }, 0).wait(3).to({
            regY: -140,
            rotation: .0317,
            x: .1,
            y: -140
        }, 0).wait(1).to({
            rotation: .1344,
            x: .35
        }, 0).wait(1).to({
            rotation: .32,
            x: .8
        }, 0).wait(1).to({
            rotation: .5999,
            x: 1.45
        }, 0).wait(1).to({
            rotation: .9799,
            x: 2.4
        }, 0).wait(1).to({
            rotation: 1.4514,
            x: 3.55,
            y: -139.95
        }, 0).wait(1).to({
            rotation: 1.9815,
            x: 4.85,
            y: -139.9
        }, 0).wait(1).to({
            rotation: 2.515,
            x: 6.15,
            y: -139.85
        }, 0).wait(1).to({
            scaleX: 1.0001,
            scaleY: 1.0001,
            rotation: 2.9945,
            x: 7.3,
            y: -139.8
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 3.3838,
            x: 8.25,
            y: -139.75
        }, 0).wait(1).to({
            rotation: 3.6717,
            x: 8.95,
            y: -139.7
        }, 0).wait(1).to({
            scaleX: 1.0001,
            scaleY: 1.0001,
            rotation: 3.8628,
            x: 9.45
        }, 0).wait(1).to({
            rotation: 3.9685,
            x: 9.7,
            y: -139.65
        }, 0).wait(1).to({
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            rotation: 4.0012,
            x: 0,
            y: 0
        }, 0).wait(1).to({
            regY: -140,
            scaleX: 1.0001,
            scaleY: 1.0001,
            rotation: 3.9737,
            x: 9.7,
            y: -139.65
        }, 0).wait(1).to({
            rotation: 3.885,
            x: 9.5,
            y: -139.7
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 3.7255,
            x: 9.1
        }, 0).wait(1).to({
            rotation: 3.4856,
            x: 8.5,
            y: -139.75
        }, 0).wait(1).to({
            scaleX: 1.0001,
            scaleY: 1.0001,
            rotation: 3.159,
            x: 7.7,
            y: -139.8
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 2.7479,
            x: 6.7,
            y: -139.85
        }, 0).wait(1).to({
                rotation: 2.2712,
                x: 5.55,
                y: -139.9
            },
            0).wait(1).to({
            rotation: 1.7674,
            x: 4.3,
            y: -139.95
        }, 0).wait(1).to({
            rotation: 1.2853,
            x: 3.15
        }, 0).wait(1).to({
            rotation: .8659,
            x: 2.1,
            y: -140
        }, 0).wait(1).to({
            rotation: .5307,
            x: 1.3
        }, 0).wait(1).to({
            rotation: .2839,
            x: .7
        }, 0).wait(1).to({
            rotation: .1197,
            x: .3
        }, 0).wait(1).to({
            rotation: .0284,
            x: .05
        }, 0).wait(1).to({
            regY: 0,
            rotation: 0,
            x: 0,
            y: 0
        }, 0).wait(11).to({
            y: 6
        }, 0).wait(1).to({
            regY: -140,
            y: -139.25
        }, 0).wait(1).to({
            y: -143
        }, 0).wait(1).to({
            y: -145.25
        }, 0).wait(1).to({
            regY: 0,
            y: -6
        }, 0).wait(1).to({
            regY: -140,
            y: -142.75
        }, 0).wait(1).to({
                y: -140.2
            },
            0).wait(1).to({
            y: -138.45
        }, 0).wait(1).to({
            y: -137.4
        }, 0).wait(1).to({
            regY: 0,
            y: 3
        }, 0).wait(1).to({
            regY: -140,
            y: -138.75
        }, 0).wait(1).to({
            y: -140
        }, 0).wait(1).to({
            y: -140.75
        }, 0).wait(1).to({
            regY: 0,
            y: -1
        }, 0).wait(1).to({
            regY: -140,
            y: -140.55
        }, 0).wait(1).to({
            y: -140.25
        }, 0).wait(1).to({
            y: -140.05
        }, 0).wait(1).to({
            regY: 0,
            y: 0
        }, 0).wait(10))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-128.2, -341.7, 249.6, 362.7);
    (b.sp_027_op_10th = function(c, e, d) {
        this.initialize(c, e, d, {});
        this.frame_0 = function() {
            this.jump =
                function() {
                    window.location.href = exportRoot._url
                };
            exportRoot._url = window.im_cjs._url;
            this.msg1_1 = "11\u670828\u65e5\u3092\u3082\u3061\u307e\u3057\u3066\u3001";
            this.msg1_2 = "\u30a2\u30a4\u30c9\u30eb\u30de\u30b9\u30bf\u30fc";
            this.msg1_3 = "\u30b7\u30f3\u30c7\u30ec\u30e9\u30ac\u30fc\u30eb\u30ba\u306f";
            this.msg1_4 = "10\u5468\u5e74\u3092\u8fce\u3048\u307e\u3057\u305f\uff01";
            this.msg2_1 = "10\u5e74\u3001\u611b\u3092\u3042\u308a\u304c\u3068\u3046\u2026\u2026";
            this.msg2_2 = "\u30a2\u30a4\u30c9\u30eb\u305f\u3061\u306e\u8a00\u8449\u3001";
            this.msg2_3 = "\u53d7\u3051\u53d6\u3063\u3066\u3082\u3089\u3048\u307e\u3057\u305f\u304b\uff1f";
            this.msg3_1 = "\u30a2\u30a4\u30c9\u30eb\u305f\u3061\u304c\u3053\u3053\u307e\u3067";
            this.msg3_2 = "\u6765\u3089\u308c\u305f\u306e\u306f\u3001";
            this.msg3_3 = "\u30d7\u30ed\u30c7\u30e5\u30fc\u30b5\u30fc\u306e";
            this.msg3_4 = "\u307f\u306a\u3055\u3093\u306e\u304a\u304b\u3052\u3067\u3059\uff01";
            this.msg4_1 = "\u305d\u3053\u306710\u5468\u5e74\u3092\u8a18\u5ff5\u3057\u3066";
            this.msg4_2 = "\u3055\u307e\u3056\u307e\u306a\u30ad\u30e3\u30f3\u30da\u30fc\u30f3\u3092";
            this.msg4_3 = "\u5b9f\u65bd\u3044\u305f\u3057\u307e\u3059\uff01";
            this.msg5_1 = "\u3053\u308c\u304b\u3089\u3082\u3055\u3089\u306b\u76db\u308a\u4e0a\u304c\u308a\u3092";
            this.msg5_2 = "\u307f\u305b\u3066\u3044\u304f\u30a2\u30a4\u30c9\u30eb\u30de\u30b9\u30bf\u30fc";
            this.msg5_3 = "\u30b7\u30f3\u30c7\u30ec\u30e9\u30ac\u30fc\u30eb\u30ba\u3092";
            this.msg5_4 = "\u3069\u3046\u305e\u3001\u304a\u697d\u3057\u307f\u304f\u3060\u3055\u3044\uff01";
            var l = {},
                D = {};
            exportRoot._g = l;
            exportRoot._u = D;
            l.t_face = "1";
            l.face_init_flag = !0;
            D.random = function(G) {
                return Math.floor(Math.random() * G)
            }
        };
        this.frame_1 = function() {};
        this.frame_5 = function() {
            window.se_play("se_058")
        };
        this.frame_9 = function() {
            this.s1_logo.gotoAndStop("gl");
            this.star.play()
        };
        this.frame_17 = function() {
            window.se_play("se_099")
        };
        this.frame_66 = function() {
            window.se_play("se_106")
        };
        this.frame_99 = function() {
            window.se_play("se_099")
        };
        this.frame_149 = function() {
            window.se_play("se_084")
        };
        this.frame_282 = function() {
            window.se_play("se_093")
        };
        this.frame_312 = function() {};
        this.frame_352 =
            function() {
                window.se_play("se_093")
            };
        this.frame_353 = function() {};
        this.frame_463 = function() {
            window.se_play("se_084");
            this.jump = function() {
                window.location.href = exportRoot._url
            }
        };
        this.frame_545 = function() {
            window.se_play("se_093")
        };
        this.frame_678 = function() {
            window.se_play("se_037_2")
        };
        this.frame_707 = function() {
            this.stop();
            this.btn.on("click", function() {
                this.gotoAndPlay("t1")
            }, this, !1);
            this.handleKeydown = function(l) {
                13 == l.keyCode && exportRoot.gotoAndPlay("t1")
            };
            window.addEventListener("keydown", this.handleKeydown)
        };
        this.frame_708 = function() {
            this.btn.removeAllEventListeners("click");
            window.removeEventListener("keydown", this.handleKeydown);
            this.play();
            this.ch3.c.f.next_face = 1;
            this.ch3.c.f.gotoAndPlay("run")
        };
        this.frame_714 = function() {
            window.se_play("se_110");
            this.m1.text = this.msg1_1;
            this.m2.text = this.msg1_2;
            this.m3.text = this.msg1_3;
            this.m4.text = this.msg1_4
        };
        this.frame_736 = function() {
            this.stop();
            this.btn.on("click", function() {
                this.gotoAndPlay("t2")
            }, this, !1);
            this.handleKeydown = function(l) {
                13 == l.keyCode && exportRoot.gotoAndPlay("t2")
            };
            window.addEventListener("keydown", this.handleKeydown)
        };
        this.frame_737 = function() {
            this.btn.removeAllEventListeners("click");
            window.removeEventListener("keydown", this.handleKeydown);
            this.play();
            this.m1.msg = "";
            this.m2.msg = "";
            this.m3.msg = "";
            this.m4.msg = ""
        };
        this.frame_738 = function() {
            this.m1.text = this.msg2_1;
            this.m2.text = this.msg2_2;
            this.m3.text = this.msg2_3;
            this.m4.text = this.msg2_4;
            this.ch3.c.f.next_face = 3;
            this.ch3.c.f.gotoAndPlay("run");
            this.ch3.gotoAndPlay("swing1")
        };
        this.frame_750 = function() {
            this.stop();
            this.btn.on("click", function() {
                this.gotoAndPlay("t3")
            }, this, !1);
            this.handleKeydown = function(l) {
                13 == l.keyCode && exportRoot.gotoAndPlay("t3")
            };
            window.addEventListener("keydown", this.handleKeydown)
        };
        this.frame_751 = function() {
            this.btn.removeAllEventListeners("click");
            window.removeEventListener("keydown", this.handleKeydown);
            this.play();
            this.m1.msg = "";
            this.m2.msg = "";
            this.m3.msg = "";
            this.m4.msg = ""
        };
        this.frame_752 = function() {
            this.m1.text =
                this.msg3_1;
            this.m2.text = this.msg3_2;
            this.m3.text = this.msg3_3;
            this.m4.text = this.msg3_4;
            this.ch3.c.f.next_face = 11;
            this.ch3.c.f.gotoAndPlay("run");
            this.ch3.gotoAndPlay("nod")
        };
        this.frame_764 = function() {
            this.stop();
            this.btn.on("click", function() {
                this.gotoAndPlay("t4")
            }, this, !1);
            this.handleKeydown = function(l) {
                13 == l.keyCode && exportRoot.gotoAndPlay("t4")
            };
            window.addEventListener("keydown", this.handleKeydown)
        };
        this.frame_765 = function() {
            this.btn.removeAllEventListeners("click");
            window.removeEventListener("keydown",
                this.handleKeydown);
            this.play();
            this.m1.msg = "";
            this.m2.msg = "";
            this.m3.msg = "";
            this.m4.msg = ""
        };
        this.frame_766 = function() {
            this.m1.text = this.msg4_1;
            this.m2.text = this.msg4_2;
            this.m3.text = this.msg4_3;
            this.m4.text = this.msg4_4;
            this.ch3.c.f.next_face = 2;
            this.ch3.c.f.gotoAndPlay("run");
            this.ch3.gotoAndPlay("swing3")
        };
        this.frame_778 = function() {
            this.stop();
            this.btn.on("click", function() {
                this.gotoAndPlay("t5")
            }, this, !1);
            this.handleKeydown = function(l) {
                13 == l.keyCode && exportRoot.gotoAndPlay("t5")
            };
            window.addEventListener("keydown",
                this.handleKeydown)
        };
        this.frame_779 = function() {
            this.btn.removeAllEventListeners("click");
            window.removeEventListener("keydown", this.handleKeydown);
            this.play();
            this.m1.msg = "";
            this.m2.msg = "";
            this.m3.msg = "";
            this.m4.msg = ""
        };
        this.frame_780 = function() {
            window.se_play("se_081");
            this.m1.text = this.msg5_1;
            this.m2.text = this.msg5_2;
            this.m3.text = this.msg5_3;
            this.m4.text = this.msg5_4;
            this.ch3.c.f.next_face = 3;
            this.ch3.c.f.gotoAndPlay("run");
            this.ch3.gotoAndPlay("jump_flower")
        };
        this.frame_797 = function() {
            this.stop();
            this.btn.on("click", function() {
                this.jump()
            }, this, !1);
            this.handleKeydown = function(l) {
                13 == l.keyCode && exportRoot.jump()
            };
            window.addEventListener("keydown", this.handleKeydown)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(4).call(this.frame_5).wait(4).call(this.frame_9).wait(8).call(this.frame_17).wait(49).call(this.frame_66).wait(33).call(this.frame_99).wait(50).call(this.frame_149).wait(133).call(this.frame_282).wait(30).call(this.frame_312).wait(40).call(this.frame_352).wait(1).call(this.frame_353).wait(110).call(this.frame_463).wait(54).call(this.frame_517).wait(28).call(this.frame_545).wait(133).call(this.frame_678).wait(29).call(this.frame_707).wait(1).call(this.frame_708).wait(6).call(this.frame_714).wait(22).call(this.frame_736).wait(1).call(this.frame_737).wait(1).call(this.frame_738).wait(12).call(this.frame_750).wait(1).call(this.frame_751).wait(1).call(this.frame_752).wait(12).call(this.frame_764).wait(1).call(this.frame_765).wait(1).call(this.frame_766).wait(12).call(this.frame_778).wait(1).call(this.frame_779).wait(1).call(this.frame_780).wait(17).call(this.frame_797).wait(1));
        this.instance = new b.bg_black;
        this.instance.parent = this;
        this.instance.setTransform(120, 160);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            alpha: .8934
        }, 0).wait(1).to({
            alpha: .7856
        }, 0).wait(1).to({
            alpha: .6791
        }, 0).wait(1).to({
            alpha: .576
        }, 0).wait(1).to({
            alpha: .4783
        }, 0).wait(1).to({
            alpha: .3873
        }, 0).wait(1).to({
            alpha: .3038
        }, 0).wait(1).to({
            alpha: .2282
        }, 0).wait(1).to({
            alpha: .1604
        }, 0).wait(1).to({
            alpha: .1
        }, 0).wait(1).to({
            alpha: .0467
        }, 0).wait(1).to({
            alpha: 0
        }, 0).to({
            _off: !0
        }, 1).wait(785));
        this.m4 =
            new a.Text("", "12px 'Arial'", "#333333");
        this.m4.name = "m4";
        this.m4.lineHeight = 15;
        this.m4.lineWidth = 260;
        this.m4.parent = this;
        this.m4.setTransform(14, 293.1);
        this.m3 = new a.Text("", "12px 'Arial'", "#333333");
        this.m3.name = "m3";
        this.m3.lineHeight = 15;
        this.m3.lineWidth = 260;
        this.m3.parent = this;
        this.m3.setTransform(14, 278.1);
        this.m2 = new a.Text("", "12px 'Arial'", "#333333");
        this.m2.name = "m2";
        this.m2.lineHeight = 15;
        this.m2.lineWidth = 260;
        this.m2.parent = this;
        this.m2.setTransform(14, 262.1);
        this.m1 = new a.Text("", "12px 'Arial'",
            "#333333");
        this.m1.name = "m1";
        this.m1.lineHeight = 15;
        this.m1.lineWidth = 260;
        this.m1.parent = this;
        this.m1.setTransform(14, 246.1);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.m1
            }, {
                t: this.m2
            }, {
                t: this.m3
            }, {
                t: this.m4
            }]
        }, 713).wait(85));
        this.msw = new b.asset_messageWindow2;
        this.msw.name = "msw";
        this.msw.parent = this;
        this.msw.setTransform(120, 270.95, 1, .115, 0, 0, 0, 0, .5);
        this.msw._off = !0;
        this.timeline.addTween(a.Tween.get(this.msw).wait(711).to({
            _off: !1
        }, 0).to({
                regY: .4,
                scaleY: 1.1208,
                y: 271
            },
            3, a.Ease.get(1)).to({
            scaleY: 1.0357,
            y: 270.95
        }, 4, a.Ease.get(1)).to({
            scaleY: 1.0829,
            y: 271
        }, 5, a.Ease.get(1)).wait(14).to({
            scaleY: .8693,
            y: 270.95
        }, 2).to({
            scaleY: 1.1208,
            y: 271
        }, 1).to({
            scaleY: 1.0735
        }, 2, a.Ease.get(1)).to({
            scaleY: 1.0357,
            y: 270.95
        }, 3).to({
            scaleY: 1.0829,
            y: 271
        }, 2, a.Ease.get(1)).wait(18).to({
            scaleY: .8693,
            y: 270.95
        }, 2).to({
            scaleY: 1.1208,
            y: 271
        }, 1).to({
            scaleY: 1.0735
        }, 2, a.Ease.get(1)).to({
            scaleY: 1.0357,
            y: 270.95
        }, 3).to({
            scaleY: 1.0829,
            y: 271
        }, 2, a.Ease.get(1)).wait(4).to({
            scaleY: .8693,
            y: 270.95
        }, 2).to({
            scaleY: 1.1208,
            y: 271
        }, 1).to({
            scaleY: 1.0735
        }, 2, a.Ease.get(1)).to({
            scaleY: 1.0357,
            y: 270.95
        }, 3).to({
            scaleY: 1.0829,
            y: 271
        }, 2, a.Ease.get(1)).wait(9));
        this.instance_1 = new b.powder_paper_container;
        this.instance_1.parent = this;
        this.instance_1.setTransform(116.1, -14.85, 1, 1, 0, 0, 0, -5.2, 12.2);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(678).to({
            _off: !1
        }, 0).wait(120));
        this.instance_2 = new b.arrows;
        this.instance_2.parent = this;
        this.instance_2.setTransform(240, 320, 1.5615, 1.5615);
        this.instance_2.alpha =
            .2109;
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(704).to({
            _off: !1
        }, 0).wait(1).to({
            regX: -7,
            regY: -7,
            x: 229.05,
            y: 309.05,
            alpha: .3426
        }, 0).wait(1).to({
            alpha: .8251
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 240,
            y: 320,
            alpha: 1
        }, 0).to({
            alpha: .2109
        }, 2).to({
            _off: !0
        }, 1).wait(88));
        this.ch3 = new b.character1_container;
        this.ch3.name = "ch3";
        this.ch3.parent = this;
        this.ch3.setTransform(-147.15, 543.15, 1.0111, 1.011, 0, 0, 0, -.1, -.4);
        this.timeline.addTween(a.Tween.get(this.ch3).to({
            _off: !0
        }, 1).wait(677).to({
            _off: !1,
            x: -217.15
        }, 0).wait(33).to({
            x: 83.85
        }, 0).to({
            y: 312
        }, 9, a.Ease.get(-1)).wait(1).to({
            regX: -3.4,
            regY: -160.4,
            x: 80.5,
            y: 150.3
        }, 0).wait(1).to({
            y: 150.6
        }, 0).wait(1).to({
            y: 151.15
        }, 0).wait(1).to({
            y: 152.05
        }, 0).wait(1).to({
            y: 153.25
        }, 0).wait(1).to({
            y: 154.45
        }, 0).wait(1).to({
            y: 155.2
        }, 0).wait(1).to({
            y: 155.55
        }, 0).wait(1).to({
            regX: -.1,
            regY: -.4,
            x: 83.85,
            y: 317.5
        }, 0).to({
            y: 315.65
        }, 7, a.Ease.get(1)).wait(62));
        this.instance_3 = new b.logo_cg_1;
        this.instance_3.parent = this;
        this.instance_3.setTransform(120.5, 166.3, 1, 1, 0, 0, 0, -.5, -.7);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(678).to({
            _off: !1
        }, 0).wait(1).to({
            regY: -1,
            x: 119.5,
            y: 193
        }, 0).to({
            regY: -.4,
            y: 195.6
        }, 3, a.Ease.get(1)).to({
            regY: -.9,
            y: 189.1
        }, 5, a.Ease.get(-1)).to({
            regY: -.6,
            y: 190.4
        }, 9, a.Ease.get(1)).wait(13).to({
            regX: -.4,
            regY: -.4,
            scaleX: .4743,
            scaleY: .4743,
            x: 176.8,
            y: 74.55
        }, 14, a.Ease.get(-.98)).to({
            regX: -.5,
            regY: -.6,
            scaleX: .4147,
            scaleY: .4147,
            x: 187.55,
            y: 60.3
        }, 4, a.Ease.get(1)).wait(1).to({
                regX: -1,
                regY: 10.2,
                scaleX: .4161,
                scaleY: .4161,
                x: 187.25,
                y: 64.95
            },
            0).wait(1).to({
            scaleX: .4207,
            scaleY: .4207,
            x: 186.95,
            y: 65.65
        }, 0).wait(1).to({
            scaleX: .4254,
            scaleY: .4254,
            x: 186.65,
            y: 66.35
        }, 0).wait(1).to({
            regX: -.5,
            regY: -.4,
            scaleX: .4269,
            scaleY: .4269,
            x: 186.8,
            y: 61.95
        }, 0).wait(67));
        this.logo = new b.logo_splo_all;
        this.logo.name = "logo";
        this.logo.parent = this;
        this.logo.setTransform(119.5, 127.65, 1, .5882, 0, 0, 0, -.5, -.4);
        this.logo._off = !0;
        this.timeline.addTween(a.Tween.get(this.logo).wait(678).to({
            _off: !1
        }, 0).wait(1).to({
            regY: -.8,
            scaleY: 1.2371,
            y: 104
        }, 0).to({
            scaleY: 1,
            y: 87
        }, 3, a.Ease.get(1)).to({
            regY: -.1,
            y: 137.9
        }, 5, a.Ease.get(-1)).to({
            regY: -.4,
            y: 134.6
        }, 9, a.Ease.get(1)).wait(13).to({
            regX: -.8,
            regY: .2,
            scaleX: .4743,
            scaleY: .4743,
            x: 176.85,
            y: 48
        }, 14, a.Ease.get(-.98)).to({
            regY: .1,
            scaleX: .4147,
            scaleY: .4147,
            x: 187.5,
            y: 37.1
        }, 4, a.Ease.get(1)).wait(1).to({
            regX: -2.4,
            regY: -.8,
            scaleX: .4161,
            scaleY: .4161,
            x: 186.75,
            y: 36.8
        }, 0).wait(1).to({
            scaleX: .4207,
            scaleY: .4207,
            x: 186.55,
            y: 37.15
        }, 0).wait(1).to({
            scaleX: .4254,
            scaleY: .4254,
            x: 186.3,
            y: 37.5
        }, 0).wait(1).to({
            regX: -.7,
            regY: .2,
            scaleX: .4269,
            scaleY: .4269,
            x: 186.9,
            y: 38.05
        }, 0).wait(67));
        this.instance_4 = new b.asset_efc_ring;
        this.instance_4.parent = this;
        this.instance_4.setTransform(120, 165.95, .1661, .1661);
        this.instance_5 = new b.asset_efc_flashWhite2;
        this.instance_5.parent = this;
        this.instance_5.setTransform(120, 166, .1111, .0286);
        this.instance_6 = new b.asset_efc_flashBlade;
        this.instance_6.parent = this;
        this.instance_6.setTransform(120, 166, .2729, .3832);
        this.instance_7 = new b.asset_efc_flashLine_p;
        this.instance_7.parent = this;
        this.instance_7.setTransform(122.35, 172.15, .5821, .131, -125.3151);
        this.instance_8 =
            new b.asset_efc_flashLine_p;
        this.instance_8.parent = this;
        this.instance_8.setTransform(127.6, 170.3, .8953, .1365, -153.4178);
        this.instance_9 = new b.asset_efc_flashLine_p;
        this.instance_9.parent = this;
        this.instance_9.setTransform(113.3, 160.4, .5335, .2898, 0, 90.3529, 36.903);
        this.instance_10 = new b.asset_efc_flashLine_p;
        this.instance_10.parent = this;
        this.instance_10.setTransform(125.05, 158.85, .4567, .3595, 0, 89.5184, 141.7447);
        this.instance_11 = new b.asset_efc_flashLine_p;
        this.instance_11.parent = this;
        this.instance_11.setTransform(109.9,
            173, .7533, .1484, -48.7814);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_6,
                p: {
                    scaleX: .2729,
                    scaleY: .3832
                }
            }, {
                t: this.instance_5,
                p: {
                    scaleX: .1111,
                    scaleY: .0286
                }
            }, {
                t: this.instance_4,
                p: {
                    scaleX: .1661,
                    scaleY: .1661,
                    y: 165.95,
                    alpha: 1
                }
            }]
        }, 675).to({
            state: [{
                t: this.instance_6,
                p: {
                    scaleX: .5781,
                    scaleY: .6961
                }
            }, {
                t: this.instance_5,
                p: {
                    scaleX: .3117,
                    scaleY: .048
                }
            }, {
                t: this.instance_11,
                p: {
                    scaleX: .7533,
                    scaleY: .1484,
                    rotation: -48.7814,
                    x: 109.9,
                    y: 173
                }
            }, {
                t: this.instance_10,
                p: {
                    scaleX: .4567,
                    scaleY: .3595,
                    skewX: 89.5184,
                    skewY: 141.7447,
                    x: 125.05,
                    y: 158.85
                }
            }, {
                t: this.instance_9,
                p: {
                    scaleX: .5335,
                    scaleY: .2898,
                    skewX: 90.3529,
                    skewY: 36.903,
                    x: 113.3,
                    y: 160.4
                }
            }, {
                t: this.instance_8,
                p: {
                    scaleX: .8953,
                    scaleY: .1365,
                    rotation: -153.4178,
                    x: 127.6,
                    y: 170.3
                }
            }, {
                t: this.instance_7,
                p: {
                    scaleX: .5821,
                    scaleY: .131,
                    rotation: -125.3151,
                    x: 122.35,
                    y: 172.15
                }
            }, {
                t: this.instance_4,
                p: {
                    scaleX: .7226,
                    scaleY: .7226,
                    y: 164.7,
                    alpha: .4883
                }
            }]
        }, 1).to({
                state: [{
                    t: this.instance_6,
                    p: {
                        scaleX: 1,
                        scaleY: 1.3458
                    }
                }, {
                    t: this.instance_5,
                    p: {
                        scaleX: .8262,
                        scaleY: .4043
                    }
                }, {
                    t: this.instance_11,
                    p: {
                        scaleX: 2.7063,
                        scaleY: 1.1016,
                        rotation: -49.2024,
                        x: 108.2,
                        y: 179.15
                    }
                }, {
                    t: this.instance_10,
                    p: {
                        scaleX: 2.2001,
                        scaleY: 1.5251,
                        skewX: 92.3826,
                        skewY: 142.0521,
                        x: 128.5,
                        y: 152.6
                    }
                }, {
                    t: this.instance_9,
                    p: {
                        scaleX: 2.7728,
                        scaleY: 3.4024,
                        skewX: 77.225,
                        skewY: 40.484,
                        x: 101.8,
                        y: 148.65
                    }
                }, {
                    t: this.instance_8,
                    p: {
                        scaleX: 3.4034,
                        scaleY: .542,
                        rotation: -153.4804,
                        x: 150.7,
                        y: 186.8
                    }
                }, {
                    t: this.instance_7,
                    p: {
                        scaleX: 1.6415,
                        scaleY: .8468,
                        rotation: -123.3358,
                        x: 116.45,
                        y: 167.85
                    }
                }, {
                    t: this.instance_4,
                    p: {
                        scaleX: 2.1497,
                        scaleY: 2.1497,
                        y: 164.7,
                        alpha: 1
                    }
                }]
            },
            1).to({
            state: []
        }, 1).wait(120));
        this.instance_12 = new b.anniversary_text_w;
        this.instance_12.parent = this;
        this.instance_12.setTransform(120, 160, .5, .5, 0, 0, 0, .1, .2);
        this.instance_12.alpha = .0195;
        this.instance_12._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_12).wait(672).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 5, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(120));
        this.instance_13 = new b.anniversary_text;
        this.instance_13.parent = this;
        this.instance_13.setTransform(120, 96, .5, .5, 0, 0, 0, .1, .1);
        this.instance_13.alpha = .0195;
        this.instance_13._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_13).wait(545).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 119.95,
            y: 100.4934,
            alpha: .102
        }, 0).wait(1).to({
            y: 104.2537,
            alpha: .1703
        }, 0).wait(1).to({
            y: 107.5149,
            alpha: .2295
        }, 0).wait(1).to({
            y: 110.4192,
            alpha: .2822
        }, 0).wait(1).to({
            y: 113.05,
            alpha: .33
        }, 0).wait(1).to({
            y: 115.4614,
            alpha: .3738
        }, 0).wait(1).to({
            y: 117.6906,
            alpha: .4143
        }, 0).wait(1).to({
            y: 119.7646,
            alpha: .4519
        }, 0).wait(1).to({
            y: 121.704,
            alpha: .4871
        }, 0).wait(1).to({
                y: 123.5245,
                alpha: .5202
            },
            0).wait(1).to({
            y: 125.2386,
            alpha: .5513
        }, 0).wait(1).to({
            y: 126.8565,
            alpha: .5807
        }, 0).wait(1).to({
            y: 128.3866,
            alpha: .6085
        }, 0).wait(1).to({
            y: 129.8358,
            alpha: .6348
        }, 0).wait(1).to({
            y: 131.21,
            alpha: .6597
        }, 0).wait(1).to({
            y: 132.5143,
            alpha: .6834
        }, 0).wait(1).to({
            y: 133.7529,
            alpha: .7059
        }, 0).wait(1).to({
            y: 134.9296,
            alpha: .7273
        }, 0).wait(1).to({
            y: 136.0476,
            alpha: .7476
        }, 0).wait(1).to({
            y: 137.1099,
            alpha: .7669
        }, 0).wait(1).to({
            y: 138.1189,
            alpha: .7852
        }, 0).wait(1).to({
            y: 139.077,
            alpha: .8026
        }, 0).wait(1).to({
                y: 139.986,
                alpha: .8191
            },
            0).wait(1).to({
            y: 140.8478,
            alpha: .8347
        }, 0).wait(1).to({
            y: 141.664,
            alpha: .8496
        }, 0).wait(1).to({
            y: 142.436,
            alpha: .8636
        }, 0).wait(1).to({
            y: 143.1652,
            alpha: .8768
        }, 0).wait(1).to({
            y: 143.8526,
            alpha: .8893
        }, 0).wait(1).to({
            y: 144.4994,
            alpha: .901
        }, 0).wait(1).to({
            y: 145.1064,
            alpha: .9121
        }, 0).wait(1).to({
            y: 145.6747,
            alpha: .9224
        }, 0).wait(1).to({
            y: 146.205,
            alpha: .932
        }, 0).wait(1).to({
            y: 146.6979,
            alpha: .941
        }, 0).wait(1).to({
            y: 147.1541,
            alpha: .9492
        }, 0).wait(1).to({
            y: 147.5743,
            alpha: .9569
        }, 0).wait(1).to({
                y: 147.9589,
                alpha: .9638
            },
            0).wait(1).to({
            y: 148.3084,
            alpha: .9702
        }, 0).wait(1).to({
            y: 148.6233,
            alpha: .9759
        }, 0).wait(1).to({
            y: 148.9039,
            alpha: .981
        }, 0).wait(1).to({
            y: 149.1506,
            alpha: .9855
        }, 0).wait(1).to({
            y: 149.3637,
            alpha: .9894
        }, 0).wait(1).to({
            y: 149.5435,
            alpha: .9926
        }, 0).wait(1).to({
            y: 149.6902,
            alpha: .9953
        }, 0).wait(1).to({
            y: 149.8041,
            alpha: .9974
        }, 0).wait(1).to({
            y: 149.8852,
            alpha: .9988
        }, 0).wait(1).to({
            y: 149.9338,
            alpha: .9997
        }, 0).wait(1).to({
            regX: .1,
            regY: .1,
            x: 120,
            y: 150,
            alpha: 1
        }, 0).to({
            regY: .2,
            y: 160
        }, 78).to({
            _off: !0
        }, 8).wait(120));
        this.instance_14 =
            new b.bg_white;
        this.instance_14.parent = this;
        this.instance_14.setTransform(120, -38.3, 1, 1, 0, 0, 0, 0, -198.3);
        this.instance_14._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_14).wait(545).to({
            _off: !1
        }, 0).to({
            alpha: 0
        }, 46).to({
            _off: !0
        }, 1).wait(206));
        this.instance_15 = new b.bg_black;
        this.instance_15.parent = this;
        this.instance_15.setTransform(120, 160);
        this.instance_15.alpha = 0;
        this.instance_15._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_15).wait(672).to({
            _off: !1
        }, 0).to({
            alpha: .6914
        }, 5, a.Ease.get(-1)).to({
                _off: !0
            },
            1).wait(120));
        this.memories = new b.memories;
        this.memories.name = "memories";
        this.memories.parent = this;
        this.memories.setTransform(0, -259);
        this.memories._off = !0;
        this.timeline.addTween(a.Tween.get(this.memories).wait(545).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 120,
            regY: 289.9,
            x: 120,
            y: 33.5
        }, 0).wait(1).to({
            y: 36.1
        }, 0).wait(1).to({
            y: 38.65
        }, 0).wait(1).to({
            y: 41.25
        }, 0).wait(1).to({
            y: 43.8
        }, 0).wait(1).to({
            y: 46.4
        }, 0).wait(1).to({
            y: 49
        }, 0).wait(1).to({
            y: 51.55
        }, 0).wait(1).to({
            y: 54.15
        }, 0).wait(1).to({
            y: 56.75
        }, 0).wait(1).to({
                y: 59.3
            },
            0).wait(1).to({
            y: 61.9
        }, 0).wait(1).to({
            y: 64.45
        }, 0).wait(1).to({
            y: 67.05
        }, 0).wait(1).to({
            y: 69.6
        }, 0).wait(1).to({
            y: 72.2
        }, 0).wait(1).to({
            y: 74.75
        }, 0).wait(1).to({
            y: 77.35
        }, 0).wait(1).to({
            y: 79.9
        }, 0).wait(1).to({
            y: 82.5
        }, 0).wait(1).to({
            y: 85.05
        }, 0).wait(1).to({
            y: 87.6
        }, 0).wait(1).to({
            y: 90.2
        }, 0).wait(1).to({
            y: 92.75
        }, 0).wait(1).to({
            y: 95.3
        }, 0).wait(1).to({
            y: 97.85
        }, 0).wait(1).to({
            y: 100.4
        }, 0).wait(1).to({
            y: 102.95
        }, 0).wait(1).to({
            y: 105.5
        }, 0).wait(1).to({
            y: 108.05
        }, 0).wait(1).to({
            y: 110.6
        }, 0).wait(1).to({
            y: 113.15
        }, 0).wait(1).to({
                y: 115.7
            },
            0).wait(1).to({
            y: 118.2
        }, 0).wait(1).to({
            y: 120.75
        }, 0).wait(1).to({
            y: 123.25
        }, 0).wait(1).to({
            y: 125.75
        }, 0).wait(1).to({
            y: 128.3
        }, 0).wait(1).to({
            y: 130.8
        }, 0).wait(1).to({
            y: 133.3
        }, 0).wait(1).to({
            y: 135.8
        }, 0).wait(1).to({
            y: 138.3
        }, 0).wait(1).to({
            y: 140.8
        }, 0).wait(1).to({
            y: 143.25
        }, 0).wait(1).to({
            y: 145.75
        }, 0).wait(1).to({
            y: 148.2
        }, 0).wait(1).to({
            y: 150.65
        }, 0).wait(1).to({
            y: 153.15
        }, 0).wait(1).to({
            y: 155.6
        }, 0).wait(1).to({
            y: 158.05
        }, 0).wait(1).to({
            y: 160.45
        }, 0).wait(1).to({
            y: 162.9
        }, 0).wait(1).to({
            y: 165.3
        }, 0).wait(1).to({
                y: 167.75
            },
            0).wait(1).to({
            y: 170.15
        }, 0).wait(1).to({
            y: 172.55
        }, 0).wait(1).to({
            y: 174.95
        }, 0).wait(1).to({
            y: 177.3
        }, 0).wait(1).to({
            y: 179.7
        }, 0).wait(1).to({
            y: 182.05
        }, 0).wait(1).to({
            y: 184.4
        }, 0).wait(1).to({
            y: 186.75
        }, 0).wait(1).to({
            y: 189.1
        }, 0).wait(1).to({
            y: 191.4
        }, 0).wait(1).to({
            y: 193.75
        }, 0).wait(1).to({
            y: 196.05
        }, 0).wait(1).to({
            y: 198.3
        }, 0).wait(1).to({
            y: 200.6
        }, 0).wait(1).to({
            y: 202.85
        }, 0).wait(1).to({
            y: 205.15
        }, 0).wait(1).to({
            y: 207.35
        }, 0).wait(1).to({
            y: 209.6
        }, 0).wait(1).to({
            y: 211.8
        }, 0).wait(1).to({
            y: 214.05
        }, 0).wait(1).to({
                y: 216.2
            },
            0).wait(1).to({
            y: 218.4
        }, 0).wait(1).to({
            y: 220.55
        }, 0).wait(1).to({
            y: 222.7
        }, 0).wait(1).to({
            y: 224.85
        }, 0).wait(1).to({
            y: 226.95
        }, 0).wait(1).to({
            y: 229.05
        }, 0).wait(1).to({
            y: 231.1
        }, 0).wait(1).to({
            y: 233.2
        }, 0).wait(1).to({
            y: 235.2
        }, 0).wait(1).to({
            y: 237.25
        }, 0).wait(1).to({
            y: 239.25
        }, 0).wait(1).to({
            y: 241.25
        }, 0).wait(1).to({
            y: 243.2
        }, 0).wait(1).to({
            y: 245.15
        }, 0).wait(1).to({
            y: 247.05
        }, 0).wait(1).to({
            y: 248.95
        }, 0).wait(1).to({
            y: 250.85
        }, 0).wait(1).to({
            y: 252.7
        }, 0).wait(1).to({
            y: 254.5
        }, 0).wait(1).to({
            y: 256.3
        }, 0).wait(1).to({
                y: 258.05
            },
            0).wait(1).to({
            y: 259.8
        }, 0).wait(1).to({
            y: 261.5
        }, 0).wait(1).to({
            y: 263.2
        }, 0).wait(1).to({
            y: 264.85
        }, 0).wait(1).to({
            y: 266.45
        }, 0).wait(1).to({
            y: 268.05
        }, 0).wait(1).to({
            y: 269.6
        }, 0).wait(1).to({
            y: 271.1
        }, 0).wait(1).to({
            y: 272.6
        }, 0).wait(1).to({
            y: 274
        }, 0).wait(1).to({
            y: 275.4
        }, 0).wait(1).to({
            y: 276.75
        }, 0).wait(1).to({
            y: 278.05
        }, 0).wait(1).to({
            y: 279.3
        }, 0).wait(1).to({
            y: 280.5
        }, 0).wait(1).to({
            y: 281.65
        }, 0).wait(1).to({
            y: 282.7
        }, 0).wait(1).to({
            y: 283.75
        }, 0).wait(1).to({
            y: 284.7
        }, 0).wait(1).to({
            y: 285.6
        }, 0).wait(1).to({
                y: 286.45
            },
            0).wait(1).to({
            y: 287.2
        }, 0).wait(1).to({
            y: 287.9
        }, 0).wait(1).to({
            y: 288.45
        }, 0).wait(1).to({
            y: 288.95
        }, 0).wait(1).to({
            y: 289.35
        }, 0).wait(1).to({
            y: 289.65
        }, 0).wait(1).to({
            y: 289.85
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).to({
            _off: !0
        }, 8).wait(120));
        this.instance_16 = new b.bg_last;
        this.instance_16.parent = this;
        this.instance_16.setTransform(120, 160);
        this.instance_16._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_16).wait(678).to({
            _off: !1
        }, 0).wait(120));
        this.instance_17 = new b.bg_white;
        this.instance_17.parent =
            this;
        this.instance_17.setTransform(120.45, 160.25);
        this.instance_17.alpha = 0;
        this.instance_17._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_17).wait(271).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 11, a.Ease.quadIn).to({
            alpha: .0117
        }, 24, a.Ease.quadIn).to({
            _off: !0
        }, 1).wait(35).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 10, a.Ease.none).to({
            alpha: .0117
        }, 19, a.Ease.none).to({
            _off: !0
        }, 1).wait(37).to({
            _off: !1,
            compositeOperation: NaN
        }, 0).to({
            alpha: 1
        }, 13, a.Ease.none).to({
            alpha: .0117
        }, 23, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(85).to({
                _off: !1
            },
            0).to({
            alpha: 1
        }, 13, a.Ease.none).to({
            _off: !0
        }, 1).wait(253));
        this.instance_18 = new b.gliter_container;
        this.instance_18.parent = this;
        this.instance_18.setTransform(113.05, -18.7, 1.0599, 1.0599, -4.2877, 0, 0, -.1, 2.5);
        this.timeline.addTween(a.Tween.get(this.instance_18).to({
            _off: !0
        }, 545).wait(253));
        this.instance_19 = new b.efa_t2_\u8449\u3063\u30712;
        this.instance_19.parent = this;
        this.instance_19.setTransform(250.4, 198.7, .8914, .8912, 0, 118.2013, -61.814, 215.9, -26.9);
        this.instance_19._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_19).wait(462).to({
                _off: !1
            },
            0).to({
            _off: !0
        }, 28).wait(308));
        this.instance_20 = new b.efa_t2_\u8449\u3063\u30713;
        this.instance_20.parent = this;
        this.instance_20.setTransform(188.25, 99.85, .6873, .6873, 0, 108.8923, -71.1274, 235.7, -6);
        this.instance_20._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_20).wait(464).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 26).wait(308));
        this.instance_21 = new b.efa_t2_\u8449\u3063\u30711;
        this.instance_21.parent = this;
        this.instance_21.setTransform(56.4, 274.85, .8913, .8913, 0, 116.1198, -63.8802, -.1, -.1);
        this.instance_21._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_21).wait(468).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 22).wait(308));
        this.instance_22 = new b.efa_t2_\u8449\u3063\u30711;
        this.instance_22.parent = this;
        this.instance_22.setTransform(-12.75, 103.7, .8914, .8912, 0, 100.2082, -79.8069, 216, -26.7);
        this.instance_22._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_22).wait(466).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 24).wait(308));
        this.instance_23 = new b.efa_t2_\u8449\u3063\u30711;
        this.instance_23.parent = this;
        this.instance_23.setTransform(4.15,
            299.95, .8913, .8913, -69.7486, 0, 0, -.1, .1);
        this.instance_23._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_23).wait(461).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 29).wait(308));
        this.instance_24 = new b.efa_t2_\u8449\u3063\u30712;
        this.instance_24.parent = this;
        this.instance_24.setTransform(-106.5, 113.1, .8913, .8913, -80.444, 0, 0, 215.8, -26.6);
        this.instance_24._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_24).wait(461).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 29).wait(308));
        this.lighter_tgt = new b.mc_ring_move;
        this.lighter_tgt.name =
            "lighter_tgt";
        this.lighter_tgt.parent = this;
        this.lighter_tgt.setTransform(120, 155);
        this.lighter_tgt.alpha = .3906;
        this.lighter_tgt.compositeOperation = "lighter";
        this.timeline.addTween(a.Tween.get(this.lighter_tgt).to({
            _off: !0
        }, 1).wait(281).to({
            _off: !1,
            alpha: .8008
        }, 0).to({
            _off: !0
        }, 140).wait(376));
        this.lighter_tgt_1 = new b.mc_bubble_set;
        this.lighter_tgt_1.name = "lighter_tgt_1";
        this.lighter_tgt_1.parent = this;
        this.lighter_tgt_1.setTransform(159, 366, 1.25, 1.25, 89.9965);
        this.lighter_tgt_1.alpha = .4492;
        this.timeline.addTween(a.Tween.get(this.lighter_tgt_1).to({
                _off: !0
            },
            1).wait(281).to({
            _off: !1,
            x: 88
        }, 0).to({
            _off: !0
        }, 140).wait(376));
        this.ch2 = new b.fumika_all;
        this.ch2.name = "ch2";
        this.ch2.parent = this;
        this.ch2.setTransform(-640, 0);
        this.ch2_1 = new b.fumika_all_last;
        this.ch2_1.name = "ch2_1";
        this.ch2_1.parent = this;
        this.ch2_1.setTransform(175.05, 409.35, 1.5, 1.5);
        this.ch2_1.alpha = 0;
        this.ch2_1._off = !0;
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.ch2
            }]
        }).to({
            state: []
        }, 1).to({
            state: [{
                t: this.ch2_1
            }]
        }, 489).to({
            state: [{
                t: this.ch2_1
            }]
        }, 13).to({
                state: [{
                    t: this.ch2_1
                }]
            },
            41).to({
            state: []
        }, 1).wait(253));
        this.timeline.addTween(a.Tween.get(this.ch2_1).wait(490).to({
            _off: !1
        }, 0).to({
            x: 175,
            y: 407.5,
            alpha: 1
        }, 13).to({
            x: 175.05,
            y: 396.35
        }, 41).to({
            _off: !0
        }, 1).wait(253));
        this.bg = new b.bg_fumika_1;
        this.bg.name = "bg";
        this.bg.parent = this;
        this.bg.setTransform(-639.5, .5, 1, 1, 0, 0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.bg).to({
            _off: !0
        }, 1).wait(489).to({
            _off: !1,
            regX: .1,
            regY: .1,
            scaleX: 1.4,
            scaleY: 1.4,
            x: 159.75,
            y: 301.9,
            alpha: 0
        }, 0).to({
            scaleX: 1.3999,
            scaleY: 1.3999,
            y: 300.5,
            alpha: 1
        }, 13).to({
            scaleX: 1.4,
            scaleY: 1.4,
            y: 291.9
        }, 41).to({
            _off: !0
        }, 1).wait(253));
        this.instance_25 = new b.Feather02_blur_1;
        this.instance_25.parent = this;
        this.instance_25.setTransform(-2.45, 286.55, .15, .15, 0, 0, 0, 0, .4);
        this.instance_25._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_25).wait(289).to({
            _off: !1
        }, 0).to({
            regX: .4,
            regY: 0,
            x: 222.8,
            y: -45
        }, 18, a.Ease.none).to({
            _off: !0
        }, 1).wait(490));
        this.instance_26 = new b.Feather01_1;
        this.instance_26.parent = this;
        this.instance_26.setTransform(-14.95, 324.1, .56, .56, 162.001, 0, 0, -.1, .1);
        this.instance_26._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_26).wait(292).to({
            _off: !1
        }, 0).to({
            regX: .1,
            regY: .4,
            scaleX: .5587,
            scaleY: .5599,
            rotation: 360,
            skewX: -141.9993,
            skewY: 110.7939,
            x: 366.65,
            y: 142.6
        }, 11, a.Ease.none).to({
            _off: !0
        }, 1).wait(494));
        this.instance_27 = new b.Feather01_1;
        this.instance_27.parent = this;
        this.instance_27.setTransform(-98.9, 380.45, .3605, .3605, -141.0012, 0, 0, .1, .1);
        this.instance_27._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_27).wait(296).to({
            _off: !1
        }, 0).to({
            regX: .4,
            regY: .6,
            rotation: -720,
            x: 291.5,
            y: 141.35
        }, 11, a.Ease.none).to({
            _off: !0
        }, 1).wait(490));
        this.instance_28 = new b.effect_001;
        this.instance_28.parent = this;
        this.instance_28.setTransform(128.2, 154.95, 1.2095, 1.2095, 0, 0, 0, 80.5, 80.7);
        this.instance_28._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_28).wait(458).to({
            _off: !1
        }, 0).to({
            regX: 80,
            regY: 80,
            scaleX: 2.4147,
            scaleY: 2.4147,
            x: 128.25,
            y: 155.35
        }, 4).wait(1).to({
            scaleX: 2.4193,
            scaleY: 2.4193,
            alpha: .9434
        }, 0).wait(1).to({
            scaleX: 2.4237,
            scaleY: 2.4237,
            alpha: .8894
        }, 0).wait(1).to({
            scaleX: 2.4278,
            scaleY: 2.4278,
            alpha: .8377
        }, 0).wait(1).to({
            scaleX: 2.4318,
            scaleY: 2.4318,
            y: 155.4,
            alpha: .7884
        }, 0).wait(1).to({
            scaleX: 2.4356,
            scaleY: 2.4356,
            y: 155.35,
            alpha: .7411
        }, 0).wait(1).to({
            scaleX: 2.4392,
            scaleY: 2.4392,
            y: 155.4,
            alpha: .6959
        }, 0).wait(1).to({
            scaleX: 2.4427,
            scaleY: 2.4427,
            y: 155.35,
            alpha: .6526
        }, 0).wait(1).to({
            scaleX: 2.4461,
            scaleY: 2.4461,
            y: 155.4,
            alpha: .6111
        }, 0).wait(1).to({
            scaleX: 2.4493,
            scaleY: 2.4493,
            alpha: .5712
        }, 0).wait(1).to({
            scaleX: 2.4524,
            scaleY: 2.4524,
            alpha: .533
        }, 0).wait(1).to({
            scaleX: 2.4553,
            scaleY: 2.4553,
            y: 155.35,
            alpha: .4963
        }, 0).wait(1).to({
            scaleX: 2.4582,
            scaleY: 2.4582,
            y: 155.4,
            alpha: .461
        }, 0).wait(1).to({
            scaleX: 2.4609,
            scaleY: 2.4609,
            y: 155.35,
            alpha: .427
        }, 0).wait(1).to({
            scaleX: 2.4635,
            scaleY: 2.4635,
            y: 155.4,
            alpha: .3943
        }, 0).wait(1).to({
            scaleX: 2.4661,
            scaleY: 2.4661,
            alpha: .3629
        }, 0).wait(1).to({
            scaleX: 2.4685,
            scaleY: 2.4685,
            alpha: .3326
        }, 0).wait(1).to({
            scaleX: 2.4708,
            scaleY: 2.4708,
            alpha: .3033
        }, 0).wait(1).to({
            scaleX: 2.4731,
            scaleY: 2.4731,
            alpha: .2751
        }, 0).wait(1).to({
                scaleX: 2.4753,
                scaleY: 2.4753,
                x: 128.2,
                alpha: .2479
            },
            0).wait(1).to({
            scaleX: 2.4774,
            scaleY: 2.4774,
            x: 128.25,
            alpha: .2216
        }, 0).wait(1).to({
            scaleX: 2.4795,
            scaleY: 2.4795,
            alpha: .1962
        }, 0).wait(1).to({
            scaleX: 2.4815,
            scaleY: 2.4815,
            alpha: .1716
        }, 0).wait(1).to({
            scaleX: 2.4834,
            scaleY: 2.4834,
            alpha: .1478
        }, 0).wait(1).to({
            scaleX: 2.4852,
            scaleY: 2.4852,
            alpha: .1247
        }, 0).wait(1).to({
            scaleX: 2.487,
            scaleY: 2.487,
            alpha: .1024
        }, 0).wait(1).to({
            scaleX: 2.4888,
            scaleY: 2.4888,
            alpha: .0807
        }, 0).wait(1).to({
            scaleX: 2.4905,
            scaleY: 2.4905,
            y: 155.45,
            alpha: .0597
        }, 0).wait(1).to({
            scaleX: 2.4921,
            scaleY: 2.4921,
            y: 155.4,
            alpha: .0392
        }, 0).wait(1).to({
            scaleX: 2.4937,
            scaleY: 2.4937,
            alpha: .0193
        }, 0).wait(1).to({
            scaleX: 2.4953,
            scaleY: 2.4953,
            x: 128.2,
            y: 155.25,
            alpha: 0
        }, 0).to({
            _off: !0
        }, 1).wait(305));
        this.instance_29 = new b.bg_white;
        this.instance_29.parent = this;
        this.instance_29.setTransform(120.45, 160.25);
        this.instance_29.alpha = .0117;
        this.instance_29.compositeOperation = "lighter";
        this.instance_29._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_29).wait(455).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 3, a.Ease.none).to({
                alpha: .0117
            },
            9, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(330));
        this.instance_30 = new b.kira_mc_set2_1;
        this.instance_30.parent = this;
        this.instance_30.setTransform(139.85, 209.5, 1, 1, 0, 0, 0, 138.9, 208.7);
        this.instance_30.compositeOperation = "lighter";
        this.instance_30._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_30).wait(422).to({
            _off: !1
        }, 0).wait(9).to({
            scaleX: .95,
            scaleY: .95,
            y: 209.45
        }, 72).to({
            _off: !0
        }, 1).wait(294));
        this.s2_bg = new b.ef_fumika_kira1_mov;
        this.s2_bg.name = "s2_bg";
        this.s2_bg.parent = this;
        this.s2_bg.setTransform(134.55,
            160.25, .5266, .5266, 0, 0, 0, .4, .3);
        this.s2_bg._off = !0;
        this.timeline.addTween(a.Tween.get(this.s2_bg).wait(458).to({
            _off: !1
        }, 0).to({
            regX: .8,
            scaleX: .53,
            scaleY: .53,
            x: 134.5,
            y: 159.1
        }, 45).to({
            _off: !0
        }, 1).wait(294));
        this.ch1 = new b.fumika_all;
        this.ch1.name = "ch1";
        this.ch1.parent = this;
        this.ch1.setTransform(152.95, 534.25, .5, .5);
        this.timeline.addTween(a.Tween.get(this.ch1).to({
            _off: !0
        }, 1).wait(281).to({
            _off: !1,
            regX: .4,
            regY: -.2,
            scaleX: 1.5,
            scaleY: 1.5,
            x: 190.6,
            y: -45.25
        }, 0).to({
            x: 223.6,
            y: -83.25
        }, 69).to({
            scaleX: 1.6599,
            scaleY: 1.6599,
            x: 270.7,
            y: 259.55
        }, 1).to({
            x: 234.6,
            y: 236.65
        }, 69).to({
            regX: 0,
            regY: 0,
            scaleX: 1.2,
            scaleY: 1.2,
            x: 140.6,
            y: 220
        }, 1).wait(1).to({
            regX: 1.7,
            regY: 54.3,
            scaleX: .9654,
            scaleY: .9654,
            x: 140.15,
            y: 251.8
        }, 0).wait(1).to({
            scaleX: .8806,
            scaleY: .8806,
            x: 139.25,
            y: 239.75
        }, 0).wait(1).to({
            scaleX: .8207,
            scaleY: .8207,
            x: 138.6,
            y: 231.25
        }, 0).wait(1).to({
            scaleX: .7738,
            scaleY: .7738,
            x: 138.1,
            y: 224.6
        }, 0).wait(1).to({
            scaleX: .7354,
            scaleY: .7354,
            x: 137.7,
            y: 219.2
        }, 0).wait(1).to({
            scaleX: .703,
            scaleY: .703,
            x: 137.35,
            y: 214.55
        }, 0).wait(1).to({
            scaleX: .6753,
            scaleY: .6753,
            x: 137.05,
            y: 210.6
        }, 0).wait(1).to({
            scaleX: .6514,
            scaleY: .6514,
            x: 136.8,
            y: 207.2
        }, 0).wait(1).to({
            scaleX: .6306,
            scaleY: .6306,
            x: 136.55,
            y: 204.3
        }, 0).wait(1).to({
            scaleX: .6124,
            scaleY: .6124,
            x: 136.4,
            y: 201.7
        }, 0).wait(1).to({
            scaleX: .5966,
            scaleY: .5966,
            x: 136.2,
            y: 199.45
        }, 0).wait(1).to({
            scaleX: .5828,
            scaleY: .5828,
            x: 136.1,
            y: 197.5
        }, 0).wait(1).to({
            scaleX: .5708,
            scaleY: .5708,
            x: 135.95,
            y: 195.8
        }, 0).wait(1).to({
            scaleX: .5604,
            scaleY: .5604,
            x: 135.85,
            y: 194.35
        }, 0).wait(1).to({
                scaleX: .5516,
                scaleY: .5516,
                x: 135.75,
                y: 193.05
            },
            0).wait(1).to({
            scaleX: .5442,
            scaleY: .5442,
            x: 135.7,
            y: 192
        }, 0).wait(1).to({
            scaleX: .5381,
            scaleY: .5381,
            x: 135.6,
            y: 191.15
        }, 0).wait(1).to({
            scaleX: .5333,
            scaleY: .5333,
            x: 135.55,
            y: 190.45
        }, 0).wait(1).to({
            scaleX: .5296,
            scaleY: .5296,
            y: 189.95
        }, 0).wait(1).to({
            scaleX: .527,
            scaleY: .527,
            x: 135.5,
            y: 189.55
        }, 0).wait(1).to({
            scaleX: .5255,
            scaleY: .5255,
            y: 189.35
        }, 0).wait(1).to({
            regX: .5,
            regY: .2,
            scaleX: .525,
            scaleY: .525,
            x: 134.6,
            y: 160.8
        }, 0).to({
            regX: .4,
            regY: .1,
            scaleX: .5,
            scaleY: .5,
            y: 159.05
        }, 59, a.Ease.none).to({
            _off: !0
        }, 1).wait(294));
        this.instance_31 = new b.bg_black;
        this.instance_31.parent = this;
        this.instance_31.setTransform(120, 160);
        this.instance_31.alpha = .6484;
        this.instance_31._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_31).wait(282).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 176).wait(340));
        this.s2_bg_1 = new b.bg_fumika_1;
        this.s2_bg_1.name = "s2_bg_1";
        this.s2_bg_1.parent = this;
        this.s2_bg_1.setTransform(120.05, 160.05, .5, .5, 0, 0, 0, .1, .1);
        this.timeline.addTween(a.Tween.get(this.s2_bg_1).to({
            _off: !0
        }, 1).wait(281).to({
            _off: !1,
            regX: .2,
            scaleX: 1,
            scaleY: 1,
            x: 179.2,
            y: 35.1
        }, 0).to({
            x: 202.2,
            y: 13.1
        }, 69).to({
            regX: .1,
            regY: .2,
            scaleX: 1.2,
            scaleY: 1.2,
            x: 224.5,
            y: 217.75
        }, 1).to({
            x: 188.4,
            y: 194.85
        }, 69, a.Ease.none).to({
            regX: 0,
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            x: 140.6,
            y: 220
        }, 1, a.Ease.none).wait(1).to({
            scaleX: .8349,
            scaleY: .8349,
            x: 138.4829,
            y: 199.4486
        }, 0).wait(1).to({
            scaleX: .7752,
            scaleY: .7752,
            x: 137.7171,
            y: 192.0144
        }, 0).wait(1).to({
            scaleX: .733,
            scaleY: .733,
            x: 137.1763,
            y: 186.7651
        }, 0).wait(1).to({
            scaleX: .7001,
            scaleY: .7001,
            x: 136.7534,
            y: 182.6591
        }, 0).wait(1).to({
            scaleX: .673,
            scaleY: .673,
            x: 136.4066,
            y: 179.2926
        }, 0).wait(1).to({
            scaleX: .6503,
            scaleY: .6503,
            x: 136.1146,
            y: 176.4581
        }, 0).wait(1).to({
            scaleX: .6308,
            scaleY: .6308,
            x: 135.8647,
            y: 174.0325
        }, 0).wait(1).to({
            scaleX: .6139,
            scaleY: .6139,
            x: 135.6487,
            y: 171.9356
        }, 0).wait(1).to({
            scaleX: .5993,
            scaleY: .5993,
            x: 135.4608,
            y: 170.1117
        }, 0).wait(1).to({
            scaleX: .5865,
            scaleY: .5865,
            x: 135.2969,
            y: 168.5204
        }, 0).wait(1).to({
            scaleX: .5754,
            scaleY: .5754,
            x: 135.1538,
            y: 167.1313
        }, 0).wait(1).to({
            scaleX: .5656,
            scaleY: .5656,
            x: 135.0291,
            y: 165.9209
        }, 0).wait(1).to({
            scaleX: .5572,
            scaleY: .5572,
            x: 134.9209,
            y: 164.8707
        }, 0).wait(1).to({
            scaleX: .5499,
            scaleY: .5499,
            x: 134.8277,
            y: 163.9657
        }, 0).wait(1).to({
            scaleX: .5437,
            scaleY: .5437,
            x: 134.7482,
            y: 163.1939
        }, 0).wait(1).to({
            scaleX: .5385,
            scaleY: .5385,
            x: 134.6814,
            y: 162.5453
        }, 0).wait(1).to({
            scaleX: .5342,
            scaleY: .5342,
            x: 134.6264,
            y: 162.0114
        }, 0).wait(1).to({
            scaleX: .5308,
            scaleY: .5308,
            x: 134.5825,
            y: 161.5855
        }, 0).wait(1).to({
            scaleX: .5282,
            scaleY: .5282,
            x: 134.5491,
            y: 161.2616
        }, 0).wait(1).to({
            scaleX: .5264,
            scaleY: .5264,
            x: 134.5258,
            y: 161.0349
        }, 0).wait(1).to({
            scaleX: .5253,
            scaleY: .5253,
            x: 134.512,
            y: 160.9014
        }, 0).wait(1).to({
            regX: .3,
            regY: .3,
            scaleX: .525,
            scaleY: .525,
            x: 134.5,
            y: 160.85
        }, 0).to({
            regX: .2,
            regY: .2,
            scaleX: .5,
            scaleY: .5,
            y: 159.1
        }, 59, a.Ease.none).to({
            _off: !0
        }, 1).wait(294));
        this.instance_32 = new b.flare_white;
        this.instance_32.parent = this;
        this.instance_32.setTransform(120, 320, .62, .62);
        this.instance_32.compositeOperation = "lighter";
        this.instance_32._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_32).wait(271).to({
            _off: !1
        }, 0).to({
            scaleX: 3.2565,
            scaleY: 3.2565
        }, 6).to({
            scaleX: 5.1398,
            scaleY: 5.1398
        }, 5).to({
            _off: !0
        }, 1).wait(515));
        this.instance_33 = new b.Feather02_blur_1;
        this.instance_33.parent = this;
        this.instance_33.setTransform(-25, 291.55, .13, .13, 0, 0, 0, -.4, .4);
        this.instance_33._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_33).wait(257).to({
            _off: !1
        }, 0).to({
            regX: 0,
            regY: 0,
            rotation: -360,
            x: 222.8,
            y: -45
        }, 15, a.Ease.none).to({
            _off: !0
        }, 1).wait(1).to({
            _off: !1,
            regY: .4,
            scaleX: .15,
            scaleY: .15,
            x: -2.45,
            y: 286.55
        }, 0).to({
            regX: .4,
            regY: 0,
            rotation: -720,
            x: 222.8,
            y: -45
        }, 13, a.Ease.none).to({
                _off: !0
            },
            1).wait(510));
        this.instance_34 = new b.Feather01_1;
        this.instance_34.parent = this;
        this.instance_34.setTransform(-15.05, 324.15, .5599, .5599, 151.0015, 0, 0, .1, .1);
        this.instance_34._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_34).wait(253).to({
            _off: !1
        }, 0).to({
            regX: .3,
            regY: .2,
            scaleX: .5587,
            rotation: 215.9998,
            x: 366.55,
            y: 142.65
        }, 8, a.Ease.none).to({
            _off: !0
        }, 1).wait(4).to({
            _off: !1,
            regX: 0,
            regY: .1,
            scaleX: .3605,
            scaleY: .3605,
            rotation: 360,
            x: -98.85,
            y: 380.45
        }, 0).to({
                regX: .4,
                regY: .6,
                rotation: 720,
                x: 295.6,
                y: 211.55
            },
            5, a.Ease.none).to({
            _off: !0
        }, 1).wait(6).to({
            _off: !1,
            regX: -.1,
            regY: .1,
            scaleX: .92,
            scaleY: .92,
            x: -15.05,
            y: 324.1
        }, 0).to({
            regX: .2,
            regY: .4,
            scaleY: .9219,
            rotation: 918.9987,
            x: 366.65,
            y: 142.65
        }, 7, a.Ease.none).to({
            _off: !0
        }, 1).wait(512));
        this.instance_35 = new b.Feather02_1;
        this.instance_35.parent = this;
        this.instance_35.setTransform(-21.25, 414.15, .11, .11, 0, 0, 0, -.5, .5);
        this.instance_35._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_35).wait(240).to({
            _off: !1
        }, 0).to({
            regX: 1.4,
            regY: 1.4,
            rotation: 360,
            x: 315.35,
            y: 208.9
        }, 13, a.Ease.none).to({
            _off: !0
        }, 1).wait(22).to({
            _off: !1,
            regX: -.5,
            regY: .5,
            x: -21.25,
            y: 414.15
        }, 0).to({
            regX: 1,
            regY: 1.1,
            rotation: 720,
            skewX: 66.0028,
            x: 315.35,
            y: 208.9
        }, 9, a.Ease.none).to({
            _off: !0
        }, 1).wait(512));
        this.instance_36 = new b.Feather01_blur_1;
        this.instance_36.parent = this;
        this.instance_36.setTransform(-22.5, 366.55);
        this.instance_36._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_36).wait(261).to({
            _off: !1
        }, 0).to({
                regX: .7,
                regY: -.3,
                scaleX: .9994,
                scaleY: .9999,
                rotation: -147.0006,
                x: 306.65,
                y: 67.45
            },
            13, a.Ease.none).to({
            _off: !0
        }, 1).wait(523));
        this.instance_37 = new b.Feather01_1;
        this.instance_37.parent = this;
        this.instance_37.setTransform(-160.15, 299.15, .2, .2, 0, 0, 0, -.2, .2);
        this.instance_37._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_37).wait(269).to({
            _off: !1
        }, 0).to({
            regX: .2,
            regY: 0,
            rotation: 360,
            x: 131.35,
            y: -70.1
        }, 9, a.Ease.none).to({
            _off: !0
        }, 1).wait(519));
        this.star = new b.kira_srare_01;
        this.star.name = "star";
        this.star.parent = this;
        this.star.setTransform(151, 277, 1.9106, 1.9106);
        this.star._off = !0;
        this.timeline.addTween(a.Tween.get(this.star).wait(66).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 23).wait(709));
        this.instance_38 = new b.book_all;
        this.instance_38.parent = this;
        this.instance_38.setTransform(-4.4, 157.5, .5, .5);
        this.instance_38._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_38).wait(115).to({
            _off: !1
        }, 0).wait(80).to({
            regX: .1,
            regY: .2,
            scaleX: .3999,
            scaleY: .3999,
            x: 16.7,
            y: 143.2
        }, 16, a.Ease.cubicInOut).to({
            regX: .4,
            regY: .4,
            scaleX: .35,
            scaleY: .35,
            rotation: -11.9983,
            x: 36.6,
            y: 469.2
        }, 31, a.Ease.cubicIn).to({
                _off: !0
            },
            1).wait(555));
        this.instance_39 = new b.ef_book_1;
        this.instance_39.parent = this;
        this.instance_39.setTransform(120, 346, .5, .5);
        this.instance_39.alpha = .1016;
        this.instance_39._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_39).wait(240).to({
            _off: !1
        }, 0).to({
            y: 339,
            alpha: 1
        }, 8).to({
            scaleX: 1.5,
            scaleY: 1.5,
            y: 320
        }, 28, a.Ease.quadIn).to({
            _off: !0
        }, 6).wait(516));
        this.instance_40 = new b.scene3_bg_1;
        this.instance_40.parent = this;
        this.instance_40.setTransform(120.35, 198.55, 1.01, 1.01);
        this.instance_40._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_40).wait(195).to({
                _off: !1
            },
            0).to({
            y: 120.6
        }, 93).to({
            _off: !0
        }, 1).wait(509));
        this.instance_41 = new b.page_close_all;
        this.instance_41.parent = this;
        this.instance_41.setTransform(120, 160, .5, .5, 0, 0, 0, 260, 0);
        this.instance_41._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_41).wait(106).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 9).wait(683));
        this.instance_42 = new b.page_open_all;
        this.instance_42.parent = this;
        this.instance_42.setTransform(120, 160, .5, .5, 0, 0, 0, 260, 0);
        this.instance_42._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_42).wait(20).to({
                _off: !1
            },
            0).to({
            _off: !0
        }, 9).wait(769));
        this.instance_43 = new b.bookcover_front1;
        this.instance_43.parent = this;
        this.instance_43.setTransform(-4.4, 157.5, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance_43).wait(19).to({
            _off: !0
        }, 1).wait(778));
        this.instance_44 = new b.page_mov_1("synched", 0);
        this.instance_44.parent = this;
        this.instance_44.setTransform(243.05, 185, .2, .5, 0, 0, 0, -1.8, 320);
        this.instance_44._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_44).wait(22).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 240,
            scaleX: .2209,
            scaleY: .5081,
            rotation: -.468,
            x: 273.6,
            y: 182.75
        }, 0).wait(1).to({
            scaleX: .2477,
            scaleY: .5184,
            rotation: -1.0676,
            x: 250.8,
            y: 179.7
        }, 0).wait(1).to({
            scaleX: .282,
            scaleY: .5317,
            rotation: -1.8346,
            x: 221.6,
            y: 175.7
        }, 0).wait(1).to({
            scaleX: .3258,
            scaleY: .5486,
            rotation: -2.8164,
            x: 184.15,
            y: 170.25
        }, 0).wait(1).to({
            scaleX: .3816,
            scaleY: .5702,
            rotation: -4.0644,
            x: 136.65,
            y: 162.75
        }, 0).wait(1).to({
            scaleX: .4497,
            scaleY: .5964,
            rotation: -5.5885,
            x: 78.45,
            y: 152.8
        }, 0).wait(1).to({
            scaleX: .5234,
            scaleY: .6249,
            rotation: -7.239,
            x: 15.2,
            y: 141
        }, 0).wait(1).to({
            scaleX: .5882,
            scaleY: .65,
            rotation: -8.6902,
            x: -40.65,
            y: 129.85
        }, 0).wait(1).to({
            scaleX: .6349,
            scaleY: .668,
            rotation: -9.7359,
            x: -80.95,
            y: 121.35
        }, 0).wait(1).to({
            scaleX: .6646,
            scaleY: .6794,
            rotation: -10.3988,
            x: -106.6,
            y: 115.7
        }, 0).wait(1).to({
            scaleX: .6813,
            scaleY: .6859,
            rotation: -10.7738,
            x: -121.05,
            y: 112.45
        }, 0).wait(1).to({
            regX: -2,
            regY: 319.9,
            scaleX: .6888,
            scaleY: .6888,
            rotation: -10.9415,
            x: -291.1,
            y: 142.55
        }, 0).to({
            _off: !0
        }, 1).wait(62).to({
            _off: !1
        }, 0).to({
            regX: -1.8,
            regY: 320.1,
            scaleX: .2,
            scaleY: .5,
            rotation: 0,
            x: 243,
            y: 185
        }, 11).to({
                _off: !0
            },
            1).wait(689));
        this.instance_45 = new b.page_mov_1("synched", 0);
        this.instance_45.parent = this;
        this.instance_45.setTransform(243.05, 185, .2, .5, 0, 0, 0, -1.8, 320);
        this.instance_45._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_45).wait(25).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 240,
            scaleX: .2231,
            scaleY: .5089,
            rotation: -.5167,
            x: 271.7,
            y: 182.45
        }, 0).wait(1).to({
            scaleX: .2533,
            scaleY: .5206,
            rotation: -1.1934,
            x: 246,
            y: 179.1
        }, 0).wait(1).to({
            scaleX: .2929,
            scaleY: .5359,
            rotation: -2.0789,
            x: 212.3,
            y: 174.35
        }, 0).wait(1).to({
            scaleX: .3446,
            scaleY: .5559,
            rotation: -3.2372,
            x: 168.15,
            y: 167.8
        }, 0).wait(1).to({
            scaleX: .4112,
            scaleY: .5816,
            rotation: -4.7266,
            x: 111.4,
            y: 158.5
        }, 0).wait(1).to({
            scaleX: .49,
            scaleY: .612,
            rotation: -6.4923,
            x: 43.85,
            y: 146.45
        }, 0).wait(1).to({
            scaleX: .5665,
            scaleY: .6416,
            rotation: -8.2046,
            x: -21.9,
            y: 133.7
        }, 0).wait(1).to({
            scaleX: .6241,
            scaleY: .6638,
            rotation: -9.4923,
            x: -71.55,
            y: 123.35
        }, 0).wait(1).to({
            scaleX: .6603,
            scaleY: .6778,
            rotation: -10.3025,
            x: -102.85,
            y: 116.55
        }, 0).wait(1).to({
                scaleX: .6802,
                scaleY: .6855,
                rotation: -10.7493,
                x: -120.15,
                y: 112.7
            },
            0).wait(1).to({
            regX: -2,
            regY: 319.9,
            scaleX: .6888,
            scaleY: .6888,
            rotation: -10.9415,
            x: -291.1,
            y: 142.55
        }, 0).to({
            _off: !0
        }, 1).wait(63).to({
            _off: !1
        }, 0).to({
            regX: -1.8,
            regY: 320,
            scaleX: .2,
            scaleY: .5,
            rotation: 0,
            x: 243,
            y: 185
        }, 10).to({
            _off: !0
        }, 1).wait(687));
        this.instance_46 = new b.page_mov_1("synched", 0);
        this.instance_46.parent = this;
        this.instance_46.setTransform(243.05, 185, .2, .5, 0, 0, 0, -1.8, 320);
        this.instance_46._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_46).wait(27).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 240,
            scaleX: .2191,
            scaleY: .5074,
            rotation: -.4278,
            x: 275.1,
            y: 182.9
        }, 0).wait(1).to({
            scaleX: .2431,
            scaleY: .5167,
            rotation: -.9655,
            x: 254.7,
            y: 180.2
        }, 0).wait(1).to({
            scaleX: .2733,
            scaleY: .5283,
            rotation: -1.6405,
            x: 229,
            y: 176.75
        }, 0).wait(1).to({
            scaleX: .3112,
            scaleY: .5429,
            rotation: -2.4883,
            x: 196.7,
            y: 172.05
        }, 0).wait(1).to({
            scaleX: .3586,
            scaleY: .5613,
            rotation: -3.5503,
            x: 156.2,
            y: 165.85
        }, 0).wait(1).to({
            scaleX: .4169,
            scaleY: .5838,
            rotation: -4.8549,
            x: 106.5,
            y: 157.7
        }, 0).wait(1).to({
                scaleX: .4838,
                scaleY: .6096,
                rotation: -6.3525,
                x: 49.2,
                y: 147.5
            },
            0).wait(1).to({
            scaleX: .5502,
            scaleY: .6353,
            rotation: -7.8381,
            x: -7.85,
            y: 136.55
        }, 0).wait(1).to({
            scaleX: .6046,
            scaleY: .6563,
            rotation: -9.0573,
            x: -54.75,
            y: 126.9
        }, 0).wait(1).to({
            scaleX: .6432,
            scaleY: .6712,
            rotation: -9.9196,
            x: -88.05,
            y: 119.75
        }, 0).wait(1).to({
            scaleX: .6679,
            scaleY: .6807,
            rotation: -10.4729,
            x: -109.45,
            y: 115.05
        }, 0).wait(1).to({
            scaleX: .6822,
            scaleY: .6863,
            rotation: -10.7932,
            x: -121.85,
            y: 112.3
        }, 0).wait(1).to({
            regX: -2,
            regY: 319.9,
            scaleX: .6888,
            scaleY: .6888,
            rotation: -10.9415,
            x: -291.1,
            y: 142.55
        }, 0).to({
            _off: !0
        }, 1).wait(59).to({
                _off: !1
            },
            0).to({
            regX: -1.8,
            regY: 320,
            scaleX: .2,
            scaleY: .5,
            rotation: 0,
            x: 243,
            y: 185
        }, 14).to({
            _off: !0
        }, 1).wait(683));
        c = new a.Shape;
        c._off = !0;
        e = (new a.Graphics).p("A6/62MA1/gExUgFAA1WgANACpQgDAjgQAbQgPAZgdAUQgeAVgYANQhxA4iEAhQh1AeiMANQkCAYq6A9QrZBAnoAqg");
        d = (new a.Graphics).p("A717MMA3rgF6UgEMA3MgAKACvQgDAkgQAcQgPAagdAWQgeAWgZAOQh0A8iIAlQh4AgiRAQQkJAerRBMQrvBPn4A0g");
        var p = (new a.Graphics).p("A8r7aMA5XgHTUgDIA5FgAHAC0QgCAmgQAdQgPAcgeAWQgfAYgZAPQh2BAiMApQh8AkiUAUQkRAkrnBeQsGBjoHBAg"),
            n = (new a.Graphics).p("A9a7jMA61gInUgCHA6wgAEAC5QgBAngQAeQgPAdgeAXQgfAagaAPQh4BFiPAtQh/AniYAXQkYArr7BvQsZB0oUBMg"),
            q = (new a.Graphics).p("A+A7oMA8BgJuUgBQA8FgABAC+QgBAngPAgQgPAdgeAZQggAagbAQQh5BIiSAwQiAAribAaQkfAvsJB+QspCDofBWg"),
            z = (new a.Graphics).p("A+c7rMA85gKlUgAlA9GAABADAQAAAogPAgQgPAfgeAZQggAbgbARQh7BLiTAyQiCAtieAcQkiA0sVCJQs0COooBeg"),
            A = (new a.Graphics).p("A+v7sMA9fgLNUgAEA9zAACADDQABAogPAhQgPAegfAaQggAcgbARQh7BNiVA0QiDAuifAeQklA3sdCRQs9CXotBjg"),
            B = (new a.Graphics).p("A/H7tMA96gLpUAARA+SAAEADFQABApgPAgQgPAfgfAbQggAcgbARQh8BOiVA2QiEAvigAfQkoA5siCWQtCCdoxBog"),
            r = (new a.Graphics).p("A/c7tMA+LgL6UAAfA+lAAFADFQAAApgPAhQgPAfgeAbQghAcgbASQh8BPiWA2QiEAwihAfQkpA7slCaQtGCgozBqg"),
            t = (new a.Graphics).p("A/67tMA+TgMDUAAnA+uAAFADGQABAqgQAhQgOAfgfAaQggAdgcASQh8BPiWA3QiFAwihAgQkpA7snCcQtICio0Brg"),
            u = (new a.Graphics).p("A/f7tMA+TgMDUAAnA+uAAFADGQABApgPAiQgPAfgfAaQggAdgbASQh9BPiWA3QiFAwihAgQkpA7snCcQtICio0Brg"),
            v = (new a.Graphics).p("A+q7rMA9VgLDUgANA9mAACADCQAAApgPAgQgPAfgeAZQggAcgbARQh7BMiVA0QiDAuieAdQkkA2sbCPQs6CUorBjg"),
            w = (new a.Graphics).p("A+J7oMA8TgKDUgA+A8bAAAAC/QAAAogQAfQgPAegeAZQggAbgaAQQh6BJiSAxQiBAsicAaQkgAxsNCDQstCHoiBZg"),
            x = (new a.Graphics).p("A9p7jMA7TgJHUgBuA7SgADAC7QgBAngPAfQgPAdgeAYQggAagaAPQh4BGiRAvQh/ApiZAYQkbAssAB2QsfB7oZBRg"),
            y = (new a.Graphics).p("A9I7dMA6RgILUgCcA6HgAFAC3QgBAmgQAeQgPAcgeAYQgfAZgaAPQh3BDiOArQh9AniXAWQkWAoryBqQsRBuoQBIg"),
            m = (new a.Graphics).p("A8m7VMA5NgHSUgDIA47gAHAC0QgBAlgQAeQgPAbgeAWQgfAYgZAPQh2BAiLApQh8AkiUAUQkQAkrlBeQsEBioGBAg"),
            C = (new a.Graphics).p("A8E7MMA4JgGbUgDyA3wgAJACwQgCAlgQAcQgPAbgdAVQgfAXgZAOQh0A+iJAmQh5AiiSARQkLAgrXBTQr1BWn9A5g"),
            E = (new a.Graphics).p("A7i7CMA3FgFkUgEaA2igALACtQgDAkgQAbQgPAagdAVQgeAWgZAOQhyA6iHAkQh3AgiPAPQkGAcrJBIQrnBLnzAwg"),
            F = (new a.Graphics).p("A6/62MA1/gExUgFAA1WgANACpQgDAjgQAbQgPAZgdAUQgeAVgYANQhxA4iEAhQh1AeiMANQkCAYq6A9QrZBAnoAqg");
        this.timeline.addTween(a.Tween.get(c).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(31).to({
            graphics: e,
            x: 91.3035,
            y: 155.3213
        }).wait(1).to({
            graphics: d,
            x: 54.382,
            y: 153.7459
        }).wait(1).to({
            graphics: p,
            x: -9.7547,
            y: 145.278
        }).wait(1).to({
            graphics: n,
            x: -67.5274,
            y: 137.5642
        }).wait(1).to({
            graphics: q,
            x: -114.5198,
            y: 131.231
        }).wait(1).to({
            graphics: z,
            x: -150.0561,
            y: 126.4078
        }).wait(1).to({
            graphics: A,
            x: -175.5423,
            y: 122.9309
        }).wait(1).to({
            graphics: B,
            x: -191.7876,
            y: 120.5612
        }).wait(1).to({
            graphics: r,
            x: -201.3219,
            y: 119.0796
        }).wait(1).to({
            graphics: t,
            x: -204.3224,
            y: 118.2696
        }).wait(1).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(57).to({
            graphics: u,
            x: -180.2491,
            y: 124.8696
        }).wait(1).to({
            graphics: v,
            x: -145.8855,
            y: 128.8685
        }).wait(1).to({
            graphics: w,
            x: -109.4696,
            y: 132.8134
        }).wait(1).to({
            graphics: x,
            x: -73.1796,
            y: 136.7033
        }).wait(1).to({
            graphics: y,
            x: -37.0153,
            y: 140.5378
        }).wait(1).to({
            graphics: m,
            x: -.9763,
            y: 144.3165
        }).wait(1).to({
            graphics: C,
            x: 34.9378,
            y: 148.0388
        }).wait(1).to({
            graphics: E,
            x: 70.7275,
            y: 151.7046
        }).wait(1).to({
            graphics: F,
            x: 106.3035,
            y: 155.3213
        }).wait(1).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(691));
        this.instance_47 = new b.bg_book_1("synched", 0);
        this.instance_47.parent = this;
        this.instance_47.setTransform(120, 160, .5, .5);
        e = [this.instance_47];
        for (d = 0; d < e.length; d++) e[d].mask = c;
        this.timeline.addTween(a.Tween.get(this.instance_47).to({
            _off: !0
        }, 41).wait(57).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 18).wait(682));
        this.instance_48 = new b.set_particle1;
        this.instance_48.parent = this;
        this.instance_48.setTransform(123.9, 244.55, .4814, .4814, 0, 0, 0, .1, .1);
        this.instance_48._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_48).wait(66).to({
                _off: !1
            },
            0).to({
            _off: !0
        }, 31).wait(701));
        this.instance_49 = new b.effect_star;
        this.instance_49.parent = this;
        this.instance_49.setTransform(120.45, 247.4, .5976, .5976, 0, 0, 0, .1, .1);
        this.instance_49._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_49).wait(66).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 31).wait(701));
        this.instance_50 = new b.effect_001;
        this.instance_50.parent = this;
        this.instance_50.setTransform(120.05, 247.3, .2437, .2437, 0, 0, 0, 80.2, 80.4);
        this.instance_50._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_50).wait(66).to({
                _off: !1
            },
            0).to({
            regX: 80,
            regY: 80,
            scaleX: 1.0834,
            scaleY: 1.0834,
            x: 120,
            y: 247.4
        }, 3).to({
            scaleX: 1.1195,
            scaleY: 1.1195,
            alpha: 0
        }, 20).to({
            _off: !0
        }, 1).wait(708));
        this.instance_51 = new b.mc_count0_w;
        this.instance_51.parent = this;
        this.instance_51.setTransform(120, 251, .83, .83);
        this.instance_51.compositeOperation = "lighter";
        this.instance_51._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_51).wait(66).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: .8822,
            scaleY: .8822,
            x: 120.0287,
            alpha: .3704
        }, 0).wait(1).to({
            scaleX: .9026,
            scaleY: .9026,
            x: 120.04,
            alpha: .1246
        }, 0).wait(1).to({
            scaleX: .9108,
            scaleY: .9108,
            x: 120.0445,
            alpha: .0255
        }, 0).wait(1).to({
            regX: .1,
            regY: .1,
            scaleX: .9129,
            scaleY: .9129,
            x: 120.1,
            y: 251.1,
            alpha: 0
        }, 0).to({
            _off: !0
        }, 1).wait(727));
        this.instance_52 = new b.mc_count0;
        this.instance_52.parent = this;
        this.instance_52.setTransform(120, 251, .83, .83);
        this.instance_52._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_52).wait(66).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: .8822,
            scaleY: .8822,
            x: 120.0287
        }, 0).wait(1).to({
            scaleX: .9026,
            scaleY: .9026,
            x: 120.04
        }, 0).wait(1).to({
            scaleX: .9108,
            scaleY: .9108,
            x: 120.0445
        }, 0).wait(1).to({
            regX: .1,
            regY: .1,
            scaleX: .9129,
            scaleY: .9129,
            x: 120.1,
            y: 251.1
        }, 0).to({
            scaleX: .8051,
            scaleY: .8051
        }, 7, a.Ease.quadIn).to({
            regX: 0,
            regY: 0,
            scaleX: .83,
            scaleY: .83,
            x: 120,
            y: 251
        }, 5).to({
            _off: !0
        }, 25).wait(691));
        this.instance_53 = new b.countdown_num_1_w_1;
        this.instance_53.parent = this;
        this.instance_53.setTransform(120, 251, .82, .82);
        this.instance_53.alpha = 0;
        this.instance_53._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_53).wait(46).to({
                _off: !1
            },
            0).to({
            scaleX: .7749,
            scaleY: .7749,
            alpha: .5508
        }, 19, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(732));
        this.instance_54 = new b.countdown_num_1_1;
        this.instance_54.parent = this;
        this.instance_54.setTransform(120, 251, .82, .82);
        this.instance_54._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_54).wait(33).to({
            _off: !1
        }, 0).wait(13).to({
            scaleX: .7749,
            scaleY: .7749
        }, 19, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(732));
        this.instance_55 = new b.bg_white;
        this.instance_55.parent = this;
        this.instance_55.setTransform(120, 160, 1, 1, 0,
            0, 0, -.4, .8);
        this.instance_55.alpha = .5898;
        this.instance_55._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_55).wait(66).to({
            _off: !1
        }, 0).to({
            alpha: 0
        }, 14).to({
            _off: !0
        }, 1).wait(717));
        this.instance_56 = new b.bg_black;
        this.instance_56.parent = this;
        this.instance_56.setTransform(120, 160);
        this.instance_56.alpha = 0;
        this.instance_56._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_56).wait(46).to({
            _off: !1
        }, 0).to({
            alpha: .6484
        }, 19).to({
            _off: !0
        }, 1).wait(732));
        this.instance_57 = new b.countdown_star4_1;
        this.instance_57.parent = this;
        this.instance_57.setTransform(185.05, 228, .42, .42, 0, 0, 0, .1, 0);
        this.timeline.addTween(a.Tween.get(this.instance_57).wait(66).to({
            regX: .3,
            regY: .3,
            rotation: -14.9991,
            y: 227.95
        }, 2, a.Ease.quadInOut).wait(1).to({
            regX: 0,
            regY: 58,
            rotation: -14.8404,
            x: 191.15,
            y: 251.4
        }, 0).wait(1).to({
            rotation: -14.2844,
            x: 190.9,
            y: 251.45
        }, 0).wait(1).to({
            rotation: -13.1452,
            x: 190.45,
            y: 251.55
        }, 0).wait(1).to({
            rotation: -11.0594,
            x: 189.55,
            y: 251.75
        }, 0).wait(1).to({
            rotation: -7.2052,
            x: 187.95,
            y: 252
        }, 0).wait(1).to({
            rotation: -.2945,
            x: 185,
            y: 252.2
        }, 0).wait(1).to({
            rotation: 5.7563,
            x: 182.45,
            y: 252.1
        }, 0).wait(1).to({
            rotation: 8.2379,
            x: 181.4,
            y: 251.95
        }, 0).wait(1).to({
            regX: .1,
            regY: .1,
            rotation: 8.9989,
            x: 185.05,
            y: 228
        }, 0).to({
            regY: 0,
            rotation: -4.9984
        }, 6, a.Ease.quadInOut).to({
            regX: .2,
            rotation: 1.9989
        }, 7, a.Ease.quadInOut).to({
            regX: .1,
            rotation: 0
        }, 8, a.Ease.quadInOut).to({
            _off: !0
        }, 9).wait(691));
        this.instance_58 = new b.countdown_star3_1;
        this.instance_58.parent = this;
        this.instance_58.setTransform(169.05, 228.05, .42, .42, 0, 0, 0, .1, .1);
        this.timeline.addTween(a.Tween.get(this.instance_58).wait(66).to({
            regX: .2,
            regY: .3,
            rotation: -9.9976
        }, 2, a.Ease.quadInOut).wait(1).to({
            regX: 0,
            regY: 37.5,
            rotation: -9.8703,
            x: 171.65,
            y: 243.4
        }, 0).wait(1).to({
            rotation: -9.4133,
            x: 171.55,
            y: 243.45
        }, 0).wait(1).to({
            rotation: -8.4378,
            x: 171.25,
            y: 243.5
        }, 0).wait(1).to({
            rotation: -6.5217,
            x: 170.75,
            y: 243.55
        }, 0).wait(1).to({
            rotation: -2.6365,
            x: 169.65,
            y: 243.65
        }, 0).wait(1).to({
            rotation: 2.2849,
            x: 168.3
        }, 0).wait(1).to({
            rotation: 4.4071,
            x: 167.75,
            y: 243.6
        }, 0).wait(1).to({
            regX: .2,
            regY: .2,
            rotation: 5.0005,
            x: 169.05,
            y: 228.05
        }, 0).to({
                regX: .1,
                rotation: -2.9992
            },
            6, a.Ease.quadInOut).to({
            regY: .1,
            rotation: .9972
        }, 6, a.Ease.quadInOut).to({
            rotation: 0
        }, 7, a.Ease.quadInOut).to({
            _off: !0
        }, 12).wait(691));
        this.instance_59 = new b.countdown_star2_1;
        this.instance_59.parent = this;
        this.instance_59.setTransform(76.05, 228.05, .42, .42, 0, 0, 0, .1, .1);
        this.timeline.addTween(a.Tween.get(this.instance_59).wait(66).to({
            regY: .2,
            rotation: 9.9976
        }, 2, a.Ease.quadInOut).wait(1).to({
            regX: 0,
            regY: 37.5,
            rotation: 9.8703,
            x: 73.25,
            y: 243.45
        }, 0).wait(1).to({
            rotation: 9.4134,
            x: 73.35,
            y: 243.5
        }, 0).wait(1).to({
            rotation: 8.438,
            x: 73.65,
            y: 243.55
        }, 0).wait(1).to({
            rotation: 6.5221,
            x: 74.15,
            y: 243.6
        }, 0).wait(1).to({
            rotation: 2.6376,
            x: 75.25,
            y: 243.7
        }, 0).wait(1).to({
            rotation: -2.2832,
            x: 76.6
        }, 0).wait(1).to({
            rotation: -4.4051,
            x: 77.15,
            y: 243.65
        }, 0).wait(1).to({
            regX: .2,
            regY: .1,
            rotation: -4.9984,
            x: 76.05,
            y: 228.05
        }, 0).to({
            regX: .1,
            regY: .2,
            rotation: 2.9992
        }, 6, a.Ease.quadInOut).to({
            regY: .1,
            rotation: -.9972
        }, 6, a.Ease.quadInOut).to({
            rotation: 0
        }, 7, a.Ease.quadInOut).to({
            _off: !0
        }, 12).wait(691));
        this.instance_60 = new b.countdown_star1_1;
        this.instance_60.parent =
            this;
        this.instance_60.setTransform(59.05, 228.1, .42, .42, 0, 0, 0, .1, .2);
        this.timeline.addTween(a.Tween.get(this.instance_60).wait(66).to({
            regX: .2,
            regY: .3,
            scaleX: .4199,
            scaleY: .4199,
            rotation: 14.9982,
            y: 228.05
        }, 2, a.Ease.quadInOut).wait(1).to({
            regX: 0,
            regY: 58,
            rotation: 14.8395,
            x: 52.7,
            y: 251.5
        }, 0).wait(1).to({
            rotation: 14.2834,
            x: 52.95,
            y: 251.55
        }, 0).wait(1).to({
            rotation: 13.1443,
            x: 53.4,
            y: 251.65
        }, 0).wait(1).to({
            rotation: 11.0586,
            x: 54.3,
            y: 251.85
        }, 0).wait(1).to({
            rotation: 7.2046,
            x: 55.9,
            y: 252.1
        }, 0).wait(1).to({
            scaleX: .42,
            scaleY: .42,
            rotation: .2941,
            x: 58.85,
            y: 252.3
        }, 0).wait(1).to({
            rotation: -5.7564,
            x: 61.4,
            y: 252.2
        }, 0).wait(1).to({
            rotation: -8.2379,
            x: 62.4,
            y: 252.05
        }, 0).wait(1).to({
            regX: .2,
            regY: .2,
            rotation: -8.9989,
            x: 59.05,
            y: 228.1
        }, 0).to({
            regX: .1,
            regY: .4,
            rotation: 4.9984,
            x: 59.1
        }, 6, a.Ease.quadInOut).to({
            rotation: -1.9989,
            x: 59.05
        }, 7, a.Ease.quadInOut).to({
            regY: .2,
            rotation: 0
        }, 8, a.Ease.quadInOut).to({
            _off: !0
        }, 9).wait(691));
        this.s1_logo = new b.mc_scene1_logo;
        this.s1_logo.name = "s1_logo";
        this.s1_logo.parent = this;
        this.s1_logo.setTransform(123.2,
            100.35, .9, .9, 0, 0, 0, .1, .1);
        this.timeline.addTween(a.Tween.get(this.s1_logo).to({
            _off: !0
        }, 107).wait(691));
        this.instance_61 = new b.countdown_text_1;
        this.instance_61.parent = this;
        this.instance_61.setTransform(120, 206, .82, .82, 0, 0, 0, .1, .1);
        this.timeline.addTween(a.Tween.get(this.instance_61).to({
            _off: !0
        }, 107).wait(691));
        this.bg_page = new b.bg_page;
        this.bg_page.name = "bg_page";
        this.bg_page.parent = this;
        this.bg_page.setTransform(0, 0, 1, 1.0002);
        this.timeline.addTween(a.Tween.get(this.bg_page).to({
            _off: !0
        }, 107).wait(691));
        this.btn = new b.btn;
        this.btn.name = "btn";
        this.btn.parent = this;
        this.btn.setTransform(120, 160, 1, 1, 0, 0, 0, 120, 160);
        this.btn.alpha = .0117;
        this.timeline.addTween(a.Tween.get(this.btn).wait(798))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-807.5, -720, 1591.6, 1704.1);
    b.properties = {
        id: "sp_027_op_10th",
        width: 240,
        height: 320,
        fps: 18,
        color: "#000000",
        opacity: 1,
        manifest: [{
                src: "images/bg.jpg",
                id: "sp_027_op_10th_bg"
            }, {
                src: "images/bg_book.jpg",
                id: "sp_027_op_10th_bg_book"
            }, {
                src: "images/bg_fumika.jpg",
                id: "sp_027_op_10th_bg_fumika"
            }, {
                src: "images/bg_fumika_time.png",
                id: "sp_027_op_10th_bg_fumika_time"
            }, {
                src: "images/bg_pabe.jpg",
                id: "sp_027_op_10th_bg_pabe"
            }, {
                src: "images/chihiro_base.png",
                id: "sp_027_op_10th_chihiro_base"
            }, {
                src: "images/chihiro_face_close.png",
                id: "sp_027_op_10th_chihiro_face_close"
            }, {
                src: "images/chihiro_face_laugh.png",
                id: "sp_027_op_10th_chihiro_face_laugh"
            }, {
                src: "images/chihiro_face_sad.png",
                id: "sp_027_op_10th_chihiro_face_sad"
            }, {
                src: "images/chihiro_face_sad2.png",
                id: "sp_027_op_10th_chihiro_face_sad2"
            },
            {
                src: "images/chihiro_face_smile.png",
                id: "sp_027_op_10th_chihiro_face_smile"
            }, {
                src: "images/chihiro_face_strong.png",
                id: "sp_027_op_10th_chihiro_face_strong"
            }, {
                src: "images/chihiro_face_surprise1.png",
                id: "sp_027_op_10th_chihiro_face_surprise1"
            }, {
                src: "images/chihiro_face_surprise2.png",
                id: "sp_027_op_10th_chihiro_face_surprise2"
            }, {
                src: "images/circre_rainbaw_small.png",
                id: "sp_027_op_10th_circre_rainbaw_small"
            }, {
                src: "images/countdown_num_0.png",
                id: "sp_027_op_10th_countdown_num_0"
            }, {
                src: "images/countdown_num_0_w.png",
                id: "sp_027_op_10th_countdown_num_0_w"
            }, {
                src: "images/countdown_num_1.png",
                id: "sp_027_op_10th_countdown_num_1"
            }, {
                src: "images/countdown_num_1_w.png",
                id: "sp_027_op_10th_countdown_num_1_w"
            }, {
                src: "images/countdown_star1.png",
                id: "sp_027_op_10th_countdown_star1"
            }, {
                src: "images/countdown_star2.png",
                id: "sp_027_op_10th_countdown_star2"
            }, {
                src: "images/countdown_star3.png",
                id: "sp_027_op_10th_countdown_star3"
            }, {
                src: "images/countdown_star4.png",
                id: "sp_027_op_10th_countdown_star4"
            }, {
                src: "images/countdown_text.png",
                id: "sp_027_op_10th_countdown_text"
            }, {
                src: "images/ef_book.png",
                id: "sp_027_op_10th_ef_book"
            }, {
                src: "images/ef_fumika_kira1.png",
                id: "sp_027_op_10th_ef_fumika_kira1"
            }, {
                src: "images/ef_fumika_kira2.png",
                id: "sp_027_op_10th_ef_fumika_kira2"
            }, {
                src: "images/eff_star_a.png",
                id: "sp_027_op_10th_eff_star_a"
            }, {
                src: "images/Feather01.png",
                id: "sp_027_op_10th_Feather01"
            }, {
                src: "images/Feather01_blur.png",
                id: "sp_027_op_10th_Feather01_blur"
            }, {
                src: "images/Feather02.png",
                id: "sp_027_op_10th_Feather02"
            }, {
                src: "images/Feather02_blur.png",
                id: "sp_027_op_10th_Feather02_blur"
            }, {
                src: "images/fumika_armL1.png",
                id: "sp_027_op_10th_fumika_armL1"
            }, {
                src: "images/fumika_armL2.png",
                id: "sp_027_op_10th_fumika_armL2"
            }, {
                src: "images/fumika_armL3.png",
                id: "sp_027_op_10th_fumika_armL3"
            }, {
                src: "images/fumika_armL4.png",
                id: "sp_027_op_10th_fumika_armL4"
            }, {
                src: "images/fumika_armL5.png",
                id: "sp_027_op_10th_fumika_armL5"
            }, {
                src: "images/fumika_armR1.png",
                id: "sp_027_op_10th_fumika_armR1"
            }, {
                src: "images/fumika_armR2.png",
                id: "sp_027_op_10th_fumika_armR2"
            }, {
                src: "images/fumika_armR3.png",
                id: "sp_027_op_10th_fumika_armR3"
            }, {
                src: "images/fumika_body.png",
                id: "sp_027_op_10th_fumika_body"
            }, {
                src: "images/fumika_body_acc1.png",
                id: "sp_027_op_10th_fumika_body_acc1"
            }, {
                src: "images/fumika_body_acc2.png",
                id: "sp_027_op_10th_fumika_body_acc2"
            }, {
                src: "images/fumika_body_acc3.png",
                id: "sp_027_op_10th_fumika_body_acc3"
            }, {
                src: "images/fumika_body_acc4.png",
                id: "sp_027_op_10th_fumika_body_acc4"
            }, {
                src: "images/fumika_cheek1.png",
                id: "sp_027_op_10th_fumika_cheek1"
            }, {
                src: "images/fumika_cheek2.png",
                id: "sp_027_op_10th_fumika_cheek2"
            },
            {
                src: "images/fumika_eye1.png",
                id: "sp_027_op_10th_fumika_eye1"
            }, {
                src: "images/fumika_eye2.png",
                id: "sp_027_op_10th_fumika_eye2"
            }, {
                src: "images/fumika_eye_close.png",
                id: "sp_027_op_10th_fumika_eye_close"
            }, {
                src: "images/fumika_eyebrows1.png",
                id: "sp_027_op_10th_fumika_eyebrows1"
            }, {
                src: "images/fumika_eyebrows2.png",
                id: "sp_027_op_10th_fumika_eyebrows2"
            }, {
                src: "images/fumika_face.png",
                id: "sp_027_op_10th_fumika_face"
            }, {
                src: "images/fumika_footL1.png",
                id: "sp_027_op_10th_fumika_footL1"
            }, {
                src: "images/fumika_footL2.png",
                id: "sp_027_op_10th_fumika_footL2"
            }, {
                src: "images/fumika_footL3.png",
                id: "sp_027_op_10th_fumika_footL3"
            }, {
                src: "images/fumika_footR.png",
                id: "sp_027_op_10th_fumika_footR"
            }, {
                src: "images/fumika_hair0png.png",
                id: "sp_027_op_10th_fumika_hair0png"
            }, {
                src: "images/fumika_hair1.png",
                id: "sp_027_op_10th_fumika_hair1"
            }, {
                src: "images/fumika_hair10.png",
                id: "sp_027_op_10th_fumika_hair10"
            }, {
                src: "images/fumika_hair2.png",
                id: "sp_027_op_10th_fumika_hair2"
            }, {
                src: "images/fumika_hair3.png",
                id: "sp_027_op_10th_fumika_hair3"
            }, {
                src: "images/fumika_hair4.png",
                id: "sp_027_op_10th_fumika_hair4"
            }, {
                src: "images/fumika_hair5_1.png",
                id: "sp_027_op_10th_fumika_hair5_1"
            }, {
                src: "images/fumika_hair5_2.png",
                id: "sp_027_op_10th_fumika_hair5_2"
            }, {
                src: "images/fumika_hair6.png",
                id: "sp_027_op_10th_fumika_hair6"
            }, {
                src: "images/fumika_hair7.png",
                id: "sp_027_op_10th_fumika_hair7"
            }, {
                src: "images/fumika_hair8.png",
                id: "sp_027_op_10th_fumika_hair8"
            }, {
                src: "images/fumika_hair9.png",
                id: "sp_027_op_10th_fumika_hair9"
            }, {
                src: "images/fumika_hair_back1.png",
                id: "sp_027_op_10th_fumika_hair_back1"
            },
            {
                src: "images/fumika_hair_back2.png",
                id: "sp_027_op_10th_fumika_hair_back2"
            }, {
                src: "images/fumika_hair_back3.png",
                id: "sp_027_op_10th_fumika_hair_back3"
            }, {
                src: "images/fumika_head_acc1.png",
                id: "sp_027_op_10th_fumika_head_acc1"
            }, {
                src: "images/fumika_head_acc2.png",
                id: "sp_027_op_10th_fumika_head_acc2"
            }, {
                src: "images/fumika_head_acc3.png",
                id: "sp_027_op_10th_fumika_head_acc3"
            }, {
                src: "images/fumika_head_acc4.png",
                id: "sp_027_op_10th_fumika_head_acc4"
            }, {
                src: "images/fumika_head_acc5.png",
                id: "sp_027_op_10th_fumika_head_acc5"
            },
            {
                src: "images/fumika_head_acc6.png",
                id: "sp_027_op_10th_fumika_head_acc6"
            }, {
                src: "images/fumika_head_acc7.png",
                id: "sp_027_op_10th_fumika_head_acc7"
            }, {
                src: "images/fumika_mouth1.png",
                id: "sp_027_op_10th_fumika_mouth1"
            }, {
                src: "images/fumika_mouth2.png",
                id: "sp_027_op_10th_fumika_mouth2"
            }, {
                src: "images/fumika_skirtA.png",
                id: "sp_027_op_10th_fumika_skirtA"
            }, {
                src: "images/fumika_skirtB1.png",
                id: "sp_027_op_10th_fumika_skirtB1"
            }, {
                src: "images/fumika_skirtB2.png",
                id: "sp_027_op_10th_fumika_skirtB2"
            }, {
                src: "images/fumika_skirtC1.png",
                id: "sp_027_op_10th_fumika_skirtC1"
            }, {
                src: "images/fumika_skirtC2.png",
                id: "sp_027_op_10th_fumika_skirtC2"
            }, {
                src: "images/fumika_skirtD1.png",
                id: "sp_027_op_10th_fumika_skirtD1"
            }, {
                src: "images/fumika_skirtD2.png",
                id: "sp_027_op_10th_fumika_skirtD2"
            }, {
                src: "images/fumika_skirtD3.png",
                id: "sp_027_op_10th_fumika_skirtD3"
            }, {
                src: "images/fumika_skirtE1.png",
                id: "sp_027_op_10th_fumika_skirtE1"
            }, {
                src: "images/fumika_skirtE2.png",
                id: "sp_027_op_10th_fumika_skirtE2"
            }, {
                src: "images/fumika_skirtE3.png",
                id: "sp_027_op_10th_fumika_skirtE3"
            },
            {
                src: "images/kira_m.png",
                id: "sp_027_op_10th_kira_m"
            }, {
                src: "images/logo.png",
                id: "sp_027_op_10th_logo"
            }, {
                src: "images/logo_cg.png",
                id: "sp_027_op_10th_logo_cg"
            }, {
                src: "images/logo_solo.png",
                id: "sp_027_op_10th_logo_solo"
            }, {
                src: "images/material_book_white_side.png",
                id: "sp_027_op_10th_material_book_white_side"
            }, {
                src: "images/material_book_white_under.png",
                id: "sp_027_op_10th_material_book_white_under"
            }, {
                src: "images/material_bookcover_back.png",
                id: "sp_027_op_10th_material_bookcover_back"
            }, {
                src: "images/material_bookcover_front.png",
                id: "sp_027_op_10th_material_bookcover_front"
            }, {
                src: "images/material_bookcover_front_op.png",
                id: "sp_027_op_10th_material_bookcover_front_op"
            }, {
                src: "images/material_bookcover_front_op_glow.png",
                id: "sp_027_op_10th_material_bookcover_front_op_glow"
            }, {
                src: "images/material_bookcover_side.png",
                id: "sp_027_op_10th_material_bookcover_side"
            }, {
                src: "images/of.png",
                id: "sp_027_op_10th_of"
            }, {
                src: "images/page_mov.png",
                id: "sp_027_op_10th_page_mov"
            }, {
                src: "images/page_open01.png",
                id: "sp_027_op_10th_page_open01"
            }, {
                src: "images/page_open02.png",
                id: "sp_027_op_10th_page_open02"
            }, {
                src: "images/page_open03.png",
                id: "sp_027_op_10th_page_open03"
            }, {
                src: "images/page_open04.png",
                id: "sp_027_op_10th_page_open04"
            }, {
                src: "images/page_open05.png",
                id: "sp_027_op_10th_page_open05"
            }, {
                src: "images/page_open06.png",
                id: "sp_027_op_10th_page_open06"
            }, {
                src: "images/page_open07.png",
                id: "sp_027_op_10th_page_open07"
            }, {
                src: "images/page_open08.png",
                id: "sp_027_op_10th_page_open08"
            }, {
                src: "images/page_open09.png",
                id: "sp_027_op_10th_page_open09"
            }, {
                src: "images/page_open10.png",
                id: "sp_027_op_10th_page_open10"
            }, {
                src: "images/scene3_bg.jpg",
                id: "sp_027_op_10th_scene3_bg"
            }, {
                src: "images/scroll_bg.jpg",
                id: "sp_027_op_10th_scroll_bg"
            }, {
                src: "images/scroll_vertical.png",
                id: "sp_027_op_10th_scroll_vertical"
            }, {
                src: "images/scroll_vertical_w.png",
                id: "sp_027_op_10th_scroll_vertical_w"
            }, {
                src: "images/star1.png",
                id: "sp_027_op_10th_star1"
            }, {
                src: "images/star_rainbow.png",
                id: "sp_027_op_10th_star_rainbow"
            }
        ],
        preloads: []
    };
    (b.Stage = function(c) {
        createjs.Stage.call(this, c)
    }).prototype = f = new createjs.Stage;
    f.setAutoPlay = function(c) {
        this.tickEnabled = c
    };
    f.play = function() {
        this.tickEnabled = !0;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    };
    f.stop = function(c) {
        c && this.seek(c);
        this.tickEnabled = !1
    };
    f.seek = function(c) {
        this.tickEnabled = !0;
        this.getChildAt(0).gotoAndStop(b.properties.fps * c / 1E3)
    };
    f.getDuration = function() {
        return this.getChildAt(0).totalFrames / b.properties.fps * 1E3
    };
    f.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / b.properties.fps * 1E3
    };
    k.bootcompsLoaded = k.bootcompsLoaded || [];
    k.bootstrapListeners || (k.bootstrapListeners = []);
    k.bootstrapCallback = function(c) {
        k.bootstrapListeners.push(c);
        if (0 < k.bootcompsLoaded.length)
            for (var e = 0; e < k.bootcompsLoaded.length; ++e) c(k.bootcompsLoaded[e])
    };
    k.compositions = k.compositions || {};
    k.compositions.sp_027_op_10th = {
        getStage: function() {
            return exportRoot.getStage()
        },
        getLibrary: function() {
            return b
        },
        getSpriteSheet: function() {
            return I
        },
        getImages: function() {
            return h
        }
    };
    k.compositionLoaded = function(c) {
        k.bootcompsLoaded.push(c);
        for (var e = 0; e < k.bootstrapListeners.length; e++) k.bootstrapListeners[e](c)
    };
    k.getComposition = function(c) {
        return k.compositions[c]
    };
    k.makeResponsive = function(c, e, d, p, n) {
        function q() {
            var r = b.properties.width,
                t = b.properties.height,
                u = window.innerWidth,
                v = window.innerHeight,
                w = window.devicePixelRatio || 1,
                x = u / r,
                y = v / t,
                m = 1;
            if (c)
                if ("width" == e && z == u || "height" == e && A == v) m = B;
                else if (d) 1 == p ? m = Math.min(x, y) : 2 == p && (m = Math.max(x, y));
            else if (u < r || v < t) m = Math.min(x, y);
            n[0].width = r * w * m;
            n[0].height = t * w * m;
            n.forEach(function(C) {
                C.style.width = r * m + "px";
                C.style.height = t * m + "px"
            });
            stage.scaleX = w * m;
            stage.scaleY =
                w * m;
            z = u;
            A = v;
            B = m;
            stage.tickOnUpdate = !1;
            stage.update();
            stage.tickOnUpdate = !0
        }
        var z, A, B = 1;
        window.addEventListener("resize", q);
        q()
    }
})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;