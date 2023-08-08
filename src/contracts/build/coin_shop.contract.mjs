// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = "0.1.13";
export const _versionHash = "0.1.13 (88e48902)";
export const _backendVersion = 27;

export function getExports(s) {
	const stdlib = s.reachStdlib;
	return {};
}
export function _getEvents(s) {
	const stdlib = s.reachStdlib;
	const ctc0 = stdlib.T_UInt;
	const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
	const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "6"));
	const ctc3 = stdlib.T_Address;
	const ctc4 = stdlib.T_Bool;
	return {
		price_change: [ctc1],
		purchase: [ctc2, ctc3],
		restock: [ctc1],
		terminate: [ctc4],
		withdraw: [ctc1],
	};
}
export function _getViews(s, viewlib) {
	const stdlib = s.reachStdlib;
	const ctc0 = stdlib.T_Address;
	const ctc1 = stdlib.T_Token;
	const ctc2 = stdlib.T_UInt;
	const ctc3 = stdlib.T_Bool;
	const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
	const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
	const ctc6 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));

	const _coin_prices = async (i, svs, args) => {
		if (stdlib.eq(i, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1"))) {
			const [v6629, v6630, v6631, v6632, v6647, v6654] = svs;
			stdlib.assert(false, "illegal view");
		}
		if (stdlib.eq(i, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"))) {
			const [
				v6629,
				v6630,
				v6631,
				v6632,
				v6654,
				v6695,
				v6696,
				v6704,
				v6705,
				v12146,
				v12147,
				v12149,
				v12151,
				v12152,
			] = svs;
			return await (async () => {
				return v6695;
			})(...args);
		}
		if (stdlib.eq(i, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5"))) {
			const [
				v6629,
				v6630,
				v6631,
				v6632,
				v6654,
				v6695,
				v6696,
				v6697,
				v6704,
				v6705,
				v6735,
				v6737,
				v6738,
				v6739,
				v6740,
				v6741,
				v6742,
				v6743,
				v6744,
				v6746,
				v6747,
				v6748,
			] = svs;
			return await (async () => {
				return v6695;
			})(...args);
		}

		stdlib.assert(false, "illegal view");
	};
	const _coin_supply = async (i, svs, args) => {
		if (stdlib.eq(i, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1"))) {
			const [v6629, v6630, v6631, v6632, v6647, v6654] = svs;
			stdlib.assert(false, "illegal view");
		}
		if (stdlib.eq(i, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"))) {
			const [
				v6629,
				v6630,
				v6631,
				v6632,
				v6654,
				v6695,
				v6696,
				v6704,
				v6705,
				v12146,
				v12147,
				v12149,
				v12151,
				v12152,
			] = svs;
			return await (async () => {
				return v12152;
			})(...args);
		}
		if (stdlib.eq(i, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5"))) {
			const [
				v6629,
				v6630,
				v6631,
				v6632,
				v6654,
				v6695,
				v6696,
				v6697,
				v6704,
				v6705,
				v6735,
				v6737,
				v6738,
				v6739,
				v6740,
				v6741,
				v6742,
				v6743,
				v6744,
				v6746,
				v6747,
				v6748,
			] = svs;
			return await (async () => {
				return v6744;
			})(...args);
		}

		stdlib.assert(false, "illegal view");
	};
	const _is_paused = async (i, svs, args) => {
		if (stdlib.eq(i, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1"))) {
			const [v6629, v6630, v6631, v6632, v6647, v6654] = svs;
			stdlib.assert(false, "illegal view");
		}
		if (stdlib.eq(i, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"))) {
			const [
				v6629,
				v6630,
				v6631,
				v6632,
				v6654,
				v6695,
				v6696,
				v6704,
				v6705,
				v12146,
				v12147,
				v12149,
				v12151,
				v12152,
			] = svs;
			return await (async () => {
				return v6696;
			})(...args);
		}
		if (stdlib.eq(i, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5"))) {
			const [
				v6629,
				v6630,
				v6631,
				v6632,
				v6654,
				v6695,
				v6696,
				v6697,
				v6704,
				v6705,
				v6735,
				v6737,
				v6738,
				v6739,
				v6740,
				v6741,
				v6742,
				v6743,
				v6744,
				v6746,
				v6747,
				v6748,
			] = svs;
			return await (async () => {
				return v6696;
			})(...args);
		}

		stdlib.assert(false, "illegal view");
	};
	return {
		infos: {
			coin_prices: {
				decode: _coin_prices,
				dom: [],
				rng: ctc6,
			},
			coin_supply: {
				decode: _coin_supply,
				dom: [],
				rng: ctc6,
			},
			is_paused: {
				decode: _is_paused,
				dom: [],
				rng: ctc3,
			},
		},
		views: {
			1: [ctc0, ctc1, ctc1, ctc1, ctc5, ctc0],
			3: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc6, ctc3, ctc5, ctc2, ctc4, ctc2, ctc2, ctc2, ctc6],
			5: [
				ctc0,
				ctc1,
				ctc1,
				ctc1,
				ctc0,
				ctc6,
				ctc3,
				ctc3,
				ctc5,
				ctc2,
				ctc3,
				ctc3,
				ctc4,
				ctc2,
				ctc4,
				ctc2,
				ctc4,
				ctc2,
				ctc6,
				ctc2,
				ctc2,
				ctc2,
			],
		},
	};
}
export function _getMaps(s) {
	const stdlib = s.reachStdlib;
	const ctc0 = stdlib.T_Tuple([]);
	return {
		mapDataTy: ctc0,
	};
}
export async function Admin(ctcTop, interact) {
	if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
		return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));
	}
	if (typeof interact !== "object") {
		return Promise.reject(
			new Error(`The backend for Admin expects to receive an interact object as its second argument.`),
		);
	}
	const ctc = ctcTop._initialize();
	const stdlib = ctc.stdlib;
	const ctc0 = stdlib.T_Token;
	const ctc1 = stdlib.T_Tuple([]);
	const ctc2 = stdlib.T_UInt;
	const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
	const ctc4 = stdlib.T_Tuple([ctc3]);
	const ctc5 = stdlib.T_Data({
		buyer_api_bronze0_907: ctc1,
		buyer_api_gold0_907: ctc1,
		buyer_api_silver0_907: ctc1,
		controller_api_restock0_907: ctc4,
		controller_api_set_prices0_907: ctc4,
		controller_api_terminate0_907: ctc1,
		controller_api_toggle_pause0_907: ctc1,
		controller_api_withdraw0_907: ctc1,
	});
	const ctc6 = stdlib.T_Bool;
	const ctc7 = stdlib.T_Null;
	const ctc8 = stdlib.T_Address;
	const ctc9 = stdlib.T_Tuple([ctc2, ctc2, ctc6]);
	const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));

	const v6583 = [
		stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
		stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
		false,
	];
	const v6584 = [v6583, v6583, v6583];
	const txn1 = await ctc.recv({
		didSend: false,
		evt_cnt: 3,
		funcNum: 0,
		out_tys: [ctc0, ctc0, ctc0],
		timeoutAt: undefined /* mto */,
		waitIfNotPresent: false,
	});
	const {
		data: [v6630, v6631, v6632],
		secs: v6634,
		time: v6633,
		didSend: v439,
		from: v6629,
	} = txn1;
	const v6635 = v6584[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0")];
	const v6636 = stdlib.Array_set(
		v6635,
		"0",
		stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"),
	);
	const v6637 = stdlib.Array_set(
		v6584,
		stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"),
		v6636,
	);
	const v6639 = v6637[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "1")];
	const v6640 = stdlib.Array_set(
		v6639,
		"0",
		stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"),
	);
	const v6641 = stdlib.Array_set(
		v6637,
		stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "1"),
		v6640,
	);
	const v6643 = stdlib.tokenEq(v6631, v6630);
	const v6644 = v6643 ? false : true;
	stdlib.assert(v6644, {
		at: "./src/contracts/coin_shop.rsh:103:18:dot",
		fs: [],
		msg: "non-network tokens distinct",
		who: "Admin",
	});
	const v6645 = v6641[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "2")];
	const v6646 = stdlib.Array_set(
		v6645,
		"0",
		stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"),
	);
	const v6647 = stdlib.Array_set(
		v6641,
		stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "2"),
		v6646,
	);
	const v6649 = stdlib.tokenEq(v6632, v6630);
	const v6650 = v6649 ? false : true;
	const v6651 = stdlib.tokenEq(v6632, v6631);
	const v6652 = v6651 ? false : true;
	const v6653 = v6649 ? false : v6652;
	stdlib.assert(v6653, {
		at: "./src/contracts/coin_shop.rsh:103:18:dot",
		fs: [],
		msg: "non-network tokens distinct",
		who: "Admin",
	});
	const v6654 = ctc.iam(v6629);
	const v6660 = stdlib.tokenEq(v6630, v6631);
	const v6661 = v6660 ? false : true;
	stdlib.assert(v6661, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at ./src/contracts/coin_shop.rsh:109:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
		],
		msg: "The asa ids provided are the same",
		who: "Admin",
	});
	const v6664 = stdlib.tokenEq(v6630, v6632);
	const v6665 = v6664 ? false : true;
	stdlib.assert(v6665, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at ./src/contracts/coin_shop.rsh:109:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
		],
		msg: "The asa ids provided are the same",
		who: "Admin",
	});
	const v6674 = stdlib.tokenEq(v6631, v6632);
	const v6675 = v6674 ? false : true;
	stdlib.assert(v6675, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at ./src/contracts/coin_shop.rsh:109:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
		],
		msg: "The asa ids provided are the same",
		who: "Admin",
	});
	stdlib.assert(v6650, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at ./src/contracts/coin_shop.rsh:109:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
		],
		msg: "The asa ids provided are the same",
		who: "Admin",
	});
	stdlib.assert(v6652, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at ./src/contracts/coin_shop.rsh:109:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
		],
		msg: "The asa ids provided are the same",
		who: "Admin",
	});
	const txn2 = await ctc.recv({
		didSend: false,
		evt_cnt: 0,
		funcNum: 1,
		out_tys: [],
		timeoutAt: undefined /* mto */,
		waitIfNotPresent: false,
	});
	const {
		data: [],
		secs: v6692,
		time: v6691,
		didSend: v845,
		from: v6690,
	} = txn2;
	const v6693 = stdlib.addressEq(v6629, v6690);
	stdlib.assert(v6693, {
		at: "./src/contracts/coin_shop.rsh:115:18:dot",
		fs: [],
		msg: "sender correct",
		who: "Admin",
	});
	const v6694 = [
		stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "10000000"),
		stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "20000000"),
		stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "30000000"),
	];
	let v6695 = v6694;
	let v6696 = false;
	let v6697 = false;
	let v6698 = v6691;
	let v6704 = v6647;
	let v6705 = stdlib.checkedBigNumberify(
		"./src/contracts/coin_shop.rsh:95:15:after expr stmt semicolon",
		stdlib.UInt_max,
		"0",
	);

	let txn3 = txn2;
	while (
		await (async () => {
			const v6722 = v6697 ? false : true;

			return v6722;
		})()
	) {
		const v6735 = v6696 ? false : true;
		const v6736 = v6697 ? false : true;
		const v6737 = v6696 ? false : v6736;
		const v6738 =
			v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
		const v6739 =
			v6738[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
		const v6740 =
			v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
		const v6741 =
			v6740[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
		const v6742 =
			v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
		const v6743 =
			v6742[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
		const v6744 = [v6739, v6741, v6743];
		const v6746 =
			v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "0")];
		const v6747 =
			v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "1")];
		const v6748 =
			v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "2")];
		const txn4 = await ctc.recv({
			didSend: false,
			evt_cnt: 1,
			funcNum: 4,
			out_tys: [ctc5],
			timeoutAt: undefined /* mto */,
			waitIfNotPresent: false,
		});
		const {
			data: [v7228],
			secs: v7230,
			time: v7229,
			didSend: v5406,
			from: v7227,
		} = txn4;
		switch (v7228[0]) {
			case "buyer_api_bronze0_907": {
				const v7231 = v7228[1];
				undefined /* setApiDetails */;
				stdlib.assert(v6737, {
					at: "reach standard library:57:5:application",
					fs: [
						'at ./src/contracts/util/checks.rsh:33:33:application call to "check" (defined at: reach standard library:49:32:function exp)',
						'at ./src/contracts/coin_shop.rsh:150:36:application call to "checkActive" (defined at: ./src/contracts/util/checks.rsh:33:25:function exp)',
						"at ./src/contracts/coin_shop.rsh:149:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
						"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
					],
					msg: "contract is currently inactive",
					who: "Admin",
				});
				const v7239 = stdlib.ge(
					v6739,
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:151:41:decimal", stdlib.UInt_max, "1"),
				);
				stdlib.assert(v7239, {
					at: "reach standard library:57:5:application",
					fs: [
						'at ./src/contracts/util/checks.rsh:29:42:application call to "check" (defined at: reach standard library:49:32:function exp)',
						'at ./src/contracts/coin_shop.rsh:151:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:29:34:function exp)',
						"at ./src/contracts/coin_shop.rsh:149:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
						"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
					],
					msg: "balance insufficient for transaction",
					who: "Admin",
				});
				const v7440 = stdlib.add(v6705, v6746);
				const v7441 = stdlib.le(v7440, stdlib.UInt_max);
				stdlib.assert(v7441, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v7446 = stdlib.le(v6739, stdlib.UInt_max);
				stdlib.assert(v7446, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v7454 = stdlib.le(v6741, stdlib.UInt_max);
				stdlib.assert(v7454, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v7462 = stdlib.le(v6743, stdlib.UInt_max);
				stdlib.assert(v7462, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v7499 = stdlib.sub(v7440, v7440);
				const v7500 = stdlib.ge(
					v7499,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:158:84:application",
						stdlib.UInt_max,
						"0",
					),
				);
				stdlib.assert(v7500, {
					at: "./src/contracts/coin_shop.rsh:158:84:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:156:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:156:43:function exp)",
					],
					msg: "assume >= 0",
					who: "Admin",
				});
				const v7529 = stdlib.sub(
					v6739,
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:159:64:decimal", stdlib.UInt_max, "1"),
				);
				const v7530 = stdlib.ge(
					v7529,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:159:76:application",
						stdlib.UInt_max,
						"0",
					),
				);
				stdlib.assert(v7530, {
					at: "./src/contracts/coin_shop.rsh:159:76:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:156:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:156:43:function exp)",
					],
					msg: "assume >= 0",
					who: "Admin",
				});
				const v7533 = stdlib.Array_set(v6738, "0", v7529);
				const v7534 = stdlib.Array_set(
					v6704,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:159:76:application",
						stdlib.UInt_max,
						"0",
					),
					v7533,
				);
				const v7535 = "bronze";
				null;
				const v7536 = true;
				await txn4.getOutput("buyer_api_bronze", "v7536", ctc6, v7536);
				const cv6695 = v6695;
				const cv6696 = v6696;
				const cv6697 = v6697;
				const cv6698 = v7229;
				const cv6704 = v7534;
				const cv6705 = v7499;

				v6695 = cv6695;
				v6696 = cv6696;
				v6697 = cv6697;
				v6698 = cv6698;
				v6704 = cv6704;
				v6705 = cv6705;

				txn3 = txn4;
				continue;
				break;
			}
			case "buyer_api_gold0_907": {
				const v7845 = v7228[1];
				undefined /* setApiDetails */;
				stdlib.assert(v6737, {
					at: "reach standard library:57:5:application",
					fs: [
						'at ./src/contracts/util/checks.rsh:33:33:application call to "check" (defined at: reach standard library:49:32:function exp)',
						'at ./src/contracts/coin_shop.rsh:190:36:application call to "checkActive" (defined at: ./src/contracts/util/checks.rsh:33:25:function exp)',
						"at ./src/contracts/coin_shop.rsh:189:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
						"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
					],
					msg: "contract is currently inactive",
					who: "Admin",
				});
				const v7876 = stdlib.ge(
					v6743,
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:191:41:decimal", stdlib.UInt_max, "1"),
				);
				stdlib.assert(v7876, {
					at: "reach standard library:57:5:application",
					fs: [
						'at ./src/contracts/util/checks.rsh:29:42:application call to "check" (defined at: reach standard library:49:32:function exp)',
						'at ./src/contracts/coin_shop.rsh:191:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:29:34:function exp)',
						"at ./src/contracts/coin_shop.rsh:189:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
						"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
					],
					msg: "balance insufficient for transaction",
					who: "Admin",
				});
				const v8054 = stdlib.add(v6705, v6748);
				const v8055 = stdlib.le(v8054, stdlib.UInt_max);
				stdlib.assert(v8055, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v8060 = stdlib.le(v6739, stdlib.UInt_max);
				stdlib.assert(v8060, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v8068 = stdlib.le(v6741, stdlib.UInt_max);
				stdlib.assert(v8068, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v8076 = stdlib.le(v6743, stdlib.UInt_max);
				stdlib.assert(v8076, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v8189 = stdlib.sub(v8054, v8054);
				const v8190 = stdlib.ge(
					v8189,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:198:84:application",
						stdlib.UInt_max,
						"0",
					),
				);
				stdlib.assert(v8190, {
					at: "./src/contracts/coin_shop.rsh:198:84:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:196:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:43:function exp)",
					],
					msg: "assume >= 0",
					who: "Admin",
				});
				const v8219 = stdlib.sub(
					v6743,
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:199:70:decimal", stdlib.UInt_max, "1"),
				);
				const v8220 = stdlib.ge(
					v8219,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:199:76:application",
						stdlib.UInt_max,
						"0",
					),
				);
				stdlib.assert(v8220, {
					at: "./src/contracts/coin_shop.rsh:199:76:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:196:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:43:function exp)",
					],
					msg: "assume >= 0",
					who: "Admin",
				});
				const v8223 = stdlib.Array_set(v6742, "0", v8219);
				const v8224 = stdlib.Array_set(
					v6704,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:199:76:application",
						stdlib.UInt_max,
						"2",
					),
					v8223,
				);
				const v8225 = "gold  ";
				null;
				const v8226 = true;
				await txn4.getOutput("buyer_api_gold", "v8226", ctc6, v8226);
				const cv6695 = v6695;
				const cv6696 = v6696;
				const cv6697 = v6697;
				const cv6698 = v7229;
				const cv6704 = v8224;
				const cv6705 = v8189;

				v6695 = cv6695;
				v6696 = cv6696;
				v6697 = cv6697;
				v6698 = cv6698;
				v6704 = cv6704;
				v6705 = cv6705;

				txn3 = txn4;
				continue;
				break;
			}
			case "buyer_api_silver0_907": {
				const v8459 = v7228[1];
				undefined /* setApiDetails */;
				stdlib.assert(v6737, {
					at: "reach standard library:57:5:application",
					fs: [
						'at ./src/contracts/util/checks.rsh:33:33:application call to "check" (defined at: reach standard library:49:32:function exp)',
						'at ./src/contracts/coin_shop.rsh:170:36:application call to "checkActive" (defined at: ./src/contracts/util/checks.rsh:33:25:function exp)',
						"at ./src/contracts/coin_shop.rsh:169:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
						"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
					],
					msg: "contract is currently inactive",
					who: "Admin",
				});
				const v8513 = stdlib.ge(
					v6741,
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:171:41:decimal", stdlib.UInt_max, "1"),
				);
				stdlib.assert(v8513, {
					at: "reach standard library:57:5:application",
					fs: [
						'at ./src/contracts/util/checks.rsh:29:42:application call to "check" (defined at: reach standard library:49:32:function exp)',
						'at ./src/contracts/coin_shop.rsh:171:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:29:34:function exp)',
						"at ./src/contracts/coin_shop.rsh:169:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
						"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
					],
					msg: "balance insufficient for transaction",
					who: "Admin",
				});
				const v8668 = stdlib.add(v6705, v6747);
				const v8669 = stdlib.le(v8668, stdlib.UInt_max);
				stdlib.assert(v8669, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v8674 = stdlib.le(v6739, stdlib.UInt_max);
				stdlib.assert(v8674, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v8682 = stdlib.le(v6741, stdlib.UInt_max);
				stdlib.assert(v8682, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v8690 = stdlib.le(v6743, stdlib.UInt_max);
				stdlib.assert(v8690, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v8879 = stdlib.sub(v8668, v8668);
				const v8880 = stdlib.ge(
					v8879,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:178:84:application",
						stdlib.UInt_max,
						"0",
					),
				);
				stdlib.assert(v8880, {
					at: "./src/contracts/coin_shop.rsh:178:84:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:176:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:43:function exp)",
					],
					msg: "assume >= 0",
					who: "Admin",
				});
				const v8909 = stdlib.sub(
					v6741,
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:179:67:decimal", stdlib.UInt_max, "1"),
				);
				const v8910 = stdlib.ge(
					v8909,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:179:76:application",
						stdlib.UInt_max,
						"0",
					),
				);
				stdlib.assert(v8910, {
					at: "./src/contracts/coin_shop.rsh:179:76:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:176:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:43:function exp)",
					],
					msg: "assume >= 0",
					who: "Admin",
				});
				const v8913 = stdlib.Array_set(v6740, "0", v8909);
				const v8914 = stdlib.Array_set(
					v6704,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:179:76:application",
						stdlib.UInt_max,
						"1",
					),
					v8913,
				);
				const v8915 = "silver";
				null;
				const v8916 = true;
				await txn4.getOutput("buyer_api_silver", "v8916", ctc6, v8916);
				const cv6695 = v6695;
				const cv6696 = v6696;
				const cv6697 = v6697;
				const cv6698 = v7229;
				const cv6704 = v8914;
				const cv6705 = v8879;

				v6695 = cv6695;
				v6696 = cv6696;
				v6697 = cv6697;
				v6698 = cv6698;
				v6704 = cv6704;
				v6705 = cv6705;

				txn3 = txn4;
				continue;
				break;
			}
			case "controller_api_restock0_907": {
				const v9073 = v7228[1];
				undefined /* setApiDetails */;
				const v9147 =
					v9073[
						stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:212:22:spread", stdlib.UInt_max, "0")
					];
				const v9148 = stdlib.addressEq(v7227, v6654);
				stdlib.assert(v9148, {
					at: "reach standard library:57:5:application",
					fs: [
						'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
						'at ./src/contracts/coin_shop.rsh:213:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
						"at ./src/contracts/coin_shop.rsh:212:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:212:50:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:212:50:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
						"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
					],
					msg: "action not permitted",
					who: "Admin",
				});
				const v9150 =
					v9147[
						stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:216:47:spread", stdlib.UInt_max, "0")
					];
				const v9151 =
					v9147[
						stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:216:47:spread", stdlib.UInt_max, "1")
					];
				const v9152 =
					v9147[
						stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:216:47:spread", stdlib.UInt_max, "2")
					];
				const v9283 = stdlib.le(v6705, stdlib.UInt_max);
				stdlib.assert(v9283, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v9287 = stdlib.add(v6739, v9150);
				const v9288 = stdlib.le(v9287, stdlib.UInt_max);
				stdlib.assert(v9288, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v9291 = stdlib.Array_set(v6738, "0", v9287);
				const v9292 = stdlib.Array_set(
					v6704,
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "0"),
					v9291,
				);
				const v9293 =
					v9292[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "1")];
				const v9294 =
					v9293[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "0")];
				const v9295 = stdlib.add(v9294, v9151);
				const v9296 = stdlib.le(v9295, stdlib.UInt_max);
				stdlib.assert(v9296, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v9299 = stdlib.Array_set(v9293, "0", v9295);
				const v9300 = stdlib.Array_set(
					v9292,
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "1"),
					v9299,
				);
				const v9301 =
					v9300[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "2")];
				const v9302 =
					v9301[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "0")];
				const v9303 = stdlib.add(v9302, v9152);
				const v9304 = stdlib.le(v9303, stdlib.UInt_max);
				stdlib.assert(v9304, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v9307 = stdlib.Array_set(v9301, "0", v9303);
				const v9308 = stdlib.Array_set(
					v9300,
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "2"),
					v9307,
				);
				const v9542 =
					v9308[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v9543 =
					v9542[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v9544 =
					v9308[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v9545 =
					v9544[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v9546 =
					v9308[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"2",
						)
					];
				const v9547 =
					v9546[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v9548 = [v9543, v9545, v9547];
				null;
				const v9551 = "Successfully restocked CoinAmount";
				stdlib.protect(ctc7, await interact.log(v9551), {
					at: "./src/contracts/coin_shop.rsh:221:59:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:221:59:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:221:59:function exp)",
						'at ./src/contracts/coin_shop.rsh:221:59:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:221:59:application)',
						"at ./src/contracts/coin_shop.rsh:217:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:217:43:function exp)",
					],
					msg: "log",
					who: "Admin",
				});

				const v9552 = true;
				await txn4.getOutput("controller_api_restock", "v9552", ctc6, v9552);
				const cv6695 = v6695;
				const cv6696 = v6696;
				const cv6697 = v6697;
				const cv6698 = v7229;
				const cv6704 = v9308;
				const cv6705 = v6705;

				v6695 = cv6695;
				v6696 = cv6696;
				v6697 = cv6697;
				v6698 = cv6698;
				v6704 = cv6704;
				v6705 = cv6705;

				txn3 = txn4;
				continue;
				break;
			}
			case "controller_api_set_prices0_907": {
				const v9687 = v7228[1];
				undefined /* setApiDetails */;
				const v9785 = stdlib.addressEq(v7227, v6654);
				stdlib.assert(v9785, {
					at: "reach standard library:57:5:application",
					fs: [
						'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
						'at ./src/contracts/coin_shop.rsh:230:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
						"at ./src/contracts/coin_shop.rsh:229:58:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:229:58:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:229:58:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
						"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
					],
					msg: "action not permitted",
					who: "Admin",
				});
				const v9897 = stdlib.le(v6705, stdlib.UInt_max);
				stdlib.assert(v9897, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v9902 = stdlib.le(v6739, stdlib.UInt_max);
				stdlib.assert(v9902, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v9910 = stdlib.le(v6741, stdlib.UInt_max);
				stdlib.assert(v9910, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v9918 = stdlib.le(v6743, stdlib.UInt_max);
				stdlib.assert(v9918, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v10178 =
					v9687[
						stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:229:22:spread", stdlib.UInt_max, "0")
					];
				null;
				const v10186 = "Successfully changed coin prices";
				stdlib.protect(ctc7, await interact.log(v10186), {
					at: "./src/contracts/coin_shop.rsh:238:59:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:238:59:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:238:59:function exp)",
						'at ./src/contracts/coin_shop.rsh:238:59:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:238:59:application)',
						"at ./src/contracts/coin_shop.rsh:234:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:234:43:function exp)",
					],
					msg: "log",
					who: "Admin",
				});

				const v10187 = true;
				await txn4.getOutput("controller_api_set_prices", "v10187", ctc6, v10187);
				const cv6695 = v10178;
				const cv6696 = v6696;
				const cv6697 = v6697;
				const cv6698 = v7229;
				const cv6704 = v6704;
				const cv6705 = v6705;

				v6695 = cv6695;
				v6696 = cv6696;
				v6697 = cv6697;
				v6698 = cv6698;
				v6704 = cv6704;
				v6705 = cv6705;

				txn3 = txn4;
				continue;
				break;
			}
			case "controller_api_terminate0_907": {
				const v10301 = v7228[1];
				undefined /* setApiDetails */;
				const v10418 = stdlib.addressEq(v7227, v6654);
				stdlib.assert(v10418, {
					at: "reach standard library:57:5:application",
					fs: [
						'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
						'at ./src/contracts/coin_shop.rsh:287:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
						"at ./src/contracts/coin_shop.rsh:286:48:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:286:48:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:286:48:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
						"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
					],
					msg: "action not permitted",
					who: "Admin",
				});
				const v10511 = stdlib.le(v6705, stdlib.UInt_max);
				stdlib.assert(v10511, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v10516 = stdlib.le(v6739, stdlib.UInt_max);
				stdlib.assert(v10516, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v10524 = stdlib.le(v6741, stdlib.UInt_max);
				stdlib.assert(v10524, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v10532 = stdlib.le(v6743, stdlib.UInt_max);
				stdlib.assert(v10532, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v10816 = "Terminating Contract Execution";
				stdlib.protect(ctc7, await interact.log(v10816), {
					at: "./src/contracts/coin_shop.rsh:292:59:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:292:59:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:292:59:function exp)",
						'at ./src/contracts/coin_shop.rsh:292:59:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:292:59:application)',
						"at ./src/contracts/coin_shop.rsh:291:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:291:43:function exp)",
					],
					msg: "log",
					who: "Admin",
				});

				const v10817 = true;
				null;
				const v10818 = true;
				await txn4.getOutput("controller_api_terminate", "v10818", ctc6, v10818);
				const cv6695 = v6695;
				const cv6696 = v6696;
				const cv6697 = true;
				const cv6698 = v7229;
				const cv6704 = v6704;
				const cv6705 = v6705;

				v6695 = cv6695;
				v6696 = cv6696;
				v6697 = cv6697;
				v6698 = cv6698;
				v6704 = cv6704;
				v6705 = cv6705;

				txn3 = txn4;
				continue;
				break;
			}
			case "controller_api_toggle_pause0_907": {
				const v10915 = v7228[1];
				undefined /* setApiDetails */;
				const v11051 = stdlib.addressEq(v7227, v6654);
				stdlib.assert(v11051, {
					at: "reach standard library:57:5:application",
					fs: [
						'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
						'at ./src/contracts/coin_shop.rsh:247:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
						"at ./src/contracts/coin_shop.rsh:246:51:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:246:51:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:246:51:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
						"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
					],
					msg: "action not permitted",
					who: "Admin",
				});
				const v11125 = stdlib.le(v6705, stdlib.UInt_max);
				stdlib.assert(v11125, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v11130 = stdlib.le(v6739, stdlib.UInt_max);
				stdlib.assert(v11130, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v11138 = stdlib.le(v6741, stdlib.UInt_max);
				stdlib.assert(v11138, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v11146 = stdlib.le(v6743, stdlib.UInt_max);
				stdlib.assert(v11146, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v11442 = "Resuming Contract APIs        ";
				const v11443 = "Pausing Contract APIs         ";
				const v11444 = v6696 ? v11442 : v11443;
				stdlib.protect(ctc7, await interact.log(v11444), {
					at: "./src/contracts/coin_shop.rsh:256:59:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:256:59:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:256:59:function exp)",
						'at ./src/contracts/coin_shop.rsh:256:59:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:256:59:application)',
						"at ./src/contracts/coin_shop.rsh:251:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:251:43:function exp)",
					],
					msg: "log",
					who: "Admin",
				});

				await txn4.getOutput("controller_api_toggle_pause", "v6735", ctc6, v6735);
				const cv6695 = v6695;
				const cv6696 = v6735;
				const cv6697 = v6697;
				const cv6698 = v7229;
				const cv6704 = v6704;
				const cv6705 = v6705;

				v6695 = cv6695;
				v6696 = cv6696;
				v6697 = cv6697;
				v6698 = cv6698;
				v6704 = cv6704;
				v6705 = cv6705;

				txn3 = txn4;
				continue;
				break;
			}
			case "controller_api_withdraw0_907": {
				const v11529 = v7228[1];
				undefined /* setApiDetails */;
				const v11684 = stdlib.addressEq(v7227, v6654);
				stdlib.assert(v11684, {
					at: "reach standard library:57:5:application",
					fs: [
						'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
						'at ./src/contracts/coin_shop.rsh:267:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
						"at ./src/contracts/coin_shop.rsh:266:47:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:266:47:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:266:47:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
						"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
					],
					msg: "action not permitted",
					who: "Admin",
				});
				const v11739 = stdlib.le(v6705, stdlib.UInt_max);
				stdlib.assert(v11739, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v11744 = stdlib.le(v6739, stdlib.UInt_max);
				stdlib.assert(v11744, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v11752 = stdlib.le(v6741, stdlib.UInt_max);
				stdlib.assert(v11752, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v11760 = stdlib.le(v6743, stdlib.UInt_max);
				stdlib.assert(v11760, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Admin",
				});
				const v12072 = "Withdrawing CoinAmount from contract";
				stdlib.protect(ctc7, await interact.log(v12072), {
					at: "./src/contracts/coin_shop.rsh:272:59:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:272:59:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:272:59:function exp)",
						'at ./src/contracts/coin_shop.rsh:272:59:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:272:59:application)',
						"at ./src/contracts/coin_shop.rsh:271:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:43:function exp)",
					],
					msg: "log",
					who: "Admin",
				});

				const v12107 = stdlib.sub(v6739, v6739);
				const v12108 = stdlib.ge(
					v12107,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:276:76:application",
						stdlib.UInt_max,
						"0",
					),
				);
				stdlib.assert(v12108, {
					at: "./src/contracts/coin_shop.rsh:276:76:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:271:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:43:function exp)",
					],
					msg: "assume >= 0",
					who: "Admin",
				});
				const v12111 = stdlib.Array_set(v6738, "0", v12107);
				const v12112 = stdlib.Array_set(
					v6704,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:276:76:application",
						stdlib.UInt_max,
						"0",
					),
					v12111,
				);
				const v12113 =
					v12112[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:276:76:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v12114 =
					v12113[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:276:76:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v12118 = stdlib.sub(v12114, v6741);
				const v12119 = stdlib.ge(
					v12118,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:276:76:application",
						stdlib.UInt_max,
						"0",
					),
				);
				stdlib.assert(v12119, {
					at: "./src/contracts/coin_shop.rsh:276:76:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:271:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:43:function exp)",
					],
					msg: "assume >= 0",
					who: "Admin",
				});
				const v12122 = stdlib.Array_set(v12113, "0", v12118);
				const v12123 = stdlib.Array_set(
					v12112,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:276:76:application",
						stdlib.UInt_max,
						"1",
					),
					v12122,
				);
				const v12124 =
					v12123[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:276:76:application",
							stdlib.UInt_max,
							"2",
						)
					];
				const v12125 =
					v12124[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:276:76:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v12129 = stdlib.sub(v12125, v6743);
				const v12130 = stdlib.ge(
					v12129,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:276:76:application",
						stdlib.UInt_max,
						"0",
					),
				);
				stdlib.assert(v12130, {
					at: "./src/contracts/coin_shop.rsh:276:76:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:271:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:43:function exp)",
					],
					msg: "assume >= 0",
					who: "Admin",
				});
				const v12133 = stdlib.Array_set(v12124, "0", v12129);
				const v12134 = stdlib.Array_set(
					v12123,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:276:76:application",
						stdlib.UInt_max,
						"2",
					),
					v12133,
				);
				null;
				const v12136 = true;
				await txn4.getOutput("controller_api_withdraw", "v12136", ctc6, v12136);
				const cv6695 = v6695;
				const cv6696 = v6696;
				const cv6697 = v6697;
				const cv6698 = v7229;
				const cv6704 = v12134;
				const cv6705 = v6705;

				v6695 = cv6695;
				v6696 = cv6696;
				v6697 = cv6697;
				v6698 = cv6698;
				v6704 = cv6704;
				v6705 = cv6705;

				txn3 = txn4;
				continue;
				break;
			}
		}
	}
	const v12146 =
		v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
	const v12147 =
		v12146[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
	const v12148 =
		v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
	const v12149 =
		v12148[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
	const v12150 =
		v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
	const v12151 =
		v12150[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
	const v12152 = [v12147, v12149, v12151];
	const txn4 = await ctc.sendrecv({
		args: [v6629, v6630, v6631, v6632, v6654, v6695, v6696, v6704, v6705, v12146, v12147, v12149, v12151, v12152],
		evt_cnt: 0,
		funcNum: 3,
		lct: v6698,
		onlyIf: true,
		out_tys: [],
		pay: [stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"), []],
		sim_p: async (txn4) => {
			const sim_r = { txns: [], mapRefs: [], maps: [] };
			let sim_txn_ctr = stdlib.UInt_max;
			const getSimTokCtr = () => {
				sim_txn_ctr = sim_txn_ctr.sub(1);
				return sim_txn_ctr;
			};

			const {
				data: [],
				secs: v12165,
				time: v12164,
				didSend: v6024,
				from: v12163,
			} = txn4;

			sim_r.txns.push({
				kind: "from",
				to: v6654,
				tok: undefined /* Nothing */,
			});
			sim_r.txns.push({
				kind: "from",
				to: v6654,
				tok: v6630,
			});
			sim_r.txns.push({
				kind: "from",
				to: v6654,
				tok: v6631,
			});
			sim_r.txns.push({
				kind: "from",
				to: v6654,
				tok: v6632,
			});
			sim_r.txns.push({
				kind: "halt",
				tok: v6632,
			});
			sim_r.txns.push({
				kind: "halt",
				tok: v6631,
			});
			sim_r.txns.push({
				kind: "halt",
				tok: v6630,
			});
			sim_r.txns.push({
				kind: "halt",
				tok: undefined /* Nothing */,
			});
			sim_r.isHalt = true;

			return sim_r;
		},
		soloSend: false,
		timeoutAt: undefined /* mto */,
		tys: [ctc8, ctc0, ctc0, ctc0, ctc8, ctc3, ctc6, ctc10, ctc2, ctc9, ctc2, ctc2, ctc2, ctc3],
		waitIfNotPresent: false,
	});
	const {
		data: [],
		secs: v12165,
		time: v12164,
		didSend: v6024,
		from: v12163,
	} = txn4;
	const v12166 = stdlib.addressEq(v6654, v12163);
	const v12167 = stdlib.addressEq(v6629, v12163);
	const v12168 = v12166 ? true : v12167;
	stdlib.assert(v12168, {
		at: "reach standard library:197:11:dot",
		fs: [
			'at ./src/contracts/coin_shop.rsh:304:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
		],
		msg: "sender correct",
		who: "Admin",
	});
	const v12191 = stdlib.sub(v6705, v6705);
	const v12192 = stdlib.ge(
		v12191,
		stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"),
	);
	stdlib.assert(v12192, {
		at: "reach standard library:198:46:application",
		fs: [
			'at ./src/contracts/coin_shop.rsh:304:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
		],
		msg: "assume >= 0",
		who: "Admin",
	});
	const v12199 = stdlib.sub(v12147, v12147);
	const v12200 = stdlib.ge(
		v12199,
		stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"),
	);
	stdlib.assert(v12200, {
		at: "reach standard library:198:46:application",
		fs: [
			'at ./src/contracts/coin_shop.rsh:304:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
		],
		msg: "assume >= 0",
		who: "Admin",
	});
	const v12203 = stdlib.Array_set(v12146, "0", v12199);
	const v12204 = stdlib.Array_set(
		v6704,
		stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"),
		v12203,
	);
	const v12205 =
		v12204[stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "1")];
	const v12206 =
		v12205[stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0")];
	const v12210 = stdlib.sub(v12206, v12149);
	const v12211 = stdlib.ge(
		v12210,
		stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"),
	);
	stdlib.assert(v12211, {
		at: "reach standard library:198:46:application",
		fs: [
			'at ./src/contracts/coin_shop.rsh:304:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
		],
		msg: "assume >= 0",
		who: "Admin",
	});
	const v12214 = stdlib.Array_set(v12205, "0", v12210);
	const v12215 = stdlib.Array_set(
		v12204,
		stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "1"),
		v12214,
	);
	const v12216 =
		v12215[stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "2")];
	const v12217 =
		v12216[stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0")];
	const v12221 = stdlib.sub(v12217, v12151);
	const v12222 = stdlib.ge(
		v12221,
		stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"),
	);
	stdlib.assert(v12222, {
		at: "reach standard library:198:46:application",
		fs: [
			'at ./src/contracts/coin_shop.rsh:304:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
		],
		msg: "assume >= 0",
		who: "Admin",
	});
	const v12240 = "Closing contract...";
	stdlib.protect(ctc7, await interact.log(v12240), {
		at: "./src/contracts/coin_shop.rsh:307:43:application",
		fs: [
			"at ./src/contracts/coin_shop.rsh:307:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:307:43:function exp)",
			'at ./src/contracts/coin_shop.rsh:307:43:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:307:43:application)',
			'at reach standard library:200:8:application call to "after" (defined at: ./src/contracts/coin_shop.rsh:306:20:function exp)',
			'at ./src/contracts/coin_shop.rsh:304:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
		],
		msg: "log",
		who: "Admin",
	});

	return;
}
export async function Deployer(ctcTop, interact) {
	if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
		return Promise.reject(
			new Error(`The backend for Deployer expects to receive a contract as its first argument.`),
		);
	}
	if (typeof interact !== "object") {
		return Promise.reject(
			new Error(`The backend for Deployer expects to receive an interact object as its second argument.`),
		);
	}
	const ctc = ctcTop._initialize();
	const stdlib = ctc.stdlib;
	const ctc0 = stdlib.T_Token;
	const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
	const ctc2 = stdlib.T_Null;
	const ctc3 = stdlib.T_Tuple([]);
	const ctc4 = stdlib.T_UInt;
	const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
	const ctc6 = stdlib.T_Tuple([ctc5]);
	const ctc7 = stdlib.T_Data({
		buyer_api_bronze0_907: ctc3,
		buyer_api_gold0_907: ctc3,
		buyer_api_silver0_907: ctc3,
		controller_api_restock0_907: ctc6,
		controller_api_set_prices0_907: ctc6,
		controller_api_terminate0_907: ctc3,
		controller_api_toggle_pause0_907: ctc3,
		controller_api_withdraw0_907: ctc3,
	});
	const ctc8 = stdlib.T_Bool;
	const ctc9 = stdlib.T_Address;
	const ctc10 = stdlib.T_Tuple([ctc4, ctc4, ctc8]);
	const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));

	const v6583 = [
		stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
		stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
		false,
	];
	const v6584 = [v6583, v6583, v6583];
	const v6588 = stdlib.protect(ctc1, interact.coin_asa_ids, "for Deployer's interact field coin_asa_ids");
	const v6589 =
		v6588[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:47:37:application", stdlib.UInt_max, "0")];
	const v6590 =
		v6588[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:47:37:application", stdlib.UInt_max, "1")];
	const v6591 =
		v6588[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:47:37:application", stdlib.UInt_max, "2")];

	const v6602 = stdlib.tokenEq(v6589, v6590);
	const v6603 = v6602 ? false : true;
	stdlib.assert(v6603, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at ./src/contracts/coin_shop.rsh:101:34:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
			"at ./src/contracts/coin_shop.rsh:98:22:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:98:26:function exp)",
		],
		msg: "The asa ids provided are the same",
		who: "Deployer",
	});
	const v6606 = stdlib.tokenEq(v6589, v6591);
	const v6607 = v6606 ? false : true;
	stdlib.assert(v6607, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at ./src/contracts/coin_shop.rsh:101:34:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
			"at ./src/contracts/coin_shop.rsh:98:22:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:98:26:function exp)",
		],
		msg: "The asa ids provided are the same",
		who: "Deployer",
	});
	const v6611 = stdlib.tokenEq(v6590, v6589);
	const v6612 = v6611 ? false : true;
	stdlib.assert(v6612, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at ./src/contracts/coin_shop.rsh:101:34:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
			"at ./src/contracts/coin_shop.rsh:98:22:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:98:26:function exp)",
		],
		msg: "The asa ids provided are the same",
		who: "Deployer",
	});
	const v6616 = stdlib.tokenEq(v6590, v6591);
	const v6617 = v6616 ? false : true;
	stdlib.assert(v6617, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at ./src/contracts/coin_shop.rsh:101:34:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
			"at ./src/contracts/coin_shop.rsh:98:22:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:98:26:function exp)",
		],
		msg: "The asa ids provided are the same",
		who: "Deployer",
	});
	const v6621 = stdlib.tokenEq(v6591, v6589);
	const v6622 = v6621 ? false : true;
	stdlib.assert(v6622, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at ./src/contracts/coin_shop.rsh:101:34:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
			"at ./src/contracts/coin_shop.rsh:98:22:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:98:26:function exp)",
		],
		msg: "The asa ids provided are the same",
		who: "Deployer",
	});
	const v6625 = stdlib.tokenEq(v6591, v6590);
	const v6626 = v6625 ? false : true;
	stdlib.assert(v6626, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at ./src/contracts/coin_shop.rsh:101:34:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
			"at ./src/contracts/coin_shop.rsh:98:22:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:98:26:function exp)",
		],
		msg: "The asa ids provided are the same",
		who: "Deployer",
	});

	const txn1 = await ctc.sendrecv({
		args: [v6589, v6590, v6591],
		evt_cnt: 3,
		funcNum: 0,
		lct: stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"),
		onlyIf: true,
		out_tys: [ctc0, ctc0, ctc0],
		pay: [stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:decimal", stdlib.UInt_max, "0"), []],
		sim_p: async (txn1) => {
			const sim_r = { txns: [], mapRefs: [], maps: [] };
			let sim_txn_ctr = stdlib.UInt_max;
			const getSimTokCtr = () => {
				sim_txn_ctr = sim_txn_ctr.sub(1);
				return sim_txn_ctr;
			};

			const {
				data: [v6630, v6631, v6632],
				secs: v6634,
				time: v6633,
				didSend: v439,
				from: v6629,
			} = txn1;

			const v6635 =
				v6584[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0")];
			const v6636 = stdlib.Array_set(
				v6635,
				"0",
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"),
			);
			const v6637 = stdlib.Array_set(
				v6584,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"),
				v6636,
			);
			const v6639 =
				v6637[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "1")];
			const v6640 = stdlib.Array_set(
				v6639,
				"0",
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"),
			);
			const v6641 = stdlib.Array_set(
				v6637,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "1"),
				v6640,
			);
			const v6645 =
				v6641[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "2")];
			const v6646 = stdlib.Array_set(
				v6645,
				"0",
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"),
			);
			const v6647 = stdlib.Array_set(
				v6641,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "2"),
				v6646,
			);
			sim_r.txns.push({
				amt: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
				kind: "init",
				tok: v6630,
			});
			sim_r.txns.push({
				amt: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
				kind: "init",
				tok: v6631,
			});
			sim_r.txns.push({
				amt: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
				kind: "init",
				tok: v6632,
			});
			const v6654 = v6629;
			const v6687 = await ctc.getContractInfo();
			const v6688 = await ctc.getContractAddress();
			sim_r.isHalt = false;

			return sim_r;
		},
		soloSend: true,
		timeoutAt: undefined /* mto */,
		tys: [ctc0, ctc0, ctc0],
		waitIfNotPresent: false,
	});
	const {
		data: [v6630, v6631, v6632],
		secs: v6634,
		time: v6633,
		didSend: v439,
		from: v6629,
	} = txn1;
	const v6635 = v6584[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0")];
	const v6636 = stdlib.Array_set(
		v6635,
		"0",
		stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"),
	);
	const v6637 = stdlib.Array_set(
		v6584,
		stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"),
		v6636,
	);
	const v6639 = v6637[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "1")];
	const v6640 = stdlib.Array_set(
		v6639,
		"0",
		stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"),
	);
	const v6641 = stdlib.Array_set(
		v6637,
		stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "1"),
		v6640,
	);
	const v6643 = stdlib.tokenEq(v6631, v6630);
	const v6644 = v6643 ? false : true;
	stdlib.assert(v6644, {
		at: "./src/contracts/coin_shop.rsh:103:18:dot",
		fs: [],
		msg: "non-network tokens distinct",
		who: "Deployer",
	});
	const v6645 = v6641[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "2")];
	const v6646 = stdlib.Array_set(
		v6645,
		"0",
		stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"),
	);
	const v6647 = stdlib.Array_set(
		v6641,
		stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "2"),
		v6646,
	);
	const v6649 = stdlib.tokenEq(v6632, v6630);
	const v6650 = v6649 ? false : true;
	const v6651 = stdlib.tokenEq(v6632, v6631);
	const v6652 = v6651 ? false : true;
	const v6653 = v6649 ? false : v6652;
	stdlib.assert(v6653, {
		at: "./src/contracts/coin_shop.rsh:103:18:dot",
		fs: [],
		msg: "non-network tokens distinct",
		who: "Deployer",
	});
	const v6654 = v6629;
	const v6660 = stdlib.tokenEq(v6630, v6631);
	const v6661 = v6660 ? false : true;
	stdlib.assert(v6661, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at ./src/contracts/coin_shop.rsh:109:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
		],
		msg: "The asa ids provided are the same",
		who: "Deployer",
	});
	const v6664 = stdlib.tokenEq(v6630, v6632);
	const v6665 = v6664 ? false : true;
	stdlib.assert(v6665, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at ./src/contracts/coin_shop.rsh:109:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
		],
		msg: "The asa ids provided are the same",
		who: "Deployer",
	});
	const v6674 = stdlib.tokenEq(v6631, v6632);
	const v6675 = v6674 ? false : true;
	stdlib.assert(v6675, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at ./src/contracts/coin_shop.rsh:109:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
		],
		msg: "The asa ids provided are the same",
		who: "Deployer",
	});
	stdlib.assert(v6650, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at ./src/contracts/coin_shop.rsh:109:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
		],
		msg: "The asa ids provided are the same",
		who: "Deployer",
	});
	stdlib.assert(v6652, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
			"at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
			'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
			"at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
			'at ./src/contracts/coin_shop.rsh:109:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
		],
		msg: "The asa ids provided are the same",
		who: "Deployer",
	});
	const v6687 = await ctc.getContractInfo();
	const v6688 = await ctc.getContractAddress();
	stdlib.protect(ctc2, await interact.deployed(v6687, v6688), {
		at: "./src/contracts/coin_shop.rsh:113:35:application",
		fs: [
			"at ./src/contracts/coin_shop.rsh:113:35:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:113:35:function exp)",
			'at ./src/contracts/coin_shop.rsh:113:35:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:113:35:application)',
		],
		msg: "deployed",
		who: "Deployer",
	});

	const txn2 = await ctc.sendrecv({
		args: [v6629, v6630, v6631, v6632, v6647, v6654],
		evt_cnt: 0,
		funcNum: 1,
		lct: v6633,
		onlyIf: true,
		out_tys: [],
		pay: [stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:115:18:decimal", stdlib.UInt_max, "0"), []],
		sim_p: async (txn2) => {
			const sim_r = { txns: [], mapRefs: [], maps: [] };
			let sim_txn_ctr = stdlib.UInt_max;
			const getSimTokCtr = () => {
				sim_txn_ctr = sim_txn_ctr.sub(1);
				return sim_txn_ctr;
			};

			const {
				data: [],
				secs: v6692,
				time: v6691,
				didSend: v845,
				from: v6690,
			} = txn2;

			const v6694 = [
				stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "10000000"),
				stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "20000000"),
				stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "30000000"),
			];
			const v6695 = v6694;
			const v6696 = false;
			const v6697 = false;
			const v6698 = v6691;
			const v6704 = v6647;
			const v6705 = stdlib.checkedBigNumberify(
				"./src/contracts/coin_shop.rsh:95:15:after expr stmt semicolon",
				stdlib.UInt_max,
				"0",
			);

			if (
				await (async () => {
					const v6722 = v6697 ? false : true;

					return v6722;
				})()
			) {
				const v6735 = v6696 ? false : true;
				const v6736 = v6697 ? false : true;
				const v6737 = v6696 ? false : v6736;
				const v6738 =
					v6704[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v6739 =
					v6738[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v6740 =
					v6704[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v6741 =
					v6740[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v6742 =
					v6704[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"2",
						)
					];
				const v6743 =
					v6742[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v6744 = [v6739, v6741, v6743];
				const v6746 =
					v6695[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:144:45:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v6747 =
					v6695[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:144:45:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v6748 =
					v6695[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:144:45:application",
							stdlib.UInt_max,
							"2",
						)
					];
				sim_r.isHalt = false;
			} else {
				const v12146 =
					v6704[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v12147 =
					v12146[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v12148 =
					v6704[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v12149 =
					v12148[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v12150 =
					v6704[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"2",
						)
					];
				const v12151 =
					v12150[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v12152 = [v12147, v12149, v12151];
				sim_r.isHalt = false;
			}
			return sim_r;
		},
		soloSend: true,
		timeoutAt: undefined /* mto */,
		tys: [ctc9, ctc0, ctc0, ctc0, ctc11, ctc9],
		waitIfNotPresent: false,
	});
	const {
		data: [],
		secs: v6692,
		time: v6691,
		didSend: v845,
		from: v6690,
	} = txn2;
	const v6693 = stdlib.addressEq(v6629, v6690);
	stdlib.assert(v6693, {
		at: "./src/contracts/coin_shop.rsh:115:18:dot",
		fs: [],
		msg: "sender correct",
		who: "Deployer",
	});
	const v6694 = [
		stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "10000000"),
		stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "20000000"),
		stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "30000000"),
	];
	let v6695 = v6694;
	let v6696 = false;
	let v6697 = false;
	let v6698 = v6691;
	let v6704 = v6647;
	let v6705 = stdlib.checkedBigNumberify(
		"./src/contracts/coin_shop.rsh:95:15:after expr stmt semicolon",
		stdlib.UInt_max,
		"0",
	);

	let txn3 = txn2;
	while (
		await (async () => {
			const v6722 = v6697 ? false : true;

			return v6722;
		})()
	) {
		const v6735 = v6696 ? false : true;
		const v6736 = v6697 ? false : true;
		const v6737 = v6696 ? false : v6736;
		const v6738 =
			v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
		const v6739 =
			v6738[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
		const v6740 =
			v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
		const v6741 =
			v6740[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
		const v6742 =
			v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
		const v6743 =
			v6742[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
		const v6744 = [v6739, v6741, v6743];
		const v6746 =
			v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "0")];
		const v6747 =
			v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "1")];
		const v6748 =
			v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "2")];
		const txn4 = await ctc.recv({
			didSend: false,
			evt_cnt: 1,
			funcNum: 4,
			out_tys: [ctc7],
			timeoutAt: undefined /* mto */,
			waitIfNotPresent: false,
		});
		const {
			data: [v7228],
			secs: v7230,
			time: v7229,
			didSend: v5406,
			from: v7227,
		} = txn4;
		switch (v7228[0]) {
			case "buyer_api_bronze0_907": {
				const v7231 = v7228[1];
				undefined /* setApiDetails */;
				stdlib.assert(v6737, {
					at: "reach standard library:57:5:application",
					fs: [
						'at ./src/contracts/util/checks.rsh:33:33:application call to "check" (defined at: reach standard library:49:32:function exp)',
						'at ./src/contracts/coin_shop.rsh:150:36:application call to "checkActive" (defined at: ./src/contracts/util/checks.rsh:33:25:function exp)',
						"at ./src/contracts/coin_shop.rsh:149:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
						"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
					],
					msg: "contract is currently inactive",
					who: "Deployer",
				});
				const v7239 = stdlib.ge(
					v6739,
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:151:41:decimal", stdlib.UInt_max, "1"),
				);
				stdlib.assert(v7239, {
					at: "reach standard library:57:5:application",
					fs: [
						'at ./src/contracts/util/checks.rsh:29:42:application call to "check" (defined at: reach standard library:49:32:function exp)',
						'at ./src/contracts/coin_shop.rsh:151:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:29:34:function exp)',
						"at ./src/contracts/coin_shop.rsh:149:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
						"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
					],
					msg: "balance insufficient for transaction",
					who: "Deployer",
				});
				const v7440 = stdlib.add(v6705, v6746);
				const v7441 = stdlib.le(v7440, stdlib.UInt_max);
				stdlib.assert(v7441, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v7446 = stdlib.le(v6739, stdlib.UInt_max);
				stdlib.assert(v7446, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v7454 = stdlib.le(v6741, stdlib.UInt_max);
				stdlib.assert(v7454, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v7462 = stdlib.le(v6743, stdlib.UInt_max);
				stdlib.assert(v7462, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v7499 = stdlib.sub(v7440, v7440);
				const v7500 = stdlib.ge(
					v7499,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:158:84:application",
						stdlib.UInt_max,
						"0",
					),
				);
				stdlib.assert(v7500, {
					at: "./src/contracts/coin_shop.rsh:158:84:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:156:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:156:43:function exp)",
					],
					msg: "assume >= 0",
					who: "Deployer",
				});
				const v7529 = stdlib.sub(
					v6739,
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:159:64:decimal", stdlib.UInt_max, "1"),
				);
				const v7530 = stdlib.ge(
					v7529,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:159:76:application",
						stdlib.UInt_max,
						"0",
					),
				);
				stdlib.assert(v7530, {
					at: "./src/contracts/coin_shop.rsh:159:76:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:156:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:156:43:function exp)",
					],
					msg: "assume >= 0",
					who: "Deployer",
				});
				const v7533 = stdlib.Array_set(v6738, "0", v7529);
				const v7534 = stdlib.Array_set(
					v6704,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:159:76:application",
						stdlib.UInt_max,
						"0",
					),
					v7533,
				);
				const v7535 = "bronze";
				null;
				const v7536 = true;
				await txn4.getOutput("buyer_api_bronze", "v7536", ctc8, v7536);
				const cv6695 = v6695;
				const cv6696 = v6696;
				const cv6697 = v6697;
				const cv6698 = v7229;
				const cv6704 = v7534;
				const cv6705 = v7499;

				v6695 = cv6695;
				v6696 = cv6696;
				v6697 = cv6697;
				v6698 = cv6698;
				v6704 = cv6704;
				v6705 = cv6705;

				txn3 = txn4;
				continue;
				break;
			}
			case "buyer_api_gold0_907": {
				const v7845 = v7228[1];
				undefined /* setApiDetails */;
				stdlib.assert(v6737, {
					at: "reach standard library:57:5:application",
					fs: [
						'at ./src/contracts/util/checks.rsh:33:33:application call to "check" (defined at: reach standard library:49:32:function exp)',
						'at ./src/contracts/coin_shop.rsh:190:36:application call to "checkActive" (defined at: ./src/contracts/util/checks.rsh:33:25:function exp)',
						"at ./src/contracts/coin_shop.rsh:189:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
						"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
					],
					msg: "contract is currently inactive",
					who: "Deployer",
				});
				const v7876 = stdlib.ge(
					v6743,
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:191:41:decimal", stdlib.UInt_max, "1"),
				);
				stdlib.assert(v7876, {
					at: "reach standard library:57:5:application",
					fs: [
						'at ./src/contracts/util/checks.rsh:29:42:application call to "check" (defined at: reach standard library:49:32:function exp)',
						'at ./src/contracts/coin_shop.rsh:191:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:29:34:function exp)',
						"at ./src/contracts/coin_shop.rsh:189:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
						"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
					],
					msg: "balance insufficient for transaction",
					who: "Deployer",
				});
				const v8054 = stdlib.add(v6705, v6748);
				const v8055 = stdlib.le(v8054, stdlib.UInt_max);
				stdlib.assert(v8055, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v8060 = stdlib.le(v6739, stdlib.UInt_max);
				stdlib.assert(v8060, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v8068 = stdlib.le(v6741, stdlib.UInt_max);
				stdlib.assert(v8068, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v8076 = stdlib.le(v6743, stdlib.UInt_max);
				stdlib.assert(v8076, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v8189 = stdlib.sub(v8054, v8054);
				const v8190 = stdlib.ge(
					v8189,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:198:84:application",
						stdlib.UInt_max,
						"0",
					),
				);
				stdlib.assert(v8190, {
					at: "./src/contracts/coin_shop.rsh:198:84:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:196:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:43:function exp)",
					],
					msg: "assume >= 0",
					who: "Deployer",
				});
				const v8219 = stdlib.sub(
					v6743,
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:199:70:decimal", stdlib.UInt_max, "1"),
				);
				const v8220 = stdlib.ge(
					v8219,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:199:76:application",
						stdlib.UInt_max,
						"0",
					),
				);
				stdlib.assert(v8220, {
					at: "./src/contracts/coin_shop.rsh:199:76:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:196:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:43:function exp)",
					],
					msg: "assume >= 0",
					who: "Deployer",
				});
				const v8223 = stdlib.Array_set(v6742, "0", v8219);
				const v8224 = stdlib.Array_set(
					v6704,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:199:76:application",
						stdlib.UInt_max,
						"2",
					),
					v8223,
				);
				const v8225 = "gold  ";
				null;
				const v8226 = true;
				await txn4.getOutput("buyer_api_gold", "v8226", ctc8, v8226);
				const cv6695 = v6695;
				const cv6696 = v6696;
				const cv6697 = v6697;
				const cv6698 = v7229;
				const cv6704 = v8224;
				const cv6705 = v8189;

				v6695 = cv6695;
				v6696 = cv6696;
				v6697 = cv6697;
				v6698 = cv6698;
				v6704 = cv6704;
				v6705 = cv6705;

				txn3 = txn4;
				continue;
				break;
			}
			case "buyer_api_silver0_907": {
				const v8459 = v7228[1];
				undefined /* setApiDetails */;
				stdlib.assert(v6737, {
					at: "reach standard library:57:5:application",
					fs: [
						'at ./src/contracts/util/checks.rsh:33:33:application call to "check" (defined at: reach standard library:49:32:function exp)',
						'at ./src/contracts/coin_shop.rsh:170:36:application call to "checkActive" (defined at: ./src/contracts/util/checks.rsh:33:25:function exp)',
						"at ./src/contracts/coin_shop.rsh:169:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
						"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
					],
					msg: "contract is currently inactive",
					who: "Deployer",
				});
				const v8513 = stdlib.ge(
					v6741,
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:171:41:decimal", stdlib.UInt_max, "1"),
				);
				stdlib.assert(v8513, {
					at: "reach standard library:57:5:application",
					fs: [
						'at ./src/contracts/util/checks.rsh:29:42:application call to "check" (defined at: reach standard library:49:32:function exp)',
						'at ./src/contracts/coin_shop.rsh:171:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:29:34:function exp)',
						"at ./src/contracts/coin_shop.rsh:169:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
						"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
					],
					msg: "balance insufficient for transaction",
					who: "Deployer",
				});
				const v8668 = stdlib.add(v6705, v6747);
				const v8669 = stdlib.le(v8668, stdlib.UInt_max);
				stdlib.assert(v8669, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v8674 = stdlib.le(v6739, stdlib.UInt_max);
				stdlib.assert(v8674, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v8682 = stdlib.le(v6741, stdlib.UInt_max);
				stdlib.assert(v8682, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v8690 = stdlib.le(v6743, stdlib.UInt_max);
				stdlib.assert(v8690, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v8879 = stdlib.sub(v8668, v8668);
				const v8880 = stdlib.ge(
					v8879,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:178:84:application",
						stdlib.UInt_max,
						"0",
					),
				);
				stdlib.assert(v8880, {
					at: "./src/contracts/coin_shop.rsh:178:84:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:176:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:43:function exp)",
					],
					msg: "assume >= 0",
					who: "Deployer",
				});
				const v8909 = stdlib.sub(
					v6741,
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:179:67:decimal", stdlib.UInt_max, "1"),
				);
				const v8910 = stdlib.ge(
					v8909,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:179:76:application",
						stdlib.UInt_max,
						"0",
					),
				);
				stdlib.assert(v8910, {
					at: "./src/contracts/coin_shop.rsh:179:76:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:176:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:43:function exp)",
					],
					msg: "assume >= 0",
					who: "Deployer",
				});
				const v8913 = stdlib.Array_set(v6740, "0", v8909);
				const v8914 = stdlib.Array_set(
					v6704,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:179:76:application",
						stdlib.UInt_max,
						"1",
					),
					v8913,
				);
				const v8915 = "silver";
				null;
				const v8916 = true;
				await txn4.getOutput("buyer_api_silver", "v8916", ctc8, v8916);
				const cv6695 = v6695;
				const cv6696 = v6696;
				const cv6697 = v6697;
				const cv6698 = v7229;
				const cv6704 = v8914;
				const cv6705 = v8879;

				v6695 = cv6695;
				v6696 = cv6696;
				v6697 = cv6697;
				v6698 = cv6698;
				v6704 = cv6704;
				v6705 = cv6705;

				txn3 = txn4;
				continue;
				break;
			}
			case "controller_api_restock0_907": {
				const v9073 = v7228[1];
				undefined /* setApiDetails */;
				const v9147 =
					v9073[
						stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:212:22:spread", stdlib.UInt_max, "0")
					];
				const v9148 = stdlib.addressEq(v7227, v6654);
				stdlib.assert(v9148, {
					at: "reach standard library:57:5:application",
					fs: [
						'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
						'at ./src/contracts/coin_shop.rsh:213:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
						"at ./src/contracts/coin_shop.rsh:212:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:212:50:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:212:50:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
						"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
					],
					msg: "action not permitted",
					who: "Deployer",
				});
				const v9150 =
					v9147[
						stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:216:47:spread", stdlib.UInt_max, "0")
					];
				const v9151 =
					v9147[
						stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:216:47:spread", stdlib.UInt_max, "1")
					];
				const v9152 =
					v9147[
						stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:216:47:spread", stdlib.UInt_max, "2")
					];
				const v9283 = stdlib.le(v6705, stdlib.UInt_max);
				stdlib.assert(v9283, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v9287 = stdlib.add(v6739, v9150);
				const v9288 = stdlib.le(v9287, stdlib.UInt_max);
				stdlib.assert(v9288, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v9291 = stdlib.Array_set(v6738, "0", v9287);
				const v9292 = stdlib.Array_set(
					v6704,
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "0"),
					v9291,
				);
				const v9293 =
					v9292[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "1")];
				const v9294 =
					v9293[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "0")];
				const v9295 = stdlib.add(v9294, v9151);
				const v9296 = stdlib.le(v9295, stdlib.UInt_max);
				stdlib.assert(v9296, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v9299 = stdlib.Array_set(v9293, "0", v9295);
				const v9300 = stdlib.Array_set(
					v9292,
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "1"),
					v9299,
				);
				const v9301 =
					v9300[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "2")];
				const v9302 =
					v9301[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "0")];
				const v9303 = stdlib.add(v9302, v9152);
				const v9304 = stdlib.le(v9303, stdlib.UInt_max);
				stdlib.assert(v9304, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v9307 = stdlib.Array_set(v9301, "0", v9303);
				const v9308 = stdlib.Array_set(
					v9300,
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "2"),
					v9307,
				);
				const v9542 =
					v9308[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v9543 =
					v9542[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v9544 =
					v9308[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v9545 =
					v9544[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v9546 =
					v9308[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"2",
						)
					];
				const v9547 =
					v9546[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v9548 = [v9543, v9545, v9547];
				null;
				const v9552 = true;
				await txn4.getOutput("controller_api_restock", "v9552", ctc8, v9552);
				const cv6695 = v6695;
				const cv6696 = v6696;
				const cv6697 = v6697;
				const cv6698 = v7229;
				const cv6704 = v9308;
				const cv6705 = v6705;

				v6695 = cv6695;
				v6696 = cv6696;
				v6697 = cv6697;
				v6698 = cv6698;
				v6704 = cv6704;
				v6705 = cv6705;

				txn3 = txn4;
				continue;
				break;
			}
			case "controller_api_set_prices0_907": {
				const v9687 = v7228[1];
				undefined /* setApiDetails */;
				const v9785 = stdlib.addressEq(v7227, v6654);
				stdlib.assert(v9785, {
					at: "reach standard library:57:5:application",
					fs: [
						'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
						'at ./src/contracts/coin_shop.rsh:230:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
						"at ./src/contracts/coin_shop.rsh:229:58:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:229:58:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:229:58:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
						"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
					],
					msg: "action not permitted",
					who: "Deployer",
				});
				const v9897 = stdlib.le(v6705, stdlib.UInt_max);
				stdlib.assert(v9897, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v9902 = stdlib.le(v6739, stdlib.UInt_max);
				stdlib.assert(v9902, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v9910 = stdlib.le(v6741, stdlib.UInt_max);
				stdlib.assert(v9910, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v9918 = stdlib.le(v6743, stdlib.UInt_max);
				stdlib.assert(v9918, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v10178 =
					v9687[
						stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:229:22:spread", stdlib.UInt_max, "0")
					];
				null;
				const v10187 = true;
				await txn4.getOutput("controller_api_set_prices", "v10187", ctc8, v10187);
				const cv6695 = v10178;
				const cv6696 = v6696;
				const cv6697 = v6697;
				const cv6698 = v7229;
				const cv6704 = v6704;
				const cv6705 = v6705;

				v6695 = cv6695;
				v6696 = cv6696;
				v6697 = cv6697;
				v6698 = cv6698;
				v6704 = cv6704;
				v6705 = cv6705;

				txn3 = txn4;
				continue;
				break;
			}
			case "controller_api_terminate0_907": {
				const v10301 = v7228[1];
				undefined /* setApiDetails */;
				const v10418 = stdlib.addressEq(v7227, v6654);
				stdlib.assert(v10418, {
					at: "reach standard library:57:5:application",
					fs: [
						'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
						'at ./src/contracts/coin_shop.rsh:287:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
						"at ./src/contracts/coin_shop.rsh:286:48:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:286:48:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:286:48:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
						"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
					],
					msg: "action not permitted",
					who: "Deployer",
				});
				const v10511 = stdlib.le(v6705, stdlib.UInt_max);
				stdlib.assert(v10511, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v10516 = stdlib.le(v6739, stdlib.UInt_max);
				stdlib.assert(v10516, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v10524 = stdlib.le(v6741, stdlib.UInt_max);
				stdlib.assert(v10524, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v10532 = stdlib.le(v6743, stdlib.UInt_max);
				stdlib.assert(v10532, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v10817 = true;
				null;
				const v10818 = true;
				await txn4.getOutput("controller_api_terminate", "v10818", ctc8, v10818);
				const cv6695 = v6695;
				const cv6696 = v6696;
				const cv6697 = true;
				const cv6698 = v7229;
				const cv6704 = v6704;
				const cv6705 = v6705;

				v6695 = cv6695;
				v6696 = cv6696;
				v6697 = cv6697;
				v6698 = cv6698;
				v6704 = cv6704;
				v6705 = cv6705;

				txn3 = txn4;
				continue;
				break;
			}
			case "controller_api_toggle_pause0_907": {
				const v10915 = v7228[1];
				undefined /* setApiDetails */;
				const v11051 = stdlib.addressEq(v7227, v6654);
				stdlib.assert(v11051, {
					at: "reach standard library:57:5:application",
					fs: [
						'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
						'at ./src/contracts/coin_shop.rsh:247:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
						"at ./src/contracts/coin_shop.rsh:246:51:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:246:51:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:246:51:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
						"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
					],
					msg: "action not permitted",
					who: "Deployer",
				});
				const v11125 = stdlib.le(v6705, stdlib.UInt_max);
				stdlib.assert(v11125, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v11130 = stdlib.le(v6739, stdlib.UInt_max);
				stdlib.assert(v11130, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v11138 = stdlib.le(v6741, stdlib.UInt_max);
				stdlib.assert(v11138, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v11146 = stdlib.le(v6743, stdlib.UInt_max);
				stdlib.assert(v11146, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				await txn4.getOutput("controller_api_toggle_pause", "v6735", ctc8, v6735);
				const cv6695 = v6695;
				const cv6696 = v6735;
				const cv6697 = v6697;
				const cv6698 = v7229;
				const cv6704 = v6704;
				const cv6705 = v6705;

				v6695 = cv6695;
				v6696 = cv6696;
				v6697 = cv6697;
				v6698 = cv6698;
				v6704 = cv6704;
				v6705 = cv6705;

				txn3 = txn4;
				continue;
				break;
			}
			case "controller_api_withdraw0_907": {
				const v11529 = v7228[1];
				undefined /* setApiDetails */;
				const v11684 = stdlib.addressEq(v7227, v6654);
				stdlib.assert(v11684, {
					at: "reach standard library:57:5:application",
					fs: [
						'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
						'at ./src/contracts/coin_shop.rsh:267:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
						"at ./src/contracts/coin_shop.rsh:266:47:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:266:47:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:266:47:function exp)",
						"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
						"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
					],
					msg: "action not permitted",
					who: "Deployer",
				});
				const v11739 = stdlib.le(v6705, stdlib.UInt_max);
				stdlib.assert(v11739, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v11744 = stdlib.le(v6739, stdlib.UInt_max);
				stdlib.assert(v11744, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v11752 = stdlib.le(v6741, stdlib.UInt_max);
				stdlib.assert(v11752, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v11760 = stdlib.le(v6743, stdlib.UInt_max);
				stdlib.assert(v11760, {
					at: "./src/contracts/coin_shop.rsh:118:68:dot",
					fs: [],
					msg: "assume <= UInt.max",
					who: "Deployer",
				});
				const v12107 = stdlib.sub(v6739, v6739);
				const v12108 = stdlib.ge(
					v12107,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:276:76:application",
						stdlib.UInt_max,
						"0",
					),
				);
				stdlib.assert(v12108, {
					at: "./src/contracts/coin_shop.rsh:276:76:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:271:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:43:function exp)",
					],
					msg: "assume >= 0",
					who: "Deployer",
				});
				const v12111 = stdlib.Array_set(v6738, "0", v12107);
				const v12112 = stdlib.Array_set(
					v6704,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:276:76:application",
						stdlib.UInt_max,
						"0",
					),
					v12111,
				);
				const v12113 =
					v12112[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:276:76:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v12114 =
					v12113[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:276:76:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v12118 = stdlib.sub(v12114, v6741);
				const v12119 = stdlib.ge(
					v12118,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:276:76:application",
						stdlib.UInt_max,
						"0",
					),
				);
				stdlib.assert(v12119, {
					at: "./src/contracts/coin_shop.rsh:276:76:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:271:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:43:function exp)",
					],
					msg: "assume >= 0",
					who: "Deployer",
				});
				const v12122 = stdlib.Array_set(v12113, "0", v12118);
				const v12123 = stdlib.Array_set(
					v12112,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:276:76:application",
						stdlib.UInt_max,
						"1",
					),
					v12122,
				);
				const v12124 =
					v12123[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:276:76:application",
							stdlib.UInt_max,
							"2",
						)
					];
				const v12125 =
					v12124[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:276:76:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v12129 = stdlib.sub(v12125, v6743);
				const v12130 = stdlib.ge(
					v12129,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:276:76:application",
						stdlib.UInt_max,
						"0",
					),
				);
				stdlib.assert(v12130, {
					at: "./src/contracts/coin_shop.rsh:276:76:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:271:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:43:function exp)",
					],
					msg: "assume >= 0",
					who: "Deployer",
				});
				const v12133 = stdlib.Array_set(v12124, "0", v12129);
				const v12134 = stdlib.Array_set(
					v12123,
					stdlib.checkedBigNumberify(
						"./src/contracts/coin_shop.rsh:276:76:application",
						stdlib.UInt_max,
						"2",
					),
					v12133,
				);
				null;
				const v12136 = true;
				await txn4.getOutput("controller_api_withdraw", "v12136", ctc8, v12136);
				const cv6695 = v6695;
				const cv6696 = v6696;
				const cv6697 = v6697;
				const cv6698 = v7229;
				const cv6704 = v12134;
				const cv6705 = v6705;

				v6695 = cv6695;
				v6696 = cv6696;
				v6697 = cv6697;
				v6698 = cv6698;
				v6704 = cv6704;
				v6705 = cv6705;

				txn3 = txn4;
				continue;
				break;
			}
		}
	}
	const v12146 =
		v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
	const v12147 =
		v12146[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
	const v12148 =
		v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
	const v12149 =
		v12148[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
	const v12150 =
		v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
	const v12151 =
		v12150[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
	const v12152 = [v12147, v12149, v12151];
	const txn4 = await ctc.sendrecv({
		args: [v6629, v6630, v6631, v6632, v6654, v6695, v6696, v6704, v6705, v12146, v12147, v12149, v12151, v12152],
		evt_cnt: 0,
		funcNum: 3,
		lct: v6698,
		onlyIf: true,
		out_tys: [],
		pay: [stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"), []],
		sim_p: async (txn4) => {
			const sim_r = { txns: [], mapRefs: [], maps: [] };
			let sim_txn_ctr = stdlib.UInt_max;
			const getSimTokCtr = () => {
				sim_txn_ctr = sim_txn_ctr.sub(1);
				return sim_txn_ctr;
			};

			const {
				data: [],
				secs: v12165,
				time: v12164,
				didSend: v6024,
				from: v12163,
			} = txn4;

			sim_r.txns.push({
				kind: "from",
				to: v6654,
				tok: undefined /* Nothing */,
			});
			sim_r.txns.push({
				kind: "from",
				to: v6654,
				tok: v6630,
			});
			sim_r.txns.push({
				kind: "from",
				to: v6654,
				tok: v6631,
			});
			sim_r.txns.push({
				kind: "from",
				to: v6654,
				tok: v6632,
			});
			sim_r.txns.push({
				kind: "halt",
				tok: v6632,
			});
			sim_r.txns.push({
				kind: "halt",
				tok: v6631,
			});
			sim_r.txns.push({
				kind: "halt",
				tok: v6630,
			});
			sim_r.txns.push({
				kind: "halt",
				tok: undefined /* Nothing */,
			});
			sim_r.isHalt = true;

			return sim_r;
		},
		soloSend: false,
		timeoutAt: undefined /* mto */,
		tys: [ctc9, ctc0, ctc0, ctc0, ctc9, ctc5, ctc8, ctc11, ctc4, ctc10, ctc4, ctc4, ctc4, ctc5],
		waitIfNotPresent: false,
	});
	const {
		data: [],
		secs: v12165,
		time: v12164,
		didSend: v6024,
		from: v12163,
	} = txn4;
	const v12166 = stdlib.addressEq(v6654, v12163);
	const v12167 = stdlib.addressEq(v6629, v12163);
	const v12168 = v12166 ? true : v12167;
	stdlib.assert(v12168, {
		at: "reach standard library:197:11:dot",
		fs: [
			'at ./src/contracts/coin_shop.rsh:304:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
		],
		msg: "sender correct",
		who: "Deployer",
	});
	const v12191 = stdlib.sub(v6705, v6705);
	const v12192 = stdlib.ge(
		v12191,
		stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"),
	);
	stdlib.assert(v12192, {
		at: "reach standard library:198:46:application",
		fs: [
			'at ./src/contracts/coin_shop.rsh:304:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
		],
		msg: "assume >= 0",
		who: "Deployer",
	});
	const v12199 = stdlib.sub(v12147, v12147);
	const v12200 = stdlib.ge(
		v12199,
		stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"),
	);
	stdlib.assert(v12200, {
		at: "reach standard library:198:46:application",
		fs: [
			'at ./src/contracts/coin_shop.rsh:304:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
		],
		msg: "assume >= 0",
		who: "Deployer",
	});
	const v12203 = stdlib.Array_set(v12146, "0", v12199);
	const v12204 = stdlib.Array_set(
		v6704,
		stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"),
		v12203,
	);
	const v12205 =
		v12204[stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "1")];
	const v12206 =
		v12205[stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0")];
	const v12210 = stdlib.sub(v12206, v12149);
	const v12211 = stdlib.ge(
		v12210,
		stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"),
	);
	stdlib.assert(v12211, {
		at: "reach standard library:198:46:application",
		fs: [
			'at ./src/contracts/coin_shop.rsh:304:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
		],
		msg: "assume >= 0",
		who: "Deployer",
	});
	const v12214 = stdlib.Array_set(v12205, "0", v12210);
	const v12215 = stdlib.Array_set(
		v12204,
		stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "1"),
		v12214,
	);
	const v12216 =
		v12215[stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "2")];
	const v12217 =
		v12216[stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0")];
	const v12221 = stdlib.sub(v12217, v12151);
	const v12222 = stdlib.ge(
		v12221,
		stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"),
	);
	stdlib.assert(v12222, {
		at: "reach standard library:198:46:application",
		fs: [
			'at ./src/contracts/coin_shop.rsh:304:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
		],
		msg: "assume >= 0",
		who: "Deployer",
	});
	return;
}
export async function _buyer_api_bronze5(ctcTop, interact) {
	if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
		return Promise.reject(
			new Error(`The backend for _buyer_api_bronze5 expects to receive a contract as its first argument.`),
		);
	}
	if (typeof interact !== "object") {
		return Promise.reject(
			new Error(
				`The backend for _buyer_api_bronze5 expects to receive an interact object as its second argument.`,
			),
		);
	}
	const ctc = ctcTop._initialize();
	const stdlib = ctc.stdlib;
	const ctc0 = stdlib.T_Address;
	const ctc1 = stdlib.T_Token;
	const ctc2 = stdlib.T_UInt;
	const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
	const ctc4 = stdlib.T_Bool;
	const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
	const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
	const ctc7 = stdlib.T_Tuple([]);
	const ctc8 = stdlib.T_Tuple([ctc3]);
	const ctc9 = stdlib.T_Data({
		buyer_api_bronze0_907: ctc7,
		buyer_api_gold0_907: ctc7,
		buyer_api_silver0_907: ctc7,
		controller_api_restock0_907: ctc8,
		controller_api_set_prices0_907: ctc8,
		controller_api_terminate0_907: ctc7,
		controller_api_toggle_pause0_907: ctc7,
		controller_api_withdraw0_907: ctc7,
	});
	const ctc10 = stdlib.T_Null;

	const [
		v6629,
		v6630,
		v6631,
		v6632,
		v6654,
		v6695,
		v6696,
		v6697,
		v6704,
		v6705,
		v6735,
		v6737,
		v6738,
		v6739,
		v6740,
		v6741,
		v6742,
		v6743,
		v6744,
		v6746,
		v6747,
		v6748,
	] = await ctc.getState(stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5"), [
		ctc0,
		ctc1,
		ctc1,
		ctc1,
		ctc0,
		ctc3,
		ctc4,
		ctc4,
		ctc6,
		ctc2,
		ctc4,
		ctc4,
		ctc5,
		ctc2,
		ctc5,
		ctc2,
		ctc5,
		ctc2,
		ctc3,
		ctc2,
		ctc2,
		ctc2,
	]);
	const v6751 = stdlib.protect(ctc7, await interact.in(), {
		at: "./src/contracts/coin_shop.rsh:1:23:application",
		fs: [
			"at ./src/contracts/coin_shop.rsh:149:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
			'at ./src/contracts/coin_shop.rsh:118:68:application call to "runbuyer_api_bronze0_907" (defined at: ./src/contracts/coin_shop.rsh:149:22:function exp)',
			"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
		],
		msg: "in",
		who: "buyer_api_bronze",
	});
	stdlib.assert(v6737, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:33:33:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at ./src/contracts/coin_shop.rsh:150:36:application call to "checkActive" (defined at: ./src/contracts/util/checks.rsh:33:25:function exp)',
			"at ./src/contracts/coin_shop.rsh:149:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
			'at ./src/contracts/coin_shop.rsh:118:68:application call to "runbuyer_api_bronze0_907" (defined at: ./src/contracts/coin_shop.rsh:149:22:function exp)',
			"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
		],
		msg: "contract is currently inactive",
		who: "buyer_api_bronze",
	});
	const v6755 = stdlib.ge(
		v6739,
		stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:151:41:decimal", stdlib.UInt_max, "1"),
	);
	stdlib.assert(v6755, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:29:42:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at ./src/contracts/coin_shop.rsh:151:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:29:34:function exp)',
			"at ./src/contracts/coin_shop.rsh:149:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
			'at ./src/contracts/coin_shop.rsh:118:68:application call to "runbuyer_api_bronze0_907" (defined at: ./src/contracts/coin_shop.rsh:149:22:function exp)',
			"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
		],
		msg: "balance insufficient for transaction",
		who: "buyer_api_bronze",
	});
	const v6760 = ["buyer_api_bronze0_907", v6751];

	const txn1 = await ctc.sendrecv({
		args: [
			v6629,
			v6630,
			v6631,
			v6632,
			v6654,
			v6695,
			v6696,
			v6697,
			v6704,
			v6705,
			v6735,
			v6737,
			v6738,
			v6739,
			v6740,
			v6741,
			v6742,
			v6743,
			v6744,
			v6746,
			v6747,
			v6748,
			v6760,
		],
		evt_cnt: 1,
		funcNum: 4,
		lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
		onlyIf: true,
		out_tys: [ctc9],
		pay: [
			v6746,
			[
				[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:155:59:decimal", stdlib.UInt_max, "0"),
					v6630,
				],
				[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:155:62:decimal", stdlib.UInt_max, "0"),
					v6631,
				],
				[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:155:65:decimal", stdlib.UInt_max, "0"),
					v6632,
				],
			],
		],
		sim_p: async (txn1) => {
			const sim_r = { txns: [], mapRefs: [], maps: [] };
			let sim_txn_ctr = stdlib.UInt_max;
			const getSimTokCtr = () => {
				sim_txn_ctr = sim_txn_ctr.sub(1);
				return sim_txn_ctr;
			};

			const {
				data: [v7228],
				secs: v7230,
				time: v7229,
				didSend: v5406,
				from: v7227,
			} = txn1;

			switch (v7228[0]) {
				case "buyer_api_bronze0_907": {
					const v7231 = v7228[1];
					sim_r.txns.push({
						kind: "api",
						who: "buyer_api_bronze",
					});
					const v7440 = stdlib.add(v6705, v6746);
					sim_r.txns.push({
						amt: v6746,
						kind: "to",
						tok: undefined /* Nothing */,
					});
					const v7499 = stdlib.sub(v7440, v7440);
					sim_r.txns.push({
						kind: "from",
						to: v6654,
						tok: undefined /* Nothing */,
					});
					const v7529 = stdlib.sub(
						v6739,
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:159:64:decimal",
							stdlib.UInt_max,
							"1",
						),
					);
					const v7533 = stdlib.Array_set(v6738, "0", v7529);
					const v7534 = stdlib.Array_set(
						v6704,
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:159:76:application",
							stdlib.UInt_max,
							"0",
						),
						v7533,
					);
					sim_r.txns.push({
						kind: "from",
						to: v7227,
						tok: v6630,
					});
					const v7535 = "bronze";
					null;
					const v7536 = true;
					const v7537 = await txn1.getOutput("buyer_api_bronze", "v7536", ctc4, v7536);

					const v14685 = v6695;
					const v14686 = v6696;
					const v14687 = v6697;
					const v14689 = v7534;
					const v14690 = v7499;
					const v14691 = v6697 ? false : true;
					if (v6697) {
						const v14705 =
							v7534[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:53:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v14706 =
							v14705[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:53:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v14707 =
							v7534[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:70:application",
									stdlib.UInt_max,
									"1",
								)
							];
						const v14708 =
							v14707[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:70:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v14709 =
							v7534[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:87:application",
									stdlib.UInt_max,
									"2",
								)
							];
						const v14710 =
							v14709[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:87:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v14711 = [v14706, v14708, v14710];
						sim_r.isHalt = false;
					} else {
						const v14692 = v6696 ? false : true;
						const v14694 = v6696 ? false : v14691;
						const v14695 =
							v7534[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:53:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v14696 =
							v14695[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:53:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v14697 =
							v7534[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:70:application",
									stdlib.UInt_max,
									"1",
								)
							];
						const v14698 =
							v14697[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:70:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v14699 =
							v7534[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:87:application",
									stdlib.UInt_max,
									"2",
								)
							];
						const v14700 =
							v14699[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:87:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v14701 = [v14696, v14698, v14700];
						const v14702 =
							v6695[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:144:45:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v14703 =
							v6695[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:144:45:application",
									stdlib.UInt_max,
									"1",
								)
							];
						const v14704 =
							v6695[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:144:45:application",
									stdlib.UInt_max,
									"2",
								)
							];
						sim_r.isHalt = false;
					}
					break;
				}
				case "buyer_api_gold0_907": {
					const v7845 = v7228[1];

					break;
				}
				case "buyer_api_silver0_907": {
					const v8459 = v7228[1];

					break;
				}
				case "controller_api_restock0_907": {
					const v9073 = v7228[1];

					break;
				}
				case "controller_api_set_prices0_907": {
					const v9687 = v7228[1];

					break;
				}
				case "controller_api_terminate0_907": {
					const v10301 = v7228[1];

					break;
				}
				case "controller_api_toggle_pause0_907": {
					const v10915 = v7228[1];

					break;
				}
				case "controller_api_withdraw0_907": {
					const v11529 = v7228[1];

					break;
				}
			}
			return sim_r;
		},
		soloSend: false,
		timeoutAt: undefined /* mto */,
		tys: [
			ctc0,
			ctc1,
			ctc1,
			ctc1,
			ctc0,
			ctc3,
			ctc4,
			ctc4,
			ctc6,
			ctc2,
			ctc4,
			ctc4,
			ctc5,
			ctc2,
			ctc5,
			ctc2,
			ctc5,
			ctc2,
			ctc3,
			ctc2,
			ctc2,
			ctc2,
			ctc9,
		],
		waitIfNotPresent: false,
	});
	const {
		data: [v7228],
		secs: v7230,
		time: v7229,
		didSend: v5406,
		from: v7227,
	} = txn1;
	switch (v7228[0]) {
		case "buyer_api_bronze0_907": {
			const v7231 = v7228[1];
			undefined /* setApiDetails */;
			stdlib.assert(v6737, {
				at: "reach standard library:57:5:application",
				fs: [
					'at ./src/contracts/util/checks.rsh:33:33:application call to "check" (defined at: reach standard library:49:32:function exp)',
					'at ./src/contracts/coin_shop.rsh:150:36:application call to "checkActive" (defined at: ./src/contracts/util/checks.rsh:33:25:function exp)',
					"at ./src/contracts/coin_shop.rsh:149:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
					"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
					"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
					"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
				],
				msg: "contract is currently inactive",
				who: "buyer_api_bronze",
			});
			const v7239 = stdlib.ge(
				v6739,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:151:41:decimal", stdlib.UInt_max, "1"),
			);
			stdlib.assert(v7239, {
				at: "reach standard library:57:5:application",
				fs: [
					'at ./src/contracts/util/checks.rsh:29:42:application call to "check" (defined at: reach standard library:49:32:function exp)',
					'at ./src/contracts/coin_shop.rsh:151:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:29:34:function exp)',
					"at ./src/contracts/coin_shop.rsh:149:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
					"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
					"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
					"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
				],
				msg: "balance insufficient for transaction",
				who: "buyer_api_bronze",
			});
			const v7440 = stdlib.add(v6705, v6746);
			const v7441 = stdlib.le(v7440, stdlib.UInt_max);
			stdlib.assert(v7441, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "buyer_api_bronze",
			});
			const v7446 = stdlib.le(v6739, stdlib.UInt_max);
			stdlib.assert(v7446, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "buyer_api_bronze",
			});
			const v7454 = stdlib.le(v6741, stdlib.UInt_max);
			stdlib.assert(v7454, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "buyer_api_bronze",
			});
			const v7462 = stdlib.le(v6743, stdlib.UInt_max);
			stdlib.assert(v7462, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "buyer_api_bronze",
			});
			const v7499 = stdlib.sub(v7440, v7440);
			const v7500 = stdlib.ge(
				v7499,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:158:84:application", stdlib.UInt_max, "0"),
			);
			stdlib.assert(v7500, {
				at: "./src/contracts/coin_shop.rsh:158:84:application",
				fs: [
					"at ./src/contracts/coin_shop.rsh:156:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:156:43:function exp)",
				],
				msg: "assume >= 0",
				who: "buyer_api_bronze",
			});
			const v7529 = stdlib.sub(
				v6739,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:159:64:decimal", stdlib.UInt_max, "1"),
			);
			const v7530 = stdlib.ge(
				v7529,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:159:76:application", stdlib.UInt_max, "0"),
			);
			stdlib.assert(v7530, {
				at: "./src/contracts/coin_shop.rsh:159:76:application",
				fs: [
					"at ./src/contracts/coin_shop.rsh:156:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:156:43:function exp)",
				],
				msg: "assume >= 0",
				who: "buyer_api_bronze",
			});
			const v7533 = stdlib.Array_set(v6738, "0", v7529);
			const v7534 = stdlib.Array_set(
				v6704,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:159:76:application", stdlib.UInt_max, "0"),
				v7533,
			);
			const v7535 = "bronze";
			null;
			const v7536 = true;
			const v7537 = await txn1.getOutput("buyer_api_bronze", "v7536", ctc4, v7536);
			if (v5406) {
				stdlib.protect(ctc10, await interact.out(v7231, v7537), {
					at: "./src/contracts/coin_shop.rsh:149:23:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:149:23:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:23:function exp)",
						'at ./src/contracts/coin_shop.rsh:163:48:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:156:43:function exp)',
						"at ./src/contracts/coin_shop.rsh:156:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:156:43:function exp)",
					],
					msg: "out",
					who: "buyer_api_bronze",
				});
			} else {
			}

			const v14685 = v6695;
			const v14686 = v6696;
			const v14687 = v6697;
			const v14689 = v7534;
			const v14690 = v7499;
			const v14691 = v6697 ? false : true;
			if (v6697) {
				const v14705 =
					v7534[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v14706 =
					v14705[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v14707 =
					v7534[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v14708 =
					v14707[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v14709 =
					v7534[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"2",
						)
					];
				const v14710 =
					v14709[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v14711 = [v14706, v14708, v14710];
				return;
			} else {
				const v14692 = v6696 ? false : true;
				const v14694 = v6696 ? false : v14691;
				const v14695 =
					v7534[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v14696 =
					v14695[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v14697 =
					v7534[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v14698 =
					v14697[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v14699 =
					v7534[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"2",
						)
					];
				const v14700 =
					v14699[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v14701 = [v14696, v14698, v14700];
				const v14702 =
					v6695[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:144:45:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v14703 =
					v6695[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:144:45:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v14704 =
					v6695[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:144:45:application",
							stdlib.UInt_max,
							"2",
						)
					];
				return;
			}
			break;
		}
		case "buyer_api_gold0_907": {
			const v7845 = v7228[1];
			return;
			break;
		}
		case "buyer_api_silver0_907": {
			const v8459 = v7228[1];
			return;
			break;
		}
		case "controller_api_restock0_907": {
			const v9073 = v7228[1];
			return;
			break;
		}
		case "controller_api_set_prices0_907": {
			const v9687 = v7228[1];
			return;
			break;
		}
		case "controller_api_terminate0_907": {
			const v10301 = v7228[1];
			return;
			break;
		}
		case "controller_api_toggle_pause0_907": {
			const v10915 = v7228[1];
			return;
			break;
		}
		case "controller_api_withdraw0_907": {
			const v11529 = v7228[1];
			return;
			break;
		}
	}
}
export async function _buyer_api_gold5(ctcTop, interact) {
	if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
		return Promise.reject(
			new Error(`The backend for _buyer_api_gold5 expects to receive a contract as its first argument.`),
		);
	}
	if (typeof interact !== "object") {
		return Promise.reject(
			new Error(`The backend for _buyer_api_gold5 expects to receive an interact object as its second argument.`),
		);
	}
	const ctc = ctcTop._initialize();
	const stdlib = ctc.stdlib;
	const ctc0 = stdlib.T_Address;
	const ctc1 = stdlib.T_Token;
	const ctc2 = stdlib.T_UInt;
	const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
	const ctc4 = stdlib.T_Bool;
	const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
	const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
	const ctc7 = stdlib.T_Tuple([]);
	const ctc8 = stdlib.T_Tuple([ctc3]);
	const ctc9 = stdlib.T_Data({
		buyer_api_bronze0_907: ctc7,
		buyer_api_gold0_907: ctc7,
		buyer_api_silver0_907: ctc7,
		controller_api_restock0_907: ctc8,
		controller_api_set_prices0_907: ctc8,
		controller_api_terminate0_907: ctc7,
		controller_api_toggle_pause0_907: ctc7,
		controller_api_withdraw0_907: ctc7,
	});
	const ctc10 = stdlib.T_Null;

	const [
		v6629,
		v6630,
		v6631,
		v6632,
		v6654,
		v6695,
		v6696,
		v6697,
		v6704,
		v6705,
		v6735,
		v6737,
		v6738,
		v6739,
		v6740,
		v6741,
		v6742,
		v6743,
		v6744,
		v6746,
		v6747,
		v6748,
	] = await ctc.getState(stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5"), [
		ctc0,
		ctc1,
		ctc1,
		ctc1,
		ctc0,
		ctc3,
		ctc4,
		ctc4,
		ctc6,
		ctc2,
		ctc4,
		ctc4,
		ctc5,
		ctc2,
		ctc5,
		ctc2,
		ctc5,
		ctc2,
		ctc3,
		ctc2,
		ctc2,
		ctc2,
	]);
	const v6777 = stdlib.protect(ctc7, await interact.in(), {
		at: "./src/contracts/coin_shop.rsh:1:23:application",
		fs: [
			"at ./src/contracts/coin_shop.rsh:189:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
			'at ./src/contracts/coin_shop.rsh:118:68:application call to "runbuyer_api_gold0_907" (defined at: ./src/contracts/coin_shop.rsh:189:22:function exp)',
			"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
		],
		msg: "in",
		who: "buyer_api_gold",
	});
	stdlib.assert(v6737, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:33:33:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at ./src/contracts/coin_shop.rsh:190:36:application call to "checkActive" (defined at: ./src/contracts/util/checks.rsh:33:25:function exp)',
			"at ./src/contracts/coin_shop.rsh:189:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
			'at ./src/contracts/coin_shop.rsh:118:68:application call to "runbuyer_api_gold0_907" (defined at: ./src/contracts/coin_shop.rsh:189:22:function exp)',
			"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
		],
		msg: "contract is currently inactive",
		who: "buyer_api_gold",
	});
	const v6781 = stdlib.ge(
		v6743,
		stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:191:41:decimal", stdlib.UInt_max, "1"),
	);
	stdlib.assert(v6781, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:29:42:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at ./src/contracts/coin_shop.rsh:191:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:29:34:function exp)',
			"at ./src/contracts/coin_shop.rsh:189:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
			'at ./src/contracts/coin_shop.rsh:118:68:application call to "runbuyer_api_gold0_907" (defined at: ./src/contracts/coin_shop.rsh:189:22:function exp)',
			"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
		],
		msg: "balance insufficient for transaction",
		who: "buyer_api_gold",
	});
	const v6786 = ["buyer_api_gold0_907", v6777];

	const txn1 = await ctc.sendrecv({
		args: [
			v6629,
			v6630,
			v6631,
			v6632,
			v6654,
			v6695,
			v6696,
			v6697,
			v6704,
			v6705,
			v6735,
			v6737,
			v6738,
			v6739,
			v6740,
			v6741,
			v6742,
			v6743,
			v6744,
			v6746,
			v6747,
			v6748,
			v6786,
		],
		evt_cnt: 1,
		funcNum: 4,
		lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
		onlyIf: true,
		out_tys: [ctc9],
		pay: [
			v6748,
			[
				[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:195:59:decimal", stdlib.UInt_max, "0"),
					v6630,
				],
				[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:195:62:decimal", stdlib.UInt_max, "0"),
					v6631,
				],
				[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:195:65:decimal", stdlib.UInt_max, "0"),
					v6632,
				],
			],
		],
		sim_p: async (txn1) => {
			const sim_r = { txns: [], mapRefs: [], maps: [] };
			let sim_txn_ctr = stdlib.UInt_max;
			const getSimTokCtr = () => {
				sim_txn_ctr = sim_txn_ctr.sub(1);
				return sim_txn_ctr;
			};

			const {
				data: [v7228],
				secs: v7230,
				time: v7229,
				didSend: v5406,
				from: v7227,
			} = txn1;

			switch (v7228[0]) {
				case "buyer_api_bronze0_907": {
					const v7231 = v7228[1];

					break;
				}
				case "buyer_api_gold0_907": {
					const v7845 = v7228[1];
					sim_r.txns.push({
						kind: "api",
						who: "buyer_api_gold",
					});
					const v8054 = stdlib.add(v6705, v6748);
					sim_r.txns.push({
						amt: v6748,
						kind: "to",
						tok: undefined /* Nothing */,
					});
					const v8189 = stdlib.sub(v8054, v8054);
					sim_r.txns.push({
						kind: "from",
						to: v6654,
						tok: undefined /* Nothing */,
					});
					const v8219 = stdlib.sub(
						v6743,
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:199:70:decimal",
							stdlib.UInt_max,
							"1",
						),
					);
					const v8223 = stdlib.Array_set(v6742, "0", v8219);
					const v8224 = stdlib.Array_set(
						v6704,
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:199:76:application",
							stdlib.UInt_max,
							"2",
						),
						v8223,
					);
					sim_r.txns.push({
						kind: "from",
						to: v7227,
						tok: v6632,
					});
					const v8225 = "gold  ";
					null;
					const v8226 = true;
					const v8227 = await txn1.getOutput("buyer_api_gold", "v8226", ctc4, v8226);

					const v15135 = v6695;
					const v15136 = v6696;
					const v15137 = v6697;
					const v15139 = v8224;
					const v15140 = v8189;
					const v15141 = v6697 ? false : true;
					if (v6697) {
						const v15155 =
							v8224[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:53:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v15156 =
							v15155[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:53:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v15157 =
							v8224[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:70:application",
									stdlib.UInt_max,
									"1",
								)
							];
						const v15158 =
							v15157[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:70:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v15159 =
							v8224[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:87:application",
									stdlib.UInt_max,
									"2",
								)
							];
						const v15160 =
							v15159[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:87:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v15161 = [v15156, v15158, v15160];
						sim_r.isHalt = false;
					} else {
						const v15142 = v6696 ? false : true;
						const v15144 = v6696 ? false : v15141;
						const v15145 =
							v8224[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:53:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v15146 =
							v15145[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:53:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v15147 =
							v8224[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:70:application",
									stdlib.UInt_max,
									"1",
								)
							];
						const v15148 =
							v15147[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:70:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v15149 =
							v8224[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:87:application",
									stdlib.UInt_max,
									"2",
								)
							];
						const v15150 =
							v15149[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:87:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v15151 = [v15146, v15148, v15150];
						const v15152 =
							v6695[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:144:45:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v15153 =
							v6695[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:144:45:application",
									stdlib.UInt_max,
									"1",
								)
							];
						const v15154 =
							v6695[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:144:45:application",
									stdlib.UInt_max,
									"2",
								)
							];
						sim_r.isHalt = false;
					}
					break;
				}
				case "buyer_api_silver0_907": {
					const v8459 = v7228[1];

					break;
				}
				case "controller_api_restock0_907": {
					const v9073 = v7228[1];

					break;
				}
				case "controller_api_set_prices0_907": {
					const v9687 = v7228[1];

					break;
				}
				case "controller_api_terminate0_907": {
					const v10301 = v7228[1];

					break;
				}
				case "controller_api_toggle_pause0_907": {
					const v10915 = v7228[1];

					break;
				}
				case "controller_api_withdraw0_907": {
					const v11529 = v7228[1];

					break;
				}
			}
			return sim_r;
		},
		soloSend: false,
		timeoutAt: undefined /* mto */,
		tys: [
			ctc0,
			ctc1,
			ctc1,
			ctc1,
			ctc0,
			ctc3,
			ctc4,
			ctc4,
			ctc6,
			ctc2,
			ctc4,
			ctc4,
			ctc5,
			ctc2,
			ctc5,
			ctc2,
			ctc5,
			ctc2,
			ctc3,
			ctc2,
			ctc2,
			ctc2,
			ctc9,
		],
		waitIfNotPresent: false,
	});
	const {
		data: [v7228],
		secs: v7230,
		time: v7229,
		didSend: v5406,
		from: v7227,
	} = txn1;
	switch (v7228[0]) {
		case "buyer_api_bronze0_907": {
			const v7231 = v7228[1];
			return;
			break;
		}
		case "buyer_api_gold0_907": {
			const v7845 = v7228[1];
			undefined /* setApiDetails */;
			stdlib.assert(v6737, {
				at: "reach standard library:57:5:application",
				fs: [
					'at ./src/contracts/util/checks.rsh:33:33:application call to "check" (defined at: reach standard library:49:32:function exp)',
					'at ./src/contracts/coin_shop.rsh:190:36:application call to "checkActive" (defined at: ./src/contracts/util/checks.rsh:33:25:function exp)',
					"at ./src/contracts/coin_shop.rsh:189:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
					"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
					"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
					"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
				],
				msg: "contract is currently inactive",
				who: "buyer_api_gold",
			});
			const v7876 = stdlib.ge(
				v6743,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:191:41:decimal", stdlib.UInt_max, "1"),
			);
			stdlib.assert(v7876, {
				at: "reach standard library:57:5:application",
				fs: [
					'at ./src/contracts/util/checks.rsh:29:42:application call to "check" (defined at: reach standard library:49:32:function exp)',
					'at ./src/contracts/coin_shop.rsh:191:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:29:34:function exp)',
					"at ./src/contracts/coin_shop.rsh:189:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
					"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
					"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
					"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
				],
				msg: "balance insufficient for transaction",
				who: "buyer_api_gold",
			});
			const v8054 = stdlib.add(v6705, v6748);
			const v8055 = stdlib.le(v8054, stdlib.UInt_max);
			stdlib.assert(v8055, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "buyer_api_gold",
			});
			const v8060 = stdlib.le(v6739, stdlib.UInt_max);
			stdlib.assert(v8060, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "buyer_api_gold",
			});
			const v8068 = stdlib.le(v6741, stdlib.UInt_max);
			stdlib.assert(v8068, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "buyer_api_gold",
			});
			const v8076 = stdlib.le(v6743, stdlib.UInt_max);
			stdlib.assert(v8076, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "buyer_api_gold",
			});
			const v8189 = stdlib.sub(v8054, v8054);
			const v8190 = stdlib.ge(
				v8189,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:198:84:application", stdlib.UInt_max, "0"),
			);
			stdlib.assert(v8190, {
				at: "./src/contracts/coin_shop.rsh:198:84:application",
				fs: [
					"at ./src/contracts/coin_shop.rsh:196:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:43:function exp)",
				],
				msg: "assume >= 0",
				who: "buyer_api_gold",
			});
			const v8219 = stdlib.sub(
				v6743,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:199:70:decimal", stdlib.UInt_max, "1"),
			);
			const v8220 = stdlib.ge(
				v8219,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:199:76:application", stdlib.UInt_max, "0"),
			);
			stdlib.assert(v8220, {
				at: "./src/contracts/coin_shop.rsh:199:76:application",
				fs: [
					"at ./src/contracts/coin_shop.rsh:196:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:43:function exp)",
				],
				msg: "assume >= 0",
				who: "buyer_api_gold",
			});
			const v8223 = stdlib.Array_set(v6742, "0", v8219);
			const v8224 = stdlib.Array_set(
				v6704,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:199:76:application", stdlib.UInt_max, "2"),
				v8223,
			);
			const v8225 = "gold  ";
			null;
			const v8226 = true;
			const v8227 = await txn1.getOutput("buyer_api_gold", "v8226", ctc4, v8226);
			if (v5406) {
				stdlib.protect(ctc10, await interact.out(v7845, v8227), {
					at: "./src/contracts/coin_shop.rsh:189:23:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:189:23:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:23:function exp)",
						'at ./src/contracts/coin_shop.rsh:203:48:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:196:43:function exp)',
						"at ./src/contracts/coin_shop.rsh:196:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:43:function exp)",
					],
					msg: "out",
					who: "buyer_api_gold",
				});
			} else {
			}

			const v15135 = v6695;
			const v15136 = v6696;
			const v15137 = v6697;
			const v15139 = v8224;
			const v15140 = v8189;
			const v15141 = v6697 ? false : true;
			if (v6697) {
				const v15155 =
					v8224[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v15156 =
					v15155[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v15157 =
					v8224[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v15158 =
					v15157[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v15159 =
					v8224[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"2",
						)
					];
				const v15160 =
					v15159[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v15161 = [v15156, v15158, v15160];
				return;
			} else {
				const v15142 = v6696 ? false : true;
				const v15144 = v6696 ? false : v15141;
				const v15145 =
					v8224[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v15146 =
					v15145[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v15147 =
					v8224[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v15148 =
					v15147[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v15149 =
					v8224[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"2",
						)
					];
				const v15150 =
					v15149[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v15151 = [v15146, v15148, v15150];
				const v15152 =
					v6695[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:144:45:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v15153 =
					v6695[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:144:45:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v15154 =
					v6695[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:144:45:application",
							stdlib.UInt_max,
							"2",
						)
					];
				return;
			}
			break;
		}
		case "buyer_api_silver0_907": {
			const v8459 = v7228[1];
			return;
			break;
		}
		case "controller_api_restock0_907": {
			const v9073 = v7228[1];
			return;
			break;
		}
		case "controller_api_set_prices0_907": {
			const v9687 = v7228[1];
			return;
			break;
		}
		case "controller_api_terminate0_907": {
			const v10301 = v7228[1];
			return;
			break;
		}
		case "controller_api_toggle_pause0_907": {
			const v10915 = v7228[1];
			return;
			break;
		}
		case "controller_api_withdraw0_907": {
			const v11529 = v7228[1];
			return;
			break;
		}
	}
}
export async function _buyer_api_silver5(ctcTop, interact) {
	if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
		return Promise.reject(
			new Error(`The backend for _buyer_api_silver5 expects to receive a contract as its first argument.`),
		);
	}
	if (typeof interact !== "object") {
		return Promise.reject(
			new Error(
				`The backend for _buyer_api_silver5 expects to receive an interact object as its second argument.`,
			),
		);
	}
	const ctc = ctcTop._initialize();
	const stdlib = ctc.stdlib;
	const ctc0 = stdlib.T_Address;
	const ctc1 = stdlib.T_Token;
	const ctc2 = stdlib.T_UInt;
	const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
	const ctc4 = stdlib.T_Bool;
	const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
	const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
	const ctc7 = stdlib.T_Tuple([]);
	const ctc8 = stdlib.T_Tuple([ctc3]);
	const ctc9 = stdlib.T_Data({
		buyer_api_bronze0_907: ctc7,
		buyer_api_gold0_907: ctc7,
		buyer_api_silver0_907: ctc7,
		controller_api_restock0_907: ctc8,
		controller_api_set_prices0_907: ctc8,
		controller_api_terminate0_907: ctc7,
		controller_api_toggle_pause0_907: ctc7,
		controller_api_withdraw0_907: ctc7,
	});
	const ctc10 = stdlib.T_Null;

	const [
		v6629,
		v6630,
		v6631,
		v6632,
		v6654,
		v6695,
		v6696,
		v6697,
		v6704,
		v6705,
		v6735,
		v6737,
		v6738,
		v6739,
		v6740,
		v6741,
		v6742,
		v6743,
		v6744,
		v6746,
		v6747,
		v6748,
	] = await ctc.getState(stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5"), [
		ctc0,
		ctc1,
		ctc1,
		ctc1,
		ctc0,
		ctc3,
		ctc4,
		ctc4,
		ctc6,
		ctc2,
		ctc4,
		ctc4,
		ctc5,
		ctc2,
		ctc5,
		ctc2,
		ctc5,
		ctc2,
		ctc3,
		ctc2,
		ctc2,
		ctc2,
	]);
	const v6764 = stdlib.protect(ctc7, await interact.in(), {
		at: "./src/contracts/coin_shop.rsh:1:23:application",
		fs: [
			"at ./src/contracts/coin_shop.rsh:169:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
			'at ./src/contracts/coin_shop.rsh:118:68:application call to "runbuyer_api_silver0_907" (defined at: ./src/contracts/coin_shop.rsh:169:22:function exp)',
			"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
		],
		msg: "in",
		who: "buyer_api_silver",
	});
	stdlib.assert(v6737, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:33:33:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at ./src/contracts/coin_shop.rsh:170:36:application call to "checkActive" (defined at: ./src/contracts/util/checks.rsh:33:25:function exp)',
			"at ./src/contracts/coin_shop.rsh:169:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
			'at ./src/contracts/coin_shop.rsh:118:68:application call to "runbuyer_api_silver0_907" (defined at: ./src/contracts/coin_shop.rsh:169:22:function exp)',
			"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
		],
		msg: "contract is currently inactive",
		who: "buyer_api_silver",
	});
	const v6768 = stdlib.ge(
		v6741,
		stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:171:41:decimal", stdlib.UInt_max, "1"),
	);
	stdlib.assert(v6768, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:29:42:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at ./src/contracts/coin_shop.rsh:171:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:29:34:function exp)',
			"at ./src/contracts/coin_shop.rsh:169:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
			'at ./src/contracts/coin_shop.rsh:118:68:application call to "runbuyer_api_silver0_907" (defined at: ./src/contracts/coin_shop.rsh:169:22:function exp)',
			"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
		],
		msg: "balance insufficient for transaction",
		who: "buyer_api_silver",
	});
	const v6773 = ["buyer_api_silver0_907", v6764];

	const txn1 = await ctc.sendrecv({
		args: [
			v6629,
			v6630,
			v6631,
			v6632,
			v6654,
			v6695,
			v6696,
			v6697,
			v6704,
			v6705,
			v6735,
			v6737,
			v6738,
			v6739,
			v6740,
			v6741,
			v6742,
			v6743,
			v6744,
			v6746,
			v6747,
			v6748,
			v6773,
		],
		evt_cnt: 1,
		funcNum: 4,
		lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
		onlyIf: true,
		out_tys: [ctc9],
		pay: [
			v6747,
			[
				[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:175:59:decimal", stdlib.UInt_max, "0"),
					v6630,
				],
				[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:175:62:decimal", stdlib.UInt_max, "0"),
					v6631,
				],
				[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:175:65:decimal", stdlib.UInt_max, "0"),
					v6632,
				],
			],
		],
		sim_p: async (txn1) => {
			const sim_r = { txns: [], mapRefs: [], maps: [] };
			let sim_txn_ctr = stdlib.UInt_max;
			const getSimTokCtr = () => {
				sim_txn_ctr = sim_txn_ctr.sub(1);
				return sim_txn_ctr;
			};

			const {
				data: [v7228],
				secs: v7230,
				time: v7229,
				didSend: v5406,
				from: v7227,
			} = txn1;

			switch (v7228[0]) {
				case "buyer_api_bronze0_907": {
					const v7231 = v7228[1];

					break;
				}
				case "buyer_api_gold0_907": {
					const v7845 = v7228[1];

					break;
				}
				case "buyer_api_silver0_907": {
					const v8459 = v7228[1];
					sim_r.txns.push({
						kind: "api",
						who: "buyer_api_silver",
					});
					const v8668 = stdlib.add(v6705, v6747);
					sim_r.txns.push({
						amt: v6747,
						kind: "to",
						tok: undefined /* Nothing */,
					});
					const v8879 = stdlib.sub(v8668, v8668);
					sim_r.txns.push({
						kind: "from",
						to: v6654,
						tok: undefined /* Nothing */,
					});
					const v8909 = stdlib.sub(
						v6741,
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:179:67:decimal",
							stdlib.UInt_max,
							"1",
						),
					);
					const v8913 = stdlib.Array_set(v6740, "0", v8909);
					const v8914 = stdlib.Array_set(
						v6704,
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:179:76:application",
							stdlib.UInt_max,
							"1",
						),
						v8913,
					);
					sim_r.txns.push({
						kind: "from",
						to: v7227,
						tok: v6631,
					});
					const v8915 = "silver";
					null;
					const v8916 = true;
					const v8917 = await txn1.getOutput("buyer_api_silver", "v8916", ctc4, v8916);

					const v15585 = v6695;
					const v15586 = v6696;
					const v15587 = v6697;
					const v15589 = v8914;
					const v15590 = v8879;
					const v15591 = v6697 ? false : true;
					if (v6697) {
						const v15605 =
							v8914[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:53:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v15606 =
							v15605[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:53:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v15607 =
							v8914[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:70:application",
									stdlib.UInt_max,
									"1",
								)
							];
						const v15608 =
							v15607[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:70:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v15609 =
							v8914[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:87:application",
									stdlib.UInt_max,
									"2",
								)
							];
						const v15610 =
							v15609[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:87:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v15611 = [v15606, v15608, v15610];
						sim_r.isHalt = false;
					} else {
						const v15592 = v6696 ? false : true;
						const v15594 = v6696 ? false : v15591;
						const v15595 =
							v8914[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:53:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v15596 =
							v15595[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:53:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v15597 =
							v8914[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:70:application",
									stdlib.UInt_max,
									"1",
								)
							];
						const v15598 =
							v15597[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:70:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v15599 =
							v8914[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:87:application",
									stdlib.UInt_max,
									"2",
								)
							];
						const v15600 =
							v15599[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:87:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v15601 = [v15596, v15598, v15600];
						const v15602 =
							v6695[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:144:45:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v15603 =
							v6695[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:144:45:application",
									stdlib.UInt_max,
									"1",
								)
							];
						const v15604 =
							v6695[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:144:45:application",
									stdlib.UInt_max,
									"2",
								)
							];
						sim_r.isHalt = false;
					}
					break;
				}
				case "controller_api_restock0_907": {
					const v9073 = v7228[1];

					break;
				}
				case "controller_api_set_prices0_907": {
					const v9687 = v7228[1];

					break;
				}
				case "controller_api_terminate0_907": {
					const v10301 = v7228[1];

					break;
				}
				case "controller_api_toggle_pause0_907": {
					const v10915 = v7228[1];

					break;
				}
				case "controller_api_withdraw0_907": {
					const v11529 = v7228[1];

					break;
				}
			}
			return sim_r;
		},
		soloSend: false,
		timeoutAt: undefined /* mto */,
		tys: [
			ctc0,
			ctc1,
			ctc1,
			ctc1,
			ctc0,
			ctc3,
			ctc4,
			ctc4,
			ctc6,
			ctc2,
			ctc4,
			ctc4,
			ctc5,
			ctc2,
			ctc5,
			ctc2,
			ctc5,
			ctc2,
			ctc3,
			ctc2,
			ctc2,
			ctc2,
			ctc9,
		],
		waitIfNotPresent: false,
	});
	const {
		data: [v7228],
		secs: v7230,
		time: v7229,
		didSend: v5406,
		from: v7227,
	} = txn1;
	switch (v7228[0]) {
		case "buyer_api_bronze0_907": {
			const v7231 = v7228[1];
			return;
			break;
		}
		case "buyer_api_gold0_907": {
			const v7845 = v7228[1];
			return;
			break;
		}
		case "buyer_api_silver0_907": {
			const v8459 = v7228[1];
			undefined /* setApiDetails */;
			stdlib.assert(v6737, {
				at: "reach standard library:57:5:application",
				fs: [
					'at ./src/contracts/util/checks.rsh:33:33:application call to "check" (defined at: reach standard library:49:32:function exp)',
					'at ./src/contracts/coin_shop.rsh:170:36:application call to "checkActive" (defined at: ./src/contracts/util/checks.rsh:33:25:function exp)',
					"at ./src/contracts/coin_shop.rsh:169:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
					"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
					"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
					"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
				],
				msg: "contract is currently inactive",
				who: "buyer_api_silver",
			});
			const v8513 = stdlib.ge(
				v6741,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:171:41:decimal", stdlib.UInt_max, "1"),
			);
			stdlib.assert(v8513, {
				at: "reach standard library:57:5:application",
				fs: [
					'at ./src/contracts/util/checks.rsh:29:42:application call to "check" (defined at: reach standard library:49:32:function exp)',
					'at ./src/contracts/coin_shop.rsh:171:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:29:34:function exp)',
					"at ./src/contracts/coin_shop.rsh:169:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
					"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
					"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
					"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
				],
				msg: "balance insufficient for transaction",
				who: "buyer_api_silver",
			});
			const v8668 = stdlib.add(v6705, v6747);
			const v8669 = stdlib.le(v8668, stdlib.UInt_max);
			stdlib.assert(v8669, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "buyer_api_silver",
			});
			const v8674 = stdlib.le(v6739, stdlib.UInt_max);
			stdlib.assert(v8674, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "buyer_api_silver",
			});
			const v8682 = stdlib.le(v6741, stdlib.UInt_max);
			stdlib.assert(v8682, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "buyer_api_silver",
			});
			const v8690 = stdlib.le(v6743, stdlib.UInt_max);
			stdlib.assert(v8690, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "buyer_api_silver",
			});
			const v8879 = stdlib.sub(v8668, v8668);
			const v8880 = stdlib.ge(
				v8879,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:178:84:application", stdlib.UInt_max, "0"),
			);
			stdlib.assert(v8880, {
				at: "./src/contracts/coin_shop.rsh:178:84:application",
				fs: [
					"at ./src/contracts/coin_shop.rsh:176:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:43:function exp)",
				],
				msg: "assume >= 0",
				who: "buyer_api_silver",
			});
			const v8909 = stdlib.sub(
				v6741,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:179:67:decimal", stdlib.UInt_max, "1"),
			);
			const v8910 = stdlib.ge(
				v8909,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:179:76:application", stdlib.UInt_max, "0"),
			);
			stdlib.assert(v8910, {
				at: "./src/contracts/coin_shop.rsh:179:76:application",
				fs: [
					"at ./src/contracts/coin_shop.rsh:176:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:43:function exp)",
				],
				msg: "assume >= 0",
				who: "buyer_api_silver",
			});
			const v8913 = stdlib.Array_set(v6740, "0", v8909);
			const v8914 = stdlib.Array_set(
				v6704,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:179:76:application", stdlib.UInt_max, "1"),
				v8913,
			);
			const v8915 = "silver";
			null;
			const v8916 = true;
			const v8917 = await txn1.getOutput("buyer_api_silver", "v8916", ctc4, v8916);
			if (v5406) {
				stdlib.protect(ctc10, await interact.out(v8459, v8917), {
					at: "./src/contracts/coin_shop.rsh:169:23:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:169:23:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:23:function exp)",
						'at ./src/contracts/coin_shop.rsh:183:48:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:176:43:function exp)',
						"at ./src/contracts/coin_shop.rsh:176:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:43:function exp)",
					],
					msg: "out",
					who: "buyer_api_silver",
				});
			} else {
			}

			const v15585 = v6695;
			const v15586 = v6696;
			const v15587 = v6697;
			const v15589 = v8914;
			const v15590 = v8879;
			const v15591 = v6697 ? false : true;
			if (v6697) {
				const v15605 =
					v8914[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v15606 =
					v15605[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v15607 =
					v8914[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v15608 =
					v15607[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v15609 =
					v8914[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"2",
						)
					];
				const v15610 =
					v15609[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v15611 = [v15606, v15608, v15610];
				return;
			} else {
				const v15592 = v6696 ? false : true;
				const v15594 = v6696 ? false : v15591;
				const v15595 =
					v8914[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v15596 =
					v15595[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v15597 =
					v8914[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v15598 =
					v15597[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v15599 =
					v8914[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"2",
						)
					];
				const v15600 =
					v15599[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v15601 = [v15596, v15598, v15600];
				const v15602 =
					v6695[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:144:45:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v15603 =
					v6695[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:144:45:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v15604 =
					v6695[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:144:45:application",
							stdlib.UInt_max,
							"2",
						)
					];
				return;
			}
			break;
		}
		case "controller_api_restock0_907": {
			const v9073 = v7228[1];
			return;
			break;
		}
		case "controller_api_set_prices0_907": {
			const v9687 = v7228[1];
			return;
			break;
		}
		case "controller_api_terminate0_907": {
			const v10301 = v7228[1];
			return;
			break;
		}
		case "controller_api_toggle_pause0_907": {
			const v10915 = v7228[1];
			return;
			break;
		}
		case "controller_api_withdraw0_907": {
			const v11529 = v7228[1];
			return;
			break;
		}
	}
}
export async function _controller_api_restock5(ctcTop, interact) {
	if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
		return Promise.reject(
			new Error(`The backend for _controller_api_restock5 expects to receive a contract as its first argument.`),
		);
	}
	if (typeof interact !== "object") {
		return Promise.reject(
			new Error(
				`The backend for _controller_api_restock5 expects to receive an interact object as its second argument.`,
			),
		);
	}
	const ctc = ctcTop._initialize();
	const stdlib = ctc.stdlib;
	const ctc0 = stdlib.T_Address;
	const ctc1 = stdlib.T_Token;
	const ctc2 = stdlib.T_UInt;
	const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
	const ctc4 = stdlib.T_Bool;
	const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
	const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
	const ctc7 = stdlib.T_Tuple([ctc3]);
	const ctc8 = stdlib.T_Tuple([]);
	const ctc9 = stdlib.T_Data({
		buyer_api_bronze0_907: ctc8,
		buyer_api_gold0_907: ctc8,
		buyer_api_silver0_907: ctc8,
		controller_api_restock0_907: ctc7,
		controller_api_set_prices0_907: ctc7,
		controller_api_terminate0_907: ctc8,
		controller_api_toggle_pause0_907: ctc8,
		controller_api_withdraw0_907: ctc8,
	});
	const ctc10 = stdlib.T_Null;

	const [
		v6629,
		v6630,
		v6631,
		v6632,
		v6654,
		v6695,
		v6696,
		v6697,
		v6704,
		v6705,
		v6735,
		v6737,
		v6738,
		v6739,
		v6740,
		v6741,
		v6742,
		v6743,
		v6744,
		v6746,
		v6747,
		v6748,
	] = await ctc.getState(stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5"), [
		ctc0,
		ctc1,
		ctc1,
		ctc1,
		ctc0,
		ctc3,
		ctc4,
		ctc4,
		ctc6,
		ctc2,
		ctc4,
		ctc4,
		ctc5,
		ctc2,
		ctc5,
		ctc2,
		ctc5,
		ctc2,
		ctc3,
		ctc2,
		ctc2,
		ctc2,
	]);
	const v6788 = ctc.selfAddress();
	const v6790 = stdlib.protect(ctc7, await interact.in(), {
		at: "./src/contracts/coin_shop.rsh:1:23:application",
		fs: [
			"at ./src/contracts/coin_shop.rsh:212:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:212:50:function exp)",
			'at ./src/contracts/coin_shop.rsh:118:68:application call to "runcontroller_api_restock0_907" (defined at: ./src/contracts/coin_shop.rsh:212:22:function exp)',
			"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
		],
		msg: "in",
		who: "controller_api_restock",
	});
	const v6791 =
		v6790[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:1:23:application", stdlib.UInt_max, "0")];
	const v6792 =
		v6791[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:1:23:application", stdlib.UInt_max, "0")];
	const v6793 =
		v6791[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:1:23:application", stdlib.UInt_max, "1")];
	const v6794 =
		v6791[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:1:23:application", stdlib.UInt_max, "2")];
	const v6796 = stdlib.addressEq(v6788, v6654);
	stdlib.assert(v6796, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at ./src/contracts/coin_shop.rsh:213:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
			"at ./src/contracts/coin_shop.rsh:212:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:212:50:function exp)",
			'at ./src/contracts/coin_shop.rsh:118:68:application call to "runcontroller_api_restock0_907" (defined at: ./src/contracts/coin_shop.rsh:212:22:function exp)',
			"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
		],
		msg: "action not permitted",
		who: "controller_api_restock",
	});
	const v6806 = ["controller_api_restock0_907", v6790];

	const txn1 = await ctc.sendrecv({
		args: [
			v6629,
			v6630,
			v6631,
			v6632,
			v6654,
			v6695,
			v6696,
			v6697,
			v6704,
			v6705,
			v6735,
			v6737,
			v6738,
			v6739,
			v6740,
			v6741,
			v6742,
			v6743,
			v6744,
			v6746,
			v6747,
			v6748,
			v6806,
		],
		evt_cnt: 1,
		funcNum: 4,
		lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
		onlyIf: true,
		out_tys: [ctc9],
		pay: [
			stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:216:44:decimal", stdlib.UInt_max, "0"),
			[
				[v6792, v6630],
				[v6793, v6631],
				[v6794, v6632],
			],
		],
		sim_p: async (txn1) => {
			const sim_r = { txns: [], mapRefs: [], maps: [] };
			let sim_txn_ctr = stdlib.UInt_max;
			const getSimTokCtr = () => {
				sim_txn_ctr = sim_txn_ctr.sub(1);
				return sim_txn_ctr;
			};

			const {
				data: [v7228],
				secs: v7230,
				time: v7229,
				didSend: v5406,
				from: v7227,
			} = txn1;

			switch (v7228[0]) {
				case "buyer_api_bronze0_907": {
					const v7231 = v7228[1];

					break;
				}
				case "buyer_api_gold0_907": {
					const v7845 = v7228[1];

					break;
				}
				case "buyer_api_silver0_907": {
					const v8459 = v7228[1];

					break;
				}
				case "controller_api_restock0_907": {
					const v9073 = v7228[1];
					sim_r.txns.push({
						kind: "api",
						who: "controller_api_restock",
					});
					const v9147 =
						v9073[
							stdlib.checkedBigNumberify(
								"./src/contracts/coin_shop.rsh:212:22:spread",
								stdlib.UInt_max,
								"0",
							)
						];
					const v9150 =
						v9147[
							stdlib.checkedBigNumberify(
								"./src/contracts/coin_shop.rsh:216:47:spread",
								stdlib.UInt_max,
								"0",
							)
						];
					const v9151 =
						v9147[
							stdlib.checkedBigNumberify(
								"./src/contracts/coin_shop.rsh:216:47:spread",
								stdlib.UInt_max,
								"1",
							)
						];
					const v9152 =
						v9147[
							stdlib.checkedBigNumberify(
								"./src/contracts/coin_shop.rsh:216:47:spread",
								stdlib.UInt_max,
								"2",
							)
						];
					const v9287 = stdlib.add(v6739, v9150);
					const v9291 = stdlib.Array_set(v6738, "0", v9287);
					const v9292 = stdlib.Array_set(
						v6704,
						stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "0"),
						v9291,
					);
					sim_r.txns.push({
						amt: v9150,
						kind: "to",
						tok: v6630,
					});
					const v9293 =
						v9292[
							stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "1")
						];
					const v9294 =
						v9293[
							stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "0")
						];
					const v9295 = stdlib.add(v9294, v9151);
					const v9299 = stdlib.Array_set(v9293, "0", v9295);
					const v9300 = stdlib.Array_set(
						v9292,
						stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "1"),
						v9299,
					);
					sim_r.txns.push({
						amt: v9151,
						kind: "to",
						tok: v6631,
					});
					const v9301 =
						v9300[
							stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "2")
						];
					const v9302 =
						v9301[
							stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "0")
						];
					const v9303 = stdlib.add(v9302, v9152);
					const v9307 = stdlib.Array_set(v9301, "0", v9303);
					const v9308 = stdlib.Array_set(
						v9300,
						stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "2"),
						v9307,
					);
					sim_r.txns.push({
						amt: v9152,
						kind: "to",
						tok: v6632,
					});
					const v9542 =
						v9308[
							stdlib.checkedBigNumberify(
								"./src/contracts/coin_shop.rsh:131:53:application",
								stdlib.UInt_max,
								"0",
							)
						];
					const v9543 =
						v9542[
							stdlib.checkedBigNumberify(
								"./src/contracts/coin_shop.rsh:131:53:application",
								stdlib.UInt_max,
								"0",
							)
						];
					const v9544 =
						v9308[
							stdlib.checkedBigNumberify(
								"./src/contracts/coin_shop.rsh:131:70:application",
								stdlib.UInt_max,
								"1",
							)
						];
					const v9545 =
						v9544[
							stdlib.checkedBigNumberify(
								"./src/contracts/coin_shop.rsh:131:70:application",
								stdlib.UInt_max,
								"0",
							)
						];
					const v9546 =
						v9308[
							stdlib.checkedBigNumberify(
								"./src/contracts/coin_shop.rsh:131:87:application",
								stdlib.UInt_max,
								"2",
							)
						];
					const v9547 =
						v9546[
							stdlib.checkedBigNumberify(
								"./src/contracts/coin_shop.rsh:131:87:application",
								stdlib.UInt_max,
								"0",
							)
						];
					const v9548 = [v9543, v9545, v9547];
					null;
					const v9552 = true;
					const v9553 = await txn1.getOutput("controller_api_restock", "v9552", ctc4, v9552);

					const v16035 = v6695;
					const v16036 = v6696;
					const v16037 = v6697;
					const v16039 = v9308;
					const v16040 = v6705;
					const v16041 = v6697 ? false : true;
					if (v6697) {
						sim_r.isHalt = false;
					} else {
						const v16042 = v6696 ? false : true;
						const v16044 = v6696 ? false : v16041;
						const v16052 =
							v6695[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:144:45:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v16053 =
							v6695[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:144:45:application",
									stdlib.UInt_max,
									"1",
								)
							];
						const v16054 =
							v6695[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:144:45:application",
									stdlib.UInt_max,
									"2",
								)
							];
						sim_r.isHalt = false;
					}
					break;
				}
				case "controller_api_set_prices0_907": {
					const v9687 = v7228[1];

					break;
				}
				case "controller_api_terminate0_907": {
					const v10301 = v7228[1];

					break;
				}
				case "controller_api_toggle_pause0_907": {
					const v10915 = v7228[1];

					break;
				}
				case "controller_api_withdraw0_907": {
					const v11529 = v7228[1];

					break;
				}
			}
			return sim_r;
		},
		soloSend: false,
		timeoutAt: undefined /* mto */,
		tys: [
			ctc0,
			ctc1,
			ctc1,
			ctc1,
			ctc0,
			ctc3,
			ctc4,
			ctc4,
			ctc6,
			ctc2,
			ctc4,
			ctc4,
			ctc5,
			ctc2,
			ctc5,
			ctc2,
			ctc5,
			ctc2,
			ctc3,
			ctc2,
			ctc2,
			ctc2,
			ctc9,
		],
		waitIfNotPresent: false,
	});
	const {
		data: [v7228],
		secs: v7230,
		time: v7229,
		didSend: v5406,
		from: v7227,
	} = txn1;
	switch (v7228[0]) {
		case "buyer_api_bronze0_907": {
			const v7231 = v7228[1];
			return;
			break;
		}
		case "buyer_api_gold0_907": {
			const v7845 = v7228[1];
			return;
			break;
		}
		case "buyer_api_silver0_907": {
			const v8459 = v7228[1];
			return;
			break;
		}
		case "controller_api_restock0_907": {
			const v9073 = v7228[1];
			undefined /* setApiDetails */;
			const v9147 =
				v9073[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:212:22:spread", stdlib.UInt_max, "0")];
			const v9148 = stdlib.addressEq(v7227, v6654);
			stdlib.assert(v9148, {
				at: "reach standard library:57:5:application",
				fs: [
					'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
					'at ./src/contracts/coin_shop.rsh:213:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
					"at ./src/contracts/coin_shop.rsh:212:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:212:50:function exp)",
					"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:212:50:function exp)",
					"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
					"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
				],
				msg: "action not permitted",
				who: "controller_api_restock",
			});
			const v9150 =
				v9147[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:216:47:spread", stdlib.UInt_max, "0")];
			const v9151 =
				v9147[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:216:47:spread", stdlib.UInt_max, "1")];
			const v9152 =
				v9147[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:216:47:spread", stdlib.UInt_max, "2")];
			const v9283 = stdlib.le(v6705, stdlib.UInt_max);
			stdlib.assert(v9283, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "controller_api_restock",
			});
			const v9287 = stdlib.add(v6739, v9150);
			const v9288 = stdlib.le(v9287, stdlib.UInt_max);
			stdlib.assert(v9288, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "controller_api_restock",
			});
			const v9291 = stdlib.Array_set(v6738, "0", v9287);
			const v9292 = stdlib.Array_set(
				v6704,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "0"),
				v9291,
			);
			const v9293 =
				v9292[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "1")];
			const v9294 =
				v9293[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "0")];
			const v9295 = stdlib.add(v9294, v9151);
			const v9296 = stdlib.le(v9295, stdlib.UInt_max);
			stdlib.assert(v9296, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "controller_api_restock",
			});
			const v9299 = stdlib.Array_set(v9293, "0", v9295);
			const v9300 = stdlib.Array_set(
				v9292,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "1"),
				v9299,
			);
			const v9301 =
				v9300[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "2")];
			const v9302 =
				v9301[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "0")];
			const v9303 = stdlib.add(v9302, v9152);
			const v9304 = stdlib.le(v9303, stdlib.UInt_max);
			stdlib.assert(v9304, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "controller_api_restock",
			});
			const v9307 = stdlib.Array_set(v9301, "0", v9303);
			const v9308 = stdlib.Array_set(
				v9300,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "2"),
				v9307,
			);
			const v9542 =
				v9308[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")
				];
			const v9543 =
				v9542[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")
				];
			const v9544 =
				v9308[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")
				];
			const v9545 =
				v9544[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")
				];
			const v9546 =
				v9308[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")
				];
			const v9547 =
				v9546[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")
				];
			const v9548 = [v9543, v9545, v9547];
			null;
			const v9552 = true;
			const v9553 = await txn1.getOutput("controller_api_restock", "v9552", ctc4, v9552);
			if (v5406) {
				stdlib.protect(ctc10, await interact.out(v9073, v9553), {
					at: "./src/contracts/coin_shop.rsh:212:23:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:212:23:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:212:23:function exp)",
						'at ./src/contracts/coin_shop.rsh:223:48:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:217:43:function exp)',
						"at ./src/contracts/coin_shop.rsh:217:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:217:43:function exp)",
					],
					msg: "out",
					who: "controller_api_restock",
				});
			} else {
			}

			const v16035 = v6695;
			const v16036 = v6696;
			const v16037 = v6697;
			const v16039 = v9308;
			const v16040 = v6705;
			const v16041 = v6697 ? false : true;
			if (v6697) {
				return;
			} else {
				const v16042 = v6696 ? false : true;
				const v16044 = v6696 ? false : v16041;
				const v16052 =
					v6695[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:144:45:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v16053 =
					v6695[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:144:45:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v16054 =
					v6695[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:144:45:application",
							stdlib.UInt_max,
							"2",
						)
					];
				return;
			}
			break;
		}
		case "controller_api_set_prices0_907": {
			const v9687 = v7228[1];
			return;
			break;
		}
		case "controller_api_terminate0_907": {
			const v10301 = v7228[1];
			return;
			break;
		}
		case "controller_api_toggle_pause0_907": {
			const v10915 = v7228[1];
			return;
			break;
		}
		case "controller_api_withdraw0_907": {
			const v11529 = v7228[1];
			return;
			break;
		}
	}
}
export async function _controller_api_set_prices5(ctcTop, interact) {
	if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
		return Promise.reject(
			new Error(
				`The backend for _controller_api_set_prices5 expects to receive a contract as its first argument.`,
			),
		);
	}
	if (typeof interact !== "object") {
		return Promise.reject(
			new Error(
				`The backend for _controller_api_set_prices5 expects to receive an interact object as its second argument.`,
			),
		);
	}
	const ctc = ctcTop._initialize();
	const stdlib = ctc.stdlib;
	const ctc0 = stdlib.T_Address;
	const ctc1 = stdlib.T_Token;
	const ctc2 = stdlib.T_UInt;
	const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
	const ctc4 = stdlib.T_Bool;
	const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
	const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
	const ctc7 = stdlib.T_Tuple([ctc3]);
	const ctc8 = stdlib.T_Tuple([]);
	const ctc9 = stdlib.T_Data({
		buyer_api_bronze0_907: ctc8,
		buyer_api_gold0_907: ctc8,
		buyer_api_silver0_907: ctc8,
		controller_api_restock0_907: ctc7,
		controller_api_set_prices0_907: ctc7,
		controller_api_terminate0_907: ctc8,
		controller_api_toggle_pause0_907: ctc8,
		controller_api_withdraw0_907: ctc8,
	});
	const ctc10 = stdlib.T_Null;

	const [
		v6629,
		v6630,
		v6631,
		v6632,
		v6654,
		v6695,
		v6696,
		v6697,
		v6704,
		v6705,
		v6735,
		v6737,
		v6738,
		v6739,
		v6740,
		v6741,
		v6742,
		v6743,
		v6744,
		v6746,
		v6747,
		v6748,
	] = await ctc.getState(stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5"), [
		ctc0,
		ctc1,
		ctc1,
		ctc1,
		ctc0,
		ctc3,
		ctc4,
		ctc4,
		ctc6,
		ctc2,
		ctc4,
		ctc4,
		ctc5,
		ctc2,
		ctc5,
		ctc2,
		ctc5,
		ctc2,
		ctc3,
		ctc2,
		ctc2,
		ctc2,
	]);
	const v6808 = ctc.selfAddress();
	const v6810 = stdlib.protect(ctc7, await interact.in(), {
		at: "./src/contracts/coin_shop.rsh:1:23:application",
		fs: [
			"at ./src/contracts/coin_shop.rsh:229:58:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:229:58:function exp)",
			'at ./src/contracts/coin_shop.rsh:118:68:application call to "runcontroller_api_set_prices0_907" (defined at: ./src/contracts/coin_shop.rsh:229:22:function exp)',
			"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
		],
		msg: "in",
		who: "controller_api_set_prices",
	});
	const v6816 = stdlib.addressEq(v6808, v6654);
	stdlib.assert(v6816, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at ./src/contracts/coin_shop.rsh:230:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
			"at ./src/contracts/coin_shop.rsh:229:58:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:229:58:function exp)",
			'at ./src/contracts/coin_shop.rsh:118:68:application call to "runcontroller_api_set_prices0_907" (defined at: ./src/contracts/coin_shop.rsh:229:22:function exp)',
			"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
		],
		msg: "action not permitted",
		who: "controller_api_set_prices",
	});
	const v6826 = ["controller_api_set_prices0_907", v6810];

	const txn1 = await ctc.sendrecv({
		args: [
			v6629,
			v6630,
			v6631,
			v6632,
			v6654,
			v6695,
			v6696,
			v6697,
			v6704,
			v6705,
			v6735,
			v6737,
			v6738,
			v6739,
			v6740,
			v6741,
			v6742,
			v6743,
			v6744,
			v6746,
			v6747,
			v6748,
			v6826,
		],
		evt_cnt: 1,
		funcNum: 4,
		lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
		onlyIf: true,
		out_tys: [ctc9],
		pay: [
			stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:233:44:decimal", stdlib.UInt_max, "0"),
			[
				[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:233:47:decimal", stdlib.UInt_max, "0"),
					v6630,
				],
				[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:233:50:decimal", stdlib.UInt_max, "0"),
					v6631,
				],
				[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:233:53:decimal", stdlib.UInt_max, "0"),
					v6632,
				],
			],
		],
		sim_p: async (txn1) => {
			const sim_r = { txns: [], mapRefs: [], maps: [] };
			let sim_txn_ctr = stdlib.UInt_max;
			const getSimTokCtr = () => {
				sim_txn_ctr = sim_txn_ctr.sub(1);
				return sim_txn_ctr;
			};

			const {
				data: [v7228],
				secs: v7230,
				time: v7229,
				didSend: v5406,
				from: v7227,
			} = txn1;

			switch (v7228[0]) {
				case "buyer_api_bronze0_907": {
					const v7231 = v7228[1];

					break;
				}
				case "buyer_api_gold0_907": {
					const v7845 = v7228[1];

					break;
				}
				case "buyer_api_silver0_907": {
					const v8459 = v7228[1];

					break;
				}
				case "controller_api_restock0_907": {
					const v9073 = v7228[1];

					break;
				}
				case "controller_api_set_prices0_907": {
					const v9687 = v7228[1];
					sim_r.txns.push({
						kind: "api",
						who: "controller_api_set_prices",
					});
					const v10178 =
						v9687[
							stdlib.checkedBigNumberify(
								"./src/contracts/coin_shop.rsh:229:22:spread",
								stdlib.UInt_max,
								"0",
							)
						];
					null;
					const v10187 = true;
					const v10188 = await txn1.getOutput("controller_api_set_prices", "v10187", ctc4, v10187);

					const v16485 = v10178;
					const v16486 = v6696;
					const v16487 = v6697;
					const v16489 = v6704;
					const v16490 = v6705;
					const v16491 = v6697 ? false : true;
					if (v6697) {
						const v16505 =
							v6704[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:53:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v16506 =
							v16505[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:53:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v16507 =
							v6704[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:70:application",
									stdlib.UInt_max,
									"1",
								)
							];
						const v16508 =
							v16507[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:70:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v16509 =
							v6704[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:87:application",
									stdlib.UInt_max,
									"2",
								)
							];
						const v16510 =
							v16509[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:87:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v16511 = [v16506, v16508, v16510];
						sim_r.isHalt = false;
					} else {
						const v16492 = v6696 ? false : true;
						const v16494 = v6696 ? false : v16491;
						const v16495 =
							v6704[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:53:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v16496 =
							v16495[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:53:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v16497 =
							v6704[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:70:application",
									stdlib.UInt_max,
									"1",
								)
							];
						const v16498 =
							v16497[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:70:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v16499 =
							v6704[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:87:application",
									stdlib.UInt_max,
									"2",
								)
							];
						const v16500 =
							v16499[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:87:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v16501 = [v16496, v16498, v16500];
						const v16502 =
							v10178[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:144:45:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v16503 =
							v10178[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:144:45:application",
									stdlib.UInt_max,
									"1",
								)
							];
						const v16504 =
							v10178[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:144:45:application",
									stdlib.UInt_max,
									"2",
								)
							];
						sim_r.isHalt = false;
					}
					break;
				}
				case "controller_api_terminate0_907": {
					const v10301 = v7228[1];

					break;
				}
				case "controller_api_toggle_pause0_907": {
					const v10915 = v7228[1];

					break;
				}
				case "controller_api_withdraw0_907": {
					const v11529 = v7228[1];

					break;
				}
			}
			return sim_r;
		},
		soloSend: false,
		timeoutAt: undefined /* mto */,
		tys: [
			ctc0,
			ctc1,
			ctc1,
			ctc1,
			ctc0,
			ctc3,
			ctc4,
			ctc4,
			ctc6,
			ctc2,
			ctc4,
			ctc4,
			ctc5,
			ctc2,
			ctc5,
			ctc2,
			ctc5,
			ctc2,
			ctc3,
			ctc2,
			ctc2,
			ctc2,
			ctc9,
		],
		waitIfNotPresent: false,
	});
	const {
		data: [v7228],
		secs: v7230,
		time: v7229,
		didSend: v5406,
		from: v7227,
	} = txn1;
	switch (v7228[0]) {
		case "buyer_api_bronze0_907": {
			const v7231 = v7228[1];
			return;
			break;
		}
		case "buyer_api_gold0_907": {
			const v7845 = v7228[1];
			return;
			break;
		}
		case "buyer_api_silver0_907": {
			const v8459 = v7228[1];
			return;
			break;
		}
		case "controller_api_restock0_907": {
			const v9073 = v7228[1];
			return;
			break;
		}
		case "controller_api_set_prices0_907": {
			const v9687 = v7228[1];
			undefined /* setApiDetails */;
			const v9785 = stdlib.addressEq(v7227, v6654);
			stdlib.assert(v9785, {
				at: "reach standard library:57:5:application",
				fs: [
					'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
					'at ./src/contracts/coin_shop.rsh:230:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
					"at ./src/contracts/coin_shop.rsh:229:58:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:229:58:function exp)",
					"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:229:58:function exp)",
					"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
					"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
				],
				msg: "action not permitted",
				who: "controller_api_set_prices",
			});
			const v9897 = stdlib.le(v6705, stdlib.UInt_max);
			stdlib.assert(v9897, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "controller_api_set_prices",
			});
			const v9902 = stdlib.le(v6739, stdlib.UInt_max);
			stdlib.assert(v9902, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "controller_api_set_prices",
			});
			const v9910 = stdlib.le(v6741, stdlib.UInt_max);
			stdlib.assert(v9910, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "controller_api_set_prices",
			});
			const v9918 = stdlib.le(v6743, stdlib.UInt_max);
			stdlib.assert(v9918, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "controller_api_set_prices",
			});
			const v10178 =
				v9687[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:229:22:spread", stdlib.UInt_max, "0")];
			null;
			const v10187 = true;
			const v10188 = await txn1.getOutput("controller_api_set_prices", "v10187", ctc4, v10187);
			if (v5406) {
				stdlib.protect(ctc10, await interact.out(v9687, v10188), {
					at: "./src/contracts/coin_shop.rsh:229:23:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:229:23:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:229:23:function exp)",
						'at ./src/contracts/coin_shop.rsh:240:48:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:234:43:function exp)',
						"at ./src/contracts/coin_shop.rsh:234:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:234:43:function exp)",
					],
					msg: "out",
					who: "controller_api_set_prices",
				});
			} else {
			}

			const v16485 = v10178;
			const v16486 = v6696;
			const v16487 = v6697;
			const v16489 = v6704;
			const v16490 = v6705;
			const v16491 = v6697 ? false : true;
			if (v6697) {
				const v16505 =
					v6704[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v16506 =
					v16505[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v16507 =
					v6704[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v16508 =
					v16507[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v16509 =
					v6704[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"2",
						)
					];
				const v16510 =
					v16509[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v16511 = [v16506, v16508, v16510];
				return;
			} else {
				const v16492 = v6696 ? false : true;
				const v16494 = v6696 ? false : v16491;
				const v16495 =
					v6704[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v16496 =
					v16495[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v16497 =
					v6704[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v16498 =
					v16497[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v16499 =
					v6704[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"2",
						)
					];
				const v16500 =
					v16499[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v16501 = [v16496, v16498, v16500];
				const v16502 =
					v10178[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:144:45:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v16503 =
					v10178[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:144:45:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v16504 =
					v10178[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:144:45:application",
							stdlib.UInt_max,
							"2",
						)
					];
				return;
			}
			break;
		}
		case "controller_api_terminate0_907": {
			const v10301 = v7228[1];
			return;
			break;
		}
		case "controller_api_toggle_pause0_907": {
			const v10915 = v7228[1];
			return;
			break;
		}
		case "controller_api_withdraw0_907": {
			const v11529 = v7228[1];
			return;
			break;
		}
	}
}
export async function _controller_api_terminate5(ctcTop, interact) {
	if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
		return Promise.reject(
			new Error(
				`The backend for _controller_api_terminate5 expects to receive a contract as its first argument.`,
			),
		);
	}
	if (typeof interact !== "object") {
		return Promise.reject(
			new Error(
				`The backend for _controller_api_terminate5 expects to receive an interact object as its second argument.`,
			),
		);
	}
	const ctc = ctcTop._initialize();
	const stdlib = ctc.stdlib;
	const ctc0 = stdlib.T_Address;
	const ctc1 = stdlib.T_Token;
	const ctc2 = stdlib.T_UInt;
	const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
	const ctc4 = stdlib.T_Bool;
	const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
	const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
	const ctc7 = stdlib.T_Tuple([]);
	const ctc8 = stdlib.T_Tuple([ctc3]);
	const ctc9 = stdlib.T_Data({
		buyer_api_bronze0_907: ctc7,
		buyer_api_gold0_907: ctc7,
		buyer_api_silver0_907: ctc7,
		controller_api_restock0_907: ctc8,
		controller_api_set_prices0_907: ctc8,
		controller_api_terminate0_907: ctc7,
		controller_api_toggle_pause0_907: ctc7,
		controller_api_withdraw0_907: ctc7,
	});
	const ctc10 = stdlib.T_Null;

	const [
		v6629,
		v6630,
		v6631,
		v6632,
		v6654,
		v6695,
		v6696,
		v6697,
		v6704,
		v6705,
		v6735,
		v6737,
		v6738,
		v6739,
		v6740,
		v6741,
		v6742,
		v6743,
		v6744,
		v6746,
		v6747,
		v6748,
	] = await ctc.getState(stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5"), [
		ctc0,
		ctc1,
		ctc1,
		ctc1,
		ctc0,
		ctc3,
		ctc4,
		ctc4,
		ctc6,
		ctc2,
		ctc4,
		ctc4,
		ctc5,
		ctc2,
		ctc5,
		ctc2,
		ctc5,
		ctc2,
		ctc3,
		ctc2,
		ctc2,
		ctc2,
	]);
	const v6848 = ctc.selfAddress();
	const v6850 = stdlib.protect(ctc7, await interact.in(), {
		at: "./src/contracts/coin_shop.rsh:1:23:application",
		fs: [
			"at ./src/contracts/coin_shop.rsh:286:48:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:286:48:function exp)",
			'at ./src/contracts/coin_shop.rsh:118:68:application call to "runcontroller_api_terminate0_907" (defined at: ./src/contracts/coin_shop.rsh:286:22:function exp)',
			"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
		],
		msg: "in",
		who: "controller_api_terminate",
	});
	const v6851 = stdlib.addressEq(v6848, v6654);
	stdlib.assert(v6851, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at ./src/contracts/coin_shop.rsh:287:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
			"at ./src/contracts/coin_shop.rsh:286:48:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:286:48:function exp)",
			'at ./src/contracts/coin_shop.rsh:118:68:application call to "runcontroller_api_terminate0_907" (defined at: ./src/contracts/coin_shop.rsh:286:22:function exp)',
			"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
		],
		msg: "action not permitted",
		who: "controller_api_terminate",
	});
	const v6856 = ["controller_api_terminate0_907", v6850];

	const txn1 = await ctc.sendrecv({
		args: [
			v6629,
			v6630,
			v6631,
			v6632,
			v6654,
			v6695,
			v6696,
			v6697,
			v6704,
			v6705,
			v6735,
			v6737,
			v6738,
			v6739,
			v6740,
			v6741,
			v6742,
			v6743,
			v6744,
			v6746,
			v6747,
			v6748,
			v6856,
		],
		evt_cnt: 1,
		funcNum: 4,
		lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
		onlyIf: true,
		out_tys: [ctc9],
		pay: [
			stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:290:44:decimal", stdlib.UInt_max, "0"),
			[
				[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:290:47:decimal", stdlib.UInt_max, "0"),
					v6630,
				],
				[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:290:50:decimal", stdlib.UInt_max, "0"),
					v6631,
				],
				[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:290:53:decimal", stdlib.UInt_max, "0"),
					v6632,
				],
			],
		],
		sim_p: async (txn1) => {
			const sim_r = { txns: [], mapRefs: [], maps: [] };
			let sim_txn_ctr = stdlib.UInt_max;
			const getSimTokCtr = () => {
				sim_txn_ctr = sim_txn_ctr.sub(1);
				return sim_txn_ctr;
			};

			const {
				data: [v7228],
				secs: v7230,
				time: v7229,
				didSend: v5406,
				from: v7227,
			} = txn1;

			switch (v7228[0]) {
				case "buyer_api_bronze0_907": {
					const v7231 = v7228[1];

					break;
				}
				case "buyer_api_gold0_907": {
					const v7845 = v7228[1];

					break;
				}
				case "buyer_api_silver0_907": {
					const v8459 = v7228[1];

					break;
				}
				case "controller_api_restock0_907": {
					const v9073 = v7228[1];

					break;
				}
				case "controller_api_set_prices0_907": {
					const v9687 = v7228[1];

					break;
				}
				case "controller_api_terminate0_907": {
					const v10301 = v7228[1];
					sim_r.txns.push({
						kind: "api",
						who: "controller_api_terminate",
					});
					const v10817 = true;
					null;
					const v10818 = true;
					const v10819 = await txn1.getOutput("controller_api_terminate", "v10818", ctc4, v10818);

					const v16935 = v6695;
					const v16936 = v6696;
					const v16939 = v6704;
					const v16940 = v6705;
					const v16955 =
						v6704[
							stdlib.checkedBigNumberify(
								"./src/contracts/coin_shop.rsh:131:53:application",
								stdlib.UInt_max,
								"0",
							)
						];
					const v16956 =
						v16955[
							stdlib.checkedBigNumberify(
								"./src/contracts/coin_shop.rsh:131:53:application",
								stdlib.UInt_max,
								"0",
							)
						];
					const v16957 =
						v6704[
							stdlib.checkedBigNumberify(
								"./src/contracts/coin_shop.rsh:131:70:application",
								stdlib.UInt_max,
								"1",
							)
						];
					const v16958 =
						v16957[
							stdlib.checkedBigNumberify(
								"./src/contracts/coin_shop.rsh:131:70:application",
								stdlib.UInt_max,
								"0",
							)
						];
					const v16959 =
						v6704[
							stdlib.checkedBigNumberify(
								"./src/contracts/coin_shop.rsh:131:87:application",
								stdlib.UInt_max,
								"2",
							)
						];
					const v16960 =
						v16959[
							stdlib.checkedBigNumberify(
								"./src/contracts/coin_shop.rsh:131:87:application",
								stdlib.UInt_max,
								"0",
							)
						];
					const v16961 = [v16956, v16958, v16960];
					sim_r.isHalt = false;

					break;
				}
				case "controller_api_toggle_pause0_907": {
					const v10915 = v7228[1];

					break;
				}
				case "controller_api_withdraw0_907": {
					const v11529 = v7228[1];

					break;
				}
			}
			return sim_r;
		},
		soloSend: false,
		timeoutAt: undefined /* mto */,
		tys: [
			ctc0,
			ctc1,
			ctc1,
			ctc1,
			ctc0,
			ctc3,
			ctc4,
			ctc4,
			ctc6,
			ctc2,
			ctc4,
			ctc4,
			ctc5,
			ctc2,
			ctc5,
			ctc2,
			ctc5,
			ctc2,
			ctc3,
			ctc2,
			ctc2,
			ctc2,
			ctc9,
		],
		waitIfNotPresent: false,
	});
	const {
		data: [v7228],
		secs: v7230,
		time: v7229,
		didSend: v5406,
		from: v7227,
	} = txn1;
	switch (v7228[0]) {
		case "buyer_api_bronze0_907": {
			const v7231 = v7228[1];
			return;
			break;
		}
		case "buyer_api_gold0_907": {
			const v7845 = v7228[1];
			return;
			break;
		}
		case "buyer_api_silver0_907": {
			const v8459 = v7228[1];
			return;
			break;
		}
		case "controller_api_restock0_907": {
			const v9073 = v7228[1];
			return;
			break;
		}
		case "controller_api_set_prices0_907": {
			const v9687 = v7228[1];
			return;
			break;
		}
		case "controller_api_terminate0_907": {
			const v10301 = v7228[1];
			undefined /* setApiDetails */;
			const v10418 = stdlib.addressEq(v7227, v6654);
			stdlib.assert(v10418, {
				at: "reach standard library:57:5:application",
				fs: [
					'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
					'at ./src/contracts/coin_shop.rsh:287:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
					"at ./src/contracts/coin_shop.rsh:286:48:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:286:48:function exp)",
					"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:286:48:function exp)",
					"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
					"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
				],
				msg: "action not permitted",
				who: "controller_api_terminate",
			});
			const v10511 = stdlib.le(v6705, stdlib.UInt_max);
			stdlib.assert(v10511, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "controller_api_terminate",
			});
			const v10516 = stdlib.le(v6739, stdlib.UInt_max);
			stdlib.assert(v10516, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "controller_api_terminate",
			});
			const v10524 = stdlib.le(v6741, stdlib.UInt_max);
			stdlib.assert(v10524, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "controller_api_terminate",
			});
			const v10532 = stdlib.le(v6743, stdlib.UInt_max);
			stdlib.assert(v10532, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "controller_api_terminate",
			});
			const v10817 = true;
			null;
			const v10818 = true;
			const v10819 = await txn1.getOutput("controller_api_terminate", "v10818", ctc4, v10818);
			if (v5406) {
				stdlib.protect(ctc10, await interact.out(v10301, v10819), {
					at: "./src/contracts/coin_shop.rsh:286:23:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:286:23:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:286:23:function exp)",
						'at ./src/contracts/coin_shop.rsh:296:48:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:291:43:function exp)',
						"at ./src/contracts/coin_shop.rsh:291:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:291:43:function exp)",
					],
					msg: "out",
					who: "controller_api_terminate",
				});
			} else {
			}

			const v16935 = v6695;
			const v16936 = v6696;
			const v16939 = v6704;
			const v16940 = v6705;
			const v16955 =
				v6704[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")
				];
			const v16956 =
				v16955[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")
				];
			const v16957 =
				v6704[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")
				];
			const v16958 =
				v16957[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")
				];
			const v16959 =
				v6704[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")
				];
			const v16960 =
				v16959[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")
				];
			const v16961 = [v16956, v16958, v16960];
			return;

			break;
		}
		case "controller_api_toggle_pause0_907": {
			const v10915 = v7228[1];
			return;
			break;
		}
		case "controller_api_withdraw0_907": {
			const v11529 = v7228[1];
			return;
			break;
		}
	}
}
export async function _controller_api_toggle_pause5(ctcTop, interact) {
	if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
		return Promise.reject(
			new Error(
				`The backend for _controller_api_toggle_pause5 expects to receive a contract as its first argument.`,
			),
		);
	}
	if (typeof interact !== "object") {
		return Promise.reject(
			new Error(
				`The backend for _controller_api_toggle_pause5 expects to receive an interact object as its second argument.`,
			),
		);
	}
	const ctc = ctcTop._initialize();
	const stdlib = ctc.stdlib;
	const ctc0 = stdlib.T_Address;
	const ctc1 = stdlib.T_Token;
	const ctc2 = stdlib.T_UInt;
	const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
	const ctc4 = stdlib.T_Bool;
	const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
	const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
	const ctc7 = stdlib.T_Tuple([]);
	const ctc8 = stdlib.T_Tuple([ctc3]);
	const ctc9 = stdlib.T_Data({
		buyer_api_bronze0_907: ctc7,
		buyer_api_gold0_907: ctc7,
		buyer_api_silver0_907: ctc7,
		controller_api_restock0_907: ctc8,
		controller_api_set_prices0_907: ctc8,
		controller_api_terminate0_907: ctc7,
		controller_api_toggle_pause0_907: ctc7,
		controller_api_withdraw0_907: ctc7,
	});
	const ctc10 = stdlib.T_Null;

	const [
		v6629,
		v6630,
		v6631,
		v6632,
		v6654,
		v6695,
		v6696,
		v6697,
		v6704,
		v6705,
		v6735,
		v6737,
		v6738,
		v6739,
		v6740,
		v6741,
		v6742,
		v6743,
		v6744,
		v6746,
		v6747,
		v6748,
	] = await ctc.getState(stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5"), [
		ctc0,
		ctc1,
		ctc1,
		ctc1,
		ctc0,
		ctc3,
		ctc4,
		ctc4,
		ctc6,
		ctc2,
		ctc4,
		ctc4,
		ctc5,
		ctc2,
		ctc5,
		ctc2,
		ctc5,
		ctc2,
		ctc3,
		ctc2,
		ctc2,
		ctc2,
	]);
	const v6828 = ctc.selfAddress();
	const v6830 = stdlib.protect(ctc7, await interact.in(), {
		at: "./src/contracts/coin_shop.rsh:1:23:application",
		fs: [
			"at ./src/contracts/coin_shop.rsh:246:51:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:246:51:function exp)",
			'at ./src/contracts/coin_shop.rsh:118:68:application call to "runcontroller_api_toggle_pause0_907" (defined at: ./src/contracts/coin_shop.rsh:246:22:function exp)',
			"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
		],
		msg: "in",
		who: "controller_api_toggle_pause",
	});
	const v6831 = stdlib.addressEq(v6828, v6654);
	stdlib.assert(v6831, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at ./src/contracts/coin_shop.rsh:247:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
			"at ./src/contracts/coin_shop.rsh:246:51:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:246:51:function exp)",
			'at ./src/contracts/coin_shop.rsh:118:68:application call to "runcontroller_api_toggle_pause0_907" (defined at: ./src/contracts/coin_shop.rsh:246:22:function exp)',
			"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
		],
		msg: "action not permitted",
		who: "controller_api_toggle_pause",
	});
	const v6836 = ["controller_api_toggle_pause0_907", v6830];

	const txn1 = await ctc.sendrecv({
		args: [
			v6629,
			v6630,
			v6631,
			v6632,
			v6654,
			v6695,
			v6696,
			v6697,
			v6704,
			v6705,
			v6735,
			v6737,
			v6738,
			v6739,
			v6740,
			v6741,
			v6742,
			v6743,
			v6744,
			v6746,
			v6747,
			v6748,
			v6836,
		],
		evt_cnt: 1,
		funcNum: 4,
		lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
		onlyIf: true,
		out_tys: [ctc9],
		pay: [
			stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:250:44:decimal", stdlib.UInt_max, "0"),
			[
				[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:250:47:decimal", stdlib.UInt_max, "0"),
					v6630,
				],
				[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:250:50:decimal", stdlib.UInt_max, "0"),
					v6631,
				],
				[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:250:53:decimal", stdlib.UInt_max, "0"),
					v6632,
				],
			],
		],
		sim_p: async (txn1) => {
			const sim_r = { txns: [], mapRefs: [], maps: [] };
			let sim_txn_ctr = stdlib.UInt_max;
			const getSimTokCtr = () => {
				sim_txn_ctr = sim_txn_ctr.sub(1);
				return sim_txn_ctr;
			};

			const {
				data: [v7228],
				secs: v7230,
				time: v7229,
				didSend: v5406,
				from: v7227,
			} = txn1;

			switch (v7228[0]) {
				case "buyer_api_bronze0_907": {
					const v7231 = v7228[1];

					break;
				}
				case "buyer_api_gold0_907": {
					const v7845 = v7228[1];

					break;
				}
				case "buyer_api_silver0_907": {
					const v8459 = v7228[1];

					break;
				}
				case "controller_api_restock0_907": {
					const v9073 = v7228[1];

					break;
				}
				case "controller_api_set_prices0_907": {
					const v9687 = v7228[1];

					break;
				}
				case "controller_api_terminate0_907": {
					const v10301 = v7228[1];

					break;
				}
				case "controller_api_toggle_pause0_907": {
					const v10915 = v7228[1];
					sim_r.txns.push({
						kind: "api",
						who: "controller_api_toggle_pause",
					});
					const v11447 = await txn1.getOutput("controller_api_toggle_pause", "v6735", ctc4, v6735);

					const v17385 = v6695;
					const v17386 = v6735;
					const v17387 = v6697;
					const v17389 = v6704;
					const v17390 = v6705;
					const v17391 = v6697 ? false : true;
					if (v6697) {
						const v17405 =
							v6704[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:53:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v17406 =
							v17405[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:53:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v17407 =
							v6704[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:70:application",
									stdlib.UInt_max,
									"1",
								)
							];
						const v17408 =
							v17407[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:70:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v17409 =
							v6704[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:87:application",
									stdlib.UInt_max,
									"2",
								)
							];
						const v17410 =
							v17409[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:87:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v17411 = [v17406, v17408, v17410];
						sim_r.isHalt = false;
					} else {
						const v17392 = v6735 ? false : true;
						const v17394 = v6735 ? false : v17391;
						const v17395 =
							v6704[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:53:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v17396 =
							v17395[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:53:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v17397 =
							v6704[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:70:application",
									stdlib.UInt_max,
									"1",
								)
							];
						const v17398 =
							v17397[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:70:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v17399 =
							v6704[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:87:application",
									stdlib.UInt_max,
									"2",
								)
							];
						const v17400 =
							v17399[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:87:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v17401 = [v17396, v17398, v17400];
						const v17402 =
							v6695[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:144:45:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v17403 =
							v6695[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:144:45:application",
									stdlib.UInt_max,
									"1",
								)
							];
						const v17404 =
							v6695[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:144:45:application",
									stdlib.UInt_max,
									"2",
								)
							];
						sim_r.isHalt = false;
					}
					break;
				}
				case "controller_api_withdraw0_907": {
					const v11529 = v7228[1];

					break;
				}
			}
			return sim_r;
		},
		soloSend: false,
		timeoutAt: undefined /* mto */,
		tys: [
			ctc0,
			ctc1,
			ctc1,
			ctc1,
			ctc0,
			ctc3,
			ctc4,
			ctc4,
			ctc6,
			ctc2,
			ctc4,
			ctc4,
			ctc5,
			ctc2,
			ctc5,
			ctc2,
			ctc5,
			ctc2,
			ctc3,
			ctc2,
			ctc2,
			ctc2,
			ctc9,
		],
		waitIfNotPresent: false,
	});
	const {
		data: [v7228],
		secs: v7230,
		time: v7229,
		didSend: v5406,
		from: v7227,
	} = txn1;
	switch (v7228[0]) {
		case "buyer_api_bronze0_907": {
			const v7231 = v7228[1];
			return;
			break;
		}
		case "buyer_api_gold0_907": {
			const v7845 = v7228[1];
			return;
			break;
		}
		case "buyer_api_silver0_907": {
			const v8459 = v7228[1];
			return;
			break;
		}
		case "controller_api_restock0_907": {
			const v9073 = v7228[1];
			return;
			break;
		}
		case "controller_api_set_prices0_907": {
			const v9687 = v7228[1];
			return;
			break;
		}
		case "controller_api_terminate0_907": {
			const v10301 = v7228[1];
			return;
			break;
		}
		case "controller_api_toggle_pause0_907": {
			const v10915 = v7228[1];
			undefined /* setApiDetails */;
			const v11051 = stdlib.addressEq(v7227, v6654);
			stdlib.assert(v11051, {
				at: "reach standard library:57:5:application",
				fs: [
					'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
					'at ./src/contracts/coin_shop.rsh:247:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
					"at ./src/contracts/coin_shop.rsh:246:51:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:246:51:function exp)",
					"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:246:51:function exp)",
					"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
					"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
				],
				msg: "action not permitted",
				who: "controller_api_toggle_pause",
			});
			const v11125 = stdlib.le(v6705, stdlib.UInt_max);
			stdlib.assert(v11125, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "controller_api_toggle_pause",
			});
			const v11130 = stdlib.le(v6739, stdlib.UInt_max);
			stdlib.assert(v11130, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "controller_api_toggle_pause",
			});
			const v11138 = stdlib.le(v6741, stdlib.UInt_max);
			stdlib.assert(v11138, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "controller_api_toggle_pause",
			});
			const v11146 = stdlib.le(v6743, stdlib.UInt_max);
			stdlib.assert(v11146, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "controller_api_toggle_pause",
			});
			const v11447 = await txn1.getOutput("controller_api_toggle_pause", "v6735", ctc4, v6735);
			if (v5406) {
				stdlib.protect(ctc10, await interact.out(v10915, v11447), {
					at: "./src/contracts/coin_shop.rsh:246:23:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:246:23:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:246:23:function exp)",
						'at ./src/contracts/coin_shop.rsh:259:48:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:251:43:function exp)',
						"at ./src/contracts/coin_shop.rsh:251:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:251:43:function exp)",
					],
					msg: "out",
					who: "controller_api_toggle_pause",
				});
			} else {
			}

			const v17385 = v6695;
			const v17386 = v6735;
			const v17387 = v6697;
			const v17389 = v6704;
			const v17390 = v6705;
			const v17391 = v6697 ? false : true;
			if (v6697) {
				const v17405 =
					v6704[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v17406 =
					v17405[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v17407 =
					v6704[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v17408 =
					v17407[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v17409 =
					v6704[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"2",
						)
					];
				const v17410 =
					v17409[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v17411 = [v17406, v17408, v17410];
				return;
			} else {
				const v17392 = v6735 ? false : true;
				const v17394 = v6735 ? false : v17391;
				const v17395 =
					v6704[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v17396 =
					v17395[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v17397 =
					v6704[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v17398 =
					v17397[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v17399 =
					v6704[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"2",
						)
					];
				const v17400 =
					v17399[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v17401 = [v17396, v17398, v17400];
				const v17402 =
					v6695[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:144:45:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v17403 =
					v6695[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:144:45:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v17404 =
					v6695[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:144:45:application",
							stdlib.UInt_max,
							"2",
						)
					];
				return;
			}
			break;
		}
		case "controller_api_withdraw0_907": {
			const v11529 = v7228[1];
			return;
			break;
		}
	}
}
export async function _controller_api_withdraw5(ctcTop, interact) {
	if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
		return Promise.reject(
			new Error(`The backend for _controller_api_withdraw5 expects to receive a contract as its first argument.`),
		);
	}
	if (typeof interact !== "object") {
		return Promise.reject(
			new Error(
				`The backend for _controller_api_withdraw5 expects to receive an interact object as its second argument.`,
			),
		);
	}
	const ctc = ctcTop._initialize();
	const stdlib = ctc.stdlib;
	const ctc0 = stdlib.T_Address;
	const ctc1 = stdlib.T_Token;
	const ctc2 = stdlib.T_UInt;
	const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
	const ctc4 = stdlib.T_Bool;
	const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
	const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
	const ctc7 = stdlib.T_Tuple([]);
	const ctc8 = stdlib.T_Tuple([ctc3]);
	const ctc9 = stdlib.T_Data({
		buyer_api_bronze0_907: ctc7,
		buyer_api_gold0_907: ctc7,
		buyer_api_silver0_907: ctc7,
		controller_api_restock0_907: ctc8,
		controller_api_set_prices0_907: ctc8,
		controller_api_terminate0_907: ctc7,
		controller_api_toggle_pause0_907: ctc7,
		controller_api_withdraw0_907: ctc7,
	});
	const ctc10 = stdlib.T_Null;

	const [
		v6629,
		v6630,
		v6631,
		v6632,
		v6654,
		v6695,
		v6696,
		v6697,
		v6704,
		v6705,
		v6735,
		v6737,
		v6738,
		v6739,
		v6740,
		v6741,
		v6742,
		v6743,
		v6744,
		v6746,
		v6747,
		v6748,
	] = await ctc.getState(stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5"), [
		ctc0,
		ctc1,
		ctc1,
		ctc1,
		ctc0,
		ctc3,
		ctc4,
		ctc4,
		ctc6,
		ctc2,
		ctc4,
		ctc4,
		ctc5,
		ctc2,
		ctc5,
		ctc2,
		ctc5,
		ctc2,
		ctc3,
		ctc2,
		ctc2,
		ctc2,
	]);
	const v6838 = ctc.selfAddress();
	const v6840 = stdlib.protect(ctc7, await interact.in(), {
		at: "./src/contracts/coin_shop.rsh:1:23:application",
		fs: [
			"at ./src/contracts/coin_shop.rsh:266:47:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:266:47:function exp)",
			'at ./src/contracts/coin_shop.rsh:118:68:application call to "runcontroller_api_withdraw0_907" (defined at: ./src/contracts/coin_shop.rsh:266:22:function exp)',
			"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
		],
		msg: "in",
		who: "controller_api_withdraw",
	});
	const v6841 = stdlib.addressEq(v6838, v6654);
	stdlib.assert(v6841, {
		at: "reach standard library:57:5:application",
		fs: [
			'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
			'at ./src/contracts/coin_shop.rsh:267:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
			"at ./src/contracts/coin_shop.rsh:266:47:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:266:47:function exp)",
			'at ./src/contracts/coin_shop.rsh:118:68:application call to "runcontroller_api_withdraw0_907" (defined at: ./src/contracts/coin_shop.rsh:266:22:function exp)',
			"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
		],
		msg: "action not permitted",
		who: "controller_api_withdraw",
	});
	const v6846 = ["controller_api_withdraw0_907", v6840];

	const txn1 = await ctc.sendrecv({
		args: [
			v6629,
			v6630,
			v6631,
			v6632,
			v6654,
			v6695,
			v6696,
			v6697,
			v6704,
			v6705,
			v6735,
			v6737,
			v6738,
			v6739,
			v6740,
			v6741,
			v6742,
			v6743,
			v6744,
			v6746,
			v6747,
			v6748,
			v6846,
		],
		evt_cnt: 1,
		funcNum: 4,
		lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
		onlyIf: true,
		out_tys: [ctc9],
		pay: [
			stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:270:44:decimal", stdlib.UInt_max, "0"),
			[
				[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:270:47:decimal", stdlib.UInt_max, "0"),
					v6630,
				],
				[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:270:50:decimal", stdlib.UInt_max, "0"),
					v6631,
				],
				[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:270:53:decimal", stdlib.UInt_max, "0"),
					v6632,
				],
			],
		],
		sim_p: async (txn1) => {
			const sim_r = { txns: [], mapRefs: [], maps: [] };
			let sim_txn_ctr = stdlib.UInt_max;
			const getSimTokCtr = () => {
				sim_txn_ctr = sim_txn_ctr.sub(1);
				return sim_txn_ctr;
			};

			const {
				data: [v7228],
				secs: v7230,
				time: v7229,
				didSend: v5406,
				from: v7227,
			} = txn1;

			switch (v7228[0]) {
				case "buyer_api_bronze0_907": {
					const v7231 = v7228[1];

					break;
				}
				case "buyer_api_gold0_907": {
					const v7845 = v7228[1];

					break;
				}
				case "buyer_api_silver0_907": {
					const v8459 = v7228[1];

					break;
				}
				case "controller_api_restock0_907": {
					const v9073 = v7228[1];

					break;
				}
				case "controller_api_set_prices0_907": {
					const v9687 = v7228[1];

					break;
				}
				case "controller_api_terminate0_907": {
					const v10301 = v7228[1];

					break;
				}
				case "controller_api_toggle_pause0_907": {
					const v10915 = v7228[1];

					break;
				}
				case "controller_api_withdraw0_907": {
					const v11529 = v7228[1];
					sim_r.txns.push({
						kind: "api",
						who: "controller_api_withdraw",
					});
					const v12107 = stdlib.sub(v6739, v6739);
					const v12111 = stdlib.Array_set(v6738, "0", v12107);
					const v12112 = stdlib.Array_set(
						v6704,
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:276:76:application",
							stdlib.UInt_max,
							"0",
						),
						v12111,
					);
					sim_r.txns.push({
						kind: "from",
						to: v6654,
						tok: v6630,
					});
					const v12113 =
						v12112[
							stdlib.checkedBigNumberify(
								"./src/contracts/coin_shop.rsh:276:76:application",
								stdlib.UInt_max,
								"1",
							)
						];
					const v12114 =
						v12113[
							stdlib.checkedBigNumberify(
								"./src/contracts/coin_shop.rsh:276:76:application",
								stdlib.UInt_max,
								"0",
							)
						];
					const v12118 = stdlib.sub(v12114, v6741);
					const v12122 = stdlib.Array_set(v12113, "0", v12118);
					const v12123 = stdlib.Array_set(
						v12112,
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:276:76:application",
							stdlib.UInt_max,
							"1",
						),
						v12122,
					);
					sim_r.txns.push({
						kind: "from",
						to: v6654,
						tok: v6631,
					});
					const v12124 =
						v12123[
							stdlib.checkedBigNumberify(
								"./src/contracts/coin_shop.rsh:276:76:application",
								stdlib.UInt_max,
								"2",
							)
						];
					const v12125 =
						v12124[
							stdlib.checkedBigNumberify(
								"./src/contracts/coin_shop.rsh:276:76:application",
								stdlib.UInt_max,
								"0",
							)
						];
					const v12129 = stdlib.sub(v12125, v6743);
					const v12133 = stdlib.Array_set(v12124, "0", v12129);
					const v12134 = stdlib.Array_set(
						v12123,
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:276:76:application",
							stdlib.UInt_max,
							"2",
						),
						v12133,
					);
					sim_r.txns.push({
						kind: "from",
						to: v6654,
						tok: v6632,
					});
					null;
					const v12136 = true;
					const v12137 = await txn1.getOutput("controller_api_withdraw", "v12136", ctc4, v12136);

					const v17835 = v6695;
					const v17836 = v6696;
					const v17837 = v6697;
					const v17839 = v12134;
					const v17840 = v6705;
					const v17841 = v6697 ? false : true;
					if (v6697) {
						const v17855 =
							v12134[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:53:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v17856 =
							v17855[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:53:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v17857 =
							v12134[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:70:application",
									stdlib.UInt_max,
									"1",
								)
							];
						const v17858 =
							v17857[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:70:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v17859 =
							v12134[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:87:application",
									stdlib.UInt_max,
									"2",
								)
							];
						const v17860 =
							v17859[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:87:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v17861 = [v17856, v17858, v17860];
						sim_r.isHalt = false;
					} else {
						const v17842 = v6696 ? false : true;
						const v17844 = v6696 ? false : v17841;
						const v17845 =
							v12134[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:53:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v17846 =
							v17845[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:53:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v17847 =
							v12134[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:70:application",
									stdlib.UInt_max,
									"1",
								)
							];
						const v17848 =
							v17847[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:70:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v17849 =
							v12134[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:87:application",
									stdlib.UInt_max,
									"2",
								)
							];
						const v17850 =
							v17849[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:131:87:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v17851 = [v17846, v17848, v17850];
						const v17852 =
							v6695[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:144:45:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v17853 =
							v6695[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:144:45:application",
									stdlib.UInt_max,
									"1",
								)
							];
						const v17854 =
							v6695[
								stdlib.checkedBigNumberify(
									"./src/contracts/coin_shop.rsh:144:45:application",
									stdlib.UInt_max,
									"2",
								)
							];
						sim_r.isHalt = false;
					}
					break;
				}
			}
			return sim_r;
		},
		soloSend: false,
		timeoutAt: undefined /* mto */,
		tys: [
			ctc0,
			ctc1,
			ctc1,
			ctc1,
			ctc0,
			ctc3,
			ctc4,
			ctc4,
			ctc6,
			ctc2,
			ctc4,
			ctc4,
			ctc5,
			ctc2,
			ctc5,
			ctc2,
			ctc5,
			ctc2,
			ctc3,
			ctc2,
			ctc2,
			ctc2,
			ctc9,
		],
		waitIfNotPresent: false,
	});
	const {
		data: [v7228],
		secs: v7230,
		time: v7229,
		didSend: v5406,
		from: v7227,
	} = txn1;
	switch (v7228[0]) {
		case "buyer_api_bronze0_907": {
			const v7231 = v7228[1];
			return;
			break;
		}
		case "buyer_api_gold0_907": {
			const v7845 = v7228[1];
			return;
			break;
		}
		case "buyer_api_silver0_907": {
			const v8459 = v7228[1];
			return;
			break;
		}
		case "controller_api_restock0_907": {
			const v9073 = v7228[1];
			return;
			break;
		}
		case "controller_api_set_prices0_907": {
			const v9687 = v7228[1];
			return;
			break;
		}
		case "controller_api_terminate0_907": {
			const v10301 = v7228[1];
			return;
			break;
		}
		case "controller_api_toggle_pause0_907": {
			const v10915 = v7228[1];
			return;
			break;
		}
		case "controller_api_withdraw0_907": {
			const v11529 = v7228[1];
			undefined /* setApiDetails */;
			const v11684 = stdlib.addressEq(v7227, v6654);
			stdlib.assert(v11684, {
				at: "reach standard library:57:5:application",
				fs: [
					'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
					'at ./src/contracts/coin_shop.rsh:267:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
					"at ./src/contracts/coin_shop.rsh:266:47:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:266:47:function exp)",
					"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:266:47:function exp)",
					"at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
					"at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)",
				],
				msg: "action not permitted",
				who: "controller_api_withdraw",
			});
			const v11739 = stdlib.le(v6705, stdlib.UInt_max);
			stdlib.assert(v11739, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "controller_api_withdraw",
			});
			const v11744 = stdlib.le(v6739, stdlib.UInt_max);
			stdlib.assert(v11744, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "controller_api_withdraw",
			});
			const v11752 = stdlib.le(v6741, stdlib.UInt_max);
			stdlib.assert(v11752, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "controller_api_withdraw",
			});
			const v11760 = stdlib.le(v6743, stdlib.UInt_max);
			stdlib.assert(v11760, {
				at: "./src/contracts/coin_shop.rsh:118:68:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "controller_api_withdraw",
			});
			const v12107 = stdlib.sub(v6739, v6739);
			const v12108 = stdlib.ge(
				v12107,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0"),
			);
			stdlib.assert(v12108, {
				at: "./src/contracts/coin_shop.rsh:276:76:application",
				fs: [
					"at ./src/contracts/coin_shop.rsh:271:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:43:function exp)",
				],
				msg: "assume >= 0",
				who: "controller_api_withdraw",
			});
			const v12111 = stdlib.Array_set(v6738, "0", v12107);
			const v12112 = stdlib.Array_set(
				v6704,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0"),
				v12111,
			);
			const v12113 =
				v12112[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "1")
				];
			const v12114 =
				v12113[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0")
				];
			const v12118 = stdlib.sub(v12114, v6741);
			const v12119 = stdlib.ge(
				v12118,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0"),
			);
			stdlib.assert(v12119, {
				at: "./src/contracts/coin_shop.rsh:276:76:application",
				fs: [
					"at ./src/contracts/coin_shop.rsh:271:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:43:function exp)",
				],
				msg: "assume >= 0",
				who: "controller_api_withdraw",
			});
			const v12122 = stdlib.Array_set(v12113, "0", v12118);
			const v12123 = stdlib.Array_set(
				v12112,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "1"),
				v12122,
			);
			const v12124 =
				v12123[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "2")
				];
			const v12125 =
				v12124[
					stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0")
				];
			const v12129 = stdlib.sub(v12125, v6743);
			const v12130 = stdlib.ge(
				v12129,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0"),
			);
			stdlib.assert(v12130, {
				at: "./src/contracts/coin_shop.rsh:276:76:application",
				fs: [
					"at ./src/contracts/coin_shop.rsh:271:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:43:function exp)",
				],
				msg: "assume >= 0",
				who: "controller_api_withdraw",
			});
			const v12133 = stdlib.Array_set(v12124, "0", v12129);
			const v12134 = stdlib.Array_set(
				v12123,
				stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "2"),
				v12133,
			);
			null;
			const v12136 = true;
			const v12137 = await txn1.getOutput("controller_api_withdraw", "v12136", ctc4, v12136);
			if (v5406) {
				stdlib.protect(ctc10, await interact.out(v11529, v12137), {
					at: "./src/contracts/coin_shop.rsh:266:23:application",
					fs: [
						"at ./src/contracts/coin_shop.rsh:266:23:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:266:23:function exp)",
						'at ./src/contracts/coin_shop.rsh:280:48:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:271:43:function exp)',
						"at ./src/contracts/coin_shop.rsh:271:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:43:function exp)",
					],
					msg: "out",
					who: "controller_api_withdraw",
				});
			} else {
			}

			const v17835 = v6695;
			const v17836 = v6696;
			const v17837 = v6697;
			const v17839 = v12134;
			const v17840 = v6705;
			const v17841 = v6697 ? false : true;
			if (v6697) {
				const v17855 =
					v12134[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v17856 =
					v17855[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v17857 =
					v12134[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v17858 =
					v17857[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v17859 =
					v12134[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"2",
						)
					];
				const v17860 =
					v17859[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v17861 = [v17856, v17858, v17860];
				return;
			} else {
				const v17842 = v6696 ? false : true;
				const v17844 = v6696 ? false : v17841;
				const v17845 =
					v12134[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v17846 =
					v17845[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:53:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v17847 =
					v12134[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v17848 =
					v17847[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:70:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v17849 =
					v12134[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"2",
						)
					];
				const v17850 =
					v17849[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:131:87:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v17851 = [v17846, v17848, v17850];
				const v17852 =
					v6695[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:144:45:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v17853 =
					v6695[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:144:45:application",
							stdlib.UInt_max,
							"1",
						)
					];
				const v17854 =
					v6695[
						stdlib.checkedBigNumberify(
							"./src/contracts/coin_shop.rsh:144:45:application",
							stdlib.UInt_max,
							"2",
						)
					];
				return;
			}
			break;
		}
	}
}
export async function buyer_api_bronze(ctcTop, interact) {
	if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
		return Promise.reject(
			new Error(`The backend for buyer_api_bronze expects to receive a contract as its first argument.`),
		);
	}
	if (typeof interact !== "object") {
		return Promise.reject(
			new Error(`The backend for buyer_api_bronze expects to receive an interact object as its second argument.`),
		);
	}
	const ctc = ctcTop._initialize();
	const stdlib = ctc.stdlib;
	const step = await ctc.getCurrentStep();
	if (step == 5) {
		return _buyer_api_bronze5(ctcTop, interact);
	}
	throw stdlib.apiStateMismatchError(
		{ _stateSourceMap },
		[stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5")],
		stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step),
	);
}
export async function buyer_api_gold(ctcTop, interact) {
	if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
		return Promise.reject(
			new Error(`The backend for buyer_api_gold expects to receive a contract as its first argument.`),
		);
	}
	if (typeof interact !== "object") {
		return Promise.reject(
			new Error(`The backend for buyer_api_gold expects to receive an interact object as its second argument.`),
		);
	}
	const ctc = ctcTop._initialize();
	const stdlib = ctc.stdlib;
	const step = await ctc.getCurrentStep();
	if (step == 5) {
		return _buyer_api_gold5(ctcTop, interact);
	}
	throw stdlib.apiStateMismatchError(
		{ _stateSourceMap },
		[stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5")],
		stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step),
	);
}
export async function buyer_api_silver(ctcTop, interact) {
	if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
		return Promise.reject(
			new Error(`The backend for buyer_api_silver expects to receive a contract as its first argument.`),
		);
	}
	if (typeof interact !== "object") {
		return Promise.reject(
			new Error(`The backend for buyer_api_silver expects to receive an interact object as its second argument.`),
		);
	}
	const ctc = ctcTop._initialize();
	const stdlib = ctc.stdlib;
	const step = await ctc.getCurrentStep();
	if (step == 5) {
		return _buyer_api_silver5(ctcTop, interact);
	}
	throw stdlib.apiStateMismatchError(
		{ _stateSourceMap },
		[stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5")],
		stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step),
	);
}
export async function controller_api_restock(ctcTop, interact) {
	if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
		return Promise.reject(
			new Error(`The backend for controller_api_restock expects to receive a contract as its first argument.`),
		);
	}
	if (typeof interact !== "object") {
		return Promise.reject(
			new Error(
				`The backend for controller_api_restock expects to receive an interact object as its second argument.`,
			),
		);
	}
	const ctc = ctcTop._initialize();
	const stdlib = ctc.stdlib;
	const step = await ctc.getCurrentStep();
	if (step == 5) {
		return _controller_api_restock5(ctcTop, interact);
	}
	throw stdlib.apiStateMismatchError(
		{ _stateSourceMap },
		[stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5")],
		stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step),
	);
}
export async function controller_api_set_prices(ctcTop, interact) {
	if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
		return Promise.reject(
			new Error(`The backend for controller_api_set_prices expects to receive a contract as its first argument.`),
		);
	}
	if (typeof interact !== "object") {
		return Promise.reject(
			new Error(
				`The backend for controller_api_set_prices expects to receive an interact object as its second argument.`,
			),
		);
	}
	const ctc = ctcTop._initialize();
	const stdlib = ctc.stdlib;
	const step = await ctc.getCurrentStep();
	if (step == 5) {
		return _controller_api_set_prices5(ctcTop, interact);
	}
	throw stdlib.apiStateMismatchError(
		{ _stateSourceMap },
		[stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5")],
		stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step),
	);
}
export async function controller_api_terminate(ctcTop, interact) {
	if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
		return Promise.reject(
			new Error(`The backend for controller_api_terminate expects to receive a contract as its first argument.`),
		);
	}
	if (typeof interact !== "object") {
		return Promise.reject(
			new Error(
				`The backend for controller_api_terminate expects to receive an interact object as its second argument.`,
			),
		);
	}
	const ctc = ctcTop._initialize();
	const stdlib = ctc.stdlib;
	const step = await ctc.getCurrentStep();
	if (step == 5) {
		return _controller_api_terminate5(ctcTop, interact);
	}
	throw stdlib.apiStateMismatchError(
		{ _stateSourceMap },
		[stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5")],
		stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step),
	);
}
export async function controller_api_toggle_pause(ctcTop, interact) {
	if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
		return Promise.reject(
			new Error(
				`The backend for controller_api_toggle_pause expects to receive a contract as its first argument.`,
			),
		);
	}
	if (typeof interact !== "object") {
		return Promise.reject(
			new Error(
				`The backend for controller_api_toggle_pause expects to receive an interact object as its second argument.`,
			),
		);
	}
	const ctc = ctcTop._initialize();
	const stdlib = ctc.stdlib;
	const step = await ctc.getCurrentStep();
	if (step == 5) {
		return _controller_api_toggle_pause5(ctcTop, interact);
	}
	throw stdlib.apiStateMismatchError(
		{ _stateSourceMap },
		[stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5")],
		stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step),
	);
}
export async function controller_api_withdraw(ctcTop, interact) {
	if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
		return Promise.reject(
			new Error(`The backend for controller_api_withdraw expects to receive a contract as its first argument.`),
		);
	}
	if (typeof interact !== "object") {
		return Promise.reject(
			new Error(
				`The backend for controller_api_withdraw expects to receive an interact object as its second argument.`,
			),
		);
	}
	const ctc = ctcTop._initialize();
	const stdlib = ctc.stdlib;
	const step = await ctc.getCurrentStep();
	if (step == 5) {
		return _controller_api_withdraw5(ctcTop, interact);
	}
	throw stdlib.apiStateMismatchError(
		{ _stateSourceMap },
		[stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5")],
		stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step),
	);
}
const _ALGO = {
	ABI: {
		impure: [
			`_reachp_0((uint64,uint64,uint64,uint64))void`,
			`_reachp_1((uint64))void`,
			`_reachp_3((uint64))void`,
			`_reachp_4((uint64,(byte,byte[24])))void`,
			`buyer_api_bronze()byte`,
			`buyer_api_gold()byte`,
			`buyer_api_silver()byte`,
			`controller_api_restock(uint64[3])byte`,
			`controller_api_set_prices(uint64[3])byte`,
			`controller_api_terminate()byte`,
			`controller_api_toggle_pause()byte`,
			`controller_api_withdraw()byte`,
		],
		pure: [`coin_prices()uint64[3]`, `coin_supply()uint64[3]`, `is_paused()byte`],
		sigs: [
			`_reachp_0((uint64,uint64,uint64,uint64))void`,
			`_reachp_1((uint64))void`,
			`_reachp_3((uint64))void`,
			`_reachp_4((uint64,(byte,byte[24])))void`,
			`buyer_api_bronze()byte`,
			`buyer_api_gold()byte`,
			`buyer_api_silver()byte`,
			`coin_prices()uint64[3]`,
			`coin_supply()uint64[3]`,
			`controller_api_restock(uint64[3])byte`,
			`controller_api_set_prices(uint64[3])byte`,
			`controller_api_terminate()byte`,
			`controller_api_toggle_pause()byte`,
			`controller_api_withdraw()byte`,
			`is_paused()byte`,
		],
	},
	GlobalNumByteSlice: 4,
	GlobalNumUint: 0,
	LocalNumByteSlice: 0,
	LocalNumUint: 0,
	appApproval: `CCAMAP///////////wEBCAUDoI0GECAoMAQmBQTDuqqJAAEAAQEBAjEYQQksKWRJIls1ASVbNQIqZCtkUCcEZFCCDwQDr6M8BAodJkkEFCCDHwQtCJTsBD4NOmkERlzXZgRHkTeUBIc8/loEkmDfpgSiYbQABLLIIusEtsF5+QTPUtSzBN/ZIygE6Ca18jYaAI4PCHcIkgjxCNII6wjuCOgI2AjJCNUIzAidCM8IhwjgADQYRDQWJA9ENBo0EAhJNQsjDkQ0EIgLDDQWIw5ENBQjDkQ0EiMORDQLSQlJNQwiD0Q0CzQgiAnyNBYkCUk1CyIPRCQ0IzEAiAncgAZicm9uemU1DSg0DVAxAFCwJDUNgAgAAAAAAAAdcDQNFlEHCFCwNA0WUQcINQQyBjQbNBc0CxZcAFwANAw1GjUbNRw0HUEIeDQbVwARSTUQIls1DzQbVxERIls1DjQbVyIRIls1DTQPFjQOFlA0DRZQNQw0JDQjFlA0IhZQNCEWUDQgUDQfUDQeFlEHCFA0G1A0GhZQNBBQNA8WUDQOFlA0DRZQNAxQgT2vUCEFMgY1AjUBKksBVwB/ZytLAVd/f2cnBExX/ixnKTQBFjQCFlBnMRkiEkSICks0A0AACoAEFR98dTQEULAkQzQYRDQSJA9ENBo0DghJNQsjDkQ0DogJ1zQWIw5ENBQjDkQ0EiMORDQLSQlJNQwiD0Q0CzQgiAi9NBIkCUk1CyIPRCQ0ITEAiAingAZnb2xkAAA1DSg0DVAxAFCwJDUNgAgAAAAAAAAgIjQNFlEHCFCwNA0WUQcINQQyBjQbNBM0CxZcAFwiNAw1GjUbNRxC/sg0GEQ0FCQPRDQaNA8ISTULIw5ENA+ICUY0FiMORDQUIw5ENBIjDkQ0C0kJSTUMIg9ENAs0IIgILDQUJAlJNQsiD0QkNCIxAIgIFoAGc2lsdmVyNQ0oNA1QMQBQsCQ1DYAIAAAAAAAAItQ0DRZRBwhQsDQNFlEHCDUEMgY0GzQVNAsWXABcETQMNRo1GzUcQv43NA1XARg1CzEANCASRDQLIls1DjQLJVs1DTQLIQdbNQw0GiMORDQWNA4ISTULIw5ENBs0FzQLFlwAXAA1DzQONCOICKs0D1cREUk1ECJbNA0ISTUOIw5ENA80EDQOFlwAXBE1CzQNNCKICIQ0C1ciEUk1DyJbNAwISTUOIw5ENAs0DzQOFlwAXCI1DTQMNCGICF00DVcAEVcACDQNVxERVwAIUDQNVyIRVwAIUDULgARjZN7vNAtQsCQ1C4AIAAAAAAAAJVA0CxZRBwhQsDQLFlEHCDUEMgY0DTUbNRxC/VcxADQgEkQ0GiMORDQWIw5ENBQjDkQ0EiMORDQNVwEYNQuABJdTHbc0C1CwJDUMgAgAAAAAAAAnyzQMFlEHCFCwNAwWUQcINQQ0CzIGNRw1H0L9BDEANCASRDQaIw5ENBYjDkQ0FCMORDQSIw5EJDULgAQuET1vNAsWUQcIULAkNQuACAAAAAAAACpCNAsWUQcIULA0CxZRBwg1BCQyBjUcNR1C/LIxADQgEkQ0GiMORDQWIw5ENBQjDkQ0EiMORIAIAAAAAAAAGk80GRZRBwhQsDQZFlEHCDUENBkyBjUcNR5C/HMxADQgEkQ0GiMORDQWIw5ENBQjDkQ0EiMORDQWSQlJNQwiD0Q0GzQXNAwWXABcADULNBY0IzQgiAXRNAtXERFJNQ4iWzQUCUk1DSIPRDQLNA40DRZcAFwRNQw0FDQiNCCIBag0DFciEUk1DSJbNBIJSTULIg9ENBI0ITQgiAWMgAQbFchaNBFQsCQ1DoAIAAAAAAAAL2g0DhZRBwhQsDQOFlEHCDUEMgY0DDQNNAsWXABcIjUbNRxC+7mBIa81CyEENAESRIgFWTQLIls1DDQLVwgZNQ2ABCpttVo0DBZQNA1QsDQMiAUvNA0iVY0IA9oD3QPgA+MD5gPpA+wD70L644AhAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/5aAIQAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv9uNAEhBAxBBGU0ASEFEkSIBU40HzUEMRkiEkRC+6A0ASEEDEEEWDQBIQUSRIgFMTQMNQRC/+Alr4ABAzQLUFA1C0L/KyWvgAEENAtQUDULQv8dgCEAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L+9YAhAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/s2AIQAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv6lNAEhBAxBA7w0ASEFEkSIBIU0HhZRBwg1BEL/MDEANSQ0CyJbNQw0CyVbNSM0CyEHWzUiNAuBGFs1IYAE9u2r0jQMFlA0IxZQNCIWUDQhFlCwNAyIA6eBEa9JNQxJUDQMUEk1C0lXABElr1wAXABJNQxJVxERJa9cAFwRNQs0IjQjE0Q0C0lXIhElr1wAXCI1DTQhNCMSNQw0ITQiEzULNAwUNAsQRCEGiARgIjQjMgqIAz4hBogEUyI0IjIKiAMxIQaIBEYiNCEyCogDJDQkNSA0IzQiE0Q0IzQhE0Q0IjQhE0Q0DBRENAtENCQ0IxZQNCIWUDQhFlA0DVA0IFCBnwGvUCQyBkL5vCQ0ARJESVcAIDUkSSEIWzUjSSEJWzUiSSEKWzUhSVc4MzUNV2sgNSA0Cxc1DIAE1RUZFDQMFlCwNAyIArc0JDEAEkSAGAAAAAAAmJaAAAAAAAExLQAAAAAAAcnDgCIiMgY0DSI1GjUbNRw1HTUeNR9C+N0hBTQBEkSIAxE0Cxc1DIAE1Axs1jQMFlCwNAyIAmM0IDEAEjQkMQASEUQ0GkkJIg9ENBo0IIgCQTQPSQlJNQwiD0Q0GzQQNAwWXABcADULNA80IzQgiAIdNAtXERFJNQ8iWzQOCUk1DCIPRDQONCI0IIgCATQLNA80DBZcAFwRVyIRIls0DQkiD0Q0DTQhNCCIAeIiNCEyCjIJiAMbIjQiMgoyCYgDESI0IzIKMgmIAwcxGSEEEkSIAwQiMgoyCYgDCEL4rogBtSEGiALCNhoBNQtC/cuIAaU2GgE1C0L+rYgBmjYaATULQv8ViAGPNhoBNQtC/DMiMTQSRCELMTUSRCIxNhJEIjE3EkSIAW+BqgKvIiJC+DJC/ApC/E5C/HNC/JhC/LI2GgE1C0L8wjYaATULQvzIQvzTQvz4Qv0dQv1CQvcKQvg8QvjKQvlYQvo1QvqFQvrUQvsQNB4UNRk0HhQ1GDQbVwARSTUXIls1FjQbVxERSTUVIls1FDQbVyIRSTUTIls1EjQWFjQUFlA0EhZQNRE0HyJbNRA0HyVbNQ80HyEHWzUOIjUdNCQ0IxZQNCIWUDQhFlA0IFA0H1A0HhZRBwhQNB0WUQcIUDQbUDQaFlA0GRZRBwhQNBgWUQcIUDQXUDQWFlA0FVA0FBZQNBNQNBIWUDQRUDQQFlA0DxZQNA4WUCEEMgZC9zwisgEkshCyB7IIs4kisgEhC7IQshSyEbISs4k0ASEEEkSIAFo0HzUEQvuYNAEhBBJEiABKNBE1BEL7iDQBIQQSRIgAOjQeFlEHCDUEQvt0SIlMCUk1BjIJiAARiQlJQf/uSTUGiAD/ibFC/6CxQv+QJDUDiUkiEkw0AhIRRIlJVwAgNSRJIQhbNSNJIQlbNSJJIQpbNSFJVzggNSBJV1gYNR9JV3ABFzUeSVdxARc1HUlXcjM1G0mBpQFbNRpJV60BFzUZSVeuARc1GElXrxE1F0mBwAFbNRZJV8gRNRVJgdkBWzUUSVfhETUTSYHyAVs1EklX+hg1EUmBkgJbNRBJgZoCWzUPgaICWzUOiUlXACA1JEkhCFs1I0khCVs1IkkhCls1IUlXOCA1IElXWBg1H0lXcAEXNR5JV3EzNRtJgaQBWzUaSVesETUQSYG9AVs1D0mBxQFbNQ5Jgc0BWzUNV9UYNQyJMRY0ACQISTUACUcCOAcyChJEOBAkEkQ4CBJEiTQGCDUGiTEWNAAkCEk1AAlHAzgUMgoSRDgQIQsSRDgRTwISRDgSEkSJsbIVQv5bNAY0B0oPQf6XQv6fsbIJQv49`,
	appApprovalMap: {
		0: `2`,
		1: `2`,
		10: `2`,
		100: `24`,
		1000: `641`,
		1001: `643`,
		1002: `643`,
		1003: `644`,
		1004: `644`,
		1005: `645`,
		1006: `646`,
		1007: `655`,
		1008: `655`,
		1009: `656`,
		101: `24`,
		1010: `657`,
		1011: `658`,
		1012: `661`,
		1013: `661`,
		1014: `662`,
		1015: `663`,
		1016: `664`,
		1017: `667`,
		1018: `667`,
		1019: `668`,
		102: `24`,
		1020: `669`,
		1021: `670`,
		1022: `673`,
		1023: `673`,
		1024: `674`,
		1025: `675`,
		1026: `676`,
		1027: `679`,
		1028: `679`,
		1029: `680`,
		103: `24`,
		1030: `680`,
		1031: `680`,
		1032: `681`,
		1033: `681`,
		1034: `682`,
		1035: `682`,
		1036: `682`,
		1037: `682`,
		1038: `682`,
		1039: `682`,
		104: `24`,
		1040: `683`,
		1041: `683`,
		1042: `684`,
		1043: `685`,
		1044: `687`,
		1045: `688`,
		1046: `688`,
		1047: `689`,
		1048: `689`,
		1049: `689`,
		105: `24`,
		1050: `689`,
		1051: `689`,
		1052: `689`,
		1053: `689`,
		1054: `689`,
		1055: `689`,
		1056: `689`,
		1057: `690`,
		1058: `690`,
		1059: `691`,
		106: `24`,
		1060: `692`,
		1061: `692`,
		1062: `692`,
		1063: `693`,
		1064: `694`,
		1065: `695`,
		1066: `695`,
		1067: `696`,
		1068: `697`,
		1069: `697`,
		107: `24`,
		1070: `697`,
		1071: `698`,
		1072: `698`,
		1073: `699`,
		1074: `699`,
		1075: `700`,
		1076: `700`,
		1077: `701`,
		1078: `701`,
		1079: `702`,
		108: `24`,
		1080: `702`,
		1081: `703`,
		1082: `703`,
		1083: `703`,
		1084: `705`,
		1085: `705`,
		1086: `706`,
		1087: `706`,
		1088: `707`,
		1089: `708`,
		109: `24`,
		1090: `717`,
		1091: `717`,
		1092: `718`,
		1093: `719`,
		1094: `720`,
		1095: `723`,
		1096: `723`,
		1097: `724`,
		1098: `725`,
		1099: `726`,
		11: `2`,
		110: `24`,
		1100: `729`,
		1101: `729`,
		1102: `730`,
		1103: `731`,
		1104: `732`,
		1105: `735`,
		1106: `735`,
		1107: `736`,
		1108: `737`,
		1109: `738`,
		111: `24`,
		1110: `741`,
		1111: `742`,
		1112: `742`,
		1113: `743`,
		1114: `743`,
		1115: `743`,
		1116: `743`,
		1117: `743`,
		1118: `743`,
		1119: `744`,
		112: `24`,
		1120: `744`,
		1121: `745`,
		1122: `746`,
		1123: `746`,
		1124: `746`,
		1125: `747`,
		1126: `748`,
		1127: `750`,
		1128: `751`,
		1129: `751`,
		113: `24`,
		1130: `752`,
		1131: `752`,
		1132: `752`,
		1133: `752`,
		1134: `752`,
		1135: `752`,
		1136: `752`,
		1137: `752`,
		1138: `752`,
		1139: `752`,
		114: `24`,
		1140: `753`,
		1141: `753`,
		1142: `754`,
		1143: `755`,
		1144: `755`,
		1145: `755`,
		1146: `756`,
		1147: `757`,
		1148: `758`,
		1149: `758`,
		115: `24`,
		1150: `759`,
		1151: `760`,
		1152: `760`,
		1153: `760`,
		1154: `761`,
		1155: `761`,
		1156: `762`,
		1157: `763`,
		1158: `763`,
		1159: `764`,
		116: `24`,
		1160: `764`,
		1161: `765`,
		1162: `765`,
		1163: `766`,
		1164: `766`,
		1165: `766`,
		1166: `768`,
		1167: `768`,
		1168: `769`,
		1169: `769`,
		117: `24`,
		1170: `770`,
		1171: `771`,
		1172: `780`,
		1173: `780`,
		1174: `781`,
		1175: `782`,
		1176: `783`,
		1177: `786`,
		1178: `786`,
		1179: `787`,
		118: `24`,
		1180: `788`,
		1181: `789`,
		1182: `792`,
		1183: `792`,
		1184: `793`,
		1185: `794`,
		1186: `795`,
		1187: `798`,
		1188: `798`,
		1189: `799`,
		119: `24`,
		1190: `800`,
		1191: `801`,
		1192: `804`,
		1193: `804`,
		1194: `804`,
		1195: `804`,
		1196: `804`,
		1197: `804`,
		1198: `804`,
		1199: `804`,
		12: `2`,
		120: `24`,
		1200: `804`,
		1201: `804`,
		1202: `805`,
		1203: `805`,
		1204: `806`,
		1205: `807`,
		1206: `807`,
		1207: `807`,
		1208: `808`,
		1209: `809`,
		121: `24`,
		1210: `810`,
		1211: `810`,
		1212: `811`,
		1213: `812`,
		1214: `812`,
		1215: `812`,
		1216: `813`,
		1217: `813`,
		1218: `814`,
		1219: `814`,
		122: `24`,
		1220: `815`,
		1221: `815`,
		1222: `816`,
		1223: `816`,
		1224: `817`,
		1225: `817`,
		1226: `818`,
		1227: `818`,
		1228: `818`,
		1229: `820`,
		123: `24`,
		1230: `820`,
		1231: `821`,
		1232: `821`,
		1233: `822`,
		1234: `823`,
		1235: `832`,
		1236: `832`,
		1237: `833`,
		1238: `834`,
		1239: `835`,
		124: `24`,
		1240: `838`,
		1241: `838`,
		1242: `839`,
		1243: `840`,
		1244: `841`,
		1245: `844`,
		1246: `844`,
		1247: `845`,
		1248: `846`,
		1249: `847`,
		125: `24`,
		1250: `850`,
		1251: `850`,
		1252: `851`,
		1253: `852`,
		1254: `853`,
		1255: `856`,
		1256: `856`,
		1257: `857`,
		1258: `858`,
		1259: `859`,
		126: `24`,
		1260: `860`,
		1261: `860`,
		1262: `861`,
		1263: `862`,
		1264: `863`,
		1265: `867`,
		1266: `867`,
		1267: `868`,
		1268: `868`,
		1269: `869`,
		127: `24`,
		1270: `869`,
		1271: `870`,
		1272: `871`,
		1273: `871`,
		1274: `872`,
		1275: `872`,
		1276: `873`,
		1277: `873`,
		1278: `874`,
		1279: `874`,
		128: `24`,
		1280: `876`,
		1281: `876`,
		1282: `878`,
		1283: `878`,
		1284: `879`,
		1285: `879`,
		1286: `879`,
		1287: `880`,
		1288: `880`,
		1289: `881`,
		129: `24`,
		1290: `881`,
		1291: `881`,
		1292: `882`,
		1293: `883`,
		1294: `883`,
		1295: `884`,
		1296: `885`,
		1297: `886`,
		1298: `886`,
		1299: `887`,
		13: `2`,
		130: `24`,
		1300: `888`,
		1301: `889`,
		1302: `889`,
		1303: `890`,
		1304: `891`,
		1305: `892`,
		1306: `896`,
		1307: `896`,
		1308: `897`,
		1309: `897`,
		131: `24`,
		1310: `898`,
		1311: `898`,
		1312: `899`,
		1313: `900`,
		1314: `900`,
		1315: `901`,
		1316: `901`,
		1317: `902`,
		1318: `902`,
		1319: `903`,
		132: `24`,
		1320: `903`,
		1321: `905`,
		1322: `905`,
		1323: `906`,
		1324: `906`,
		1325: `907`,
		1326: `907`,
		1327: `907`,
		1328: `908`,
		1329: `908`,
		133: `24`,
		1330: `909`,
		1331: `909`,
		1332: `909`,
		1333: `910`,
		1334: `911`,
		1335: `911`,
		1336: `912`,
		1337: `913`,
		1338: `914`,
		1339: `914`,
		134: `24`,
		1340: `915`,
		1341: `916`,
		1342: `917`,
		1343: `917`,
		1344: `918`,
		1345: `919`,
		1346: `920`,
		1347: `924`,
		1348: `924`,
		1349: `926`,
		135: `24`,
		1350: `926`,
		1351: `927`,
		1352: `927`,
		1353: `928`,
		1354: `928`,
		1355: `928`,
		1356: `929`,
		1357: `929`,
		1358: `929`,
		1359: `929`,
		136: `24`,
		1360: `929`,
		1361: `929`,
		1362: `930`,
		1363: `930`,
		1364: `931`,
		1365: `932`,
		1366: `934`,
		1367: `935`,
		1368: `935`,
		1369: `936`,
		137: `24`,
		1370: `936`,
		1371: `936`,
		1372: `936`,
		1373: `936`,
		1374: `936`,
		1375: `936`,
		1376: `936`,
		1377: `936`,
		1378: `936`,
		1379: `937`,
		138: `24`,
		1380: `937`,
		1381: `938`,
		1382: `939`,
		1383: `939`,
		1384: `939`,
		1385: `940`,
		1386: `941`,
		1387: `942`,
		1388: `942`,
		1389: `943`,
		139: `24`,
		1390: `944`,
		1391: `944`,
		1392: `944`,
		1393: `945`,
		1394: `945`,
		1395: `946`,
		1396: `946`,
		1397: `947`,
		1398: `947`,
		1399: `948`,
		14: `2`,
		140: `24`,
		1400: `948`,
		1401: `949`,
		1402: `949`,
		1403: `950`,
		1404: `951`,
		1405: `951`,
		1406: `952`,
		1407: `952`,
		1408: `953`,
		1409: `953`,
		141: `24`,
		1410: `954`,
		1411: `954`,
		1412: `955`,
		1413: `955`,
		1414: `955`,
		1415: `957`,
		1416: `957`,
		1417: `958`,
		1418: `959`,
		1419: `959`,
		142: `25`,
		1420: `961`,
		1421: `961`,
		1422: `962`,
		1423: `962`,
		1424: `963`,
		1425: `964`,
		1426: `965`,
		1427: `965`,
		1428: `965`,
		1429: `966`,
		143: `25`,
		1430: `966`,
		1431: `967`,
		1432: `968`,
		1433: `969`,
		1434: `969`,
		1435: `970`,
		1436: `970`,
		1437: `971`,
		1438: `971`,
		1439: `971`,
		144: `25`,
		1440: `972`,
		1441: `972`,
		1442: `973`,
		1443: `973`,
		1444: `973`,
		1445: `973`,
		1446: `973`,
		1447: `973`,
		1448: `974`,
		1449: `974`,
		145: `26`,
		1450: `975`,
		1451: `976`,
		1452: `977`,
		1453: `977`,
		1454: `978`,
		1455: `979`,
		1456: `981`,
		1457: `981`,
		1458: `982`,
		1459: `982`,
		146: `26`,
		1460: `982`,
		1461: `983`,
		1462: `983`,
		1463: `984`,
		1464: `985`,
		1465: `986`,
		1466: `986`,
		1467: `986`,
		1468: `986`,
		1469: `986`,
		147: `26`,
		1470: `986`,
		1471: `986`,
		1472: `986`,
		1473: `986`,
		1474: `986`,
		1475: `986`,
		1476: `986`,
		1477: `986`,
		1478: `986`,
		1479: `986`,
		148: `26`,
		1480: `986`,
		1481: `986`,
		1482: `986`,
		1483: `987`,
		1484: `987`,
		1485: `987`,
		1486: `989`,
		1487: `989`,
		1488: `989`,
		1489: `989`,
		149: `26`,
		1490: `989`,
		1491: `989`,
		1492: `989`,
		1493: `989`,
		1494: `989`,
		1495: `989`,
		1496: `989`,
		1497: `989`,
		1498: `989`,
		1499: `989`,
		15: `2`,
		150: `26`,
		1500: `989`,
		1501: `989`,
		1502: `989`,
		1503: `989`,
		1504: `989`,
		1505: `989`,
		1506: `989`,
		1507: `989`,
		1508: `989`,
		1509: `989`,
		151: `26`,
		1510: `989`,
		1511: `989`,
		1512: `989`,
		1513: `989`,
		1514: `989`,
		1515: `989`,
		1516: `989`,
		1517: `989`,
		1518: `989`,
		1519: `989`,
		152: `26`,
		1520: `989`,
		1521: `990`,
		1522: `990`,
		1523: `991`,
		1524: `991`,
		1525: `991`,
		1526: `993`,
		1527: `993`,
		1528: `993`,
		1529: `993`,
		153: `26`,
		1530: `993`,
		1531: `993`,
		1532: `993`,
		1533: `993`,
		1534: `993`,
		1535: `993`,
		1536: `993`,
		1537: `993`,
		1538: `993`,
		1539: `993`,
		154: `26`,
		1540: `993`,
		1541: `993`,
		1542: `993`,
		1543: `993`,
		1544: `993`,
		1545: `993`,
		1546: `993`,
		1547: `993`,
		1548: `993`,
		1549: `993`,
		155: `26`,
		1550: `993`,
		1551: `993`,
		1552: `993`,
		1553: `993`,
		1554: `993`,
		1555: `993`,
		1556: `993`,
		1557: `993`,
		1558: `993`,
		1559: `993`,
		156: `26`,
		1560: `993`,
		1561: `994`,
		1562: `994`,
		1563: `995`,
		1564: `995`,
		1565: `995`,
		1566: `997`,
		1567: `997`,
		1568: `998`,
		1569: `998`,
		157: `26`,
		1570: `999`,
		1571: `1000`,
		1572: `1000`,
		1573: `1000`,
		1574: `1001`,
		1575: `1001`,
		1576: `1002`,
		1577: `1002`,
		1578: `1003`,
		1579: `1004`,
		158: `26`,
		1580: `1007`,
		1581: `1007`,
		1582: `1007`,
		1583: `1008`,
		1584: `1008`,
		1585: `1009`,
		1586: `1009`,
		1587: `1011`,
		1588: `1011`,
		1589: `1012`,
		159: `26`,
		1590: `1013`,
		1591: `1014`,
		1592: `1016`,
		1593: `1016`,
		1594: `1016`,
		1595: `1018`,
		1596: `1018`,
		1597: `1019`,
		1598: `1019`,
		1599: `1020`,
		16: `2`,
		160: `26`,
		1600: `1021`,
		1601: `1021`,
		1602: `1021`,
		1603: `1022`,
		1604: `1022`,
		1605: `1023`,
		1606: `1023`,
		1607: `1024`,
		1608: `1025`,
		1609: `1028`,
		161: `26`,
		1610: `1028`,
		1611: `1028`,
		1612: `1029`,
		1613: `1029`,
		1614: `1030`,
		1615: `1030`,
		1616: `1031`,
		1617: `1031`,
		1618: `1031`,
		1619: `1033`,
		162: `26`,
		1620: `1034`,
		1621: `1035`,
		1622: `1035`,
		1623: `1035`,
		1624: `1036`,
		1625: `1036`,
		1626: `1037`,
		1627: `1038`,
		1628: `1039`,
		1629: `1039`,
		163: `26`,
		1630: `1040`,
		1631: `1040`,
		1632: `1040`,
		1633: `1042`,
		1634: `1043`,
		1635: `1044`,
		1636: `1044`,
		1637: `1044`,
		1638: `1045`,
		1639: `1045`,
		164: `26`,
		1640: `1046`,
		1641: `1047`,
		1642: `1048`,
		1643: `1048`,
		1644: `1049`,
		1645: `1049`,
		1646: `1049`,
		1647: `1051`,
		1648: `1051`,
		1649: `1051`,
		165: `26`,
		1650: `1051`,
		1651: `1051`,
		1652: `1051`,
		1653: `1051`,
		1654: `1051`,
		1655: `1051`,
		1656: `1051`,
		1657: `1051`,
		1658: `1051`,
		1659: `1051`,
		166: `26`,
		1660: `1051`,
		1661: `1051`,
		1662: `1051`,
		1663: `1051`,
		1664: `1051`,
		1665: `1051`,
		1666: `1051`,
		1667: `1051`,
		1668: `1051`,
		1669: `1051`,
		167: `26`,
		1670: `1051`,
		1671: `1051`,
		1672: `1051`,
		1673: `1051`,
		1674: `1051`,
		1675: `1051`,
		1676: `1051`,
		1677: `1051`,
		1678: `1051`,
		1679: `1051`,
		168: `26`,
		1680: `1051`,
		1681: `1051`,
		1682: `1052`,
		1683: `1052`,
		1684: `1053`,
		1685: `1053`,
		1686: `1053`,
		1687: `1055`,
		1688: `1055`,
		1689: `1055`,
		169: `26`,
		1690: `1055`,
		1691: `1055`,
		1692: `1055`,
		1693: `1055`,
		1694: `1055`,
		1695: `1055`,
		1696: `1055`,
		1697: `1055`,
		1698: `1055`,
		1699: `1055`,
		17: `2`,
		170: `26`,
		1700: `1055`,
		1701: `1055`,
		1702: `1055`,
		1703: `1055`,
		1704: `1055`,
		1705: `1055`,
		1706: `1055`,
		1707: `1055`,
		1708: `1055`,
		1709: `1055`,
		171: `26`,
		1710: `1055`,
		1711: `1055`,
		1712: `1055`,
		1713: `1055`,
		1714: `1055`,
		1715: `1055`,
		1716: `1055`,
		1717: `1055`,
		1718: `1055`,
		1719: `1055`,
		172: `26`,
		1720: `1055`,
		1721: `1055`,
		1722: `1056`,
		1723: `1056`,
		1724: `1057`,
		1725: `1057`,
		1726: `1057`,
		1727: `1059`,
		1728: `1059`,
		1729: `1059`,
		173: `26`,
		1730: `1059`,
		1731: `1059`,
		1732: `1059`,
		1733: `1059`,
		1734: `1059`,
		1735: `1059`,
		1736: `1059`,
		1737: `1059`,
		1738: `1059`,
		1739: `1059`,
		174: `26`,
		1740: `1059`,
		1741: `1059`,
		1742: `1059`,
		1743: `1059`,
		1744: `1059`,
		1745: `1059`,
		1746: `1059`,
		1747: `1059`,
		1748: `1059`,
		1749: `1059`,
		175: `26`,
		1750: `1059`,
		1751: `1059`,
		1752: `1059`,
		1753: `1059`,
		1754: `1059`,
		1755: `1059`,
		1756: `1059`,
		1757: `1059`,
		1758: `1059`,
		1759: `1059`,
		176: `26`,
		1760: `1059`,
		1761: `1059`,
		1762: `1060`,
		1763: `1060`,
		1764: `1061`,
		1765: `1061`,
		1766: `1061`,
		1767: `1063`,
		1768: `1063`,
		1769: `1064`,
		177: `28`,
		1770: `1064`,
		1771: `1065`,
		1772: `1066`,
		1773: `1066`,
		1774: `1066`,
		1775: `1067`,
		1776: `1067`,
		1777: `1068`,
		1778: `1068`,
		1779: `1069`,
		178: `30`,
		1780: `1070`,
		1781: `1073`,
		1782: `1073`,
		1783: `1073`,
		1784: `1074`,
		1785: `1074`,
		1786: `1075`,
		1787: `1076`,
		1788: `1076`,
		1789: `1076`,
		179: `30`,
		1790: `1077`,
		1791: `1077`,
		1792: `1078`,
		1793: `1078`,
		1794: `1078`,
		1795: `1080`,
		1796: `1080`,
		1797: `1081`,
		1798: `1081`,
		1799: `1082`,
		18: `2`,
		180: `31`,
		1800: `1082`,
		1801: `1083`,
		1802: `1084`,
		1803: `1085`,
		1804: `1085`,
		1805: `1086`,
		1806: `1086`,
		1807: `1087`,
		1808: `1088`,
		1809: `1089`,
		181: `40`,
		1810: `1089`,
		1811: `1090`,
		1812: `1090`,
		1813: `1091`,
		1814: `1091`,
		1815: `1092`,
		1816: `1093`,
		1817: `1093`,
		1818: `1094`,
		1819: `1094`,
		182: `40`,
		1820: `1095`,
		1821: `1095`,
		1822: `1096`,
		1823: `1097`,
		1824: `1097`,
		1825: `1098`,
		1826: `1098`,
		1827: `1098`,
		1828: `1098`,
		1829: `1098`,
		183: `41`,
		1830: `1098`,
		1831: `1099`,
		1832: `1099`,
		1833: `1100`,
		1834: `1101`,
		1835: `1102`,
		1836: `1102`,
		1837: `1103`,
		1838: `1104`,
		1839: `1105`,
		184: `42`,
		1840: `1105`,
		1841: `1106`,
		1842: `1107`,
		1843: `1108`,
		1844: `1108`,
		1845: `1109`,
		1846: `1110`,
		1847: `1111`,
		1848: `1113`,
		1849: `1113`,
		185: `43`,
		1850: `1114`,
		1851: `1114`,
		1852: `1114`,
		1853: `1115`,
		1854: `1115`,
		1855: `1116`,
		1856: `1117`,
		1857: `1118`,
		1858: `1118`,
		1859: `1119`,
		186: `52`,
		1860: `1120`,
		1861: `1121`,
		1862: `1121`,
		1863: `1122`,
		1864: `1123`,
		1865: `1124`,
		1866: `1124`,
		1867: `1125`,
		1868: `1126`,
		1869: `1126`,
		187: `52`,
		1870: `1126`,
		1871: `1127`,
		1872: `1128`,
		1873: `1129`,
		1874: `1129`,
		1875: `1130`,
		1876: `1130`,
		1877: `1131`,
		1878: `1132`,
		1879: `1132`,
		188: `53`,
		1880: `1133`,
		1881: `1134`,
		1882: `1134`,
		1883: `1134`,
		1884: `1135`,
		1885: `1136`,
		1886: `1137`,
		1887: `1137`,
		1888: `1138`,
		1889: `1138`,
		189: `53`,
		1890: `1139`,
		1891: `1139`,
		1892: `1140`,
		1893: `1140`,
		1894: `1141`,
		1895: `1141`,
		1896: `1142`,
		1897: `1143`,
		1898: `1146`,
		1899: `1146`,
		19: `2`,
		190: `54`,
		1900: `1147`,
		1901: `1148`,
		1902: `1148`,
		1903: `1148`,
		1904: `1149`,
		1905: `1150`,
		1906: `1151`,
		1907: `1151`,
		1908: `1152`,
		1909: `1152`,
		191: `55`,
		1910: `1153`,
		1911: `1153`,
		1912: `1154`,
		1913: `1154`,
		1914: `1155`,
		1915: `1155`,
		1916: `1156`,
		1917: `1157`,
		1918: `1157`,
		1919: `1158`,
		192: `56`,
		1920: `1158`,
		1921: `1159`,
		1922: `1159`,
		1923: `1160`,
		1924: `1161`,
		1925: `1161`,
		1926: `1162`,
		1927: `1162`,
		1928: `1163`,
		1929: `1164`,
		193: `56`,
		1930: `1164`,
		1931: `1165`,
		1932: `1166`,
		1933: `1169`,
		1934: `1169`,
		1935: `1170`,
		1936: `1170`,
		1937: `1170`,
		1938: `1171`,
		1939: `1173`,
		194: `57`,
		1940: `1173`,
		1941: `1174`,
		1942: `1174`,
		1943: `1175`,
		1944: `1175`,
		1945: `1175`,
		1946: `1176`,
		1947: `1176`,
		1948: `1177`,
		1949: `1177`,
		195: `58`,
		1950: `1177`,
		1951: `1178`,
		1952: `1180`,
		1953: `1180`,
		1954: `1181`,
		1955: `1181`,
		1956: `1182`,
		1957: `1182`,
		1958: `1182`,
		1959: `1183`,
		196: `59`,
		1960: `1183`,
		1961: `1184`,
		1962: `1184`,
		1963: `1184`,
		1964: `1185`,
		1965: `1187`,
		1966: `1187`,
		1967: `1188`,
		1968: `1188`,
		1969: `1189`,
		197: `62`,
		1970: `1189`,
		1971: `1189`,
		1972: `1190`,
		1973: `1190`,
		1974: `1191`,
		1975: `1191`,
		1976: `1192`,
		1977: `1192`,
		1978: `1193`,
		1979: `1193`,
		198: `62`,
		1980: `1194`,
		1981: `1195`,
		1982: `1208`,
		1983: `1208`,
		1984: `1209`,
		1985: `1209`,
		1986: `1210`,
		1987: `1211`,
		1988: `1224`,
		1989: `1224`,
		199: `63`,
		1990: `1225`,
		1991: `1225`,
		1992: `1226`,
		1993: `1227`,
		1994: `1240`,
		1995: `1240`,
		1996: `1241`,
		1997: `1242`,
		1998: `1255`,
		1999: `1255`,
		2: `2`,
		20: `2`,
		200: `63`,
		2000: `1256`,
		2001: `1270`,
		2002: `1270`,
		2003: `1271`,
		2004: `1271`,
		2005: `1272`,
		2006: `1273`,
		2007: `1274`,
		2008: `1274`,
		2009: `1275`,
		201: `63`,
		2010: `1276`,
		2011: `1277`,
		2012: `1277`,
		2013: `1278`,
		2014: `1279`,
		2015: `1280`,
		2016: `1280`,
		2017: `1281`,
		2018: `1282`,
		2019: `1282`,
		202: `66`,
		2020: `1283`,
		2021: `1284`,
		2022: `1284`,
		2023: `1284`,
		2024: `1285`,
		2025: `1286`,
		2026: `1287`,
		2027: `1288`,
		2028: `1288`,
		2029: `1289`,
		203: `66`,
		2030: `1289`,
		2031: `1289`,
		2032: `1291`,
		2033: `1292`,
		2034: `1292`,
		2035: `1293`,
		2036: `1294`,
		2037: `1296`,
		2038: `1297`,
		2039: `1297`,
		204: `67`,
		2040: `1297`,
		2041: `1298`,
		2042: `1298`,
		2043: `1299`,
		2044: `1300`,
		2045: `1300`,
		2046: `1301`,
		2047: `1302`,
		2048: `1302`,
		2049: `1303`,
		205: `68`,
		2050: `1304`,
		2051: `1304`,
		2052: `1305`,
		2053: `1306`,
		2054: `1306`,
		2055: `1307`,
		2056: `1308`,
		2057: `1308`,
		2058: `1309`,
		2059: `1310`,
		206: `69`,
		2060: `1310`,
		2061: `1311`,
		2062: `1312`,
		2063: `1312`,
		2064: `1312`,
		2065: `1313`,
		2066: `1313`,
		2067: `1314`,
		2068: `1314`,
		2069: `1314`,
		207: `72`,
		2070: `1315`,
		2071: `1315`,
		2072: `1316`,
		2073: `1316`,
		2074: `1317`,
		2075: `1318`,
		2076: `1318`,
		2077: `1319`,
		2078: `1319`,
		2079: `1319`,
		208: `72`,
		2080: `1319`,
		2081: `1319`,
		2082: `1319`,
		2083: `1320`,
		2084: `1320`,
		2085: `1321`,
		2086: `1322`,
		2087: `1323`,
		2088: `1325`,
		2089: `1325`,
		209: `73`,
		2090: `1326`,
		2091: `1326`,
		2092: `1326`,
		2093: `1327`,
		2094: `1327`,
		2095: `1328`,
		2096: `1328`,
		2097: `1329`,
		2098: `1330`,
		2099: `1333`,
		21: `2`,
		210: `74`,
		2100: `1333`,
		2101: `1333`,
		2102: `1333`,
		2103: `1333`,
		2104: `1333`,
		2105: `1333`,
		2106: `1333`,
		2107: `1333`,
		2108: `1333`,
		2109: `1333`,
		211: `75`,
		2110: `1333`,
		2111: `1333`,
		2112: `1333`,
		2113: `1333`,
		2114: `1333`,
		2115: `1333`,
		2116: `1333`,
		2117: `1333`,
		2118: `1333`,
		2119: `1333`,
		212: `78`,
		2120: `1333`,
		2121: `1333`,
		2122: `1333`,
		2123: `1333`,
		2124: `1333`,
		2125: `1334`,
		2126: `1335`,
		2127: `1336`,
		2128: `1336`,
		2129: `1337`,
		213: `78`,
		2130: `1337`,
		2131: `1338`,
		2132: `1339`,
		2133: `1339`,
		2134: `1340`,
		2135: `1340`,
		2136: `1341`,
		2137: `1341`,
		2138: `1342`,
		2139: `1342`,
		214: `79`,
		2140: `1343`,
		2141: `1343`,
		2142: `1344`,
		2143: `1344`,
		2144: `1345`,
		2145: `1345`,
		2146: `1345`,
		2147: `1347`,
		2148: `1347`,
		2149: `1348`,
		215: `80`,
		2150: `1348`,
		2151: `1349`,
		2152: `1350`,
		2153: `1351`,
		2154: `1351`,
		2155: `1351`,
		2156: `1352`,
		2157: `1352`,
		2158: `1353`,
		2159: `1354`,
		216: `81`,
		2160: `1354`,
		2161: `1355`,
		2162: `1355`,
		2163: `1355`,
		2164: `1355`,
		2165: `1355`,
		2166: `1355`,
		2167: `1356`,
		2168: `1356`,
		2169: `1357`,
		217: `84`,
		2170: `1358`,
		2171: `1359`,
		2172: `1361`,
		2173: `1361`,
		2174: `1362`,
		2175: `1362`,
		2176: `1362`,
		2177: `1363`,
		2178: `1363`,
		2179: `1364`,
		218: `84`,
		2180: `1364`,
		2181: `1365`,
		2182: `1366`,
		2183: `1366`,
		2184: `1367`,
		2185: `1367`,
		2186: `1368`,
		2187: `1369`,
		2188: `1370`,
		2189: `1374`,
		219: `85`,
		2190: `1374`,
		2191: `1375`,
		2192: `1376`,
		2193: `1377`,
		2194: `1378`,
		2195: `1379`,
		2196: `1383`,
		2197: `1383`,
		2198: `1385`,
		2199: `1385`,
		22: `2`,
		220: `86`,
		2200: `1386`,
		2201: `1386`,
		2202: `1386`,
		2203: `1387`,
		2204: `1387`,
		2205: `1388`,
		2206: `1389`,
		2207: `1390`,
		2208: `1391`,
		2209: `1391`,
		221: `87`,
		2210: `1392`,
		2211: `1393`,
		2212: `1394`,
		2213: `1398`,
		2214: `1398`,
		2215: `1399`,
		2216: `1399`,
		2217: `1400`,
		2218: `1400`,
		2219: `1401`,
		222: `88`,
		2220: `1402`,
		2221: `1402`,
		2222: `1403`,
		2223: `1403`,
		2224: `1404`,
		2225: `1404`,
		2226: `1405`,
		2227: `1405`,
		2228: `1407`,
		2229: `1407`,
		223: `88`,
		2230: `1408`,
		2231: `1408`,
		2232: `1409`,
		2233: `1409`,
		2234: `1409`,
		2235: `1410`,
		2236: `1410`,
		2237: `1411`,
		2238: `1411`,
		2239: `1411`,
		224: `89`,
		2240: `1412`,
		2241: `1413`,
		2242: `1413`,
		2243: `1414`,
		2244: `1415`,
		2245: `1416`,
		2246: `1416`,
		2247: `1417`,
		2248: `1418`,
		2249: `1419`,
		225: `90`,
		2250: `1419`,
		2251: `1420`,
		2252: `1421`,
		2253: `1422`,
		2254: `1426`,
		2255: `1426`,
		2256: `1428`,
		2257: `1428`,
		2258: `1429`,
		2259: `1429`,
		226: `91`,
		2260: `1430`,
		2261: `1430`,
		2262: `1430`,
		2263: `1431`,
		2264: `1431`,
		2265: `1432`,
		2266: `1432`,
		2267: `1433`,
		2268: `1433`,
		2269: `1434`,
		227: `95`,
		2270: `1435`,
		2271: `1435`,
		2272: `1436`,
		2273: `1436`,
		2274: `1437`,
		2275: `1437`,
		2276: `1437`,
		2277: `1438`,
		2278: `1439`,
		2279: `1440`,
		228: `95`,
		2280: `1440`,
		2281: `1441`,
		2282: `1442`,
		2283: `1443`,
		2284: `1444`,
		2285: `1448`,
		2286: `1448`,
		2287: `1450`,
		2288: `1450`,
		2289: `1451`,
		229: `97`,
		2290: `1451`,
		2291: `1452`,
		2292: `1452`,
		2293: `1452`,
		2294: `1454`,
		2295: `1455`,
		2296: `1455`,
		2297: `1456`,
		2298: `1456`,
		2299: `1457`,
		23: `2`,
		230: `97`,
		2300: `1457`,
		2301: `1458`,
		2302: `1458`,
		2303: `1458`,
		2304: `1459`,
		2305: `1460`,
		2306: `1460`,
		2307: `1461`,
		2308: `1461`,
		2309: `1462`,
		231: `98`,
		2310: `1462`,
		2311: `1463`,
		2312: `1463`,
		2313: `1463`,
		2314: `1464`,
		2315: `1465`,
		2316: `1465`,
		2317: `1466`,
		2318: `1466`,
		2319: `1467`,
		232: `98`,
		2320: `1467`,
		2321: `1468`,
		2322: `1468`,
		2323: `1468`,
		2324: `1470`,
		2325: `1470`,
		2326: `1471`,
		2327: `1471`,
		2328: `1472`,
		2329: `1473`,
		233: `98`,
		2330: `1475`,
		2331: `1475`,
		2332: `1475`,
		2333: `1477`,
		2334: `1478`,
		2335: `1478`,
		2336: `1479`,
		2337: `1479`,
		2338: `1480`,
		2339: `1480`,
		234: `99`,
		2340: `1480`,
		2341: `1481`,
		2342: `1481`,
		2343: `1481`,
		2344: `1483`,
		2345: `1483`,
		2346: `1483`,
		2347: `1484`,
		2348: `1484`,
		2349: `1485`,
		235: `99`,
		2350: `1485`,
		2351: `1485`,
		2352: `1486`,
		2353: `1486`,
		2354: `1486`,
		2355: `1487`,
		2356: `1487`,
		2357: `1488`,
		2358: `1488`,
		2359: `1488`,
		236: `100`,
		2360: `1490`,
		2361: `1490`,
		2362: `1490`,
		2363: `1491`,
		2364: `1491`,
		2365: `1491`,
		2366: `1492`,
		2367: `1492`,
		2368: `1493`,
		2369: `1493`,
		237: `101`,
		2370: `1493`,
		2371: `1495`,
		2372: `1495`,
		2373: `1495`,
		2374: `1496`,
		2375: `1496`,
		2376: `1496`,
		2377: `1497`,
		2378: `1497`,
		2379: `1498`,
		238: `102`,
		2380: `1498`,
		2381: `1498`,
		2382: `1500`,
		2383: `1500`,
		2384: `1500`,
		2385: `1501`,
		2386: `1501`,
		2387: `1501`,
		2388: `1502`,
		2389: `1502`,
		239: `103`,
		2390: `1503`,
		2391: `1503`,
		2392: `1503`,
		2393: `1505`,
		2394: `1506`,
		2395: `1506`,
		2396: `1507`,
		2397: `1508`,
		2398: `1509`,
		2399: `1509`,
		24: `2`,
		240: `103`,
		2400: `1510`,
		2401: `1510`,
		2402: `1511`,
		2403: `1512`,
		2404: `1513`,
		2405: `1514`,
		2406: `1514`,
		2407: `1515`,
		2408: `1516`,
		2409: `1517`,
		241: `104`,
		2410: `1518`,
		2411: `1518`,
		2412: `1519`,
		2413: `1520`,
		2414: `1521`,
		2415: `1521`,
		2416: `1521`,
		2417: `1522`,
		2418: `1522`,
		2419: `1522`,
		242: `105`,
		2420: `1523`,
		2421: `1524`,
		2422: `1525`,
		2423: `1526`,
		2424: `1526`,
		2425: `1526`,
		2426: `1528`,
		2427: `1528`,
		2428: `1528`,
		2429: `1530`,
		243: `106`,
		2430: `1530`,
		2431: `1530`,
		2432: `1532`,
		2433: `1532`,
		2434: `1532`,
		2435: `1534`,
		2436: `1534`,
		2437: `1534`,
		2438: `1536`,
		2439: `1536`,
		244: `110`,
		2440: `1536`,
		2441: `1538`,
		2442: `1538`,
		2443: `1538`,
		2444: `1539`,
		2445: `1539`,
		2446: `1540`,
		2447: `1540`,
		2448: `1540`,
		2449: `1542`,
		245: `112`,
		2450: `1542`,
		2451: `1542`,
		2452: `1543`,
		2453: `1543`,
		2454: `1544`,
		2455: `1544`,
		2456: `1544`,
		2457: `1546`,
		2458: `1546`,
		2459: `1546`,
		246: `112`,
		2460: `1548`,
		2461: `1548`,
		2462: `1548`,
		2463: `1550`,
		2464: `1550`,
		2465: `1550`,
		2466: `1552`,
		2467: `1552`,
		2468: `1552`,
		2469: `1554`,
		247: `114`,
		2470: `1554`,
		2471: `1554`,
		2472: `1556`,
		2473: `1556`,
		2474: `1556`,
		2475: `1558`,
		2476: `1558`,
		2477: `1558`,
		2478: `1560`,
		2479: `1560`,
		248: `114`,
		2480: `1560`,
		2481: `1562`,
		2482: `1562`,
		2483: `1562`,
		2484: `1564`,
		2485: `1564`,
		2486: `1564`,
		2487: `1566`,
		2488: `1566`,
		2489: `1566`,
		249: `115`,
		2490: `1568`,
		2491: `1568`,
		2492: `1568`,
		2493: `1570`,
		2494: `1570`,
		2495: `1571`,
		2496: `1572`,
		2497: `1572`,
		2498: `1573`,
		2499: `1573`,
		25: `2`,
		250: `115`,
		2500: `1574`,
		2501: `1575`,
		2502: `1575`,
		2503: `1576`,
		2504: `1576`,
		2505: `1577`,
		2506: `1577`,
		2507: `1577`,
		2508: `1578`,
		2509: `1579`,
		251: `115`,
		2510: `1579`,
		2511: `1580`,
		2512: `1581`,
		2513: `1582`,
		2514: `1582`,
		2515: `1583`,
		2516: `1583`,
		2517: `1584`,
		2518: `1584`,
		2519: `1584`,
		252: `116`,
		2520: `1585`,
		2521: `1586`,
		2522: `1586`,
		2523: `1587`,
		2524: `1588`,
		2525: `1589`,
		2526: `1589`,
		2527: `1590`,
		2528: `1590`,
		2529: `1591`,
		253: `116`,
		2530: `1591`,
		2531: `1591`,
		2532: `1592`,
		2533: `1593`,
		2534: `1593`,
		2535: `1594`,
		2536: `1595`,
		2537: `1596`,
		2538: `1596`,
		2539: `1597`,
		254: `116`,
		2540: `1597`,
		2541: `1598`,
		2542: `1599`,
		2543: `1599`,
		2544: `1600`,
		2545: `1601`,
		2546: `1602`,
		2547: `1602`,
		2548: `1603`,
		2549: `1604`,
		255: `116`,
		2550: `1605`,
		2551: `1605`,
		2552: `1606`,
		2553: `1606`,
		2554: `1607`,
		2555: `1608`,
		2556: `1609`,
		2557: `1609`,
		2558: `1610`,
		2559: `1610`,
		256: `116`,
		2560: `1611`,
		2561: `1612`,
		2562: `1613`,
		2563: `1613`,
		2564: `1614`,
		2565: `1614`,
		2566: `1615`,
		2567: `1615`,
		2568: `1616`,
		2569: `1617`,
		257: `116`,
		2570: `1617`,
		2571: `1618`,
		2572: `1619`,
		2573: `1619`,
		2574: `1621`,
		2575: `1621`,
		2576: `1622`,
		2577: `1622`,
		2578: `1623`,
		2579: `1624`,
		258: `116`,
		2580: `1625`,
		2581: `1625`,
		2582: `1626`,
		2583: `1627`,
		2584: `1628`,
		2585: `1628`,
		2586: `1629`,
		2587: `1630`,
		2588: `1631`,
		2589: `1631`,
		259: `116`,
		2590: `1632`,
		2591: `1633`,
		2592: `1633`,
		2593: `1634`,
		2594: `1635`,
		2595: `1635`,
		2596: `1636`,
		2597: `1637`,
		2598: `1637`,
		2599: `1637`,
		26: `2`,
		260: `117`,
		2600: `1638`,
		2601: `1639`,
		2602: `1639`,
		2603: `1640`,
		2604: `1641`,
		2605: `1641`,
		2606: `1641`,
		2607: `1642`,
		2608: `1643`,
		2609: `1643`,
		261: `117`,
		2610: `1644`,
		2611: `1645`,
		2612: `1645`,
		2613: `1646`,
		2614: `1647`,
		2615: `1648`,
		2616: `1648`,
		2617: `1649`,
		2618: `1650`,
		2619: `1650`,
		262: `118`,
		2620: `1650`,
		2621: `1651`,
		2622: `1652`,
		2623: `1652`,
		2624: `1653`,
		2625: `1654`,
		2626: `1654`,
		2627: `1654`,
		2628: `1655`,
		2629: `1656`,
		263: `119`,
		2630: `1656`,
		2631: `1657`,
		2632: `1658`,
		2633: `1658`,
		2634: `1659`,
		2635: `1660`,
		2636: `1661`,
		2637: `1661`,
		2638: `1662`,
		2639: `1663`,
		264: `119`,
		2640: `1663`,
		2641: `1664`,
		2642: `1665`,
		2643: `1666`,
		2644: `1666`,
		2645: `1667`,
		2646: `1668`,
		2647: `1668`,
		2648: `1669`,
		2649: `1670`,
		265: `120`,
		2650: `1671`,
		2651: `1671`,
		2652: `1672`,
		2653: `1673`,
		2654: `1673`,
		2655: `1674`,
		2656: `1675`,
		2657: `1676`,
		2658: `1676`,
		2659: `1677`,
		266: `121`,
		2660: `1678`,
		2661: `1679`,
		2662: `1679`,
		2663: `1680`,
		2664: `1681`,
		2665: `1682`,
		2666: `1682`,
		2667: `1683`,
		2668: `1683`,
		2669: `1684`,
		267: `121`,
		2670: `1684`,
		2671: `1684`,
		2672: `1686`,
		2673: `1687`,
		2674: `1687`,
		2675: `1688`,
		2676: `1689`,
		2677: `1689`,
		2678: `1690`,
		2679: `1690`,
		268: `122`,
		2680: `1691`,
		2681: `1691`,
		2682: `1692`,
		2683: `1693`,
		2684: `1695`,
		2685: `1696`,
		2686: `1696`,
		2687: `1697`,
		2688: `1697`,
		2689: `1698`,
		269: `123`,
		2690: `1698`,
		2691: `1699`,
		2692: `1699`,
		2693: `1700`,
		2694: `1700`,
		2695: `1701`,
		2696: `1701`,
		2697: `1702`,
		2698: `1703`,
		2699: `1705`,
		27: `2`,
		270: `125`,
		2700: `1705`,
		2701: `1706`,
		2702: `1706`,
		2703: `1707`,
		2704: `1708`,
		2705: `1711`,
		2706: `1711`,
		2707: `1711`,
		2708: `1712`,
		2709: `1712`,
		271: `126`,
		2710: `1713`,
		2711: `1713`,
		2712: `1714`,
		2713: `1714`,
		2714: `1714`,
		2715: `1716`,
		2716: `1716`,
		2717: `1717`,
		2718: `1717`,
		2719: `1718`,
		272: `126`,
		2720: `1719`,
		2721: `1722`,
		2722: `1722`,
		2723: `1722`,
		2724: `1723`,
		2725: `1723`,
		2726: `1724`,
		2727: `1724`,
		2728: `1725`,
		2729: `1725`,
		273: `127`,
		2730: `1725`,
		2731: `1727`,
		2732: `1727`,
		2733: `1728`,
		2734: `1728`,
		2735: `1729`,
		2736: `1730`,
		2737: `1733`,
		2738: `1733`,
		2739: `1733`,
		274: `127`,
		2740: `1734`,
		2741: `1734`,
		2742: `1735`,
		2743: `1736`,
		2744: `1736`,
		2745: `1736`,
		2746: `1737`,
		2747: `1737`,
		2748: `1738`,
		2749: `1738`,
		275: `127`,
		2750: `1738`,
		2751: `1740`,
		2752: `1741`,
		2753: `1743`,
		2754: `1744`,
		2755: `1745`,
		2756: `1746`,
		2757: `1746`,
		2758: `1747`,
		2759: `1747`,
		276: `127`,
		2760: `1748`,
		2761: `1748`,
		2762: `1748`,
		2763: `1749`,
		2764: `1751`,
		2765: `1752`,
		2766: `1753`,
		2767: `1753`,
		2768: `1753`,
		2769: `1754`,
		277: `127`,
		2770: `1755`,
		2771: `1755`,
		2772: `1756`,
		2773: `1756`,
		2774: `1756`,
		2775: `1757`,
		2776: `1759`,
		2777: `1760`,
		2778: `1760`,
		2779: `1760`,
		278: `127`,
		2780: `1762`,
		2781: `1763`,
		2782: `1763`,
		2783: `1763`,
		2784: `1765`,
		2785: `1766`,
		2786: `1766`,
		2787: `1767`,
		2788: `1769`,
		2789: `1770`,
		279: `127`,
		2790: `1771`,
		2791: `1772`,
		2792: `1773`,
		2793: `1773`,
		2794: `1774`,
		2795: `1775`,
		2796: `1776`,
		2797: `1777`,
		2798: `1779`,
		2799: `1780`,
		28: `2`,
		280: `127`,
		2800: `1780`,
		2801: `1780`,
		2802: `1781`,
		2803: `1781`,
		2804: `1782`,
		2805: `1783`,
		2806: `1783`,
		2807: `1784`,
		2808: `1785`,
		2809: `1785`,
		281: `127`,
		2810: `1786`,
		2811: `1787`,
		2812: `1787`,
		2813: `1788`,
		2814: `1789`,
		2815: `1789`,
		2816: `1790`,
		2817: `1791`,
		2818: `1791`,
		2819: `1792`,
		282: `127`,
		2820: `1793`,
		2821: `1793`,
		2822: `1794`,
		2823: `1795`,
		2824: `1795`,
		2825: `1795`,
		2826: `1796`,
		2827: `1796`,
		2828: `1797`,
		2829: `1798`,
		283: `128`,
		2830: `1798`,
		2831: `1798`,
		2832: `1799`,
		2833: `1799`,
		2834: `1800`,
		2835: `1801`,
		2836: `1801`,
		2837: `1801`,
		2838: `1802`,
		2839: `1803`,
		284: `128`,
		2840: `1803`,
		2841: `1804`,
		2842: `1805`,
		2843: `1805`,
		2844: `1805`,
		2845: `1806`,
		2846: `1807`,
		2847: `1807`,
		2848: `1808`,
		2849: `1809`,
		285: `129`,
		2850: `1809`,
		2851: `1809`,
		2852: `1810`,
		2853: `1810`,
		2854: `1811`,
		2855: `1812`,
		2856: `1812`,
		2857: `1812`,
		2858: `1813`,
		2859: `1814`,
		286: `130`,
		2860: `1814`,
		2861: `1815`,
		2862: `1816`,
		2863: `1816`,
		2864: `1816`,
		2865: `1817`,
		2866: `1818`,
		2867: `1818`,
		2868: `1819`,
		2869: `1820`,
		287: `130`,
		2870: `1820`,
		2871: `1820`,
		2872: `1821`,
		2873: `1822`,
		2874: `1822`,
		2875: `1823`,
		2876: `1824`,
		2877: `1824`,
		2878: `1824`,
		2879: `1825`,
		288: `130`,
		2880: `1825`,
		2881: `1826`,
		2882: `1827`,
		2883: `1827`,
		2884: `1827`,
		2885: `1828`,
		2886: `1829`,
		2887: `1829`,
		2888: `1830`,
		2889: `1831`,
		289: `131`,
		2890: `1831`,
		2891: `1831`,
		2892: `1832`,
		2893: `1832`,
		2894: `1833`,
		2895: `1834`,
		2896: `1834`,
		2897: `1834`,
		2898: `1835`,
		2899: `1836`,
		29: `2`,
		290: `132`,
		2900: `1836`,
		2901: `1837`,
		2902: `1838`,
		2903: `1838`,
		2904: `1838`,
		2905: `1839`,
		2906: `1839`,
		2907: `1840`,
		2908: `1841`,
		2909: `1841`,
		291: `133`,
		2910: `1841`,
		2911: `1842`,
		2912: `1843`,
		2913: `1843`,
		2914: `1844`,
		2915: `1845`,
		2916: `1845`,
		2917: `1845`,
		2918: `1846`,
		2919: `1846`,
		292: `133`,
		2920: `1847`,
		2921: `1848`,
		2922: `1848`,
		2923: `1848`,
		2924: `1849`,
		2925: `1850`,
		2926: `1850`,
		2927: `1851`,
		2928: `1852`,
		2929: `1852`,
		293: `134`,
		2930: `1852`,
		2931: `1853`,
		2932: `1854`,
		2933: `1854`,
		2934: `1855`,
		2935: `1855`,
		2936: `1855`,
		2937: `1856`,
		2938: `1857`,
		2939: `1857`,
		294: `135`,
		2940: `1858`,
		2941: `1860`,
		2942: `1861`,
		2943: `1861`,
		2944: `1861`,
		2945: `1862`,
		2946: `1862`,
		2947: `1863`,
		2948: `1864`,
		2949: `1864`,
		295: `135`,
		2950: `1865`,
		2951: `1866`,
		2952: `1866`,
		2953: `1867`,
		2954: `1868`,
		2955: `1868`,
		2956: `1869`,
		2957: `1870`,
		2958: `1870`,
		2959: `1871`,
		296: `135`,
		2960: `1872`,
		2961: `1872`,
		2962: `1873`,
		2963: `1874`,
		2964: `1874`,
		2965: `1875`,
		2966: `1876`,
		2967: `1876`,
		2968: `1876`,
		2969: `1877`,
		297: `136`,
		2970: `1877`,
		2971: `1878`,
		2972: `1879`,
		2973: `1879`,
		2974: `1879`,
		2975: `1880`,
		2976: `1880`,
		2977: `1881`,
		2978: `1882`,
		2979: `1882`,
		298: `136`,
		2980: `1882`,
		2981: `1883`,
		2982: `1884`,
		2983: `1884`,
		2984: `1885`,
		2985: `1886`,
		2986: `1886`,
		2987: `1886`,
		2988: `1887`,
		2989: `1887`,
		299: `137`,
		2990: `1888`,
		2991: `1889`,
		2992: `1889`,
		2993: `1889`,
		2994: `1890`,
		2995: `1891`,
		2996: `1891`,
		2997: `1892`,
		2998: `1893`,
		2999: `1893`,
		3: `2`,
		30: `2`,
		300: `137`,
		3000: `1893`,
		3001: `1894`,
		3002: `1894`,
		3003: `1895`,
		3004: `1896`,
		3005: `1896`,
		3006: `1896`,
		3007: `1897`,
		3008: `1898`,
		3009: `1898`,
		301: `138`,
		3010: `1899`,
		3011: `1900`,
		3012: `1900`,
		3013: `1900`,
		3014: `1901`,
		3015: `1902`,
		3016: `1902`,
		3017: `1903`,
		3018: `1904`,
		3019: `1904`,
		302: `138`,
		3020: `1904`,
		3021: `1905`,
		3022: `1906`,
		3023: `1906`,
		3024: `1907`,
		3025: `1907`,
		3026: `1907`,
		3027: `1908`,
		3028: `1908`,
		3029: `1909`,
		303: `139`,
		3030: `1912`,
		3031: `1912`,
		3032: `1913`,
		3033: `1913`,
		3034: `1914`,
		3035: `1915`,
		3036: `1916`,
		3037: `1917`,
		3038: `1917`,
		3039: `1918`,
		304: `139`,
		3040: `1919`,
		3041: `1919`,
		3042: `1920`,
		3043: `1920`,
		3044: `1921`,
		3045: `1921`,
		3046: `1922`,
		3047: `1923`,
		3048: `1924`,
		3049: `1924`,
		305: `140`,
		3050: `1925`,
		3051: `1926`,
		3052: `1927`,
		3053: `1928`,
		3054: `1928`,
		3055: `1929`,
		3056: `1930`,
		3057: `1931`,
		3058: `1933`,
		3059: `1933`,
		306: `140`,
		3060: `1934`,
		3061: `1935`,
		3062: `1935`,
		3063: `1936`,
		3064: `1939`,
		3065: `1939`,
		3066: `1940`,
		3067: `1940`,
		3068: `1941`,
		3069: `1942`,
		307: `141`,
		3070: `1943`,
		3071: `1944`,
		3072: `1944`,
		3073: `1945`,
		3074: `1946`,
		3075: `1946`,
		3076: `1947`,
		3077: `1947`,
		3078: `1948`,
		3079: `1948`,
		308: `142`,
		3080: `1949`,
		3081: `1950`,
		3082: `1951`,
		3083: `1951`,
		3084: `1952`,
		3085: `1952`,
		3086: `1953`,
		3087: `1954`,
		3088: `1955`,
		3089: `1955`,
		309: `142`,
		3090: `1956`,
		3091: `1956`,
		3092: `1957`,
		3093: `1958`,
		3094: `1959`,
		3095: `1959`,
		3096: `1960`,
		3097: `1961`,
		3098: `1962`,
		3099: `1964`,
		31: `2`,
		310: `143`,
		3100: `1965`,
		3101: `1965`,
		3102: `1966`,
		3103: `1966`,
		3104: `1966`,
		3105: `1968`,
		3106: `1968`,
		3107: `1969`,
		3108: `1969`,
		3109: `1970`,
		311: `143`,
		3110: `1971`,
		3111: `1972`,
		3112: `1972`,
		3113: `1972`,
		3114: `1973`,
		3115: `1973`,
		3116: `1973`,
		3117: `1975`,
		3118: `1976`,
		3119: `1976`,
		312: `144`,
		3120: `1977`,
		313: `144`,
		314: `145`,
		315: `145`,
		316: `146`,
		317: `146`,
		318: `147`,
		319: `147`,
		32: `2`,
		320: `149`,
		321: `149`,
		322: `150`,
		323: `150`,
		324: `150`,
		325: `151`,
		326: `151`,
		327: `152`,
		328: `152`,
		329: `152`,
		33: `2`,
		330: `153`,
		331: `154`,
		332: `154`,
		333: `155`,
		334: `156`,
		335: `157`,
		336: `157`,
		337: `158`,
		338: `158`,
		339: `159`,
		34: `2`,
		340: `159`,
		341: `159`,
		342: `160`,
		343: `161`,
		344: `162`,
		345: `162`,
		346: `163`,
		347: `163`,
		348: `164`,
		349: `164`,
		35: `2`,
		350: `164`,
		351: `165`,
		352: `166`,
		353: `167`,
		354: `167`,
		355: `168`,
		356: `168`,
		357: `169`,
		358: `170`,
		359: `170`,
		36: `2`,
		360: `171`,
		361: `172`,
		362: `173`,
		363: `173`,
		364: `174`,
		365: `175`,
		366: `176`,
		367: `176`,
		368: `178`,
		369: `178`,
		37: `2`,
		370: `179`,
		371: `179`,
		372: `180`,
		373: `181`,
		374: `182`,
		375: `182`,
		376: `183`,
		377: `184`,
		378: `185`,
		379: `185`,
		38: `2`,
		380: `186`,
		381: `187`,
		382: `188`,
		383: `188`,
		384: `189`,
		385: `190`,
		386: `190`,
		387: `191`,
		388: `192`,
		389: `192`,
		39: `2`,
		390: `193`,
		391: `194`,
		392: `194`,
		393: `194`,
		394: `195`,
		395: `196`,
		396: `196`,
		397: `197`,
		398: `198`,
		399: `198`,
		4: `2`,
		40: `4`,
		400: `199`,
		401: `200`,
		402: `201`,
		403: `201`,
		404: `202`,
		405: `203`,
		406: `203`,
		407: `204`,
		408: `205`,
		409: `206`,
		41: `4`,
		410: `206`,
		411: `207`,
		412: `208`,
		413: `209`,
		414: `209`,
		415: `210`,
		416: `211`,
		417: `212`,
		418: `212`,
		419: `213`,
		42: `5`,
		420: `214`,
		421: `214`,
		422: `215`,
		423: `216`,
		424: `217`,
		425: `217`,
		426: `218`,
		427: `218`,
		428: `220`,
		429: `220`,
		43: `5`,
		430: `221`,
		431: `221`,
		432: `222`,
		433: `223`,
		434: `223`,
		435: `224`,
		436: `224`,
		437: `224`,
		438: `225`,
		439: `226`,
		44: `5`,
		440: `227`,
		441: `227`,
		442: `228`,
		443: `228`,
		444: `228`,
		445: `229`,
		446: `230`,
		447: `230`,
		448: `231`,
		449: `232`,
		45: `6`,
		450: `232`,
		451: `232`,
		452: `233`,
		453: `234`,
		454: `235`,
		455: `235`,
		456: `236`,
		457: `237`,
		458: `237`,
		459: `238`,
		46: `7`,
		460: `239`,
		461: `240`,
		462: `241`,
		463: `241`,
		464: `242`,
		465: `243`,
		466: `244`,
		467: `246`,
		468: `246`,
		469: `246`,
		47: `8`,
		470: `248`,
		471: `248`,
		472: `249`,
		473: `249`,
		474: `249`,
		475: `251`,
		476: `251`,
		477: `251`,
		478: `251`,
		479: `251`,
		48: `9`,
		480: `251`,
		481: `252`,
		482: `252`,
		483: `253`,
		484: `254`,
		485: `256`,
		486: `257`,
		487: `259`,
		488: `259`,
		489: `260`,
		49: `10`,
		490: `269`,
		491: `269`,
		492: `270`,
		493: `271`,
		494: `272`,
		495: `281`,
		496: `281`,
		497: `282`,
		498: `282`,
		499: `283`,
		5: `2`,
		50: `11`,
		500: `284`,
		501: `285`,
		502: `285`,
		503: `286`,
		504: `287`,
		505: `288`,
		506: `291`,
		507: `291`,
		508: `292`,
		509: `292`,
		51: `11`,
		510: `292`,
		511: `295`,
		512: `295`,
		513: `296`,
		514: `297`,
		515: `298`,
		516: `301`,
		517: `301`,
		518: `302`,
		519: `303`,
		52: `12`,
		520: `304`,
		521: `307`,
		522: `307`,
		523: `308`,
		524: `309`,
		525: `310`,
		526: `313`,
		527: `313`,
		528: `314`,
		529: `315`,
		53: `13`,
		530: `316`,
		531: `317`,
		532: `317`,
		533: `318`,
		534: `319`,
		535: `320`,
		536: `324`,
		537: `324`,
		538: `326`,
		539: `326`,
		54: `14`,
		540: `327`,
		541: `327`,
		542: `327`,
		543: `328`,
		544: `328`,
		545: `329`,
		546: `330`,
		547: `331`,
		548: `332`,
		549: `332`,
		55: `14`,
		550: `333`,
		551: `334`,
		552: `335`,
		553: `339`,
		554: `341`,
		555: `341`,
		556: `343`,
		557: `343`,
		558: `344`,
		559: `344`,
		56: `15`,
		560: `344`,
		561: `345`,
		562: `345`,
		563: `345`,
		564: `345`,
		565: `345`,
		566: `345`,
		567: `345`,
		568: `345`,
		569: `346`,
		57: `16`,
		570: `346`,
		571: `347`,
		572: `348`,
		573: `348`,
		574: `349`,
		575: `350`,
		576: `350`,
		577: `351`,
		578: `352`,
		579: `354`,
		58: `17`,
		580: `355`,
		581: `355`,
		582: `356`,
		583: `356`,
		584: `356`,
		585: `356`,
		586: `356`,
		587: `356`,
		588: `356`,
		589: `356`,
		59: `18`,
		590: `356`,
		591: `356`,
		592: `357`,
		593: `357`,
		594: `358`,
		595: `359`,
		596: `359`,
		597: `359`,
		598: `360`,
		599: `361`,
		6: `2`,
		60: `19`,
		600: `362`,
		601: `362`,
		602: `363`,
		603: `364`,
		604: `364`,
		605: `364`,
		606: `365`,
		607: `365`,
		608: `366`,
		609: `366`,
		61: `20`,
		610: `367`,
		611: `367`,
		612: `368`,
		613: `368`,
		614: `369`,
		615: `369`,
		616: `370`,
		617: `371`,
		618: `371`,
		619: `372`,
		62: `20`,
		620: `372`,
		621: `373`,
		622: `373`,
		623: `374`,
		624: `374`,
		625: `375`,
		626: `375`,
		627: `376`,
		628: `376`,
		629: `377`,
		63: `21`,
		630: `377`,
		631: `377`,
		632: `379`,
		633: `379`,
		634: `380`,
		635: `389`,
		636: `389`,
		637: `390`,
		638: `391`,
		639: `392`,
		64: `22`,
		640: `401`,
		641: `401`,
		642: `402`,
		643: `402`,
		644: `403`,
		645: `404`,
		646: `405`,
		647: `405`,
		648: `406`,
		649: `407`,
		65: `24`,
		650: `408`,
		651: `411`,
		652: `411`,
		653: `412`,
		654: `412`,
		655: `412`,
		656: `415`,
		657: `415`,
		658: `416`,
		659: `417`,
		66: `24`,
		660: `418`,
		661: `421`,
		662: `421`,
		663: `422`,
		664: `423`,
		665: `424`,
		666: `427`,
		667: `427`,
		668: `428`,
		669: `429`,
		67: `24`,
		670: `430`,
		671: `433`,
		672: `433`,
		673: `434`,
		674: `435`,
		675: `436`,
		676: `437`,
		677: `437`,
		678: `438`,
		679: `439`,
		68: `24`,
		680: `440`,
		681: `444`,
		682: `444`,
		683: `446`,
		684: `446`,
		685: `447`,
		686: `447`,
		687: `447`,
		688: `448`,
		689: `448`,
		69: `24`,
		690: `449`,
		691: `450`,
		692: `451`,
		693: `452`,
		694: `452`,
		695: `453`,
		696: `454`,
		697: `455`,
		698: `459`,
		699: `461`,
		7: `2`,
		70: `24`,
		700: `461`,
		701: `463`,
		702: `463`,
		703: `464`,
		704: `464`,
		705: `464`,
		706: `465`,
		707: `465`,
		708: `465`,
		709: `465`,
		71: `24`,
		710: `465`,
		711: `465`,
		712: `465`,
		713: `465`,
		714: `466`,
		715: `466`,
		716: `467`,
		717: `468`,
		718: `468`,
		719: `469`,
		72: `24`,
		720: `470`,
		721: `470`,
		722: `471`,
		723: `472`,
		724: `474`,
		725: `475`,
		726: `475`,
		727: `476`,
		728: `476`,
		729: `476`,
		73: `24`,
		730: `476`,
		731: `476`,
		732: `476`,
		733: `476`,
		734: `476`,
		735: `476`,
		736: `476`,
		737: `477`,
		738: `477`,
		739: `478`,
		74: `24`,
		740: `479`,
		741: `479`,
		742: `479`,
		743: `480`,
		744: `481`,
		745: `482`,
		746: `482`,
		747: `483`,
		748: `484`,
		749: `484`,
		75: `24`,
		750: `484`,
		751: `485`,
		752: `485`,
		753: `486`,
		754: `486`,
		755: `487`,
		756: `487`,
		757: `488`,
		758: `488`,
		759: `489`,
		76: `24`,
		760: `489`,
		761: `490`,
		762: `491`,
		763: `491`,
		764: `492`,
		765: `492`,
		766: `493`,
		767: `493`,
		768: `494`,
		769: `494`,
		77: `24`,
		770: `495`,
		771: `495`,
		772: `496`,
		773: `496`,
		774: `497`,
		775: `497`,
		776: `497`,
		777: `499`,
		778: `499`,
		779: `500`,
		78: `24`,
		780: `500`,
		781: `500`,
		782: `501`,
		783: `501`,
		784: `502`,
		785: `502`,
		786: `503`,
		787: `503`,
		788: `504`,
		789: `505`,
		79: `24`,
		790: `514`,
		791: `514`,
		792: `515`,
		793: `516`,
		794: `517`,
		795: `517`,
		796: `518`,
		797: `518`,
		798: `519`,
		799: `520`,
		8: `2`,
		80: `24`,
		800: `521`,
		801: `521`,
		802: `522`,
		803: `522`,
		804: `523`,
		805: `523`,
		806: `524`,
		807: `525`,
		808: `525`,
		809: `526`,
		81: `24`,
		810: `526`,
		811: `527`,
		812: `528`,
		813: `529`,
		814: `532`,
		815: `532`,
		816: `533`,
		817: `533`,
		818: `534`,
		819: `535`,
		82: `24`,
		820: `536`,
		821: `536`,
		822: `537`,
		823: `538`,
		824: `539`,
		825: `542`,
		826: `542`,
		827: `543`,
		828: `543`,
		829: `544`,
		83: `24`,
		830: `544`,
		831: `545`,
		832: `546`,
		833: `546`,
		834: `547`,
		835: `547`,
		836: `548`,
		837: `548`,
		838: `549`,
		839: `549`,
		84: `24`,
		840: `550`,
		841: `550`,
		842: `551`,
		843: `551`,
		844: `551`,
		845: `554`,
		846: `554`,
		847: `555`,
		848: `555`,
		849: `555`,
		85: `24`,
		850: `556`,
		851: `557`,
		852: `557`,
		853: `558`,
		854: `559`,
		855: `560`,
		856: `560`,
		857: `561`,
		858: `562`,
		859: `563`,
		86: `24`,
		860: `563`,
		861: `564`,
		862: `565`,
		863: `566`,
		864: `569`,
		865: `569`,
		866: `570`,
		867: `570`,
		868: `571`,
		869: `571`,
		87: `24`,
		870: `572`,
		871: `573`,
		872: `573`,
		873: `574`,
		874: `574`,
		875: `575`,
		876: `575`,
		877: `576`,
		878: `576`,
		879: `577`,
		88: `24`,
		880: `577`,
		881: `578`,
		882: `578`,
		883: `578`,
		884: `581`,
		885: `581`,
		886: `582`,
		887: `582`,
		888: `582`,
		889: `583`,
		89: `24`,
		890: `584`,
		891: `584`,
		892: `585`,
		893: `586`,
		894: `587`,
		895: `587`,
		896: `588`,
		897: `589`,
		898: `590`,
		899: `590`,
		9: `2`,
		90: `24`,
		900: `591`,
		901: `592`,
		902: `593`,
		903: `596`,
		904: `596`,
		905: `597`,
		906: `597`,
		907: `598`,
		908: `598`,
		909: `599`,
		91: `24`,
		910: `600`,
		911: `600`,
		912: `601`,
		913: `601`,
		914: `602`,
		915: `602`,
		916: `603`,
		917: `603`,
		918: `604`,
		919: `604`,
		92: `24`,
		920: `605`,
		921: `605`,
		922: `605`,
		923: `608`,
		924: `608`,
		925: `609`,
		926: `609`,
		927: `609`,
		928: `610`,
		929: `610`,
		93: `24`,
		930: `610`,
		931: `611`,
		932: `611`,
		933: `612`,
		934: `612`,
		935: `612`,
		936: `613`,
		937: `613`,
		938: `613`,
		939: `614`,
		94: `24`,
		940: `615`,
		941: `615`,
		942: `616`,
		943: `616`,
		944: `616`,
		945: `617`,
		946: `617`,
		947: `617`,
		948: `618`,
		949: `619`,
		95: `24`,
		950: `619`,
		951: `620`,
		952: `620`,
		953: `620`,
		954: `620`,
		955: `620`,
		956: `620`,
		957: `621`,
		958: `621`,
		959: `622`,
		96: `24`,
		960: `623`,
		961: `625`,
		962: `626`,
		963: `626`,
		964: `627`,
		965: `627`,
		966: `627`,
		967: `627`,
		968: `627`,
		969: `627`,
		97: `24`,
		970: `627`,
		971: `627`,
		972: `627`,
		973: `627`,
		974: `628`,
		975: `628`,
		976: `629`,
		977: `630`,
		978: `630`,
		979: `630`,
		98: `24`,
		980: `631`,
		981: `632`,
		982: `633`,
		983: `633`,
		984: `634`,
		985: `635`,
		986: `635`,
		987: `635`,
		988: `636`,
		989: `636`,
		99: `24`,
		990: `637`,
		991: `637`,
		992: `638`,
		993: `638`,
		994: `639`,
		995: `639`,
		996: `640`,
		997: `640`,
		998: `641`,
		999: `641`,
	},
	appClear: `CA==`,
	appClearMap: {},
	companionInfo: null,
	extraPages: 1,
	stateKeys: 3,
	stateSize: 298,
	unsupported: [],
	version: 13,
	warnings: [],
};
const _ETH = {
	ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T9","name":"v17935","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_buyer_api_bronze0_907","type":"bool"},{"internalType":"bool","name":"_buyer_api_gold0_907","type":"bool"},{"internalType":"bool","name":"_buyer_api_silver0_907","type":"bool"},{"components":[{"internalType":"uint256[3]","name":"elem0","type":"uint256[3]"}],"internalType":"struct T2","name":"_controller_api_restock0_907","type":"tuple"},{"components":[{"internalType":"uint256[3]","name":"elem0","type":"uint256[3]"}],"internalType":"struct T2","name":"_controller_api_set_prices0_907","type":"tuple"},{"internalType":"bool","name":"_controller_api_terminate0_907","type":"bool"},{"internalType":"bool","name":"_controller_api_toggle_pause0_907","type":"bool"},{"internalType":"bool","name":"_controller_api_withdraw0_907","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v10187","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v10818","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v12136","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6735","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v7536","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v8226","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v8916","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v9552","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256[3]","name":"v0","type":"uint256[3]"}],"name":"price_change","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes6","name":"v0","type":"bytes6"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"purchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256[3]","name":"v0","type":"uint256[3]"}],"name":"restock","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"terminate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256[3]","name":"v0","type":"uint256[3]"}],"name":"withdraw","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T11","name":"v17938","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T11","name":"v17941","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_buyer_api_bronze0_907","type":"bool"},{"internalType":"bool","name":"_buyer_api_gold0_907","type":"bool"},{"internalType":"bool","name":"_buyer_api_silver0_907","type":"bool"},{"components":[{"internalType":"uint256[3]","name":"elem0","type":"uint256[3]"}],"internalType":"struct T2","name":"_controller_api_restock0_907","type":"tuple"},{"components":[{"internalType":"uint256[3]","name":"elem0","type":"uint256[3]"}],"internalType":"struct T2","name":"_controller_api_set_prices0_907","type":"tuple"},{"internalType":"bool","name":"_controller_api_terminate0_907","type":"bool"},{"internalType":"bool","name":"_controller_api_toggle_pause0_907","type":"bool"},{"internalType":"bool","name":"_controller_api_withdraw0_907","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v17944","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyer_api_bronze","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyer_api_gold","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyer_api_silver","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"coin_prices","outputs":[{"internalType":"uint256[3]","name":"","type":"uint256[3]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"coin_supply","outputs":[{"internalType":"uint256[3]","name":"","type":"uint256[3]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[3]","name":"v17914","type":"uint256[3]"}],"name":"controller_api_restock","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256[3]","name":"v17920","type":"uint256[3]"}],"name":"controller_api_set_prices","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"controller_api_terminate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"controller_api_toggle_pause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"controller_api_withdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"is_paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
	Bytecode: `0x6080601f62004b3838819003918201601f19168301916001600160401b0383118484101762000707578084926080946040528339810103126200094b5760405190608082016001600160401b03811183821017620007075762000093916060916040528051845262000074602082016200096c565b602085015262000087604082016200096c565b6040850152016200096c565b60608201524360035560405161018081016001600160401b03811182821017620007075760009161016091604052828152826020820152826040820152826060820152604051620000e48162000950565b60603682376080820152604051620000fc8162000950565b606036823760a08201528260c08201528260e0820152826101008201528261012082015282610140820152015260405160e0810181811060018060401b0382111762000707576040526200014f62000981565b81526200015b620009a2565b60208201526200016a620009a2565b604082015262000179620009a2565b606082015260006080820152600060a0820152600060c082015260ff6004541662000932577f445f7d1d3c7ecf7a61d6d64c4194290a54beada7275d0418d50b9c355c8b665360a060405133815284516020820152600180831b036020860151166040820152600180831b036040860151166060820152600180831b036060860151166080820152a18151801590811562000925575b50156200090c57600081515260006020825101526000604082510152805160208201515280516020808301510152805160406020830151015260208101518051604060208201519101511515604051916200026a8362000950565b600083526020830152604082015262000282620009a2565b9160005b60038110620008d25750508152806040830152602081015160406020820151910151151560405191620002b98362000950565b6000835260208301526040820152620002d1620009a2565b9160005b60038110620008985750506020820152606082015260018060a01b0360408301511660018060a01b0360208401511614600014620008905760005b15620008775760608201805160208401516001600160a01b0391821690821614608084018190529151604085015182169116036200086f5760005b1515908160a084015260001462000869575060005b1562000850573462000837573360c0820152602082015160408301516001600160a01b039081169116036200082f5760005b156200081657602082015160608301516001600160a01b039081169116036200080e5760005b15620007f557604082015160608301516001600160a01b03908116911603620007ed5760005b15620007d457608081015115620007cc5760005b15620007b35760a0810151156200079a57604051916001600160401b0360c0840190811190841117620007075760c083016040526000835260006020840152600060408401526000606084015262000449620009a2565b6080840152600060a08401523383526020818101516001600160a01b0390811682860152604080840151821681870152606093840151909116838601529183015180830151918201519183015192519092909190151590620004ab8362000950565b6000835260208301526040820152620004c3620009a2565b9160005b600381106200074a5750506040820152608083015260c060018060a01b039101511660a08201526001600055436001556040519060018060a01b03815116602083015260018060a01b03602082015116604083015260018060a01b03604082015116606083015260018060a01b036060820151166080830152608081015160a083016000905b600382106200071d5750505060a001516001600160a01b03166101c08281019190915281526101e081016001600160401b03811182821017620007075760405280516001600160401b0381116200070757600254600181811c91168015620006fc575b6020821014620006e657601f81116200067c575b50602091601f8211600114620006125791819260009262000606575b50508160011b916000199060031b1c1916176002555b604051614135908162000a038239f35b015190503880620005e0565b601f19821692600260005260206000209160005b858110620006635750836001951062000649575b505050811b01600255620005f6565b015160001960f88460031b161c191690553880806200063a565b9192602060018192868501518155019401920162000626565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620006db575b601f0160051c01905b818110620006ce5750620005c4565b60008155600101620006bf565b9091508190620006b6565b634e487b7160e01b600052602260045260246000fd5b90607f1690620005b0565b634e487b7160e01b600052604160045260246000fd5b6020606060019260408651805183528481015185840152015115156040820152019301910190916200054d565b620007568183620009da565b51620007638286620009da565b52620007708185620009da565b5060001981146200078457600101620004c7565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260166004820152602490fd5b60405163100960cb60e01b815260156004820152602490fd5b6001620003f2565b60405163100960cb60e01b815260146004820152602490fd5b6001620003de565b60405163100960cb60e01b815260136004820152602490fd5b6001620003b8565b60405163100960cb60e01b815260126004820152602490fd5b600162000392565b60405163100960cb60e01b815260116004820152602490fd5b60405163100960cb60e01b815260106004820152602490fd5b62000360565b60016200034b565b60405163100960cb60e01b8152600f6004820152602490fd5b600162000310565b620008a48183620009da565b51620008b18286620009da565b52620008be8185620009da565b5060001981146200078457600101620002d5565b620008de8183620009da565b51620008eb8286620009da565b52620008f88185620009da565b506000198114620007845760010162000286565b60405163100960cb60e01b8152600e6004820152602490fd5b905060015414386200020f565b60405163100960cb60e01b8152600d6004820152602490fd5b600080fd5b606081019081106001600160401b038211176200070757604052565b51906001600160a01b03821682036200094b57565b60405190620009908262000950565b60006040838281528260208201520152565b60405190620009b18262000950565b8160005b60608110620009c2575050565b602090620009cf62000981565b8184015201620009b5565b906003811015620009ec5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f11461016c57806341712c0a14610163578063573b85101461015a57806358d058cf1461015157806378d83cd9146101485780638039fb9f1461013f578063832307571461013657806388e5518f1461012d5780638c3004551461012457806395e549c61461011b5780639d4f8aa914610112578063ab53f2c614610109578063abc8014a14610100578063c2e3cb94146100f7578063e091078a146100ee578063e30a7e8f146100e55763ec8fb8110361000e576100e0610b03565b61000e565b506100e0610a89565b506100e0610a1b565b506100e06109db565b506100e061099b565b506100e0610926565b506100e061088c565b506100e0610812565b506100e061074c565b506100e06106d2565b506100e06106b3565b506100e0610672565b506100e0610634565b506100e06105db565b506100e0610423565b506100e06101a1565b503461018b57600036600319011261018b576020600354604051908152f35b600080fd5b602090600319011261018b57600490565b506101be6101ae36610190565b6101b6610e33565b503690610ec3565b6101c6612274565b6103c86000916101d960038454146111d1565b6101e1610ce7565b6101f56020918280825183010191016122df565b9161021161020c61020860045460ff1690565b1590565b6111f1565b61025a6040967fd8b4bef0baf1b43e1c773ecc562857f82f7aa078ea677386f72396872c0e85158851806102468433836110a7565b0390a1518015908115610417575b50611211565b6102643415611231565b6103a2608084019260018060a01b039233846102808751610f1f565b1603610400576102906001611251565b878080806102a66102a18a51610f1f565b610f1f565b6101008b0151908282156103f7575bf1156103ea575b87815261039d6103048960e08901516102ff8d6101208c0151906102e6818a840151930151151590565b916102ef610d92565b9586528986015284019015159052565b6125c8565b838301908152610333610319858a0151610f1f565b6103238951610f1f565b90886101408c01519216906124c5565b610374610341825160200190565b51518c6101608b019182519003950194855261035f8d8b0151610f1f565b8861036a8b51610f1f565b92519216906124c5565b51915192808301518b8282015191015115159161038f610d92565b95865285015215158a840152565b61262c565b506101806103bd6103b66060860151610f1f565b9351610f1f565b9301519216906124c5565b80556103d46000600155565b6103dc6123e0565b5160008152602090f35b0390f35b6103f26123d3565b6102bc565b506108fc6102b5565b610290336104116102a18951610f1f565b14611251565b90506001541438610254565b506105c36104336101ae36610190565b608061043d610ee1565b9161044c600160005414611271565b6104c561046961045a610ce7565b60208082518301019101610ffe565b9161048161047c61020860045460ff1690565b611291565b7fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596604051806104b18433836110a7565b0390a15180159081156105cf575b506112b1565b6104cf34156112d1565b6104eb3360018060a01b036104e48451610f1f565b16146112f1565b629896808351526301312d00610502845160200190565b526301c9c380610513845160400190565b5261051c611139565b9261053061052a8351610f1f565b856111c2565b6105496105406020840151610f1f565b602086016111c2565b6105626105596040840151610f1f565b604086016111c2565b61057b6105726060840151610f1f565b606086016111c2565b61059361058b60a0840151610f1f565b8486016111c2565b5160a0840152600060c0840152600060e08401524361010084015201516101208201526000610140820152611f28565b60405160008152602090f35b905060015414386104bf565b50600036600319011261018b57602060606105f4610e33565b610628816106006140aa565b85810190600282515251151585825101526106196140aa565b90600082525186820152612bb2565b01511515604051908152f35b50600036600319011261018b576020604061064d610e33565b610628816106596140aa565b85810190600182515251151585825101526106196140aa565b50600036600319011261018b57602061014061068c610e33565b610628816106986140aa565b858101906007825152511515610100825101526106196140aa565b503461018b57600036600319011261018b576020600154604051908152f35b50600036600319011261018b576020806106ea610e33565b610628816106f66140aa565b848101906000825152511515858251015261070f6140aa565b90600082525185820152612bb2565b6060810192916000915b6003831061073557505050565b600190825181526020809101920192019190610728565b503461018b57600036600319011261018b57606060405161076c81610c57565b3690376103e660a061077c610e33565b60005460058110156107c65760036107949114611331565b6101a06107b16107a2610ce7565b602080825183010191016122df565b0151828201525b01516040519182918261071e565b60056107d29114611311565b6102406107ef6107e0610ce7565b60208082518301019101612931565b0151828201526107b8565b606060031982011261018b5760641161018b57600490565b5061081c366107fa565b610824610e33565b6040519061083182610c57565b606083018236821161018b57602094905b82821061087d575050506106288160e09361085b6140c6565b908151528581019061086e825160049052565b5160a0825101526106196140aa565b81358152908501908501610842565b503461018b57600036600319011261018b576103e66108e96101606108af610e33565b60005460058110156108fb5760036108c79114611371565b6108da6108e160c06108da6107a2610ce7565b0151151590565b151582840152565b60405190151581529081906020820190565b60056109079114611351565b61092160c06109176107e0610ce7565b0151151582840152565b6108da565b503461018b57600080600319360112610998578054610943610ce7565b906040519283918252602090604082840152835191826040850152815b83811061098157505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610960565b80fd5b50600036600319011261018b5760206101006109b5610e33565b610628816109c16140aa565b85810190600582515251151560c0825101526106196140aa565b50600036600319011261018b5760206101206109f5610e33565b61062881610a016140aa565b85810190600682515251151560e0825101526106196140aa565b503461018b57600036600319011261018b576060604051610a3b81610c57565b3690376103e66080610a4b610e33565b6000546005811015610a70576003610a6391146113b1565b60a06107b16107a2610ce7565b6005610a7c9114611391565b60a06107ef6107e0610ce7565b50610a93366107fa565b610a9b610e33565b60405190610aa882610c57565b606083018236821161018b57602094905b828210610af4575050506106288160c093610ad26140c6565b9081515285810190610ae5825160039052565b516080825101526106196140aa565b81358152908501908501610ab9565b506101c036600319011261018b57610b19610e33565b60405190610b2682610c14565b60043582526101a036602319011261018b576105c391610b44610d9f565b610b4c612725565b8152610b56612734565b6020820152610b63612741565b6040820152610b7061274e565b6060820152610b7e36612785565b6080820152610b8c366127e2565b60a0820152610b9961275b565b60c0820152610ba6612769565b60e0820152610bb3612777565b6101008201526020820152612bb2565b90600182811c92168015610bf3575b6020831014610bdd57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610bd2565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610c2f57604052565b610c37610bfd565b604052565b602081019081106001600160401b03821117610c2f57604052565b606081019081106001600160401b03821117610c2f57604052565b6101c081019081106001600160401b03821117610c2f57604052565b608081019081106001600160401b03821117610c2f57604052565b60a081019081106001600160401b03821117610c2f57604052565b601f909101601f19168101906001600160401b03821190821017610c2f57604052565b6040519060008260025491610cfb83610bc3565b808352600193808516908115610d715750600114610d23575b50610d2192500383610cc4565b565b600260009081526000805160206140e983398151915294602093509091905b818310610d59575050610d21935082010138610d14565b85548884018501529485019487945091830191610d42565b9050610d2194506020925060ff191682840152151560051b82010138610d14565b60405190610d2182610c57565b6040519061012082016001600160401b03811183821017610c2f57604052565b604051906102c082016001600160401b03811183821017610c2f57604052565b604051906101c082016001600160401b03811183821017610c2f57604052565b6040519061034082016001600160401b03811183821017610c2f57604052565b60405190610e2c82610c57565b6060368337565b6040519061018082016001600160401b03811183821017610eb6575b60405281610160600091828152826020820152826040820152826060820152604051610e7a81610c57565b60603682376080820152610e8c610e1f565b60a08201528260c08201528260e08201528261010082015282610120820152826101408201520152565b610ebe610bfd565b610e4f565b919082602091031261018b57604051610edb81610c3c565b91358252565b60405190602082016001600160401b03811183821017610f12575b8060405282610f0a82610c57565b606036833752565b610f1a610bfd565b610efc565b6001600160a01b031690565b51906001600160a01b038216820361018b57565b8015150361018b57565b5190610d2182610f3f565b919082606091031261018b57604051606081016001600160401b03811182821017610fa0575b60405260408082948051845260208101516020850152015191610f9c83610f3f565b0152565b610fa8610bfd565b610f7a565b81601f8201121561018b5760405191610fc583610c57565b829061012083019281841161018b57915b838310610fe4575050505090565b6020606091610ff38486610f54565b815201920191610fd6565b6101c08183031261018b5760405191611085916101a09161107a9060c086016001600160401b0381118782101761108d575b60405261103c83610f2b565b865261104a60208401610f2b565b602087015261105b60408401610f2b565b604087015261106c60608401610f2b565b606087015260808301610fad565b608085015201610f2b565b60a082015290565b611095610bfd565b611030565b6001600160a01b03169052565b6001600160a01b0390911681529051602082015260400190565b9060038110156110d25760051b0190565b634e487b7160e01b600052603260045260246000fd5b604051906110f582610c57565b60006040838281528260208201520152565b6040519061111482610c57565b8160005b60608110611124575050565b60209061112f6110e8565b8184015201611118565b6040519061016082016001600160401b038111838210176111b5575b6040528161014060009182815282602082015282604082015282606082015282608082015260405161118681610c57565b606036823760a08201528260c08201528260e0820152826101008201526111ab611107565b6101208201520152565b6111bd610bfd565b611155565b6001600160a01b039091169052565b156111d857565b60405163100960cb60e01b8152601c6004820152602490fd5b156111f857565b60405163100960cb60e01b8152601d6004820152602490fd5b1561121857565b60405163100960cb60e01b8152601e6004820152602490fd5b1561123857565b60405163100960cb60e01b8152601f6004820152602490fd5b1561125857565b60405163100960cb60e01b815260206004820152602490fd5b1561127857565b60405163100960cb60e01b815260176004820152602490fd5b1561129857565b60405163100960cb60e01b815260186004820152602490fd5b156112b857565b60405163100960cb60e01b815260196004820152602490fd5b156112d857565b60405163100960cb60e01b8152601a6004820152602490fd5b156112f857565b60405163100960cb60e01b8152601b6004820152602490fd5b1561131857565b60405163100960cb60e01b8152600a6004820152602490fd5b1561133857565b60405163100960cb60e01b815260096004820152602490fd5b1561135857565b60405163100960cb60e01b8152600c6004820152602490fd5b1561137857565b60405163100960cb60e01b8152600b6004820152602490fd5b1561139857565b60405163100960cb60e01b815260086004820152602490fd5b156113b857565b60405163100960cb60e01b815260076004820152602490fd5b156113d857565b60405163100960cb60e01b815260256004820152602490fd5b156113f857565b60405163100960cb60e01b815260266004820152602490fd5b1561141857565b60405163100960cb60e01b815260276004820152602490fd5b1561143857565b60405163100960cb60e01b815260706004820152602490fd5b1561145857565b60405163100960cb60e01b815260726004820152602490fd5b1561147857565b60405163100960cb60e01b815260746004820152602490fd5b1561149857565b60405163100960cb60e01b815260766004820152602490fd5b156114b857565b60405163100960cb60e01b815260786004820152602490fd5b156114d857565b60405163100960cb60e01b815260676004820152602490fd5b156114f857565b60405163100960cb60e01b815260696004820152602490fd5b1561151857565b60405163100960cb60e01b8152606b6004820152602490fd5b1561153857565b60405163100960cb60e01b8152606d6004820152602490fd5b1561155857565b60405163100960cb60e01b8152606f6004820152602490fd5b1561157857565b60405163100960cb60e01b8152605e6004820152602490fd5b1561159857565b60405163100960cb60e01b815260606004820152602490fd5b156115b857565b60405163100960cb60e01b815260626004820152602490fd5b156115d857565b60405163100960cb60e01b815260646004820152602490fd5b156115f857565b60405163100960cb60e01b815260666004820152602490fd5b1561161857565b60405163100960cb60e01b815260556004820152602490fd5b1561163857565b60405163100960cb60e01b815260576004820152602490fd5b1561165857565b60405163100960cb60e01b815260596004820152602490fd5b1561167857565b60405163100960cb60e01b8152605b6004820152602490fd5b1561169857565b60405163100960cb60e01b8152605d6004820152602490fd5b156116b857565b60405163100960cb60e01b8152604c6004820152602490fd5b156116d857565b60405163100960cb60e01b8152604e6004820152602490fd5b156116f857565b60405163100960cb60e01b815260506004820152602490fd5b1561171857565b60405163100960cb60e01b815260526004820152602490fd5b1561173857565b60405163100960cb60e01b815260546004820152602490fd5b1561175857565b602460405163100960cb60e01b815260406004820152fd5b1561177757565b60405163100960cb60e01b815260416004820152602490fd5b1561179757565b60405163100960cb60e01b815260436004820152602490fd5b156117b757565b60405163100960cb60e01b815260456004820152602490fd5b156117d757565b60405163100960cb60e01b815260476004820152602490fd5b156117f757565b60405163100960cb60e01b815260496004820152602490fd5b1561181757565b60405163100960cb60e01b815260346004820152602490fd5b1561183757565b60405163100960cb60e01b815260356004820152602490fd5b1561185757565b60405163100960cb60e01b815260376004820152602490fd5b1561187757565b60405163100960cb60e01b815260396004820152602490fd5b1561189757565b60405163100960cb60e01b8152603b6004820152602490fd5b156118b757565b60405163100960cb60e01b8152603d6004820152602490fd5b156118d757565b60405163100960cb60e01b815260286004820152602490fd5b156118f757565b60405163100960cb60e01b815260296004820152602490fd5b1561191757565b60405163100960cb60e01b8152602b6004820152602490fd5b1561193757565b60405163100960cb60e01b8152602d6004820152602490fd5b1561195757565b60405163100960cb60e01b8152602f6004820152602490fd5b1561197757565b60405163100960cb60e01b815260316004820152602490fd5b6040519061199d82610c14565b816040516119aa81610c57565b606036823781526020604051916119c083610c57565b60603684370152565b6119d1610dbf565b9060008083528060208401528060408401528060608401528060808401526119f7610e1f565b60a08401528060c08401528060e0840152611a10611107565b610100840152806101208401528061014084015280610160840152611a336110e8565b610180840152806101a0840152611a486110e8565b6101c0840152806101e0840152611a5d6110e8565b61020084015280610220840152611a72610e1f565b61024084015280610260840152806102808401526102a0830152565b6000915b60038310611a9f57505050565b600190825181526020809101920192019190611a92565b60408091805184526020810151602085015201511515910152565b906000905b60038210611ae357505050565b6020606082611af56001948751611ab6565b01930191019091611ad6565b9190916104e0610500820193611b1883825161109a565b611b2a6020820151602085019061109a565b611b3c6040820151604085019061109a565b611b4e6060820151606085019061109a565b611b606080820151608085019061109a565b611b7260a082015160a0850190611a8e565b60c081015190611b89610100928386019015159052565b60e081015191611ba0610120938487019015159052565b81015191611bb46101409384870190611ad1565b810151916102609283860152810151611bd4610280918287019015159052565b61016082015192611bec6102a0948588019015159052565b611c006101808401516102c0880190611ab6565b6101a0830151610320870152611c206101c0840151610340880190611ab6565b6101e08301516103a0870152611c406102008401516103c0880190611ab6565b610220830151610420870152611c60610240840151610440880190611a8e565b8201516104a08601528101516104c08501520151910152565b818110611c84575050565b60008155600101611c79565b90601f8211611c9d575050565b610d219160026000526020600020906020601f840160051c83019310611ccb575b601f0160051c0190611c79565b9091508190611cbe565b80519091906001600160401b038111611dab575b611cfd81611cf8600254610bc3565b611c90565b602080601f8311600114611d395750819293600092611d2e575b50508160011b916000199060031b1c191617600255565b015190503880611d17565b6002600052601f198316949091906000805160206140e9833981519152926000905b878210611d93575050836001959610611d7a575b505050811b01600255565b015160001960f88460031b161c19169055388080611d6f565b80600185968294968601518155019501930190611d5b565b611db3610bfd565b611ce9565b60405190611dc582610c72565b816000808252806020830152806040830152806060830152806080830152611deb610e1f565b60a08301528060c0830152611dfe611107565b60e083015280610100830152611e126110e8565b61012083015280610140830152806101608301526101808201526101a0611e37610e1f565b910152565b610d21909291926103206101a0610380830195611e5a84825161109a565b611e6c6020820151602086019061109a565b611e7e6040820151604086019061109a565b611e906060820151606086019061109a565b611ea26080820151608086019061109a565b611eb460a082015160a0860190611a8e565b611efa60c0820151611ecd610100918288019015159052565b60e083015190611ee36101209283890190611ad1565b830151610240870152820151610260860190611ab6565b6101408101516102c08501526101608101516102e08501526101808101516103008501520151910190611a8e565b611f30611990565b60e08201511561209a57612095610d2192612087926120566101209283810190602082515151940193845152611f67825160200190565b515184516020015281516040015151845160400152611f84611db8565b94611f98611f928351610f1f565b876111c2565b611fb1611fa86020840151610f1f565b602088016111c2565b611fca611fc16040840151610f1f565b604088016111c2565b611fe3611fda6060840151610f1f565b606088016111c2565b611ffc611ff36080840151610f1f565b608088016111c2565b60a082015160a087015261201f61201660c0840151151590565b151560c0880152565b825160e087015261014091820151610100870152825151908601528151515190850152805160200151516101608501525160400190565b5151610180830152516101a082015261206f6003600055565b61207843600155565b60405192839160208301611e3c565b03601f198101835282610cc4565b611cd5565b61209561208791612239610d21946101209261220e848301805151518351526120c4815160200190565b5151835160200152805160400151518351604001526121ba6120e46119c9565b966120f86120f28751610f1f565b896111c2565b6121116121086020880151610f1f565b60208a016111c2565b61212a6121216040880151610f1f565b60408a016111c2565b61214361213a6060880151610f1f565b60608a016111c2565b61215c6121536080880151610f1f565b60808a016111c2565b6121b460a0870196875160a08b015260c081019261218661217d8551151590565b151560c08d0152565b600060e08c015285516101008c015261014091820151908b015282511561226c576000905b8a019015159052565b51151590565b15612262576121cf60005b1515610160880152565b805151610180870152805151516101a08701528051602001516101c0870152805160200151516101e08701528051604001516102008701525160400190565b5151610220850152516102408401528051516102608401528051602001516102808401525160400190565b516102a082015261224a6005600055565b61225343600155565b60405192839160208301611b01565b6121cf60016121c5565b6001906121ab565b6040519061228182610c57565b6000604083828152612291611107565b60208201520152565b9080601f8301121561018b57604051916122b383610c57565b82906060810192831161018b57905b8282106122cf5750505090565b81518152602091820191016122c2565b906103808282031261018b576123ca906103206122fa610ddf565b9361230481610f2b565b855261231260208201610f2b565b602086015261232360408201610f2b565b604086015261233460608201610f2b565b606086015261234560808201610f2b565b60808601526123578360a0830161229a565b60a086015261010061236a818301610f49565b60c08701526101209061237f85838501610fad565b60e08801526102408301519087015261239c846102608401610f54565b908601526102c08101516101408601526102e08101516101608601526103008101516101808601520161229a565b6101a082015290565b506040513d6000823e3d90fd5b6123eb600254610bc3565b806123f35750565b601f811160011461240657506000600255565b600260005261244b90601f0160051c6000805160206140e9833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611c79565b6000602081208160025555565b600080916124be938260405191602083019263a9059cbb60e01b845260018060a01b038092166024820152600160448201526044815261249781610c8e565b5193165af16124ae6124a7612503565b8092612568565b5060208082518301019101612550565b1561018b57565b600091906124be93838093604051602081019363a9059cbb60e01b855260018060a01b03809316602483015260448201526044815261249781610c8e565b3d1561254b573d906001600160401b03821161253e575b60405191612532601f8201601f191660200184610cc4565b82523d6000602084013e565b612546610bfd565b61251a565b606090565b9081602091031261018b575161256581610f3f565b90565b156125705790565b80511561257f57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156125a05790565b8051156125af57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b91906125d2611107565b926000805b600381106125e6575050508252565b6125f081846110c1565b516125fb82886110c1565b5261260681876110c1565b506000198114612618576001016125d7565b634e487b7160e01b82526011600452602482fd5b9190612636611107565b926000805b6003811061264d575050506020830152565b61265781846110c1565b5161266282886110c1565b5261266d81876110c1565b5060001981146126185760010161263b565b9190612689611107565b926000805b600381106126a0575050506020830152565b6126aa81846110c1565b516126b582886110c1565b526126c081876110c1565b5060001981146126185760010161268e565b91906126dc611107565b926000805b600381106126f3575050506040830152565b6126fd81846110c1565b5161270882886110c1565b5261271381876110c1565b506000198114612618576001016126e1565b60243590600882101561018b57565b60443590610d2182610f3f565b60643590610d2182610f3f565b60843590610d2182610f3f565b6101643590610d2182610f3f565b6101843590610d2182610f3f565b6101a43590610d2182610f3f565b90606060a31983011261018b576040519161279f83610c3c565b828160c3121561018b57604051916127b683610c57565b8261010491821161018b5760a4905b8282106127d25750505052565b81358152602091820191016127c5565b9060606101031983011261018b57604051916127fd83610c3c565b8281610123121561018b576040519161281583610c57565b8261016491821161018b57610104905b8282106128325750505052565b8135815260209182019101612825565b61284a610dff565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152806101408401528061016084015261289e610ee1565b610180840152806101a08401526128b3611107565b6101c0840152806101e08401526128c8611107565b610200840152806102208401526128dd611107565b6102408401526128eb610e1f565b6102608401526128f9610ee1565b610280840152806102a084015261290e611107565b6102c0840152806102e0840152612923611107565b610300840152610320830152565b906105008282031261018b576104e0612948610dbf565b9261295281610f2b565b845261296060208201610f2b565b602085015261297160408201610f2b565b604085015261298260608201610f2b565b606085015261299360808201610f2b565b60808501526129a58360a0830161229a565b60a08501526101006129b8818301610f49565b60c08601526101206129cb818401610f49565b60e0870152610140916129e086848601610fad565b90870152610260908184015190870152610280916129ff838501610f49565b90870152612a856102a095612a15878601610f49565b610160890152612a29816102c08701610f54565b6101808901526103208501516101a0890152612a49816103408701610f54565b6101c08901526103a08501516101e0890152612a69816103c08701610f54565b610200890152610420850151610220890152610440850161229a565b6102408701526104a0830151908601526104c08201519085015201519082015290565b60081115612ab257565b634e487b7160e01b600052602160045260246000fd5b90610d219151611a8e565b9092916020906101e083019460018060a01b031683528051828401520151908151916008831015612ab2576101006101c091610d21946040850152612b216020820151606086019015159052565b6040810151151560808501526060810151151560a0850152612b4b608082015160c0860190612ac8565b612b5e60a0820151610120860190612ac8565b60c0810151151561018085015260e081015115156101a085015201511515910152565b516008811015612ab25790565b6001600160d01b031990911681526001600160a01b03909116602082015260400190565b612bba612842565b600090612bca60058354146113d1565b612bd2610ce7565b612be6602091828082518301019101612931565b90612bfe612bf961020860045460ff1690565b6113f1565b806040957fbc261dc0b9d5223a35f41d8286b61aadce0823f37befb9919e54d2f33d75be49875180612c31843383612ad3565b0390a1612c4981518015908115613f8e575b50611411565b01612c548151612b81565b612c5d81612aa8565b612ecb5750612c78612c73610160840151151590565b6118d0565b6101a0820194612c8c6001875110156118f0565b61012094612caa868501516102608601908151018752513414611910565b82840197612cc9612cc4612cbe8b51610f1f565b33613f9a565b611930565b828501612ce1612cdc612cbe8351610f1f565b611950565b846060870192612cfc612cf7612cbe8651610f1f565b611970565b8189019a858c5260808901958080808d612d196102a18c51610f1f565b905190828215612ec2575bf115612eb5575b60001990510198868101998a52338d51612d4490610f1f565b90612d4e91612458565b606001612d63816562726f6e7a6560d01b9052565b516001600160d01b0319168651809133612d7d9183612b8e565b0360008051602061410983398151915291a18551600181527f275a7214291e59a0deb3f59b735f667a678f60b18191aa295d2a9b37ca09270790602090a16001910152612dc8611139565b998651612dd490610f1f565b612dde908c6111c2565b51612de890610f1f565b612df4908b87016111c2565b51612dfe90610f1f565b612e0a908a85016111c2565b51612e1490610f1f565b612e219060608a016111c2565b51612e2b90610f1f565b612e3890608089016111c2565b60a0838101519088015260c08301511515151560c088015260e08301511515151560e0880152610100438189015283015193519261018001518183820151910151612e8290151590565b92612e8b610d92565b94855284015290151590820152612ea1916125c8565b9083015251610140820152610d2190611f28565b612ebd6123d3565b612d2b565b506108fc612d24565b6001612eda8297969751612b81565b612ee381612aa8565b0361313f5750612eff612efa610160840151151590565b611810565b610220820193612f13600186511015611830565b610120948584015190612f386102a08601928351019260808801938452513414611850565b83850198612f51612f4c612cbe8c51610f1f565b611870565b8380870191612f6b612f66612cbe8551610f1f565b611890565b6060880193612f85612f80612cbe8751610f1f565b6118b0565b60a08a019b808d5280808060808d0199612fa26102a18c51610f1f565b905190828215613136575bf115613129575b6000199051019860c08101998a52338551612fce90610f1f565b90612fd891612458565b60e001612feb816319dbdb1960e21b9052565b516001600160d01b03191682518091336130059183612b8e565b0360008051602061410983398151915291a18151600181527fbc754d5782696c22beefcb3d1af828c4baa77b640484add5a554898c81132f7190602090a16001910152613050611139565b99865161305c90610f1f565b613066908c6111c2565b5161307090610f1f565b61307c908b87016111c2565b5161308690610f1f565b613092908a85016111c2565b5161309c90610f1f565b6130a99060608a016111c2565b516130b390610f1f565b6130c090608089016111c2565b60a0838101519088015260c08301511515151560c088015260e08301511515151560e088015261010043818901528301519351926102000151818382015191015161310a90151590565b92613113610d92565b94855284015290151590820152612ea1916126d2565b6131316123d3565b612fb4565b506108fc612fad565b6002613152829895979694939851612b81565b61315b81612aa8565b036133bd5750612cbe956101609261317d61317885850151151590565b611751565b6101e08301613190600182511015611770565b610120958685015191610280860192835101916131b861010094858d01948552513414611790565b6131ce6131c98789019d8e51610f1f565b6117b0565b848701906131e76131e2612cbe8451610f1f565b6117d0565b60608801926132016131fc612cbe8651610f1f565b6117f0565b8a8d019b808d5280808060808d019861321d6102a18b51610f1f565b9051908282156133b4575bf1156133a7575b600019905101986101409c8d81019a8b5233845161324c90610f1f565b9061325691612458565b6539b4b63b32b960d11b9101819052865190819061327690339083612b8e565b0360008051602061410983398151915291a18551600181527f46a1f4edf1778c5ccc0fe3306c541c90f2b8ff249f41e77806711719ad54730290602090a16060016132c19060019052565b6132c9611139565b9b8c88516132d690610f1f565b6132df916111c2565b516132e990610f1f565b6132f5908d88016111c2565b516132ff90610f1f565b61330b908c86016111c2565b5161331590610f1f565b6133229060608c016111c2565b5161332c90610f1f565b6133399060808b016111c2565b60a084810151908a015260c0808501511515908a015260e0808501511515908a015243818a015283015193516101c090930151828101519082015115159261337f610d92565b948552840152901515908201526133959161267f565b908401525190820152610d2190611f28565b6133af6123d3565b61322f565b506108fc613228565b90949360036133cf8395949551612b81565b6133d881612aa8565b036136d15750516080015161018092838501918252608086019283516133fd90610f1f565b61340690610f1f565b3314613411906116b1565b61341b34156116d1565b6101a0948588015184515151018096880152610100958689015191890151848b82015191015161344a90151590565b90613453610d92565b9283528b830152151584820152613469916125c8565b976101c0870198895280880198895161348190610f1f565b8551515161348f9133613ff5565b613498906116f1565b51818101805151865151602001510190816101e08b01525185848201519101511515906134c3610d92565b928352848301521515858201526134d99161267f565b9161020088019283528389019283516134f190610f1f565b865151602001516135029133613ff5565b61350b90611711565b51848101805151875151604001510190816102208c0152518685820151910151151590613536610d92565b9283528583015215158682015261354c916126d2565b97610240810198895260608a0195865161356590610f1f565b905151604001516135769133613ff5565b61357f90611731565b8851515190610260019081515288516135989060200190565b5151815160200152885160400151518151604001525184516135bb81928261071e565b037fb8a96d26a4213e516748843376cec5f4df7afc98082efc0fec9d7c25d87c83d791a18351600181527fc55cc6a5be3d3b33b13e26c38bdadfa311470e070b9f351303917b1c232a4f2b90602090a160c0016136189060019052565b613620611139565b98885161362c90610f1f565b613636908b6111c2565b5161364090610f1f565b61364b918a016111c2565b5161365590610f1f565b6136609188016111c2565b5161366a90610f1f565b61367790606087016111c2565b5161368190610f1f565b61368e90608086016111c2565b60a0838101519085015260c08084015115159085015260e080840151151590850152439084015251610120808401919091520151610140820152610d2190611f28565b60046136dd8351612b81565b6136e681612aa8565b036138b957505160a0015192610280019283526080840191825161370990610f1f565b61371290610f1f565b331461371d90611611565b6137273415611631565b85850195865161373690610f1f565b6137409033613f9a565b61374990611651565b81860190815161375890610f1f565b6137629033613f9a565b61376b90611671565b6060870193845161377b90610f1f565b6137859033613f9a565b61378e90611691565b865151845161379e81928261071e565b037fb235896a047b6551255fee8fc368ece195980b9dd364fadc7f3213480ebf236b91a18351600181527f17c36b319c317f1314cc76db67184419703710d155b96287d5d944b0c708542590602090a160e0016137fb9060019052565b613803611139565b97875161380f90610f1f565b613819908a6111c2565b5161382390610f1f565b61382e9189016111c2565b5161383890610f1f565b6138439187016111c2565b5161384d90610f1f565b61385a90606086016111c2565b5161386490610f1f565b61387190608085016111c2565b515160a083015260c08101511515151560c083015260e08101511515151560e083015261010043818401528101519061012091828401520151610140820152610d2190611f28565b91939060056138cb8298959851612b81565b6138d481612aa8565b03613a8857505050608083019081516138ec90610f1f565b6138f590610f1f565b331461390090611571565b61390a3415611591565b80840194855161391990610f1f565b6139239033613f9a565b61392c906115b1565b808501805161393a90610f1f565b6139449033613f9a565b61394d906115d1565b6060860192835161395d90610f1f565b6139679033613f9a565b613970906115f1565b8251600181527f8af42bd28821e762acc84f5b0c59d0453b2f4b842220b030e985c6ddef04ecb590602090a18251600181527f6a2be38ed730cab7dfdaa230bc7290731487e3ae644bd92b4e2ba27cabbec9bf90602090a16001610100968701526139d9611139565b9787516139e590610f1f565b6139ef908a6111c2565b516139f990610f1f565b613a049189016111c2565b51613a0e90610f1f565b613a199187016111c2565b51613a2390610f1f565b613a3090606086016111c2565b51613a3a90610f1f565b613a4790608085016111c2565b60a0828101519084015260c08201511515151560c0840152600160e084015243818401528101519061012091828401520151610140820152610d2190611f28565b6006613a98829897959851612b81565b613aa181612aa8565b03613c3f5750505060808101938451613ab990610f1f565b613ac290610f1f565b3314613acd906114d1565b613ad734156114f1565b808201948551613ae690610f1f565b613af09033613f9a565b613af990611511565b848301948551613b0890610f1f565b613b129033613f9a565b613b1b90611531565b60608401908151613b2b90610f1f565b613b359033613f9a565b613b3e90611551565b61014096878601948551613b5190151590565b835190151581527faffd766790646b24404003e84fc90e4f7861bd557f79d97ba33547ecc564239590602090a18551151561012098890152613b91611139565b998751613b9d90610f1f565b613ba7908c6111c2565b51613bb190610f1f565b613bbc918b016111c2565b51613bc690610f1f565b613bd19189016111c2565b51613bdb90610f1f565b613be890606088016111c2565b51613bf290610f1f565b613bff90608087016111c2565b60a08281015190860152511515151560c085015260e08101511515151560e0850152610100438186015281015182850152015190820152610d2190611f28565b613c526007919792949596939751612b81565b613c5b81612aa8565b14613c69575b505050505050565b608084018051613c7890610f1f565b613c8190610f1f565b3314613c8c90611431565b613c963415611451565b818501968751613ca590610f1f565b613caf9033613f9a565b613cb890611471565b6101e08601918487018051613ccc90610f1f565b613cd69033613f9a565b613cdf90611491565b61022088019060608901918251613cf590610f1f565b613cff9033613f9a565b613d08906114b1565b846102a08a015261010094858b0151906101808c01518a8a820151910151613d2f90151590565b90613d38610d92565b9283528a83015215158a820152613d4e916125c8565b906102c08a019182528c51613d6290610f1f565b918551613d6e90610f1f565b6101a08d01516001600160a01b0394613d89928616906124c5565b518a8982018051518a5190036102e081930152518b8b820151910151151590613db0610d92565b9283528b83015215158b820152613dc69161267f565b966103008b019788528351613dda90610f1f565b90838751613de790610f1f565b91519116613df4926124c5565b86516040015151815190039961032001998a528351613e1290610f1f565b918551613e1e90610f1f565b91519116613e2b926124c5565b6102408901518751613e3e81928261071e565b037fb1b8f1be6db5b05302e62b23bcf87ff659e3737b9e45384be6ee3b228350636291a18651600181527f4fc77c0b3fd73c4c7222328ebb849f8629d1431b0af25af1f803f7d6a59b10f590602090a160016101409a8b0152613e9f611139565b9a8951613eab90610f1f565b613eb5908d6111c2565b51613ebf90610f1f565b613ecb908c88016111c2565b51613ed590610f1f565b613ee1908b88016111c2565b51613eeb90610f1f565b613ef89060608b016111c2565b51613f0290610f1f565b613f0f9060808a016111c2565b60a0868101519089015260c08601511515151560c089015260e08601511515151560e0890152439088015251925191808401518183820151910151151592613f55610d92565b94855284015290151590820152613f6b916126d2565b906101209182850152015190820152613f8390611f28565b388080808080613c61565b90506001541438612c43565b6000612565928192826040519160208301926323b872dd60e01b845260018060a01b03809216602482015230604482015282606482015260648152613fde81610ca9565b5193165af16124ae613fee612503565b8092612598565b6000916125659383809360405160208101936323b872dd60e01b855260018060a01b038093166024830152306044830152606482015260648152613fde81610ca9565b6040519061012082016001600160401b0381118382101761409d575b6040528161010060009182815282602082015282604082015282606082015261407b610ee1565b6080820152614088610ee1565b60a08201528260c08201528260e08201520152565b6140a5610bfd565b614054565b604051906140b782610c14565b81600081526020611e37614038565b604051906140d382610c14565b816140dc610ee1565b81526020611e3761403856fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace43559fdbda3802be12785165433940170227c305b1c57d809d0c2950cdff3037a164736f6c6343000811000a`,
	BytecodeLen: 19256,
	version: 9,
	views: {},
};
export const _stateSourceMap = {
	1: {
		at: "./src/contracts/coin_shop.rsh:110:17:after expr stmt semicolon",
		fs: [],
		msg: null,
		who: "Module",
	},
	3: {
		at: "./src/contracts/coin_shop.rsh:303:17:after expr stmt semicolon",
		fs: [],
		msg: null,
		who: "Module",
	},
	4: {
		at: "reach standard library:199:11:after expr stmt semicolon",
		fs: [
			'at ./src/contracts/coin_shop.rsh:304:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
		],
		msg: null,
		who: "Module",
	},
	5: {
		at: "./src/contracts/coin_shop.rsh:118:68:after expr stmt semicolon",
		fs: [],
		msg: null,
		who: "Module",
	},
};
export const _Connectors = {
	ALGO: _ALGO,
	ETH: _ETH,
};
export const _Participants = {
	Admin: Admin,
	Deployer: Deployer,
	buyer_api_bronze: buyer_api_bronze,
	buyer_api_gold: buyer_api_gold,
	buyer_api_silver: buyer_api_silver,
	controller_api_restock: controller_api_restock,
	controller_api_set_prices: controller_api_set_prices,
	controller_api_terminate: controller_api_terminate,
	controller_api_toggle_pause: controller_api_toggle_pause,
	controller_api_withdraw: controller_api_withdraw,
};
export const _APIs = {
	buyer_api: {
		bronze: buyer_api_bronze,
		gold: buyer_api_gold,
		silver: buyer_api_silver,
	},
	controller_api: {
		restock: controller_api_restock,
		set_prices: controller_api_set_prices,
		terminate: controller_api_terminate,
		toggle_pause: controller_api_toggle_pause,
		withdraw: controller_api_withdraw,
	},
};
