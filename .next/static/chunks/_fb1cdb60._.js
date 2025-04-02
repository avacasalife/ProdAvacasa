(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_fb1cdb60._.js", {

"[project]/components/Primarybutton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const PrimaryButton = ({ text, onClick, className = "" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `px-4 py-2 text-white bg-red-500 rounded-full hover:bg-red-600 ${className}`,
        children: text
    }, void 0, false, {
        fileName: "[project]/components/Primarybutton.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
_c = PrimaryButton;
const __TURBOPACK__default__export__ = PrimaryButton;
var _c;
__turbopack_context__.k.register(_c, "PrimaryButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/booking/[city]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pigeon$2d$maps$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pigeon-maps/lib/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$GlobeAltIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobeAltIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/GlobeAltIcon.js [app-client] (ecmascript) <export default as GlobeAltIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Primarybutton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Primarybutton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const defaultCenter = [
    28.6139,
    77.209
];
const HotelFinder = ()=>{
    _s();
    const { city } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const [hotels, setHotels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mapCenter, setMapCenter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultCenter);
    const [searchCity, setSearchCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HotelFinder.useEffect": ()=>{
            if (city) {
                fetchHotels(city);
            }
        }
    }["HotelFinder.useEffect"], [
        city
    ]);
    const fetchHotels = async (searchTerm)=>{
        const sampleHotels = [
            {
                id: 1,
                name: "Hotel A",
                vicinity: "City Center",
                lat: 28.6239,
                lng: 77.219,
                img: "https://a0.muscache.com/im/pictures/d4a0f971-e2f6-438e-bde1-e4f84b42bf70.jpg?im_w=720",
                price: Math.floor(Math.random() * 200) + 50
            },
            {
                id: 2,
                name: "Hotel B",
                vicinity: "Near Park",
                lat: 28.6039,
                lng: 77.199,
                img: "https://www.compass.com/m/0/5e7ebc7f-d160-4984-8050-a6b1e2e12656/1334x1000.jpg",
                price: Math.floor(Math.random() * 200) + 50
            },
            {
                id: 3,
                name: "Hotel C",
                vicinity: "Business District",
                lat: 28.6339,
                lng: 77.229,
                img: "https://www.compass.com/m/0/52263bb7-a7d2-478c-8d91-4fcf8a4d722b/1500x996.jpg",
                price: Math.floor(Math.random() * 200) + 50
            },
            {
                id: 4,
                name: "Hotel D",
                vicinity: "Suburban Area",
                lat: 28.6189,
                lng: 77.194,
                img: "https://a0.muscache.com/im/pictures/miso/Hosting-691702060121553771/original/ca2bee1a-ab7c-4f87-ba08-07bbb5f9c496.jpeg?im_w=720",
                price: Math.floor(Math.random() * 200) + 50
            }
        ];
        setHotels(sampleHotels);
        setMapCenter([
            sampleHotels[0].lat,
            sampleHotels[0].lng
        ]);
    };
    // Function to update map center when typing
    const handleInputChange = (e)=>{
        const value = e.target.value;
        setSearchCity(value);
        if (value.trim()) {
            // Pick a random hotel location from sample data
            const randomHotel = hotels[Math.floor(Math.random() * hotels.length)];
            if (randomHotel) {
                setMapCenter([
                    randomHotel.lat,
                    randomHotel.lng
                ]);
            }
        }
    };
    const handleSearch = ()=>{
        if (searchCity.trim()) {
            router.push(`/booking/${searchCity}`);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 md:p-6 lg:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-col md:flex-row justify-center md:justify-between items-center py-4 px-8 border-b gap-4 md:gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-red-500 font-bold text-2xl cursor-pointer md:mb-0 mb-2",
                        onClick: ()=>router.push('/'),
                        children: "Avacasa"
                    }, void 0, false, {
                        fileName: "[project]/app/booking/[city]/page.tsx",
                        lineNumber: 73,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center border rounded-full px-4 py-2 shadow-md w-full max-w-[500px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Anywhere",
                                    className: "px-2 text-gray-700 focus:outline-none w-full",
                                    value: searchCity,
                                    onChange: handleInputChange
                                }, void 0, false, {
                                    fileName: "[project]/app/booking/[city]/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-l border-gray-300 mx-2 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/app/booking/[city]/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Any week",
                                    className: "px-2 text-gray-700 focus:outline-none w-full"
                                }, void 0, false, {
                                    fileName: "[project]/app/booking/[city]/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-l border-gray-300 mx-2 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/app/booking/[city]/page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Add guests",
                                    className: "px-2 text-gray-700 focus:outline-none w-full"
                                }, void 0, false, {
                                    fileName: "[project]/app/booking/[city]/page.tsx",
                                    lineNumber: 97,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Primarybutton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    text: "Search",
                                    onClick: handleSearch
                                }, void 0, false, {
                                    fileName: "[project]/app/booking/[city]/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/booking/[city]/page.tsx",
                            lineNumber: 82,
                            columnNumber: 5
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/booking/[city]/page.tsx",
                        lineNumber: 81,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-4 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-600 cursor-pointer hover:text-gray-800",
                                onClick: ()=>router.push('/earnings'),
                                children: "Avacasa your home"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/[city]/page.tsx",
                                lineNumber: 108,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$GlobeAltIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobeAltIcon$3e$__["GlobeAltIcon"], {
                                className: "h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-800"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/[city]/page.tsx",
                                lineNumber: 114,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/[city]/page.tsx",
                        lineNumber: 107,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/[city]/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row gap-5 mt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full lg:w-3/5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4",
                            children: hotels.map((hotel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative cursor-pointer transition-transform duration-300 hover:scale-105",
                                    onMouseEnter: ()=>setMapCenter([
                                            hotel.lat,
                                            hotel.lng
                                        ]),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: hotel.img,
                                            alt: hotel.name,
                                            width: 450,
                                            height: 50,
                                            className: "object-cover rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/[city]/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold",
                                                children: [
                                                    hotel.name,
                                                    " - ₹",
                                                    hotel.price
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/booking/[city]/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/[city]/page.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, hotel.id, true, {
                                    fileName: "[project]/app/booking/[city]/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/booking/[city]/page.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/booking/[city]/page.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full lg:w-2/5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pigeon$2d$maps$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Map"], {
                            center: mapCenter,
                            zoom: 12,
                            height: 450,
                            children: hotels.map((hotel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pigeon$2d$maps$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                                    width: 30,
                                    anchor: [
                                        hotel.lat,
                                        hotel.lng
                                    ],
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white text-black text-xs font-semibold px-1 rounded-md",
                                        children: [
                                            "₹",
                                            hotel.price
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/[city]/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 17
                                    }, this)
                                }, hotel.id, false, {
                                    fileName: "[project]/app/booking/[city]/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/booking/[city]/page.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/booking/[city]/page.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/[city]/page.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/booking/[city]/page.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
};
_s(HotelFinder, "IjwvEcpHcecdoq3lX1eaCmyMFiU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = HotelFinder;
const __TURBOPACK__default__export__ = HotelFinder;
var _c;
__turbopack_context__.k.register(_c, "HotelFinder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_fb1cdb60._.js.map