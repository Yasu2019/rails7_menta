window.onload = function() {

  // 好きな食べ物の選択肢

  food = document.getElementById("food");

  // ジャンルの選択肢が変更された際の動作

  category = document.getElementById("phase");

  category.onchange = changeCategory;

}

// ジャンルの選択肢が変更された際の動作

function changeCategory() {

  // 変更後のカテゴリを取得

  var changedCategory = category.value;

  if (changedCategory == "フェーズ1") {

    // カテゴリに和食が選択された場合

    setPhase1();

  } else if (changedCategory == "フェーズ2") {

    // カテゴリにアジア料理が選択された場合

    setPhase2();

  } else if (changedCategory == "フェーズ3") {

    setPhase3();

  } else if (changedCategory == "フェーズ4") {

    setPhase4();

  } else if (changedCategory == "フェーズ5") {

    setPhase5();

  } else if (changedCategory == "文書計画") {

    setDocument1();

  } else if (changedCategory == "プロセス管理図") {
    setDocument2();

  } else if (changedCategory == "規定") {
    setDocument3();

  } else if (changedCategory == "フロー") {

    setDocument4();

  } else if (changedCategory == "手順書") {

    setDocument5();

  } else if (changedCategory == "新規見直し記録") {

    setDocument6();
  
  } else if (changedCategory == "営業部") {

    setDocument7();

  } else if (changedCategory == "管理部") {

    setDocument8();
  
  } else if (changedCategory == "生産技術部") {

    setDocument9();

  } else if (changedCategory == "設計部") {

    setDocument10();

  } else if (changedCategory == "プレス") {

    setDocument11();

  } else if (changedCategory == "表面処理") {

    setDocument12();

  } else if (changedCategory == "品質保証部") {

    setDocument13();

  } else if (changedCategory == "金型部") {

    setDocument14();

  } else if (changedCategory == "内部監査") {

    setDocument15();
  
  } else if (changedCategory == "購買先管理") {

    setDocument16();

  } else if (changedCategory == "顧客固有要求事項/外部文書") {

    setDocument17();

  } else if (changedCategory == "材料仕様書") {

    setDocument18();
  
  } else if (changedCategory == "顧客満足/SPR") {

    setDocument19();
  
  } else if (changedCategory == "スキルマップ") {

    setDocument20();
  
  } else if (changedCategory == "8.3製品の設計・開発") {

    setDocument21();




  } else {

    // カテゴリにヨーロッパ料理が選択された場合

    setPPAP();

  }

}

// 和食の選択肢を設定する

function setPhase1() {

  // 好きな食べ物の選択肢を空にする

  food.textContent = null;

  // 和食の選択肢

  var jFoods = [

    {cd:"", label:"選択して下さい"},
    {cd:"顧客の声", label:"顧客の声"},
    {cd:"事業計画・マーケティング戦略", label:"事業計画・マーケティング戦略"},
    {cd:"製品・製造工程のベンチマークデータ", label:"製品・製造工程のベンチマークデータ"},
    {cd:"製品・製造工程の前提条件", label:"製品・製造工程の前提条件"},
    {cd:"製品の信頼性調査", label:"製品の信頼性調査"},
    {cd:"顧客インプット", label:"顧客インプット"},
    {cd:"設計目標", label:"設計目標"},
    {cd:"信頼性目標・品質目標", label:"信頼性目標・品質目標"},
    {cd:"暫定材料明細表", label:"暫定材料明細表"},
    {cd:"暫定プロセスマップフロー図", label:"暫定プロセスマップフロー図"},
    {cd:"特殊製品特性・特殊プロセス特性の暫定リスト", label:"特殊製品特性・特殊プロセス特性の暫定リスト"},
    {cd:"製品保証計画書", label:"製品保証計画書"},
    {cd:"経営者の支援", label:"経営者の支援"}


  ];

  jFoods.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;

    op.text = value.label;

    food.appendChild(op);

  });

}

// アジア料理の選択肢を設定する

