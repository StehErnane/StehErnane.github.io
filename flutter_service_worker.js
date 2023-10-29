'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4801908e9f218207b8338215a3425c5d",
".git/config": "7bf6817323b4f97ee1b090dd138f52c2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2476bac0ffb38f7ff8389a62bd909615",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "99356f6ec1f2ee40bfa997532b55d042",
".git/logs/refs/heads/main": "679c80934ff51af024a59600f4edb68a",
".git/logs/refs/remotes/origin/main": "350f2d9690cffe03ba9deb143e87c7cc",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/03/e736613a750cdd8d4f54bca28844e2d13257cb": "bd840ac16c281d81f004822f55e1db62",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/13/dfcafc34cb8b3fe284acc22bc67810bd77bcc9": "545df545b084b9ec98601e5fff8dcd5b",
".git/objects/14/d2b375dc0c2c4aec35b3d9d4bd89d7291c52dd": "ccfdd2e5d5fbb4633b77ee36ca291938",
".git/objects/1a/ff54d60e6556360018c8860a0cb9c95f7d7265": "965c1a78d32551a9f28ba3d524b8cbce",
".git/objects/1f/9d621fbd40d541f3eb8364b13a4109cdbb5fd3": "b7a7b668993fdd4b0fbe5e39b68dcc30",
".git/objects/22/da92f295453053feebeb792063f598784fbdef": "4cb67fd9310808a7eb4dbe80e71e7796",
".git/objects/23/a5c1edfb68da66010db5741185b3e015da4395": "a772b7cad4b13b7069ec83721f6626f1",
".git/objects/25/11df86cf76f789af86eb3500fadeb238dd8bcf": "52fb57ecf49821cc60424a66ab4c1ce5",
".git/objects/27/162ca51072c225ee966e35bb49da6b22f5172e": "27b4cfad28e05ae8e1d073831ff2f48d",
".git/objects/28/924e17e0c9fbab3fdc310300f3be3a62c280b8": "ceb31bf3478cef78507fbf889a891673",
".git/objects/33/8ae83be13454130fa5e864fb3787a83ca299c1": "b42e35d3b0d1098055006309e79e9cbe",
".git/objects/34/53d0ff70ce305796af72afa13896ec5f706c48": "0bb153499db95562f2ea1ef1361b42e7",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/69fdcc8ebb388f3932ecd93a26470b74fa7860": "54700b0d1cf5843b68d5165dcbb33e9a",
".git/objects/3b/be8c27453e01ec38d71c9cb1271c8f18cf12cf": "e31c95df4a44635226c5bf0fe5eb5b4f",
".git/objects/3b/c79062ee54fe59ece6eb825cf1ea4cc2b24f2d": "4240f51ebb679270092b1b3d7c1ee53e",
".git/objects/3e/6c942233c69f6b30cb8e8cdb4eea44b350586f": "a2e21b1c29619d5ed2b41322316f4ed6",
".git/objects/41/894e8dac3620c767cf33c647fdacebe6949416": "5ddd6670307caa33fac7feb4efdd5543",
".git/objects/46/ad715bfcdac3b330b747a3583053cb63b7e29b": "f608343d7d9339801cf4eb469ff51872",
".git/objects/4b/820cc7db6074c9bfe5022845c72f5785928efb": "a936c070e0d3462517180023ac7619e1",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/3b6f4ea019d3285353a14390fe114fe9037497": "d11f6cc690a2acb45cc75cd2d8a5ae7c",
".git/objects/57/3dfddb20de61bf2adc7fb3ce574000cebeaeda": "f06881817c4a168e4a512e1d9b64c5e6",
".git/objects/57/d4269e295728327a6ab11ebe5e8c4ed21dce4c": "3966f30404e4852ac18eb0aa2b936a83",
".git/objects/60/4246d98b0ae04a52f5cf3bef179be9958ef722": "1fb70cbae29f5a141ed200f9d7d89d8e",
".git/objects/61/124f1f1fc318634b7cd11c3404037e2c4b6087": "27bfff0e2affac300fd24c2afb307c9b",
".git/objects/65/7abb53e018e5725d345c72ed4dc681835e5cf9": "3cad21a6d9d0de33b7985763cd4cb5dc",
".git/objects/6b/0ca5c00b66ab7fa80fccb9b63f1477802df412": "acd74dd0a9344e6354ab3a62df1afebf",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6f/4684e083a018fb2b9b3e3579fa83d88e00357d": "c36a0d2885d9ce067027d762572f1a49",
".git/objects/71/c0f995ee64396f29a3d9ef283b5050f45d6e0f": "aa69ae6032786d8c915bfc9bd1c64c28",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/75/f2f8d3e1caa81add106c81851ac694759931ed": "3dab1cbb2565159a6dc1bc89e5ece0ea",
".git/objects/79/ffa6589c684b5ee9829b33e3d9b6fde53e5f07": "c4a8befe91f8fc0a2e2e43ad7091d22e",
".git/objects/7a/eb58bd1b9436a814a50ee3539d38f7668908c8": "0b0114f1c99b0ed9088d544092449113",
".git/objects/7d/a534118e571747408405da967d994d2eaf10db": "926885ba78e2f981aabc05ab18142346",
".git/objects/80/6673f900d45f4390bbdbbeb17899101e6ede3c": "e105309caf7f39203a0c0895f6671704",
".git/objects/85/5f2401d64bc35357ba98e861e91fc429a7e41a": "2cd19dcf05c50f36603b84f5043d1f7d",
".git/objects/89/513d94693ae8100315edbb982d7d243f5469f6": "1a977afa8c0dc3ca507a79160ba48a51",
".git/objects/8c/1426df79475972b205c699b676d53e4c00b4f6": "5699d327ef5e5ae53b7498d5b1d30439",
".git/objects/9a/c9df579cb492a71af872c5e59824523ae0bf0d": "f26236e8da4c3cd1c7df3d87353fd28c",
".git/objects/9c/33aee5f0db3ba6167dd671ab2bf3d23d1192ed": "92836c7cbb7fb50385684c52341bdb64",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9e/70be6a9ef052bd26e248428cb4db214663afca": "d5fbd6ae192ce2144bda4b1ab8f84862",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a2/0f4beb01d83a2c9ec5a337c2666a680b5d54ba": "578ffe3765ba6d307e8828015fb6e5ee",
".git/objects/a6/2f92ebe4a558cf0958fec2a92a0b520e5bd9f9": "61d18feecd696a8e560d88801c4be5be",
".git/objects/a6/53f56506f561129d6d057dda6d87b1f925bc62": "d523bae03342b976714b84a5fed99892",
".git/objects/a7/9076508ea2e3035511b1b7659472275f5a3a45": "a3e2aeaa413aebcef26278643182251b",
".git/objects/ae/e327efa860309e9fcb49b34f9a36f77a86a90d": "ec26c89e9dfc214ae275cec76603879b",
".git/objects/af/7a0325cb46c7bf86f5d671c5e64046370aebc5": "156fb9b3a69a20a315d95a979566ed94",
".git/objects/b0/7708acd348fb16a9c5b4f74fe3a2787a148f31": "a7422387255075ba6acfe30509daf268",
".git/objects/b7/77524b8e1ecc6a4b2bdd61387a269b02dfed4a": "6ca8123c2a4396b39504d95e803384f2",
".git/objects/b8/d0d092f72222938d1e2bc9e743ef554e01c01a": "7e0e02ebdd2a1a329e8a4d0098829c21",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/bd/2f940bf3660e0f6be65a89222df9067042b24e": "1597250c1fe2cd2cf84f688b2bf9ad4e",
".git/objects/bd/3cc9711533de5f65174d2f4990490e8991ae6f": "3ec7ebcd73910afce9210c2597d5a0a4",
".git/objects/bd/ea89955055788893c977c84a0be4e3fda0b5a3": "547bf27e39b072947b5f1d1e3a47fade",
".git/objects/be/144ff581c86a2d1c277f391f4d9bbcd3676c3f": "5f26a20cee751434af8af1d92e06e582",
".git/objects/be/67410fd0a5aaf22e118ff0dd3be2dcd441f34c": "6b6267f4eaa77a2f3de6d0252bfef1c8",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c4/db148ba8e37bfbe1e0753d87ea752f97e5ecb9": "21b586cad1305fea0511a1616ee7d56c",
".git/objects/c5/ea12bd01a6287ba35f9130b29dafc57339e89f": "360f0c06d65f221dfb2a22dd20e50a72",
".git/objects/cb/8c9c8a4796f8e4d1751d3613f1ed74beb55b7e": "61ae9fbbeba2fe8128369048a3849aa9",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e0/782f4fa0e1948aee0de6abf3864436a0ece175": "ed4478f47b69ea889b89c460c4619f0d",
".git/objects/e2/6db5dd3dbab6fcdb06f7fd9ab9347ead808f02": "2f6d76624a9dec9c6214eeab0f98202e",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e4/de9f7e01ad546ee92a277de1b62afaefcf0fbf": "cbeff775a977274177d6648804f6fbb9",
".git/objects/e5/883cc80199f3b321d6abca83eb60d3211a2553": "f3a31743caa18e87e6fd372cd5fd44d4",
".git/objects/e6/1e8e88bdc98d7edba0ba2a372dfd7b4e5c4b3f": "cdc5a17a6724bfcd899294f948824469",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/ec/1df0277b9666197031329be22570548e60f0b2": "7eaeefbdf747c72a74b58cfd5e58a52b",
".git/objects/fa/08219697ee7ba540d1f4f530fb755d6aa3e3ac": "bd8cad483e4df256d506586e7bef70e1",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/objects/ff/d20be6c4083776e3b80edbf62f99aaddda0a15": "67cf1ae7af96dd15ab768210572519d7",
".git/refs/heads/main": "c2aba7dc1311d25a93f1206e73e78961",
".git/refs/remotes/origin/main": "c2aba7dc1311d25a93f1206e73e78961",
"assets/AssetManifest.bin": "94926ac44c274e5680b46f0afff5aa36",
"assets/AssetManifest.json": "020078408a2a9f84f3caccb1f8b90d28",
"assets/assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/images/courses/cursos-tecnicos.jpg": "555dc73f0184d639815cce6a5002cee0",
"assets/assets/images/icons/cancel_order_white_icon.png": "822fdb69396a297993f5cd83b27e5ac3",
"assets/assets/images/icons/client_ico.png": "72dbc10835fd035b07192bc16bc46bdf",
"assets/assets/images/icons/client_ico_selected.png": "b6474f3cad1dd82d92f312a5b50c74be",
"assets/assets/images/icons/confirm_order_icon.png": "f952db63f6fa0d22fc1e5cc1172152a9",
"assets/assets/images/icons/confirm_order_white_icon.png": "c6397febb9b3d5ba38041b69acba8649",
"assets/assets/images/icons/finish_order_ico.png": "67ac4bc68c899e8f74420fb73c7ffbc5",
"assets/assets/images/icons/finish_order_white_ico.png": "8a5a9779ea20c1e05aed285a51de7b41",
"assets/assets/images/icons/order_edit_icon.png": "5c419cfc91c3c3c3fa0c0a6315067227",
"assets/assets/images/icons/order_ico.png": "b72428572c0cdb5ef1efee2bb675b5f3",
"assets/assets/images/icons/order_ico_selected.png": "932117af18d6a347480b91b2f628ecbb",
"assets/assets/images/icons/payment_cc_icon.png": "8f161fd26109cab598191a0c9f1168f6",
"assets/assets/images/icons/payment_cd_icon.png": "2f17ce6c5ddca0bb2fd36849ae104810",
"assets/assets/images/icons/payment_notfound_icon.png": "a374c78f3da2ed41bc86f3b61ff4047f",
"assets/assets/images/icons/payment_type_ico.png": "0200f81ede7ce8c990330c4680d833e5",
"assets/assets/images/icons/payment_type_ico_selected.png": "64dd0d27e274937aaf98c68a4290dd0a",
"assets/assets/images/icons/payment_va_icon.png": "c3856b1f4cb204fdbd0fd491ed052598",
"assets/assets/images/icons/payment_vr_icon.png": "9e4cffb87ff9fc6931a162a8a29c2732",
"assets/assets/images/icons/product_ico.png": "d776da783cb9a59357c3d4f7bb068dc2",
"assets/assets/images/icons/product_ico_selected.png": "28f74a4dfb9dbcf2353e09b5c73b3a01",
"assets/assets/images/logo.png": "5fae5c5593e0705ba71afe47b15065b6",
"assets/FontManifest.json": "3a4e42bf7c4645e8057dda3a15bcc57b",
"assets/fonts/MaterialIcons-Regular.otf": "1676ca118cacae164f41abb77e01435f",
"assets/NOTICES": "23293cbfd2c3c009426a1f615d7b58d5",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8742fcf1f4f2aafab636e6b1d336e642",
"/": "8742fcf1f4f2aafab636e6b1d336e642",
"main.dart.js": "ef70f3ddf5b5e1a4cca60501af225e47",
"manifest.json": "a57c2ae713a93f6079d7b3ed19f54a63",
"version.json": "4693c7a94637c29f16ea35f228b7bed7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
