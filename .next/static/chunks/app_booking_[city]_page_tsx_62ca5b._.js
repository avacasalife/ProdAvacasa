(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_booking_[city]_page_tsx_62ca5b._.js", {

"[project]/app/booking/[city]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pigeon$2d$maps$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/pigeon-maps/lib/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$GlobeAltIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobeAltIcon$3e$__ = __turbopack_import__("[project]/node_modules/@heroicons/react/24/outline/esm/GlobeAltIcon.js [app-client] (ecmascript) <export default as GlobeAltIcon>");
;
var _s = __turbopack_refresh__.signature();
"use client";
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
    // Function to generate sample hotels with random prices
    const fetchHotels = async (searchTerm)=>{
        const sampleHotels = [
            {
                id: 1,
                name: "Hotel A",
                vicinity: "City Center",
                lat: 28.6139 + 0.01,
                lng: 77.209 + 0.01,
                img: "https://a0.muscache.com/im/pictures/d4a0f971-e2f6-438e-bde1-e4f84b42bf70.jpg?im_w=720",
                price: Math.floor(Math.random() * 200) + 50
            },
            {
                id: 2,
                name: "Hotel B",
                vicinity: "Near Park",
                lat: 28.6139 - 0.01,
                lng: 77.209 - 0.01,
                img: "https://www.compass.com/m/0/5e7ebc7f-d160-4984-8050-a6b1e2e12656/1334x1000.jpg",
                price: Math.floor(Math.random() * 200) + 50
            },
            {
                id: 3,
                name: "Hotel C",
                vicinity: "Business District",
                lat: 28.6139 + 0.02,
                lng: 77.209 + 0.02,
                img: "https://www.compass.com/m/0/52263bb7-a7d2-478c-8d91-4fcf8a4d722b/1500x996.jpg",
                price: Math.floor(Math.random() * 200) + 50
            },
            {
                id: 4,
                name: "Hotel D",
                vicinity: "Suburban Area",
                lat: 28.6139 + 0.015,
                lng: 77.209 - 0.015,
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
    // Handle search dynamically
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HotelFinder.useEffect": ()=>{
            const timeout = setTimeout({
                "HotelFinder.useEffect.timeout": ()=>{
                    if (searchCity.trim()) {
                        // Update location dynamically as the user types
                        const lat = 28.6139 + Math.random() * 0.05 - 0.025;
                        const lng = 77.209 + Math.random() * 0.05 - 0.025;
                        setMapCenter([
                            lat,
                            lng
                        ]);
                    }
                }
            }["HotelFinder.useEffect.timeout"], 500); // Delay to avoid constant updates while typing
            return ({
                "HotelFinder.useEffect": ()=>clearTimeout(timeout)
            })["HotelFinder.useEffect"];
        }
    }["HotelFinder.useEffect"], [
        searchCity
    ]);
    const handleSearch = ()=>{
        if (searchCity.trim()) {
            router.push(`/booking/${searchCity}`);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center px-6 py-2 bg-white sticky top-0 z-10 border-b border-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl font-bold text-red-500 cursor-pointer",
                        children: "Avacasa"
                    }, void 0, false, {
                        fileName: "[project]/app/booking/[city]/page.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1 ml-12 bg-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Anywhere",
                                value: searchCity,
                                onChange: (e)=>setSearchCity(e.target.value),
                                className: "outline-none w-28 text-gray-500 bg-transparent"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/[city]/page.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-400",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/[city]/page.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Any Week",
                                value: searchCity,
                                onChange: (e)=>setSearchCity(e.target.value),
                                className: "outline-none w-28 text-gray-500 bg-transparent px-2"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/[city]/page.tsx",
                                lineNumber: 120,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-400",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/[city]/page.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Add Guest",
                                value: searchCity,
                                onChange: (e)=>setSearchCity(e.target.value),
                                className: "outline-none w-28 text-gray-500 bg-transparent px-2"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/[city]/page.tsx",
                                lineNumber: 129,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSearch,
                                className: "bg-red-500 text-white rounded-full px-3 py-1 hover:bg-red-600",
                                children: "🔍"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/[city]/page.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/[city]/page.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-600 text-sm cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.push('/earnings'),
                                    children: "Avacasa Your Home"
                                }, void 0, false, {
                                    fileName: "[project]/app/booking/[city]/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 12
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/booking/[city]/page.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$GlobeAltIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobeAltIcon$3e$__["GlobeAltIcon"], {
                                className: "h-5 w-5 text-gray-600 cursor-pointer"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/[city]/page.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/signup?redirect=signin",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-10 w-10 rounded-full overflow-hidden border-2 border-gray-300 shadow-md hover:scale-105 transition-transform cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "data:image/jpeg;base64,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",
                                            alt: "User",
                                            className: "h-full w-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/[city]/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 5
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/[city]/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 3
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/booking/[city]/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/booking/[city]/page.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/[city]/page.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/[city]/page.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-5 mt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-3/5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: hotels.length > 0 ? hotels.map((hotel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative cursor-pointer transition-transform duration-300 hover:scale-105",
                                    onClick: ()=>alert(`Clicked on ${hotel.name}`),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: hotel.img,
                                            alt: hotel.name,
                                            width: 500,
                                            height: 300,
                                            className: "object-cover rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/[city]/page.tsx",
                                            lineNumber: 176,
                                            columnNumber: 19
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
                                                lineNumber: 184,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/[city]/page.tsx",
                                            lineNumber: 183,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, hotel.id, true, {
                                    fileName: "[project]/app/booking/[city]/page.tsx",
                                    lineNumber: 171,
                                    columnNumber: 17
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500",
                                children: "No hotels found"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/[city]/page.tsx",
                                lineNumber: 191,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/booking/[city]/page.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/booking/[city]/page.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-2/5 ml-28",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pigeon$2d$maps$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Map"], {
                            center: mapCenter,
                            zoom: 14,
                            height: 500,
                            width: 400,
                            children: hotels.map((hotel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pigeon$2d$maps$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                                    width: 40,
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
                                        lineNumber: 201,
                                        columnNumber: 17
                                    }, this)
                                }, hotel.id, false, {
                                    fileName: "[project]/app/booking/[city]/page.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/booking/[city]/page.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/booking/[city]/page.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/[city]/page.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/booking/[city]/page.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
};
_s(HotelFinder, "dhGctWhnmNG4vynwtJ67m/wqng4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = HotelFinder;
const __TURBOPACK__default__export__ = HotelFinder;
var _c;
__turbopack_refresh__.register(_c, "HotelFinder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/booking/[city]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_booking_%5Bcity%5D_page_tsx_62ca5b._.js.map