function setPhase2() {

  // 好きな食べ物の選択肢を空にする

  food.textContent = null;

  // アジア料理の選択肢

  var asianFoods = [

    {cd:"", label:"選択して下さい"},
    {cd:"設計故障モード影響解析（DFMEA）", label:"設計故障モード影響解析（DFMEA）"},
    {cd:"製造性・組立性を考慮した設計", label:"製造性・組立性を考慮した設計"},
    {cd:"設計検証", label:"設計検証"},
    {cd:"デザインレビュー", label:"デザインレビュー"},
    {cd:"試作コントロールプラン", label:"試作コントロールプラン"},
    {cd:"図面（数学的データを含む）", label:"図面（数学的データを含む）"},
    {cd:"技術仕様書", label:"技術仕様書"},
    {cd:"材料仕様書", label:"材料仕様書"},
    {cd:"図面・仕様書の変更", label:"図面・仕様書の変更"},
    {cd:"新規の装置・治工具・施設に関する要求事項", label:"新規の装置・治工具・施設に関する要求事項"},
    {cd:"特殊製品特性・特殊プロセス特性", label:"特殊製品特性・特殊プロセス特性"},
    {cd:"ゲージ・試験装置の要求事項", label:"ゲージ・試験装置の要求事項"},
    {cd:"実現可能性検討報告書および経営者の支援", label:"実現可能性検討報告書および経営者の支援"},

  ];

    


  asianFoods.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;

    op.text = value.label;

    food.appendChild(op);

  });

}

// ヨーロッパ料理の選択肢を設定する

function setPhase3() {
  // 好きな食べ物の選択肢を空にする
  food.textContent = null;
  // ヨーロッパ料理の選択肢
  var europeFoods = [
    {cd:"", label:"選択して下さい"},

    {cd:"梱包規格・仕様書", label:"梱包規格・仕様書"},
    {cd:"製品・プロセスの品質システムのレビュー", label:"製品・プロセスの品質システムのレビュー"},
    {cd:"プロセスフロー図(Phase3)", label:"プロセスフロー図(Phase3)"},
    {cd:"フロアプランレイアウト", label:"フロアプランレイアウト"},
    {cd:"特性マトリクス", label:"特性マトリクス"},
    {cd:"プロセス故障モード影響解析（PFMEA）", label:"プロセス故障モード影響解析（PFMEA）"},
    {cd:"先行生産（Pre-launch,量産試作）コントロールプラン", label:"先行生産（Pre-launch,量産試作）コントロールプラン"},
    {cd:"プロセス指示書", label:"プロセス指示書"},
    {cd:"測定システム解析計画書", label:"測定システム解析計画書"},
    {cd:"工程能力予備調査計画書", label:"工程能力予備調査計画書"},
    {cd:"経営者の支援(Phase3)", label:"経営者の支援(Phase3)"},

    
  ];

  europeFoods.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    food.appendChild(op);
  });

}

function setPhase4() {
  // 好きな食べ物の選択肢を空にする
  food.textContent = null;
  // ヨーロッパ料理の選択肢
  var europeFoods = [
    {cd:"", label:"選択して下さい"},

    {cd:"実質的生産", label:"実質的生産"},
    {cd:"測定システム解析", label:"測定システム解析"},
    {cd:"工程能力予備調査", label:"工程能力予備調査"},
    {cd:"生産部品承認（PPAP)", label:"生産部品承認（PPAP)"},
    {cd:"量産の妥当性確認試験", label:"量産の妥当性確認試験"},
    {cd:"梱包評価", label:"梱包評価"},
    {cd:"量産コントロールプラン", label:"量産コントロールプラン"},
    {cd:"品質計画承認署名 ", label:"品質計画承認署名 "}

  ];

  europeFoods.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    food.appendChild(op);
  });

}

