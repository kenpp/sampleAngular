import { Recipe } from './recipe';
export const RECIPE_DATA: Recipe[] = [
    {
        id: 1,
        name: "チキンライス",
        minute: 15,
        feature: "残りごはんで手早く。甘酸っぱいケチャップが鶏肉によく合う",
        manner: "洋",
        serve: 2,
        ingre: [
            { name: "鶏モモ", amount: "中1枚" },
            { name: "にんじん", amount: "2/3本" },
            { name: "たまねぎ", amount: "1/4個" },
            { name: "ごはん", amount: "茶碗3" },
            { name: "ケチャップ", amount: "カップ半分" },
        ]
    },
    {
        id: 2,
        name: "カレーライス",
        minute: 60,
        feature: "またカレーライス、やっぱりカレーライス。火さえ通れば失敗しようがない！",
        manner: "洋",
        serve: 2,
        ingre: [
            { name: "豚肉", amount: "100g" },
            { name: "にんじん", amount: "50" },
            { name: "たまねぎ", amount: "半分" },
            { name: "カレールウ", amount: "4個" },
            { name: "水", amount: "400cc" },
        ]
    },
    {
        id: 3,
        name: "炊き込みごはん",
        minute: 60,
        feature: "実質作業時間は切る時間のみ、あとは炊飯器任せ",
        manner: "和",
        serve: 4,
        ingre: [
            { name: "鶏肉", amount: "50g" },
            { name: "にんじん", amount: "2センチ" },
            { name: "しいたけ", amount: "2個" },
            { name: "米", amount: "4合" },
            { name: "醤油", amount: "大3" },
            { name: "酒", amount: "大1.5" },
            { name: "みりん", amount: "大1.5" },
            { name: "昆布", amount: "1-2枚" },
        ]
    },
    {
        id: 4,
        name: "ツナピラフ",
        minute: 60,
        feature: "最も簡単な「魚料理」、野菜を切ったら炊飯器にお任せ",
        manner: "洋",
        serve: 4,
        ingre: [
            { name: "ツナ", amount: "中1缶" },
            { name: "マッシュルーム", amount: "小1缶" },
            { name: "にんじん", amount: "1/2本" },
            { name: "たまねぎ", amount: "1/2本" },
            { name: "米", amount: "3合" },
            { name: "コンソメ", amount: "2個" }
        ]
    },
    {
        id: 5,
        name: "チャーハン",
        minute: 15,
        feature: "簡単で味もアッサリ。醤油と長ネギで和風のおかずにも合います",
        manner: "中",
        serve: 1,
        ingre: [
            { name: "豚肉", amount: "適量" },
            { name: "長ねぎ", amount: "2/3" },
            { name: "卵", amount: "1個" },
            { name: "ごはん", amount: "茶碗1" },
            { name: "鶏ガラスープのもと", amount: "カップ半分" },
            { name: "オイスターソース", amount: "小1" },
            { name: "しょうゆ", amount: "小1" }
        ]
    },
    {
        id: 6,
        name: "ハヤシライス",
        manner: "洋",
        feature: "ビーフカレーにするかハヤシにするか直前に決められるのが強い",
        serve: 5,
        minute: 30,

        ingre: [
            { name: "牛コマ", amount: "200g" },
            { name: "たまねぎ", amount: "1個" },
            { name: "マッシュルーム", amount: "1缶" },
            { name: "ハヤシルー", amount: "半分" },
            { name: "水", amount: "500ml" },
        ]
    },
    {
        id: 7,
        name: "シーフードカレー",
        minute: 30,
        feature: "いつものカレーの意外な展開。オリーブオイルで地中海風に。",
        manner: "洋",
        serve: 2,
        ingre: [
            { name: "冷凍シーフード", amount: "150g" },
            { name: "じゃがいも", amount: "小1" },
            { name: "にんじん", amount: "小1" },
            { name: "たまねぎ", amount: "1/2" },
            { name: "カレールー", amount: "3個" },
            { name: "オリーブオイル", amount: "小さじ1" },
            { name: "水", amount: "400cc" }
        ]
    },
    {
        id: 8,
        name: "チキンピラフ",
        minute: 60,
        feature: "ピラフの基本。具を変えればエビピラフ、シーフードピラフなどにも。",
        manner: "洋",
        serve: 3,
        ingre: [
            { name: "鶏肉", amount: "200" },
            { name: "にんじん", amount: "2/3本" },
            { name: "たまねぎ", amount: "1/2個" },
            { name: "米", amount: "2合" },
            { name: "コンソメ", amount: "2個" },
            { name: "水", amount: "400cc" }
        ]

    },
    {
        id: 9,
        name: "カレーピラフ",
        minute: 60,
        feature: "カレーライスほど重くないカレーフード",
        manner: "洋",
        serve: 3,
        ingre: [
            { name: "ベーコン", amount: "2-3枚" },
            { name: "にんじん", amount: "1/3" },
            { name: "たまねぎ", amount: "1/2個" },
            { name: "米", amount: "2合" },
            { name: "カレールー", amount: "3個" },
            { name: "水", amount: "400cc" }
        ]

    },
    {
        id: 10,
        name: "チキンカレー",
        minute: 60,
        feature: "カレーの中で特別な位置を占めるチキンカレー。大人の方には辛口がおすすめ。",
        manner: "洋",
        serve: 4,
        ingre: [
            { name: "鶏モモ", amount: "300g" },
            { name: "にんじん", amount: "1/4本" },
            { name: "たまねぎ", amount: "1個" },
            { name: "ヨーグルト", amount: "大2" },
            { name: "カレールウ", amount: "半分" },
            { name: "水", amount: "700cc" }
        ]
    },

    {
        id: 11,
        name: "牛丼",
        manner: "和",
        feature: "行きつけのあのお店の味を家でも...",
        serve: 3,
        minute: 30,
        ingre: [
            { name: "牛肉", amount: "300g" },
            { name: "たまねぎ", amount: "2個" },
            { name: "だしの素", amount: "小2" },
            { name: "すりおろし生姜", amount: "大1" },
            { name: "水", amount: "300cc" },
            { name: "醤油」", amount: "大1" },
            { name: "酒", amount: "大3" },
            { name: "みりん", amount: "大3" },
            { name: "砂糖", amount: "大3" }
        ]

    },

    {
        id: 12,
        name: "親子丼",
        minute: 15,
        feature: "色鮮やか、豊かな味わい。お好みにより砂糖で甘みをつけて。",
        manner: "和",
        serve: 2,
        ingre: [
            { name: "鶏肉", amount: "150g" },
            { name: "たまねぎ", amount: "1/4個" },
            { name: "卵", amount: "3個" },
            { name: "ごはん", amount: "茶碗2" },
            { name: "めんつゆ", amount: "50cc" },
            { name: "水", amount: "100cc" }
        ]

    },

    {
        id: 13,
        name: "中華丼",
        minute: 30,
        feature: "野菜たっぷり、いろいろな具を楽しめる。熱いのでフーフーして食べましょう。",
        manner: "中",
        serve: 4,
        ingre: [
            { name: "豚肉", amount: "100g" },
            { name: "冷凍むきえび", amount: "8匹" },
            { name: "白菜", amount: "1/4個" },
            { name: "にんじん", amount: "4-5本" },
            { name: "たまねぎ", amount: "1/2個" },
            { name: "きくらげ", amount: "4-5枚" },
            { name: "鶏ガラスープの素", amount: "大1" },
            { name: "オイスターソース", amount: "大1" },
            { name: "片栗粉", amount: "大1" },
            { name: "水", amount: "200cc" },
            { name: "ごはん", amount: "3膳" }
        ]

    }

];