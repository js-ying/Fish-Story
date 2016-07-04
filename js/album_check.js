function type(t) {
    switch (t) {
        case "錄音室專輯":
            return "record-CD";
            break;
        case "演唱會CD":
            return "live-CD";
            break;
        case "精選輯":
            return "special-CD";
            break;
    }
};

function label_type(ly){
    switch (ly){
        case "錄音室專輯":
            return "label-info";
            break;
        case "演唱會CD":
            return "label-success";
            break;
        case "精選輯":
            return "label-danger";
            break;
    }
};

function changed(show){
    switch (show.value) {
        case "錄音室專輯":
            show_record();
            break;
        case "演唱會CD":
            show_live();
            break;
        case "精選輯":
            show_special();
            break;
        case "全部顯示":
            show_all();
            break;
    }
}

function show_all() {
    $(".record-CD").hide().fadeIn();
    $(".live-CD").hide().fadeIn();
    $(".special-CD").hide().fadeIn();
};

function show_record() {
    $(".record-CD").hide().fadeIn();
    $(".live-CD").hide();
    $(".special-CD").hide();
};

function show_live() {
    $(".record-CD").hide();
    $(".live-CD").hide().fadeIn();
    $(".special-CD").hide();
};

function show_special() {
    $(".record-CD").hide();
    $(".live-CD").hide();
    $(".special-CD").hide().fadeIn();
};