function setPhase5() {
  // 好きな食べ物の選択肢を空にする
  food.textContent = null;
  // ヨーロッパ料理の選択肢
  var europeFoods = [
    {cd:"", label:"選択して下さい"},

    {cd:"変動の減少", label:"変動の減少"},
    {cd:"顧客満足の向上", label:"顧客満足の向上"},
    {cd:"引渡しおよびサービスの改善", label:"引渡しおよびサービスの改善"},
    {cd:"学んだ教訓・ベストプラクティスの効果的な利用", label:"学んだ教訓・ベストプラクティスの効果的な利用"},
   

    
  ];

  europeFoods.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    food.appendChild(op);
  });

}


function setPPAP() {
  // 好きな食べ物の選択肢を空にする
  food.textContent = null;
  // ヨーロッパ料理の選択肢
  var europeFoods = [
    {cd:"", label:"選択して下さい"},

    {cd:"製品設計文書", label:"製品設計文書"},
    {cd:"技術変更文書（顧客承認）", label:"技術変更文書（顧客承認）"},
    {cd:"顧客技術承認", label:"顧客技術承認"},
    {cd:"設計FMEA", label:"設計FMEA"},
    {cd:"プロセスフロー図", label:"プロセスフロー図"},
    {cd:"プロセスFMEA", label:"プロセスFMEA"},
    {cd:"コントロールプラン", label:"コントロールプラン"},
    {cd:"測定システム解析（MSA)", label:"測定システム解析（MSA)"},
    {cd:"寸法測定結果", label:"寸法測定結果"},
    {cd:"材料・性能試験結果", label:"材料・性能試験結果"},
    {cd:"初期工程調査結果", label:"初期工程調査結果"},
    {cd:"有資格試験所文書", label:"有資格試験所文書"},
    {cd:"外観承認報告書（AAR)", label:"外観承認報告書（AAR)"},
    {cd:"製品サンプル", label:"製品サンプル"},
    {cd:"マスターサンプル", label:"マスターサンプル"},
    {cd:"検査補助具", label:"検査補助具"},
    {cd:"顧客固有要求事項適合記録", label:"顧客固有要求事項適合記録"},
    {cd:"部品提出保証書（PSW)", label:"部品提出保証書（PSW)"},
    {cd:"バルク材料チェックリスト", label:"バルク材料チェックリスト"}

    
  ];

  europeFoods.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    food.appendChild(op);
  });

}

// 和食の選択肢を設定する
function setDocument1() {
  // 好きな食べ物の選択肢を空にする
  food.textContent = null;
  // 和食の選択肢
  var jFoods = [
    {cd:"", label:"選択して下さい"},
    {cd:"品質マニュアル", label:"品質マニュアル"},
    {cd:"付表1-1プロセスー組織対応表", label:"付表1-1プロセスー組織対応表"},
    {cd:"付表2-1プロセスー規格要求事項対応表", label:"付表2-1プロセスー規格要求事項対応表"},
    {cd:"付表3-1プロセスー顧客固有要求事項対応表", label:"付表3-1プロセスー顧客固有要求事項対応表"},
    {cd:"付表4-1文書（記録を含む)体系表", label:"付表4-1文書（記録を含む)体系表"},
    {cd:"付図1-1品質マネジメントシステム体系図", label:"付図1-1品質マネジメントシステム体系図"},
    {cd:"付図2-1プロセスマップ", label:"付図2-1プロセスマップ"},
    {cd:"付図3-1製品実現プロセス体系図", label:"付図3-1製品実現プロセス体系図"},
    {cd:"文書体系表による必要な文書の洗い出し", label:"文書体系表による必要な文書の洗い出し"},
    {cd:"新規プロセス管理図作成", label:"新規プロセス管理図作成"},
    {cd:"現行手順書見直し", label:"現行手順書見直し"},
    {cd:"文書体系表による必要記録の洗い出し", label:"文書体系表による必要記録の洗い出し"},
    {cd:"現行記録様式の見直し", label:"現行記録様式の見直し"},
    {cd:"新規記録様式の作成", label:"新規記録様式の作成"},
    {cd:"プロセスの評価指標の決定", label:"プロセスの評価指標の決定"},
    {cd:"プロセスの評価指標の監視・測定", label:"プロセスの評価指標の監視・測定"},
    {cd:"現行記録の取得", label:"現行記録の取得"},
    {cd:"新規記録の取得", label:"新規記録の取得"},
    {cd:"成果報告書", label:"成果報告書"}

  ];
  jFoods.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    food.appendChild(op);
  });
}

// 和食の選択肢を設定する

function setDocument2() {

  // 好きな食べ物の選択肢を空にする

  food.textContent = null;

  // 和食の選択肢

  var jFoods = [

    {cd:"", label:"選択して下さい"},
    {cd:"営業プロセス管理図", label:"営業プロセス管理図"},
    {cd:"製造工程設計プロセス管理図", label:"製造工程設計プロセス管理図"},
    {cd:"製造プロセス管理図", label:"製造プロセス管理図"},
    {cd:"製品検査プロセス管理図", label:"製品検査プロセス管理図"},
    {cd:"引渡しプロセス管理図", label:"引渡しプロセス管理図"},
    {cd:"教育・訓練プロセス管理図", label:"教育・訓練プロセス管理図"},
    {cd:"設備管理プロセス管理図", label:"設備管理プロセス管理図"},
    {cd:"計測機器管理プロセス管理図", label:"計測機器管理プロセス管理図"},
    {cd:"購買プロセス管理図", label:"購買プロセス管理図"},
    {cd:"方針管理プロセス管理図", label:"方針管理プロセス管理図"},
    {cd:"顧客満足プロセス管理図", label:"顧客満足プロセス管理図"},
    {cd:"内部監査プロセス管理図", label:"内部監査プロセス管理図"},
    {cd:"改善プロセス管理図", label:"改善プロセス管理図"}

  ];

  jFoods.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;

    op.text = value.label;

    food.appendChild(op);

  });

}

// 和食の選択肢を設定する
function setDocument3() {
  // 好きな食べ物の選択肢を空にする
  food.textContent = null;
  // 和食の選択肢
  var jFoods = [
    {cd:"", label:"選択して下さい"},
    {cd:"QK001文書管理規定", label:"QK001文書管理規定"},
    {cd:"QK002記録管理規定", label:"QK002記録管理規定"},
    {cd:"QK003内部監査規定", label:"QK003内部監査規定"},
    {cd:"QK004不適合品管理規定", label:"QK004不適合品管理規定"},
    {cd:"QK006検査機器管理規定", label:"QK006検査機器管理規定"},
    {cd:"QK007設備管理規定", label:"QK007設備管理規定"},
    {cd:"QK008供給者評価・選定規定", label:"QK008供給者評価・選定規定"},
    {cd:"QK009図面管理規定", label:"QK009図面管理規定"},
    {cd:"QK012提案制度運営規定", label:"QK012提案制度運営規定"},
    {cd:"QK013変更管理規定", label:"QK013変更管理規定"},
    {cd:"コンプライアンス規定", label:"コンプライアンス規定"},
    {cd:"緊急事態対応規定", label:"緊急事態対応規定"},
    {cd:"安全衛生管理規定", label:"安全衛生管理規定"}

  ];
  jFoods.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    food.appendChild(op);
  });
}

// 和食の選択肢を設定する
function setDocument4() {
  // 好きな食べ物の選択肢を空にする
  food.textContent = null;
  // 和食の選択肢
  var jFoods = [
    {cd:"", label:"選択して下さい"},
    {cd:"営業プロセスフロー", label:"営業プロセスフロー"},
    {cd:"製造工程設計プロセスフロー", label:"製造工程設計プロセスフロー"},
    {cd:"製造プロセスフロー", label:"製造プロセスフロー"},
    {cd:"製品検査プロセスフロー", label:"製品検査プロセスフロー"},
    {cd:"引渡しプロセスフロー", label:"引渡しプロセスフロー"}

  ];
  jFoods.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    food.appendChild(op);
  });
}

// 和食の選択肢を設定する
function setDocument5() {
  // 好きな食べ物の選択肢を空にする
  food.textContent = null;
  // 和食の選択肢
  var jFoods = [
    {cd:"", label:"選択して下さい"},
    {cd:"QC工程図作成手順", label:"QC工程図作成手順"},
    {cd:"管理図・作成管理手順", label:"管理図・作成管理手順"},
    {cd:"工程FMEA実施手順", label:"工程FMEA実施手順"},
    {cd:"工程能力算出手順", label:"工程能力算出手順"},
    {cd:"作業の段取り替え検証手順", label:"作業の段取り替え検証手順"},
    {cd:"生産用冶工具管理手順", label:"生産用冶工具管理手順"},
    {cd:"測定システム管理手順", label:"測定システム管理手順"},
    {cd:"特殊特性等設定・管理手順", label:"特殊特性等設定・管理手順"},
    {cd:"外部提供者における品質保証の手引き", label:"外部提供者における品質保証の手引き"},
    {cd:"外部提供者品質監査手順", label:"外部提供者品質監査手順"},
    {cd:"内部試験所管理手順", label:"内部試験所管理手順"},
    {cd:"初期流動管理手順", label:"初期流動管理手順"},
    {cd:"工程変更管理手順", label:"工程変更管理手順"},
    {cd:"暫定工程管理手順", label:"暫定工程管理手順"},
    {cd:"APQP手順", label:"APQP手順"},
    {cd:"PPAP手順", label:"PPAP手順"},
    {cd:"レイアウト図(流れ線図）", label:"レイアウト図(流れ線図）"}

  ];
  jFoods.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    food.appendChild(op);
  });
}

// 和食の選択肢を設定する
function setDocument6() {
  // 好きな食べ物の選択肢を空にする
  food.textContent = null;
  // 和食の選択肢
  var jFoods = [
    {cd:"", label:"選択して下さい"},
    {cd:"レイアウトチェックリスト", label:"レイアウトチェックリスト"},
    {cd:"計数値MSA報告書", label:"計数値MSA報告書"},
    {cd:"製造実現可能性検討書", label:"製造実現可能性検討書"},
    {cd:"製造工程設計計画／実績書", label:"製造工程設計計画／実績書"},
    {cd:"外部提供者評価表", label:"外部提供者評価表"},
    {cd:"工程FMEA", label:"工程FMEA"},
    {cd:"管理図", label:"管理図"},
    {cd:"ゲージR&R", label:"ゲージR&R"},
    {cd:"工程能力調査表", label:"工程能力調査表"},
    {cd:"IATF内部監査員スキル評価表", label:"IATF内部監査員スキル評価表"},
    {cd:"外部提供者管理計画／実績表", label:"外部提供者管理計画／実績表"},
    {cd:"外部提供者品質監査ﾁｪｯｸｼｰﾄ兼是正対策書", label:"外部提供者品質監査ﾁｪｯｸｼｰﾄ兼是正対策書"},
    {cd:"マネジメントレビュー記録", label:"マネジメントレビュー記録"}

  ];
  jFoods.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    food.appendChild(op);
  });
}

// 和食の選択肢を設定する
function setDocument7() {
  // 好きな食べ物の選択肢を空にする
  food.textContent = null;
  // 和食の選択肢
  var jFoods = [
    {cd:"", label:"選択して下さい"},
    {cd:"手順書", label:"手順書"},
    {cd:"スキルマップ", label:"スキルマップ"},
    {cd:"台帳", label:"台帳"},
    {cd:"フロー", label:"フロー"},
    {cd:"報告書", label:"報告書"},
    {cd:"議事録", label:"議事録"},
    {cd:"顧客所有物の対処", label:"顧客所有物の対処"},
    {cd:"人的資源", label:"人的資源"},
    {cd:"顧客満足", label:"顧客満足"},
    {cd:"一覧", label:"一覧"},
    {cd:"見積受付台帳", label:"見積受付台帳"},
    {cd:"業務委託", label:"業務委託"},
    {cd:"その他", label:"その他"}

  ];
  jFoods.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    food.appendChild(op);
  });
}


// 和食の選択肢を設定する
function setDocument8() {
  // 好きな食べ物の選択肢を空にする
  food.textContent = null;
  // 和食の選択肢
  var jFoods = [
    {cd:"", label:"選択して下さい"},
    {cd:"手順書", label:"手順書"},
    {cd:"記録類 議事録 台帳", label:"記録類 議事録 台帳"},
    {cd:"規定類", label:"規定類"},
    {cd:"外部文書 計画類", label:"外部文書 計画類"},
    {cd:"その他", label:"その他"}

  ];
  jFoods.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    food.appendChild(op);
  });
}


// 和食の選択肢を設定する
function setDocument9() {
  // 好きな食べ物の選択肢を空にする
  food.textContent = null;
  // 和食の選択肢
  var jFoods = [
    {cd:"", label:"選択して下さい"},
    {cd:"手順書", label:"手順書"},
    {cd:"作業指導書", label:"作業指導書"},
    {cd:"仕様書", label:"仕様書"},
    {cd:"基準", label:"基準"},
    {cd:"検査要領書", label:"検査要領書"},
    {cd:"一覧", label:"一覧"},
    {cd:"その他", label:"その他"}

  ];
  jFoods.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    food.appendChild(op);
  });
}


// 和食の選択肢を設定する
function setDocument10() {
  // 好きな食べ物の選択肢を空にする
  food.textContent = null;
  // 和食の選択肢
  var jFoods = [
    {cd:"", label:"選択して下さい"},
    {cd:"手順書", label:"手順書"},
    {cd:"台帳", label:"台帳"},
    {cd:"管理票", label:"管理票"},
    {cd:"計画書", label:"計画書"},
    {cd:"検査要領書", label:"検査要領書"},
    {cd:"金型妥当性確認記録表", label:"金型妥当性確認記録表"},
    {cd:"議事録", label:"議事録"},
    {cd:"計画書", label:"計画書"},
    {cd:"検証", label:"検証"},
    {cd:"依頼表", label:"依頼表"},
    {cd:"スキルマップ", label:"スキルマップ"},
    {cd:"教育記録", label:"教育記録"},
    {cd:"その他", label:"その他"}

  ];
  jFoods.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    food.appendChild(op);
  });
}


// 和食の選択肢を設定する
function setDocument11() {
  // 好きな食べ物の選択肢を空にする
  food.textContent = null;
  // 和食の選択肢
  var jFoods = [
    {cd:"", label:"選択して下さい"},
    {cd:"手順書", label:"手順書"},
    {cd:"記録類・条件表", label:"記録類・条件表"},
    {cd:"工程内検査記録", label:"工程内検査記録"},
    {cd:"工程内検査記録", label:"工程内検査記録"},
    {cd:"その他", label:"その他"}

  ];
  jFoods.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    food.appendChild(op);
  });
}

// 和食の選択肢を設定する
function setDocument12() {
  // 好きな食べ物の選択肢を空にする
  food.textContent = null;
  // 和食の選択肢
  var jFoods = [
    {cd:"", label:"選択して下さい"},
    {cd:"手順書", label:"手順書"},
    {cd:"基準書", label:"基準書"},
    {cd:"日常点検", label:"日常点検"},
    {cd:"記録表", label:"記録表"},
    {cd:"台帳", label:"台帳"},
    {cd:"スキルマップ", label:"スキルマップ"},
    {cd:"成績書", label:"成績書"},
    {cd:"一覧表", label:"一覧表"},
    {cd:"その他", label:"その他"}

  ];
  jFoods.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    food.appendChild(op);
  });
}


// 和食の選択肢を設定する
function setDocument13() {
  // 好きな食べ物の選択肢を空にする
  food.textContent = null;
  // 和食の選択肢
  var jFoods = [
    {cd:"", label:"選択して下さい"},
    {cd:"手順書", label:"手順書"},
    {cd:"基準書", label:"基準書"},
    {cd:"日常点検", label:"日常点検"},
    {cd:"記録表", label:"記録表"},
    {cd:"台帳", label:"台帳"},
    {cd:"スキルマップ", label:"スキルマップ"},
    {cd:"成績書", label:"成績書"},
    {cd:"一覧表", label:"一覧表"},
    {cd:"改善提案", label:"改善提案"},
    {cd:"工程検査記録", label:"工程検査記録"},
    {cd:"その他", label:"その他"}

  ];
  jFoods.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    food.appendChild(op);
  });
}


// 和食の選択肢を設定する
function setDocument14() {
  // 好きな食べ物の選択肢を空にする
  food.textContent = null;
  // 和食の選択肢
  var jFoods = [
    {cd:"", label:"選択して下さい"},
    {cd:"手順書", label:"手順書"},
    {cd:"基準書", label:"基準書"},
    {cd:"日常点検", label:"日常点検"},
    {cd:"記録表", label:"記録表"},
    {cd:"台帳", label:"台帳"},
    {cd:"スキルマップ", label:"スキルマップ"},
    {cd:"成績書", label:"成績書"},
    {cd:"一覧表", label:"一覧表"},
    {cd:"金型製作記録", label:"金型製作記録"},

    {cd:"その他", label:"その他"}

  ];
  jFoods.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    food.appendChild(op);
  });
}


// 和食の選択肢を設定する
function setDocument15() {
  // 好きな食べ物の選択肢を空にする
  food.textContent = null;
  // 和食の選択肢
  var jFoods = [
    {cd:"", label:"選択して下さい"},
    {cd:"内部監査プログラム", label:"内部監査プログラム"},
    {cd:"内部監査改善の機会一覧表", label:"内部監査改善の機会一覧表"},
    {cd:"内部監査実施計画書", label:"内部監査実施計画書"},
    {cd:"内部監査是正処置報告書", label:"内部監査是正処置報告書"},
    {cd:"内部監査報告書", label:"内部監査報告書"},
    {cd:"内部監査(製造工程)チェックシート", label:"内部監査(製造工程)チェックシート"},
    {cd:"内部監査(製品)チェックシート", label:"内部監査(製品)チェックシート"},
    {cd:"QMS内部監査規格要求事項チェックシート", label:"QMS内部監査規格要求事項チェックシート"},
    {cd:"QMS内部監査顧客要求事項チェックシート", label:"QMS内部監査顧客要求事項チェックシート"},

    {cd:"内部監査(QMS)チェックシート(営業P)", label:"内部監査(QMS)チェックシート(営業P)"},

    {cd:"内部監査(QMS)チェックシート(製造P)", label:"内部監査(QMS)チェックシート(製造P)"},

    {cd:"内部監査(QMS)チェックシート(製造工程設計P)", label:"内部監査(QMS)チェックシート(製造工程設計P)"},

    {cd:"内部監査(QMS)チェックシート(製品検査引渡しP)", label:"内部監査(QMS)チェックシート(製品検査引渡しP)"},

    {cd:"内部監査(QMS)チェックシート(設備管理P)", label:"内部監査(QMS)チェックシート(設備管理P)"},

    {cd:"内部監査(QMS)チェックシート(測定機器管理P)", label:"内部監査(QMS)チェックシート(測定機器管理P)"},

    {cd:"内部監査(QMS)チェックシート(内部監査P)", label:"内部監査(QMS)チェックシート(内部監査P)"},

    {cd:"内部監査(QMS)チェックシート(方針管理P)", label:"内部監査(QMS)チェックシート(方針管理P)"}

  ];
  jFoods.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    food.appendChild(op);
  });
}


// 和食の選択肢を設定する
function setDocument16() {
  // 好きな食べ物の選択肢を空にする
  food.textContent = null;
  // 和食の選択肢
  var jFoods = [
    {cd:"", label:"選択して下さい"},
    {cd:"購買先評価表", label:"購買先評価表"},
    {cd:"購買先品質監査チェックシート", label:"購買先品質監査チェックシート"},
    {cd:"購買先管理計画_実績表", label:"購買先管理計画_実績表"}

  ];
  jFoods.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    food.appendChild(op);
  });
}


// 和食の選択肢を設定する
function setDocument17() {
  // 好きな食べ物の選択肢を空にする
  food.textContent = null;
  // 和食の選択肢
  var jFoods = [
    {cd:"", label:"選択して下さい"},
    {cd:"日本メクトロン様", label:"日本メクトロン様"},
    {cd:"MMCT様", label:"MMCT様"},
    {cd:"MMCZ様", label:"MMCZ様"},
    {cd:"その他お客様", label:"その他お客様"}

  ];
  jFoods.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    food.appendChild(op);
  });
}

// 和食の選択肢を設定する
function setDocument18() {
  // 好きな食べ物の選択肢を空にする
  food.textContent = null;
  // 和食の選択肢
  var jFoods = [
    {cd:"", label:"選択して下さい"},
    {cd:"A1050", label:"A1050"},
    {cd:"A5052", label:"A5052"},
    {cd:"C1020", label:"C1020"},
    {cd:"SUS301", label:"SUS301"},
    {cd:"SUS304", label:"SUS304"},
    {cd:"Ni201", label:"Ni201"}

  ];
  jFoods.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    food.appendChild(op);
  });
}

// 和食の選択肢を設定する
function setDocument19() {
  // 好きな食べ物の選択肢を空にする
  food.textContent = null;
  // 和食の選択肢
  var jFoods = [
    {cd:"", label:"選択して下さい"},
    {cd:"日本メクトロン様", label:"日本メクトロン様"},
    {cd:"MMCT様", label:"MMCT様"},
    {cd:"MMCZ様", label:"MMCZ様"},
    {cd:"その他お客様", label:"その他お客様"}

  ];
  jFoods.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    food.appendChild(op);
  });
}


// 和食の選択肢を設定する
function setDocument20() {
  // 好きな食べ物の選択肢を空にする
  food.textContent = null;
  // 和食の選択肢
  var jFoods = [
    {cd:"", label:"選択して下さい"},
    {cd:"プレス", label:"プレス"},
    {cd:"表面処理", label:"表面処理"},
    {cd:"営業部", label:"営業部"},
    {cd:"管理部", label:"管理部"},
    {cd:"生産技術部", label:"生産技術部"},
    {cd:"技術部", label:"技術部"},
    {cd:"品質保証部", label:"品質保証部"},  
    {cd:"金型部", label:"金型部"},
    {cd:"出荷・梱包", label:"出荷・梱包"},
    {cd:"その他", label:"その他"}

  ];
  jFoods.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    food.appendChild(op);
  });
}


// 和食の選択肢を設定する
function setDocument21() {
  // 好きな食べ物の選択肢を空にする
  food.textContent = null;
  // 和食の選択肢
  var jFoods = [
    {cd:"", label:"選択して下さい"},
    {cd:"顧客要求事項検討会議事録_営業", label:"顧客要求事項検討会議事録_営業"},
    {cd:"金型製造指示書_営業", label:"金型製造指示書_営業"},
    {cd:"試作製造指示書_営業", label:"試作製造指示書_営業"},
    {cd:"レイアウト/歩留まり_営業", label:"レイアウト/歩留まり_営業"},
    {cd:"金型製作依頼票_金型設計", label:"金型製作依頼票_金型設計"},    
    {cd:"設計計画書_金型設計", label:"設計計画書_金型設計"},
    {cd:"DR会議議事録_金型設計", label:"DR会議議事録_金型設計"},
    {cd:"DR構想検討会議議事録_生産技術", label:"DR構想検討会議議事録_生産技術"},
    {cd:"設計検証チェックリスト_金型設計", label:"設計検証チェックリスト_金型設計"},
    {cd:"妥当性確認記録_金型設計", label:"妥当性確認記録_金型設計"},  
    {cd:"進捗管理票_生産技術", label:"進捗管理票_生産技術"},
    {cd:"設計変更会議議事録_金型設計", label:"設計変更会議議事録_金型設計"},
    {cd:"初期流動検査記録", label:"初期流動検査記録"}

  ];
  jFoods.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    food.appendChild(op);
  });
}