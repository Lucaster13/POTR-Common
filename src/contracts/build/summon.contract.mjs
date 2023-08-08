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
	const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "7"));
	const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "20"));
	return {
		result: [ctc0],
		status: [ctc1],
	};
}
export function _getViews(s, viewlib) {
	const stdlib = s.reachStdlib;
	const ctc0 = stdlib.T_UInt;
	const ctc1 = stdlib.T_Bool;
	const ctc2 = stdlib.T_Tuple([ctc0, ctc0, ctc1]);
	const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "2"));
	const ctc4 = stdlib.T_Address;
	const ctc5 = stdlib.T_Token;

	return {
		infos: {},
		views: {
			1: [ctc3, ctc4, ctc4, ctc0],
			3: [ctc4, ctc4, ctc4, ctc5, ctc3, ctc0],
			5: [ctc4, ctc4, ctc4, ctc5, ctc3, ctc0, ctc0],
			7: [ctc4, ctc4, ctc4, ctc5, ctc5, ctc3, ctc0, ctc0],
			9: [ctc4, ctc4, ctc4, ctc5, ctc5, ctc3, ctc0, ctc2, ctc0, ctc0],
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
	const ctc1 = stdlib.T_Null;
	const ctc2 = stdlib.T_Address;
	const ctc3 = stdlib.T_UInt;
	const ctc4 = stdlib.T_Bool;
	const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
	const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "2"));

	const v719 = [
		stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
		stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
		false,
	];
	const v720 = [v719, v719];
	const v724 = stdlib.protect(ctc0, interact.coin, "for Admin's interact field coin");

	const txn1 = await ctc.recv({
		didSend: false,
		evt_cnt: 0,
		funcNum: 0,
		out_tys: [],
		timeoutAt: undefined /* mto */,
		waitIfNotPresent: false,
	});
	const {
		data: [],
		secs: v727,
		time: v726,
		didSend: v23,
		from: v725,
	} = txn1;
	const v728 = "PREPARING           ";
	null;
	const v729 = v725;
	const v736 = stdlib.add(
		v726,
		stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"),
	);
	const txn2 = await ctc.sendrecv({
		args: [v720, v725, v729, v736, v724],
		evt_cnt: 1,
		funcNum: 1,
		lct: v726,
		onlyIf: true,
		out_tys: [ctc0],
		pay: [stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:decimal", stdlib.UInt_max, "0"), []],
		sim_p: async (txn2) => {
			const sim_r = { txns: [], mapRefs: [], maps: [] };
			let sim_txn_ctr = stdlib.UInt_max;
			const getSimTokCtr = () => {
				sim_txn_ctr = sim_txn_ctr.sub(1);
				return sim_txn_ctr;
			};

			const {
				data: [v747],
				secs: v749,
				time: v748,
				didSend: v39,
				from: v746,
			} = txn2;

			const v750 = v720[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:dot", stdlib.UInt_max, "0")];
			const v751 = stdlib.Array_set(
				v750,
				"0",
				stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:dot", stdlib.UInt_max, "0"),
			);
			const v752 = stdlib.Array_set(
				v720,
				stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:dot", stdlib.UInt_max, "0"),
				v751,
			);
			sim_r.txns.push({
				amt: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
				kind: "init",
				tok: v747,
			});
			const v754 = "PAYING              ";
			null;
			const v758 = stdlib.add(
				v748,
				stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"),
			);
			sim_r.isHalt = false;

			return sim_r;
		},
		soloSend: true,
		timeoutAt: ["time", v736],
		tys: [ctc6, ctc2, ctc2, ctc3, ctc0],
		waitIfNotPresent: false,
	});
	if (txn2.didTimeout) {
		const v1068 = "failed to publish coin";
		stdlib.protect(ctc1, await interact.log(v1068), {
			at: "./src/contracts/summon.rsh:87:35:application",
			fs: [
				"at ./src/contracts/summon.rsh:87:35:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:87:35:function exp)",
				'at ./src/contracts/summon.rsh:87:35:application call to "liftedInteract" (defined at: ./src/contracts/summon.rsh:87:35:application)',
			],
			msg: "log",
			who: "Admin",
		});

		const txn3 = await ctc.sendrecv({
			args: [v720, v725, v729, v736],
			evt_cnt: 0,
			funcNum: 2,
			lct: v726,
			onlyIf: true,
			out_tys: [],
			pay: [stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"), []],
			sim_p: async (txn3) => {
				const sim_r = { txns: [], mapRefs: [], maps: [] };
				let sim_txn_ctr = stdlib.UInt_max;
				const getSimTokCtr = () => {
					sim_txn_ctr = sim_txn_ctr.sub(1);
					return sim_txn_ctr;
				};

				const {
					data: [],
					secs: v1071,
					time: v1070,
					didSend: v643,
					from: v1069,
				} = txn3;

				sim_r.txns.push({
					kind: "halt",
					tok: undefined /* Nothing */,
				});
				sim_r.isHalt = true;

				return sim_r;
			},
			soloSend: false,
			timeoutAt: undefined /* mto */,
			tys: [ctc6, ctc2, ctc2, ctc3],
			waitIfNotPresent: false,
		});
		const {
			data: [],
			secs: v1071,
			time: v1070,
			didSend: v643,
			from: v1069,
		} = txn3;
		return;
	} else {
		const {
			data: [v747],
			secs: v749,
			time: v748,
			didSend: v39,
			from: v746,
		} = txn2;
		const v750 = v720[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:dot", stdlib.UInt_max, "0")];
		const v751 = stdlib.Array_set(
			v750,
			"0",
			stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:dot", stdlib.UInt_max, "0"),
		);
		const v752 = stdlib.Array_set(
			v720,
			stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:dot", stdlib.UInt_max, "0"),
			v751,
		);
		const v754 = "PAYING              ";
		null;
		const v758 = stdlib.add(
			v748,
			stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"),
		);
		const v767 = "published coin";
		stdlib.protect(ctc1, await interact.log(v767), {
			at: "./src/contracts/summon.rsh:93:27:application",
			fs: [
				"at ./src/contracts/summon.rsh:93:27:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:93:27:function exp)",
				'at ./src/contracts/summon.rsh:93:27:application call to "liftedInteract" (defined at: ./src/contracts/summon.rsh:93:27:application)',
			],
			msg: "log",
			who: "Admin",
		});

		const txn3 = await ctc.recv({
			didSend: false,
			evt_cnt: 0,
			funcNum: 3,
			out_tys: [],
			timeoutAt: ["time", v758],
			waitIfNotPresent: false,
		});
		if (txn3.didTimeout) {
			const v1045 = "failed to pay coin";
			stdlib.protect(ctc1, await interact.log(v1045), {
				at: "./src/contracts/summon.rsh:102:35:application",
				fs: [
					"at ./src/contracts/summon.rsh:102:35:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:102:35:function exp)",
					'at ./src/contracts/summon.rsh:102:35:application call to "liftedInteract" (defined at: ./src/contracts/summon.rsh:102:35:application)',
				],
				msg: "log",
				who: "Admin",
			});

			const txn4 = await ctc.sendrecv({
				args: [v725, v729, v746, v747, v752, v758],
				evt_cnt: 0,
				funcNum: 4,
				lct: v748,
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
						secs: v1048,
						time: v1047,
						didSend: v601,
						from: v1046,
					} = txn4;

					sim_r.txns.push({
						kind: "halt",
						tok: v747,
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
				tys: [ctc2, ctc2, ctc2, ctc0, ctc6, ctc3],
				waitIfNotPresent: false,
			});
			const {
				data: [],
				secs: v1048,
				time: v1047,
				didSend: v601,
				from: v1046,
			} = txn4;
			const v1049 = stdlib.addressEq(v746, v1046);
			const v1050 = stdlib.addressEq(v725, v1046);
			const v1051 = v1049 ? true : v1050;
			const v1052 = stdlib.addressEq(v729, v1046);
			const v1053 = v1051 ? true : v1052;
			stdlib.assert(v1053, {
				at: "reach standard library:197:11:dot",
				fs: [
					'at ./src/contracts/summon.rsh:104:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
				],
				msg: "sender correct",
				who: "Admin",
			});
			return;
		} else {
			const {
				data: [],
				secs: v770,
				time: v769,
				didSend: v54,
				from: v768,
			} = txn3;
			const v771 =
				v752[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0")];
			const v772 =
				v771[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0")];
			const v773 = stdlib.add(
				v772,
				stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:24:decimal", stdlib.UInt_max, "1"),
			);
			const v774 = stdlib.le(v773, stdlib.UInt_max);
			stdlib.assert(v774, {
				at: "./src/contracts/summon.rsh:101:18:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "Admin",
			});
			const v777 = stdlib.Array_set(v771, "0", v773);
			const v778 = stdlib.Array_set(
				v752,
				stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0"),
				v777,
			);
			const v779 = stdlib.addressEq(v729, v768);
			stdlib.assert(v779, {
				at: "./src/contracts/summon.rsh:101:18:dot",
				fs: [],
				msg: "sender correct",
				who: "Admin",
			});
			const v780 = "SUMMONING           ";
			null;
			const v784 = stdlib.add(
				v769,
				stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"),
			);
			const v792 =
				v778[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:125:54:application", stdlib.UInt_max, "0")];
			const v793 =
				v792[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:125:54:application", stdlib.UInt_max, "0")];
			const v796 = stdlib.protect(ctc0, await interact.get_potr(v747), {
				at: "./src/contracts/summon.rsh:117:58:application",
				fs: [
					"at ./src/contracts/summon.rsh:115:19:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:115:23:function exp)",
				],
				msg: "get_potr",
				who: "Admin",
			});
			const v802 = stdlib.tokenEq(v796, v747);
			const v803 = v802 ? false : true;
			stdlib.assert(v803, {
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
					'at ./src/contracts/summon.rsh:119:34:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
					"at ./src/contracts/summon.rsh:115:19:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:115:23:function exp)",
				],
				msg: "The asa ids provided are the same",
				who: "Admin",
			});
			const v807 = stdlib.tokenEq(v747, v796);
			const v808 = v807 ? false : true;
			stdlib.assert(v808, {
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
					'at ./src/contracts/summon.rsh:119:34:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
					"at ./src/contracts/summon.rsh:115:19:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:115:23:function exp)",
				],
				msg: "The asa ids provided are the same",
				who: "Admin",
			});
			const v811 = "published potr";
			stdlib.protect(ctc1, await interact.log(v811), {
				at: "./src/contracts/summon.rsh:120:29:application",
				fs: [
					"at ./src/contracts/summon.rsh:115:19:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:115:23:function exp)",
				],
				msg: "log",
				who: "Admin",
			});

			const txn4 = await ctc.sendrecv({
				args: [v725, v729, v746, v747, v778, v784, v793, v796],
				evt_cnt: 1,
				funcNum: 5,
				lct: v769,
				onlyIf: true,
				out_tys: [ctc0],
				pay: [
					stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:decimal", stdlib.UInt_max, "0"),
					[],
				],
				sim_p: async (txn4) => {
					const sim_r = { txns: [], mapRefs: [], maps: [] };
					let sim_txn_ctr = stdlib.UInt_max;
					const getSimTokCtr = () => {
						sim_txn_ctr = sim_txn_ctr.sub(1);
						return sim_txn_ctr;
					};

					const {
						data: [v813],
						secs: v815,
						time: v814,
						didSend: v302,
						from: v812,
					} = txn4;

					const v816 =
						v778[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:dot", stdlib.UInt_max, "1")];
					const v817 = stdlib.Array_set(
						v816,
						"0",
						stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:dot", stdlib.UInt_max, "0"),
					);
					const v818 = stdlib.Array_set(
						v778,
						stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:dot", stdlib.UInt_max, "1"),
						v817,
					);
					sim_r.txns.push({
						amt: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
						kind: "init",
						tok: v813,
					});
					const v826 = stdlib.add(
						v814,
						stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"),
					);
					const v834 =
						v818[
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:131:54:application",
								stdlib.UInt_max,
								"0",
							)
						];
					const v835 =
						v834[
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:131:54:application",
								stdlib.UInt_max,
								"0",
							)
						];
					sim_r.isHalt = false;

					return sim_r;
				},
				soloSend: true,
				timeoutAt: ["time", v784],
				tys: [ctc2, ctc2, ctc2, ctc0, ctc6, ctc3, ctc3, ctc0],
				waitIfNotPresent: false,
			});
			if (txn4.didTimeout) {
				const v1011 = "failed to publish potr";
				stdlib.protect(ctc1, await interact.log(v1011), {
					at: "./src/contracts/summon.rsh:123:35:application",
					fs: [
						"at ./src/contracts/summon.rsh:123:35:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:123:35:function exp)",
						'at ./src/contracts/summon.rsh:123:35:application call to "liftedInteract" (defined at: ./src/contracts/summon.rsh:123:35:application)',
					],
					msg: "log",
					who: "Admin",
				});

				const txn5 = await ctc.sendrecv({
					args: [v725, v729, v746, v747, v778, v784, v793],
					evt_cnt: 0,
					funcNum: 6,
					lct: v769,
					onlyIf: true,
					out_tys: [],
					pay: [
						stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"),
						[],
					],
					sim_p: async (txn5) => {
						const sim_r = { txns: [], mapRefs: [], maps: [] };
						let sim_txn_ctr = stdlib.UInt_max;
						const getSimTokCtr = () => {
							sim_txn_ctr = sim_txn_ctr.sub(1);
							return sim_txn_ctr;
						};

						const {
							data: [],
							secs: v1014,
							time: v1013,
							didSend: v548,
							from: v1012,
						} = txn5;

						sim_r.txns.push({
							kind: "from",
							to: v729,
							tok: v747,
						});
						sim_r.txns.push({
							kind: "halt",
							tok: v747,
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
					tys: [ctc2, ctc2, ctc2, ctc0, ctc6, ctc3, ctc3],
					waitIfNotPresent: false,
				});
				const {
					data: [],
					secs: v1014,
					time: v1013,
					didSend: v548,
					from: v1012,
				} = txn5;
				const v1015 = stdlib.addressEq(v746, v1012);
				const v1016 = stdlib.addressEq(v725, v1012);
				const v1017 = v1015 ? true : v1016;
				const v1018 = stdlib.addressEq(v729, v1012);
				const v1019 = v1017 ? true : v1018;
				stdlib.assert(v1019, {
					at: "reach standard library:197:11:dot",
					fs: [
						'at ./src/contracts/summon.rsh:125:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
					],
					msg: "sender correct",
					who: "Admin",
				});
				const v1032 = stdlib.sub(v793, v793);
				const v1033 = stdlib.ge(
					v1032,
					stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"),
				);
				stdlib.assert(v1033, {
					at: "reach standard library:198:46:application",
					fs: [
						'at ./src/contracts/summon.rsh:125:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
					],
					msg: "assume >= 0",
					who: "Admin",
				});
				return;
			} else {
				const {
					data: [v813],
					secs: v815,
					time: v814,
					didSend: v302,
					from: v812,
				} = txn4;
				const v816 =
					v778[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:dot", stdlib.UInt_max, "1")];
				const v817 = stdlib.Array_set(
					v816,
					"0",
					stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:dot", stdlib.UInt_max, "0"),
				);
				const v818 = stdlib.Array_set(
					v778,
					stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:dot", stdlib.UInt_max, "1"),
					v817,
				);
				const v820 = stdlib.tokenEq(v813, v747);
				const v821 = v820 ? false : true;
				stdlib.assert(v821, {
					at: "./src/contracts/summon.rsh:122:15:dot",
					fs: [],
					msg: "non-network tokens distinct",
					who: "Admin",
				});
				const v822 = stdlib.addressEq(v746, v812);
				stdlib.assert(v822, {
					at: "./src/contracts/summon.rsh:122:15:dot",
					fs: [],
					msg: "sender correct",
					who: "Admin",
				});
				const v826 = stdlib.add(
					v814,
					stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"),
				);
				const v834 =
					v818[
						stdlib.checkedBigNumberify(
							"./src/contracts/summon.rsh:131:54:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v835 =
					v834[
						stdlib.checkedBigNumberify(
							"./src/contracts/summon.rsh:131:54:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const txn5 = await ctc.sendrecv({
					args: [v725, v729, v746, v747, v813, v818, v826, v835],
					evt_cnt: 0,
					funcNum: 7,
					lct: v814,
					onlyIf: true,
					out_tys: [],
					pay: [
						stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:15:dot", stdlib.UInt_max, "0"),
						[
							[
								stdlib.checkedBigNumberify(
									"./src/contracts/summon.rsh:128:21:decimal",
									stdlib.UInt_max,
									"1",
								),
								v813,
							],
						],
					],
					sim_p: async (txn5) => {
						const sim_r = { txns: [], mapRefs: [], maps: [] };
						let sim_txn_ctr = stdlib.UInt_max;
						const getSimTokCtr = () => {
							sim_txn_ctr = sim_txn_ctr.sub(1);
							return sim_txn_ctr;
						};

						const {
							data: [],
							secs: v838,
							time: v837,
							didSend: v311,
							from: v836,
						} = txn5;

						const v839 =
							v818[
								stdlib.checkedBigNumberify(
									"./src/contracts/summon.rsh:128:15:dot",
									stdlib.UInt_max,
									"1",
								)
							];
						const v840 =
							v839[
								stdlib.checkedBigNumberify(
									"./src/contracts/summon.rsh:128:15:dot",
									stdlib.UInt_max,
									"0",
								)
							];
						const v841 = stdlib.add(
							v840,
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:128:21:decimal",
								stdlib.UInt_max,
								"1",
							),
						);
						const v845 = stdlib.Array_set(v839, "0", v841);
						const v846 = stdlib.Array_set(
							v818,
							stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:15:dot", stdlib.UInt_max, "1"),
							v845,
						);
						sim_r.txns.push({
							amt: stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:128:21:decimal",
								stdlib.UInt_max,
								"1",
							),
							kind: "to",
							tok: v813,
						});
						const v848 = "CLAIMING            ";
						null;
						const v852 = stdlib.add(
							v837,
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:25:24:decimal",
								stdlib.UInt_max,
								"20",
							),
						);
						const v860 =
							v846[
								stdlib.checkedBigNumberify(
									"./src/contracts/summon.rsh:152:41:application",
									stdlib.UInt_max,
									"1",
								)
							];
						const v861 =
							v860[
								stdlib.checkedBigNumberify(
									"./src/contracts/summon.rsh:152:41:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v862 =
							v846[
								stdlib.checkedBigNumberify(
									"./src/contracts/summon.rsh:153:41:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v863 =
							v862[
								stdlib.checkedBigNumberify(
									"./src/contracts/summon.rsh:153:41:application",
									stdlib.UInt_max,
									"0",
								)
							];
						sim_r.isHalt = false;

						return sim_r;
					},
					soloSend: true,
					timeoutAt: ["time", v826],
					tys: [ctc2, ctc2, ctc2, ctc0, ctc0, ctc6, ctc3, ctc3],
					waitIfNotPresent: false,
				});
				if (txn5.didTimeout) {
					const v974 = "failed to deposit potr";
					stdlib.protect(ctc1, await interact.log(v974), {
						at: "./src/contracts/summon.rsh:129:35:application",
						fs: [
							"at ./src/contracts/summon.rsh:129:35:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:129:35:function exp)",
							'at ./src/contracts/summon.rsh:129:35:application call to "liftedInteract" (defined at: ./src/contracts/summon.rsh:129:35:application)',
						],
						msg: "log",
						who: "Admin",
					});

					const txn6 = await ctc.sendrecv({
						args: [v725, v729, v746, v747, v813, v818, v826, v835],
						evt_cnt: 0,
						funcNum: 8,
						lct: v814,
						onlyIf: true,
						out_tys: [],
						pay: [
							stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"),
							[],
						],
						sim_p: async (txn6) => {
							const sim_r = { txns: [], mapRefs: [], maps: [] };
							let sim_txn_ctr = stdlib.UInt_max;
							const getSimTokCtr = () => {
								sim_txn_ctr = sim_txn_ctr.sub(1);
								return sim_txn_ctr;
							};

							const {
								data: [],
								secs: v977,
								time: v976,
								didSend: v492,
								from: v975,
							} = txn6;

							sim_r.txns.push({
								kind: "from",
								to: v729,
								tok: v747,
							});
							sim_r.txns.push({
								kind: "halt",
								tok: v813,
							});
							sim_r.txns.push({
								kind: "halt",
								tok: v747,
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
						tys: [ctc2, ctc2, ctc2, ctc0, ctc0, ctc6, ctc3, ctc3],
						waitIfNotPresent: false,
					});
					const {
						data: [],
						secs: v977,
						time: v976,
						didSend: v492,
						from: v975,
					} = txn6;
					const v978 = stdlib.addressEq(v746, v975);
					const v979 = stdlib.addressEq(v725, v975);
					const v980 = v978 ? true : v979;
					const v981 = stdlib.addressEq(v729, v975);
					const v982 = v980 ? true : v981;
					stdlib.assert(v982, {
						at: "reach standard library:197:11:dot",
						fs: [
							'at ./src/contracts/summon.rsh:131:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
						],
						msg: "sender correct",
						who: "Admin",
					});
					const v995 = stdlib.sub(v835, v835);
					const v996 = stdlib.ge(
						v995,
						stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"),
					);
					stdlib.assert(v996, {
						at: "reach standard library:198:46:application",
						fs: [
							'at ./src/contracts/summon.rsh:131:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
						],
						msg: "assume >= 0",
						who: "Admin",
					});
					return;
				} else {
					const {
						data: [],
						secs: v838,
						time: v837,
						didSend: v311,
						from: v836,
					} = txn5;
					const v839 =
						v818[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:15:dot", stdlib.UInt_max, "1")];
					const v840 =
						v839[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:15:dot", stdlib.UInt_max, "0")];
					const v841 = stdlib.add(
						v840,
						stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:21:decimal", stdlib.UInt_max, "1"),
					);
					const v842 = stdlib.le(v841, stdlib.UInt_max);
					stdlib.assert(v842, {
						at: "./src/contracts/summon.rsh:128:15:dot",
						fs: [],
						msg: "assume <= UInt.max",
						who: "Admin",
					});
					const v845 = stdlib.Array_set(v839, "0", v841);
					const v846 = stdlib.Array_set(
						v818,
						stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:15:dot", stdlib.UInt_max, "1"),
						v845,
					);
					const v847 = stdlib.addressEq(v746, v836);
					stdlib.assert(v847, {
						at: "./src/contracts/summon.rsh:128:15:dot",
						fs: [],
						msg: "sender correct",
						who: "Admin",
					});
					const v848 = "CLAIMING            ";
					null;
					const v852 = stdlib.add(
						v837,
						stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"),
					);
					const v860 =
						v846[
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:152:41:application",
								stdlib.UInt_max,
								"1",
							)
						];
					const v861 =
						v860[
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:152:41:application",
								stdlib.UInt_max,
								"0",
							)
						];
					const v862 =
						v846[
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:153:41:application",
								stdlib.UInt_max,
								"0",
							)
						];
					const v863 =
						v862[
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:153:41:application",
								stdlib.UInt_max,
								"0",
							)
						];
					const txn6 = await ctc.recv({
						didSend: false,
						evt_cnt: 0,
						funcNum: 9,
						out_tys: [],
						timeoutAt: ["time", v852],
						waitIfNotPresent: false,
					});
					if (txn6.didTimeout) {
						const v917 = "failed to opt in";
						stdlib.protect(ctc1, await interact.log(v917), {
							at: "./src/contracts/summon.rsh:148:43:application",
							fs: [
								"at ./src/contracts/summon.rsh:148:43:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:148:43:function exp)",
								'at ./src/contracts/summon.rsh:148:43:application call to "liftedInteract" (defined at: ./src/contracts/summon.rsh:148:43:application)',
							],
							msg: "log",
							who: "Admin",
						});

						const txn7 = await ctc.sendrecv({
							args: [v725, v729, v746, v747, v813, v846, v852, v860, v861, v863],
							evt_cnt: 0,
							funcNum: 10,
							lct: v837,
							onlyIf: true,
							out_tys: [],
							pay: [
								stdlib.checkedBigNumberify(
									"reach standard library:197:11:decimal",
									stdlib.UInt_max,
									"0",
								),
								[],
							],
							sim_p: async (txn7) => {
								const sim_r = { txns: [], mapRefs: [], maps: [] };
								let sim_txn_ctr = stdlib.UInt_max;
								const getSimTokCtr = () => {
									sim_txn_ctr = sim_txn_ctr.sub(1);
									return sim_txn_ctr;
								};

								const {
									data: [],
									secs: v920,
									time: v919,
									didSend: v418,
									from: v918,
								} = txn7;

								sim_r.txns.push({
									kind: "from",
									to: v746,
									tok: v813,
								});
								sim_r.txns.push({
									kind: "from",
									to: v746,
									tok: v747,
								});
								sim_r.txns.push({
									kind: "halt",
									tok: v813,
								});
								sim_r.txns.push({
									kind: "halt",
									tok: v747,
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
							tys: [ctc2, ctc2, ctc2, ctc0, ctc0, ctc6, ctc3, ctc5, ctc3, ctc3],
							waitIfNotPresent: false,
						});
						const {
							data: [],
							secs: v920,
							time: v919,
							didSend: v418,
							from: v918,
						} = txn7;
						const v921 = stdlib.addressEq(v746, v918);
						const v922 = stdlib.addressEq(v725, v918);
						const v923 = v921 ? true : v922;
						const v924 = stdlib.addressEq(v729, v918);
						const v925 = v923 ? true : v924;
						stdlib.assert(v925, {
							at: "reach standard library:197:11:dot",
							fs: [
								'at ./src/contracts/summon.rsh:151:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
							],
							msg: "sender correct",
							who: "Admin",
						});
						const v947 = stdlib.sub(v861, v861);
						const v948 = stdlib.ge(
							v947,
							stdlib.checkedBigNumberify(
								"reach standard library:198:46:application",
								stdlib.UInt_max,
								"0",
							),
						);
						stdlib.assert(v948, {
							at: "reach standard library:198:46:application",
							fs: [
								'at ./src/contracts/summon.rsh:151:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
							],
							msg: "assume >= 0",
							who: "Admin",
						});
						const v951 = stdlib.Array_set(v860, "0", v947);
						const v952 = stdlib.Array_set(
							v846,
							stdlib.checkedBigNumberify(
								"reach standard library:198:46:application",
								stdlib.UInt_max,
								"1",
							),
							v951,
						);
						const v953 =
							v952[
								stdlib.checkedBigNumberify(
									"reach standard library:198:46:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v954 =
							v953[
								stdlib.checkedBigNumberify(
									"reach standard library:198:46:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v958 = stdlib.sub(v954, v863);
						const v959 = stdlib.ge(
							v958,
							stdlib.checkedBigNumberify(
								"reach standard library:198:46:application",
								stdlib.UInt_max,
								"0",
							),
						);
						stdlib.assert(v959, {
							at: "reach standard library:198:46:application",
							fs: [
								'at ./src/contracts/summon.rsh:151:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
							],
							msg: "assume >= 0",
							who: "Admin",
						});
						return;
					} else {
						const {
							data: [],
							secs: v869,
							time: v868,
							didSend: v321,
							from: v867,
						} = txn6;
						const v870 = stdlib.addressEq(v729, v867);
						stdlib.assert(v870, {
							at: "./src/contracts/summon.rsh:145:18:dot",
							fs: [],
							msg: "sender correct",
							who: "Admin",
						});
						const v873 = stdlib.eq(
							v863,
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:157:33:decimal",
								stdlib.UInt_max,
								"1",
							),
						);
						stdlib.assert(v873, {
							at: "reach standard library:57:5:application",
							fs: [
								'at ./src/contracts/summon.rsh:157:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
							],
							msg: null,
							who: "Admin",
						});
						const v877 = stdlib.eq(
							v861,
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:158:33:decimal",
								stdlib.UInt_max,
								"1",
							),
						);
						stdlib.assert(v877, {
							at: "reach standard library:57:5:application",
							fs: [
								'at ./src/contracts/summon.rsh:158:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
							],
							msg: null,
							who: "Admin",
						});
						const v886 = stdlib.sub(v861, v861);
						const v887 = stdlib.ge(
							v886,
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:161:45:application",
								stdlib.UInt_max,
								"0",
							),
						);
						stdlib.assert(v887, {
							at: "./src/contracts/summon.rsh:161:45:application",
							fs: [],
							msg: "assume >= 0",
							who: "Admin",
						});
						const v890 = stdlib.Array_set(v860, "0", v886);
						const v891 = stdlib.Array_set(
							v846,
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:161:45:application",
								stdlib.UInt_max,
								"1",
							),
							v890,
						);
						const v892 =
							v891[
								stdlib.checkedBigNumberify(
									"./src/contracts/summon.rsh:162:27:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v893 =
							v892[
								stdlib.checkedBigNumberify(
									"./src/contracts/summon.rsh:162:27:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v899 = stdlib.sub(v893, v893);
						const v900 = stdlib.ge(
							v899,
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:162:45:application",
								stdlib.UInt_max,
								"0",
							),
						);
						stdlib.assert(v900, {
							at: "./src/contracts/summon.rsh:162:45:application",
							fs: [],
							msg: "assume >= 0",
							who: "Admin",
						});
						const v905 = "SUCCESS";
						null;
						const v915 = "success";
						stdlib.protect(ctc1, await interact.log(v915), {
							at: "./src/contracts/summon.rsh:167:27:application",
							fs: [
								"at ./src/contracts/summon.rsh:167:27:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:167:27:function exp)",
								'at ./src/contracts/summon.rsh:167:27:application call to "liftedInteract" (defined at: ./src/contracts/summon.rsh:167:27:application)',
							],
							msg: "log",
							who: "Admin",
						});

						return;
					}
				}
			}
		}
	}
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
	const ctc0 = stdlib.T_Null;
	const ctc1 = stdlib.T_Token;
	const ctc2 = stdlib.T_Address;
	const ctc3 = stdlib.T_UInt;
	const ctc4 = stdlib.T_Bool;
	const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
	const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "2"));

	const v719 = [
		stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
		stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
		false,
	];
	const v720 = [v719, v719];
	const txn1 = await ctc.sendrecv({
		args: [],
		evt_cnt: 0,
		funcNum: 0,
		lct: stdlib.checkedBigNumberify("./src/contracts/summon.rsh:69:18:dot", stdlib.UInt_max, "0"),
		onlyIf: true,
		out_tys: [],
		pay: [stdlib.checkedBigNumberify("./src/contracts/summon.rsh:69:18:decimal", stdlib.UInt_max, "0"), []],
		sim_p: async (txn1) => {
			const sim_r = { txns: [], mapRefs: [], maps: [] };
			let sim_txn_ctr = stdlib.UInt_max;
			const getSimTokCtr = () => {
				sim_txn_ctr = sim_txn_ctr.sub(1);
				return sim_txn_ctr;
			};

			const {
				data: [],
				secs: v727,
				time: v726,
				didSend: v23,
				from: v725,
			} = txn1;

			const v728 = "PREPARING           ";
			null;
			const v729 = v725;
			const v730 = await ctc.getContractInfo();
			const v731 = await ctc.getContractAddress();

			const v736 = stdlib.add(
				v726,
				stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"),
			);
			sim_r.isHalt = false;

			return sim_r;
		},
		soloSend: true,
		timeoutAt: undefined /* mto */,
		tys: [],
		waitIfNotPresent: false,
	});
	const {
		data: [],
		secs: v727,
		time: v726,
		didSend: v23,
		from: v725,
	} = txn1;
	const v728 = "PREPARING           ";
	null;
	const v729 = v725;
	const v730 = await ctc.getContractInfo();
	const v731 = await ctc.getContractAddress();
	stdlib.protect(ctc0, await interact.deployed(v730, v731), {
		at: "./src/contracts/summon.rsh:74:35:application",
		fs: [
			"at ./src/contracts/summon.rsh:74:35:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:74:35:function exp)",
			'at ./src/contracts/summon.rsh:74:35:application call to "liftedInteract" (defined at: ./src/contracts/summon.rsh:74:35:application)',
		],
		msg: "deployed",
		who: "Deployer",
	});

	const v736 = stdlib.add(
		v726,
		stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"),
	);
	const txn2 = await ctc.recv({
		didSend: false,
		evt_cnt: 1,
		funcNum: 1,
		out_tys: [ctc1],
		timeoutAt: ["time", v736],
		waitIfNotPresent: false,
	});
	if (txn2.didTimeout) {
		const txn3 = await ctc.sendrecv({
			args: [v720, v725, v729, v736],
			evt_cnt: 0,
			funcNum: 2,
			lct: v726,
			onlyIf: true,
			out_tys: [],
			pay: [stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"), []],
			sim_p: async (txn3) => {
				const sim_r = { txns: [], mapRefs: [], maps: [] };
				let sim_txn_ctr = stdlib.UInt_max;
				const getSimTokCtr = () => {
					sim_txn_ctr = sim_txn_ctr.sub(1);
					return sim_txn_ctr;
				};

				const {
					data: [],
					secs: v1071,
					time: v1070,
					didSend: v643,
					from: v1069,
				} = txn3;

				sim_r.txns.push({
					kind: "halt",
					tok: undefined /* Nothing */,
				});
				sim_r.isHalt = true;

				return sim_r;
			},
			soloSend: false,
			timeoutAt: undefined /* mto */,
			tys: [ctc6, ctc2, ctc2, ctc3],
			waitIfNotPresent: false,
		});
		const {
			data: [],
			secs: v1071,
			time: v1070,
			didSend: v643,
			from: v1069,
		} = txn3;
		return;
	} else {
		const {
			data: [v747],
			secs: v749,
			time: v748,
			didSend: v39,
			from: v746,
		} = txn2;
		const v750 = v720[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:dot", stdlib.UInt_max, "0")];
		const v751 = stdlib.Array_set(
			v750,
			"0",
			stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:dot", stdlib.UInt_max, "0"),
		);
		const v752 = stdlib.Array_set(
			v720,
			stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:dot", stdlib.UInt_max, "0"),
			v751,
		);
		const v754 = "PAYING              ";
		null;
		const v758 = stdlib.add(
			v748,
			stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"),
		);
		const txn3 = await ctc.recv({
			didSend: false,
			evt_cnt: 0,
			funcNum: 3,
			out_tys: [],
			timeoutAt: ["time", v758],
			waitIfNotPresent: false,
		});
		if (txn3.didTimeout) {
			const txn4 = await ctc.sendrecv({
				args: [v725, v729, v746, v747, v752, v758],
				evt_cnt: 0,
				funcNum: 4,
				lct: v748,
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
						secs: v1048,
						time: v1047,
						didSend: v601,
						from: v1046,
					} = txn4;

					sim_r.txns.push({
						kind: "halt",
						tok: v747,
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
				tys: [ctc2, ctc2, ctc2, ctc1, ctc6, ctc3],
				waitIfNotPresent: false,
			});
			const {
				data: [],
				secs: v1048,
				time: v1047,
				didSend: v601,
				from: v1046,
			} = txn4;
			const v1049 = stdlib.addressEq(v746, v1046);
			const v1050 = stdlib.addressEq(v725, v1046);
			const v1051 = v1049 ? true : v1050;
			const v1052 = stdlib.addressEq(v729, v1046);
			const v1053 = v1051 ? true : v1052;
			stdlib.assert(v1053, {
				at: "reach standard library:197:11:dot",
				fs: [
					'at ./src/contracts/summon.rsh:104:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
				],
				msg: "sender correct",
				who: "Deployer",
			});
			return;
		} else {
			const {
				data: [],
				secs: v770,
				time: v769,
				didSend: v54,
				from: v768,
			} = txn3;
			const v771 =
				v752[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0")];
			const v772 =
				v771[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0")];
			const v773 = stdlib.add(
				v772,
				stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:24:decimal", stdlib.UInt_max, "1"),
			);
			const v774 = stdlib.le(v773, stdlib.UInt_max);
			stdlib.assert(v774, {
				at: "./src/contracts/summon.rsh:101:18:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "Deployer",
			});
			const v777 = stdlib.Array_set(v771, "0", v773);
			const v778 = stdlib.Array_set(
				v752,
				stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0"),
				v777,
			);
			const v779 = stdlib.addressEq(v729, v768);
			stdlib.assert(v779, {
				at: "./src/contracts/summon.rsh:101:18:dot",
				fs: [],
				msg: "sender correct",
				who: "Deployer",
			});
			const v780 = "SUMMONING           ";
			null;
			const v784 = stdlib.add(
				v769,
				stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"),
			);
			const v792 =
				v778[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:125:54:application", stdlib.UInt_max, "0")];
			const v793 =
				v792[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:125:54:application", stdlib.UInt_max, "0")];
			const txn4 = await ctc.recv({
				didSend: false,
				evt_cnt: 1,
				funcNum: 5,
				out_tys: [ctc1],
				timeoutAt: ["time", v784],
				waitIfNotPresent: false,
			});
			if (txn4.didTimeout) {
				const txn5 = await ctc.sendrecv({
					args: [v725, v729, v746, v747, v778, v784, v793],
					evt_cnt: 0,
					funcNum: 6,
					lct: v769,
					onlyIf: true,
					out_tys: [],
					pay: [
						stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"),
						[],
					],
					sim_p: async (txn5) => {
						const sim_r = { txns: [], mapRefs: [], maps: [] };
						let sim_txn_ctr = stdlib.UInt_max;
						const getSimTokCtr = () => {
							sim_txn_ctr = sim_txn_ctr.sub(1);
							return sim_txn_ctr;
						};

						const {
							data: [],
							secs: v1014,
							time: v1013,
							didSend: v548,
							from: v1012,
						} = txn5;

						sim_r.txns.push({
							kind: "from",
							to: v729,
							tok: v747,
						});
						sim_r.txns.push({
							kind: "halt",
							tok: v747,
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
					tys: [ctc2, ctc2, ctc2, ctc1, ctc6, ctc3, ctc3],
					waitIfNotPresent: false,
				});
				const {
					data: [],
					secs: v1014,
					time: v1013,
					didSend: v548,
					from: v1012,
				} = txn5;
				const v1015 = stdlib.addressEq(v746, v1012);
				const v1016 = stdlib.addressEq(v725, v1012);
				const v1017 = v1015 ? true : v1016;
				const v1018 = stdlib.addressEq(v729, v1012);
				const v1019 = v1017 ? true : v1018;
				stdlib.assert(v1019, {
					at: "reach standard library:197:11:dot",
					fs: [
						'at ./src/contracts/summon.rsh:125:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
					],
					msg: "sender correct",
					who: "Deployer",
				});
				const v1032 = stdlib.sub(v793, v793);
				const v1033 = stdlib.ge(
					v1032,
					stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"),
				);
				stdlib.assert(v1033, {
					at: "reach standard library:198:46:application",
					fs: [
						'at ./src/contracts/summon.rsh:125:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
					],
					msg: "assume >= 0",
					who: "Deployer",
				});
				return;
			} else {
				const {
					data: [v813],
					secs: v815,
					time: v814,
					didSend: v302,
					from: v812,
				} = txn4;
				const v816 =
					v778[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:dot", stdlib.UInt_max, "1")];
				const v817 = stdlib.Array_set(
					v816,
					"0",
					stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:dot", stdlib.UInt_max, "0"),
				);
				const v818 = stdlib.Array_set(
					v778,
					stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:dot", stdlib.UInt_max, "1"),
					v817,
				);
				const v820 = stdlib.tokenEq(v813, v747);
				const v821 = v820 ? false : true;
				stdlib.assert(v821, {
					at: "./src/contracts/summon.rsh:122:15:dot",
					fs: [],
					msg: "non-network tokens distinct",
					who: "Deployer",
				});
				const v822 = stdlib.addressEq(v746, v812);
				stdlib.assert(v822, {
					at: "./src/contracts/summon.rsh:122:15:dot",
					fs: [],
					msg: "sender correct",
					who: "Deployer",
				});
				const v826 = stdlib.add(
					v814,
					stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"),
				);
				const v834 =
					v818[
						stdlib.checkedBigNumberify(
							"./src/contracts/summon.rsh:131:54:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v835 =
					v834[
						stdlib.checkedBigNumberify(
							"./src/contracts/summon.rsh:131:54:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const txn5 = await ctc.recv({
					didSend: false,
					evt_cnt: 0,
					funcNum: 7,
					out_tys: [],
					timeoutAt: ["time", v826],
					waitIfNotPresent: false,
				});
				if (txn5.didTimeout) {
					const txn6 = await ctc.sendrecv({
						args: [v725, v729, v746, v747, v813, v818, v826, v835],
						evt_cnt: 0,
						funcNum: 8,
						lct: v814,
						onlyIf: true,
						out_tys: [],
						pay: [
							stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"),
							[],
						],
						sim_p: async (txn6) => {
							const sim_r = { txns: [], mapRefs: [], maps: [] };
							let sim_txn_ctr = stdlib.UInt_max;
							const getSimTokCtr = () => {
								sim_txn_ctr = sim_txn_ctr.sub(1);
								return sim_txn_ctr;
							};

							const {
								data: [],
								secs: v977,
								time: v976,
								didSend: v492,
								from: v975,
							} = txn6;

							sim_r.txns.push({
								kind: "from",
								to: v729,
								tok: v747,
							});
							sim_r.txns.push({
								kind: "halt",
								tok: v813,
							});
							sim_r.txns.push({
								kind: "halt",
								tok: v747,
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
						tys: [ctc2, ctc2, ctc2, ctc1, ctc1, ctc6, ctc3, ctc3],
						waitIfNotPresent: false,
					});
					const {
						data: [],
						secs: v977,
						time: v976,
						didSend: v492,
						from: v975,
					} = txn6;
					const v978 = stdlib.addressEq(v746, v975);
					const v979 = stdlib.addressEq(v725, v975);
					const v980 = v978 ? true : v979;
					const v981 = stdlib.addressEq(v729, v975);
					const v982 = v980 ? true : v981;
					stdlib.assert(v982, {
						at: "reach standard library:197:11:dot",
						fs: [
							'at ./src/contracts/summon.rsh:131:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
						],
						msg: "sender correct",
						who: "Deployer",
					});
					const v995 = stdlib.sub(v835, v835);
					const v996 = stdlib.ge(
						v995,
						stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"),
					);
					stdlib.assert(v996, {
						at: "reach standard library:198:46:application",
						fs: [
							'at ./src/contracts/summon.rsh:131:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
						],
						msg: "assume >= 0",
						who: "Deployer",
					});
					return;
				} else {
					const {
						data: [],
						secs: v838,
						time: v837,
						didSend: v311,
						from: v836,
					} = txn5;
					const v839 =
						v818[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:15:dot", stdlib.UInt_max, "1")];
					const v840 =
						v839[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:15:dot", stdlib.UInt_max, "0")];
					const v841 = stdlib.add(
						v840,
						stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:21:decimal", stdlib.UInt_max, "1"),
					);
					const v842 = stdlib.le(v841, stdlib.UInt_max);
					stdlib.assert(v842, {
						at: "./src/contracts/summon.rsh:128:15:dot",
						fs: [],
						msg: "assume <= UInt.max",
						who: "Deployer",
					});
					const v845 = stdlib.Array_set(v839, "0", v841);
					const v846 = stdlib.Array_set(
						v818,
						stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:15:dot", stdlib.UInt_max, "1"),
						v845,
					);
					const v847 = stdlib.addressEq(v746, v836);
					stdlib.assert(v847, {
						at: "./src/contracts/summon.rsh:128:15:dot",
						fs: [],
						msg: "sender correct",
						who: "Deployer",
					});
					const v848 = "CLAIMING            ";
					null;
					const v852 = stdlib.add(
						v837,
						stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"),
					);
					const v860 =
						v846[
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:152:41:application",
								stdlib.UInt_max,
								"1",
							)
						];
					const v861 =
						v860[
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:152:41:application",
								stdlib.UInt_max,
								"0",
							)
						];
					const v862 =
						v846[
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:153:41:application",
								stdlib.UInt_max,
								"0",
							)
						];
					const v863 =
						v862[
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:153:41:application",
								stdlib.UInt_max,
								"0",
							)
						];
					const txn6 = await ctc.recv({
						didSend: false,
						evt_cnt: 0,
						funcNum: 9,
						out_tys: [],
						timeoutAt: ["time", v852],
						waitIfNotPresent: false,
					});
					if (txn6.didTimeout) {
						const txn7 = await ctc.sendrecv({
							args: [v725, v729, v746, v747, v813, v846, v852, v860, v861, v863],
							evt_cnt: 0,
							funcNum: 10,
							lct: v837,
							onlyIf: true,
							out_tys: [],
							pay: [
								stdlib.checkedBigNumberify(
									"reach standard library:197:11:decimal",
									stdlib.UInt_max,
									"0",
								),
								[],
							],
							sim_p: async (txn7) => {
								const sim_r = { txns: [], mapRefs: [], maps: [] };
								let sim_txn_ctr = stdlib.UInt_max;
								const getSimTokCtr = () => {
									sim_txn_ctr = sim_txn_ctr.sub(1);
									return sim_txn_ctr;
								};

								const {
									data: [],
									secs: v920,
									time: v919,
									didSend: v418,
									from: v918,
								} = txn7;

								sim_r.txns.push({
									kind: "from",
									to: v746,
									tok: v813,
								});
								sim_r.txns.push({
									kind: "from",
									to: v746,
									tok: v747,
								});
								sim_r.txns.push({
									kind: "halt",
									tok: v813,
								});
								sim_r.txns.push({
									kind: "halt",
									tok: v747,
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
							tys: [ctc2, ctc2, ctc2, ctc1, ctc1, ctc6, ctc3, ctc5, ctc3, ctc3],
							waitIfNotPresent: false,
						});
						const {
							data: [],
							secs: v920,
							time: v919,
							didSend: v418,
							from: v918,
						} = txn7;
						const v921 = stdlib.addressEq(v746, v918);
						const v922 = stdlib.addressEq(v725, v918);
						const v923 = v921 ? true : v922;
						const v924 = stdlib.addressEq(v729, v918);
						const v925 = v923 ? true : v924;
						stdlib.assert(v925, {
							at: "reach standard library:197:11:dot",
							fs: [
								'at ./src/contracts/summon.rsh:151:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
							],
							msg: "sender correct",
							who: "Deployer",
						});
						const v947 = stdlib.sub(v861, v861);
						const v948 = stdlib.ge(
							v947,
							stdlib.checkedBigNumberify(
								"reach standard library:198:46:application",
								stdlib.UInt_max,
								"0",
							),
						);
						stdlib.assert(v948, {
							at: "reach standard library:198:46:application",
							fs: [
								'at ./src/contracts/summon.rsh:151:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
							],
							msg: "assume >= 0",
							who: "Deployer",
						});
						const v951 = stdlib.Array_set(v860, "0", v947);
						const v952 = stdlib.Array_set(
							v846,
							stdlib.checkedBigNumberify(
								"reach standard library:198:46:application",
								stdlib.UInt_max,
								"1",
							),
							v951,
						);
						const v953 =
							v952[
								stdlib.checkedBigNumberify(
									"reach standard library:198:46:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v954 =
							v953[
								stdlib.checkedBigNumberify(
									"reach standard library:198:46:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v958 = stdlib.sub(v954, v863);
						const v959 = stdlib.ge(
							v958,
							stdlib.checkedBigNumberify(
								"reach standard library:198:46:application",
								stdlib.UInt_max,
								"0",
							),
						);
						stdlib.assert(v959, {
							at: "reach standard library:198:46:application",
							fs: [
								'at ./src/contracts/summon.rsh:151:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
							],
							msg: "assume >= 0",
							who: "Deployer",
						});
						return;
					} else {
						const {
							data: [],
							secs: v869,
							time: v868,
							didSend: v321,
							from: v867,
						} = txn6;
						const v870 = stdlib.addressEq(v729, v867);
						stdlib.assert(v870, {
							at: "./src/contracts/summon.rsh:145:18:dot",
							fs: [],
							msg: "sender correct",
							who: "Deployer",
						});
						const v873 = stdlib.eq(
							v863,
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:157:33:decimal",
								stdlib.UInt_max,
								"1",
							),
						);
						stdlib.assert(v873, {
							at: "reach standard library:57:5:application",
							fs: [
								'at ./src/contracts/summon.rsh:157:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
							],
							msg: null,
							who: "Deployer",
						});
						const v877 = stdlib.eq(
							v861,
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:158:33:decimal",
								stdlib.UInt_max,
								"1",
							),
						);
						stdlib.assert(v877, {
							at: "reach standard library:57:5:application",
							fs: [
								'at ./src/contracts/summon.rsh:158:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
							],
							msg: null,
							who: "Deployer",
						});
						const v886 = stdlib.sub(v861, v861);
						const v887 = stdlib.ge(
							v886,
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:161:45:application",
								stdlib.UInt_max,
								"0",
							),
						);
						stdlib.assert(v887, {
							at: "./src/contracts/summon.rsh:161:45:application",
							fs: [],
							msg: "assume >= 0",
							who: "Deployer",
						});
						const v890 = stdlib.Array_set(v860, "0", v886);
						const v891 = stdlib.Array_set(
							v846,
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:161:45:application",
								stdlib.UInt_max,
								"1",
							),
							v890,
						);
						const v892 =
							v891[
								stdlib.checkedBigNumberify(
									"./src/contracts/summon.rsh:162:27:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v893 =
							v892[
								stdlib.checkedBigNumberify(
									"./src/contracts/summon.rsh:162:27:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v899 = stdlib.sub(v893, v893);
						const v900 = stdlib.ge(
							v899,
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:162:45:application",
								stdlib.UInt_max,
								"0",
							),
						);
						stdlib.assert(v900, {
							at: "./src/contracts/summon.rsh:162:45:application",
							fs: [],
							msg: "assume >= 0",
							who: "Deployer",
						});
						const v905 = "SUCCESS";
						null;
						return;
					}
				}
			}
		}
	}
}
export async function Summoner(ctcTop, interact) {
	if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
		return Promise.reject(
			new Error(`The backend for Summoner expects to receive a contract as its first argument.`),
		);
	}
	if (typeof interact !== "object") {
		return Promise.reject(
			new Error(`The backend for Summoner expects to receive an interact object as its second argument.`),
		);
	}
	const ctc = ctcTop._initialize();
	const stdlib = ctc.stdlib;
	const ctc0 = stdlib.T_Token;
	const ctc1 = stdlib.T_Bool;
	const ctc2 = stdlib.T_Address;
	const ctc3 = stdlib.T_UInt;
	const ctc4 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
	const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "2"));

	const v719 = [
		stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
		stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
		false,
	];
	const v720 = [v719, v719];
	const txn1 = await ctc.recv({
		didSend: false,
		evt_cnt: 0,
		funcNum: 0,
		out_tys: [],
		timeoutAt: undefined /* mto */,
		waitIfNotPresent: false,
	});
	const {
		data: [],
		secs: v727,
		time: v726,
		didSend: v23,
		from: v725,
	} = txn1;
	const v728 = "PREPARING           ";
	null;
	const v729 = ctc.iam(v725);
	const v736 = stdlib.add(
		v726,
		stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"),
	);
	const txn2 = await ctc.recv({
		didSend: false,
		evt_cnt: 1,
		funcNum: 1,
		out_tys: [ctc0],
		timeoutAt: ["time", v736],
		waitIfNotPresent: false,
	});
	if (txn2.didTimeout) {
		const txn3 = await ctc.sendrecv({
			args: [v720, v725, v729, v736],
			evt_cnt: 0,
			funcNum: 2,
			lct: v726,
			onlyIf: true,
			out_tys: [],
			pay: [stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"), []],
			sim_p: async (txn3) => {
				const sim_r = { txns: [], mapRefs: [], maps: [] };
				let sim_txn_ctr = stdlib.UInt_max;
				const getSimTokCtr = () => {
					sim_txn_ctr = sim_txn_ctr.sub(1);
					return sim_txn_ctr;
				};

				const {
					data: [],
					secs: v1071,
					time: v1070,
					didSend: v643,
					from: v1069,
				} = txn3;

				sim_r.txns.push({
					kind: "halt",
					tok: undefined /* Nothing */,
				});
				sim_r.isHalt = true;

				return sim_r;
			},
			soloSend: false,
			timeoutAt: undefined /* mto */,
			tys: [ctc5, ctc2, ctc2, ctc3],
			waitIfNotPresent: false,
		});
		const {
			data: [],
			secs: v1071,
			time: v1070,
			didSend: v643,
			from: v1069,
		} = txn3;
		return;
	} else {
		const {
			data: [v747],
			secs: v749,
			time: v748,
			didSend: v39,
			from: v746,
		} = txn2;
		const v750 = v720[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:dot", stdlib.UInt_max, "0")];
		const v751 = stdlib.Array_set(
			v750,
			"0",
			stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:dot", stdlib.UInt_max, "0"),
		);
		const v752 = stdlib.Array_set(
			v720,
			stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:dot", stdlib.UInt_max, "0"),
			v751,
		);
		const v754 = "PAYING              ";
		null;
		const v758 = stdlib.add(
			v748,
			stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"),
		);
		const txn3 = await ctc.sendrecv({
			args: [v725, v729, v746, v747, v752, v758],
			evt_cnt: 0,
			funcNum: 3,
			lct: v748,
			onlyIf: true,
			out_tys: [],
			pay: [
				stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0"),
				[[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:24:decimal", stdlib.UInt_max, "1"), v747]],
			],
			sim_p: async (txn3) => {
				const sim_r = { txns: [], mapRefs: [], maps: [] };
				let sim_txn_ctr = stdlib.UInt_max;
				const getSimTokCtr = () => {
					sim_txn_ctr = sim_txn_ctr.sub(1);
					return sim_txn_ctr;
				};

				const {
					data: [],
					secs: v770,
					time: v769,
					didSend: v54,
					from: v768,
				} = txn3;

				const v771 =
					v752[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0")];
				const v772 =
					v771[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0")];
				const v773 = stdlib.add(
					v772,
					stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:24:decimal", stdlib.UInt_max, "1"),
				);
				const v777 = stdlib.Array_set(v771, "0", v773);
				const v778 = stdlib.Array_set(
					v752,
					stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0"),
					v777,
				);
				sim_r.txns.push({
					amt: stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:24:decimal", stdlib.UInt_max, "1"),
					kind: "to",
					tok: v747,
				});
				const v780 = "SUMMONING           ";
				null;
				const v784 = stdlib.add(
					v769,
					stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"),
				);
				const v792 =
					v778[
						stdlib.checkedBigNumberify(
							"./src/contracts/summon.rsh:125:54:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v793 =
					v792[
						stdlib.checkedBigNumberify(
							"./src/contracts/summon.rsh:125:54:application",
							stdlib.UInt_max,
							"0",
						)
					];
				sim_r.isHalt = false;

				return sim_r;
			},
			soloSend: true,
			timeoutAt: ["time", v758],
			tys: [ctc2, ctc2, ctc2, ctc0, ctc5, ctc3],
			waitIfNotPresent: false,
		});
		if (txn3.didTimeout) {
			const txn4 = await ctc.sendrecv({
				args: [v725, v729, v746, v747, v752, v758],
				evt_cnt: 0,
				funcNum: 4,
				lct: v748,
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
						secs: v1048,
						time: v1047,
						didSend: v601,
						from: v1046,
					} = txn4;

					sim_r.txns.push({
						kind: "halt",
						tok: v747,
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
				tys: [ctc2, ctc2, ctc2, ctc0, ctc5, ctc3],
				waitIfNotPresent: false,
			});
			const {
				data: [],
				secs: v1048,
				time: v1047,
				didSend: v601,
				from: v1046,
			} = txn4;
			const v1049 = stdlib.addressEq(v746, v1046);
			const v1050 = stdlib.addressEq(v725, v1046);
			const v1051 = v1049 ? true : v1050;
			const v1052 = stdlib.addressEq(v729, v1046);
			const v1053 = v1051 ? true : v1052;
			stdlib.assert(v1053, {
				at: "reach standard library:197:11:dot",
				fs: [
					'at ./src/contracts/summon.rsh:104:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
				],
				msg: "sender correct",
				who: "Summoner",
			});
			return;
		} else {
			const {
				data: [],
				secs: v770,
				time: v769,
				didSend: v54,
				from: v768,
			} = txn3;
			const v771 =
				v752[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0")];
			const v772 =
				v771[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0")];
			const v773 = stdlib.add(
				v772,
				stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:24:decimal", stdlib.UInt_max, "1"),
			);
			const v774 = stdlib.le(v773, stdlib.UInt_max);
			stdlib.assert(v774, {
				at: "./src/contracts/summon.rsh:101:18:dot",
				fs: [],
				msg: "assume <= UInt.max",
				who: "Summoner",
			});
			const v777 = stdlib.Array_set(v771, "0", v773);
			const v778 = stdlib.Array_set(
				v752,
				stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0"),
				v777,
			);
			const v779 = stdlib.addressEq(v729, v768);
			stdlib.assert(v779, {
				at: "./src/contracts/summon.rsh:101:18:dot",
				fs: [],
				msg: "sender correct",
				who: "Summoner",
			});
			const v780 = "SUMMONING           ";
			null;
			const v784 = stdlib.add(
				v769,
				stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"),
			);
			const v792 =
				v778[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:125:54:application", stdlib.UInt_max, "0")];
			const v793 =
				v792[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:125:54:application", stdlib.UInt_max, "0")];
			const txn4 = await ctc.recv({
				didSend: false,
				evt_cnt: 1,
				funcNum: 5,
				out_tys: [ctc0],
				timeoutAt: ["time", v784],
				waitIfNotPresent: false,
			});
			if (txn4.didTimeout) {
				const txn5 = await ctc.sendrecv({
					args: [v725, v729, v746, v747, v778, v784, v793],
					evt_cnt: 0,
					funcNum: 6,
					lct: v769,
					onlyIf: true,
					out_tys: [],
					pay: [
						stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"),
						[],
					],
					sim_p: async (txn5) => {
						const sim_r = { txns: [], mapRefs: [], maps: [] };
						let sim_txn_ctr = stdlib.UInt_max;
						const getSimTokCtr = () => {
							sim_txn_ctr = sim_txn_ctr.sub(1);
							return sim_txn_ctr;
						};

						const {
							data: [],
							secs: v1014,
							time: v1013,
							didSend: v548,
							from: v1012,
						} = txn5;

						sim_r.txns.push({
							kind: "from",
							to: v729,
							tok: v747,
						});
						sim_r.txns.push({
							kind: "halt",
							tok: v747,
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
					tys: [ctc2, ctc2, ctc2, ctc0, ctc5, ctc3, ctc3],
					waitIfNotPresent: false,
				});
				const {
					data: [],
					secs: v1014,
					time: v1013,
					didSend: v548,
					from: v1012,
				} = txn5;
				const v1015 = stdlib.addressEq(v746, v1012);
				const v1016 = stdlib.addressEq(v725, v1012);
				const v1017 = v1015 ? true : v1016;
				const v1018 = stdlib.addressEq(v729, v1012);
				const v1019 = v1017 ? true : v1018;
				stdlib.assert(v1019, {
					at: "reach standard library:197:11:dot",
					fs: [
						'at ./src/contracts/summon.rsh:125:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
					],
					msg: "sender correct",
					who: "Summoner",
				});
				const v1032 = stdlib.sub(v793, v793);
				const v1033 = stdlib.ge(
					v1032,
					stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"),
				);
				stdlib.assert(v1033, {
					at: "reach standard library:198:46:application",
					fs: [
						'at ./src/contracts/summon.rsh:125:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
					],
					msg: "assume >= 0",
					who: "Summoner",
				});
				return;
			} else {
				const {
					data: [v813],
					secs: v815,
					time: v814,
					didSend: v302,
					from: v812,
				} = txn4;
				const v816 =
					v778[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:dot", stdlib.UInt_max, "1")];
				const v817 = stdlib.Array_set(
					v816,
					"0",
					stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:dot", stdlib.UInt_max, "0"),
				);
				const v818 = stdlib.Array_set(
					v778,
					stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:dot", stdlib.UInt_max, "1"),
					v817,
				);
				const v820 = stdlib.tokenEq(v813, v747);
				const v821 = v820 ? false : true;
				stdlib.assert(v821, {
					at: "./src/contracts/summon.rsh:122:15:dot",
					fs: [],
					msg: "non-network tokens distinct",
					who: "Summoner",
				});
				const v822 = stdlib.addressEq(v746, v812);
				stdlib.assert(v822, {
					at: "./src/contracts/summon.rsh:122:15:dot",
					fs: [],
					msg: "sender correct",
					who: "Summoner",
				});
				const v826 = stdlib.add(
					v814,
					stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"),
				);
				const v834 =
					v818[
						stdlib.checkedBigNumberify(
							"./src/contracts/summon.rsh:131:54:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const v835 =
					v834[
						stdlib.checkedBigNumberify(
							"./src/contracts/summon.rsh:131:54:application",
							stdlib.UInt_max,
							"0",
						)
					];
				const txn5 = await ctc.recv({
					didSend: false,
					evt_cnt: 0,
					funcNum: 7,
					out_tys: [],
					timeoutAt: ["time", v826],
					waitIfNotPresent: false,
				});
				if (txn5.didTimeout) {
					const txn6 = await ctc.sendrecv({
						args: [v725, v729, v746, v747, v813, v818, v826, v835],
						evt_cnt: 0,
						funcNum: 8,
						lct: v814,
						onlyIf: true,
						out_tys: [],
						pay: [
							stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"),
							[],
						],
						sim_p: async (txn6) => {
							const sim_r = { txns: [], mapRefs: [], maps: [] };
							let sim_txn_ctr = stdlib.UInt_max;
							const getSimTokCtr = () => {
								sim_txn_ctr = sim_txn_ctr.sub(1);
								return sim_txn_ctr;
							};

							const {
								data: [],
								secs: v977,
								time: v976,
								didSend: v492,
								from: v975,
							} = txn6;

							sim_r.txns.push({
								kind: "from",
								to: v729,
								tok: v747,
							});
							sim_r.txns.push({
								kind: "halt",
								tok: v813,
							});
							sim_r.txns.push({
								kind: "halt",
								tok: v747,
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
						tys: [ctc2, ctc2, ctc2, ctc0, ctc0, ctc5, ctc3, ctc3],
						waitIfNotPresent: false,
					});
					const {
						data: [],
						secs: v977,
						time: v976,
						didSend: v492,
						from: v975,
					} = txn6;
					const v978 = stdlib.addressEq(v746, v975);
					const v979 = stdlib.addressEq(v725, v975);
					const v980 = v978 ? true : v979;
					const v981 = stdlib.addressEq(v729, v975);
					const v982 = v980 ? true : v981;
					stdlib.assert(v982, {
						at: "reach standard library:197:11:dot",
						fs: [
							'at ./src/contracts/summon.rsh:131:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
						],
						msg: "sender correct",
						who: "Summoner",
					});
					const v995 = stdlib.sub(v835, v835);
					const v996 = stdlib.ge(
						v995,
						stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"),
					);
					stdlib.assert(v996, {
						at: "reach standard library:198:46:application",
						fs: [
							'at ./src/contracts/summon.rsh:131:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
						],
						msg: "assume >= 0",
						who: "Summoner",
					});
					return;
				} else {
					const {
						data: [],
						secs: v838,
						time: v837,
						didSend: v311,
						from: v836,
					} = txn5;
					const v839 =
						v818[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:15:dot", stdlib.UInt_max, "1")];
					const v840 =
						v839[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:15:dot", stdlib.UInt_max, "0")];
					const v841 = stdlib.add(
						v840,
						stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:21:decimal", stdlib.UInt_max, "1"),
					);
					const v842 = stdlib.le(v841, stdlib.UInt_max);
					stdlib.assert(v842, {
						at: "./src/contracts/summon.rsh:128:15:dot",
						fs: [],
						msg: "assume <= UInt.max",
						who: "Summoner",
					});
					const v845 = stdlib.Array_set(v839, "0", v841);
					const v846 = stdlib.Array_set(
						v818,
						stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:15:dot", stdlib.UInt_max, "1"),
						v845,
					);
					const v847 = stdlib.addressEq(v746, v836);
					stdlib.assert(v847, {
						at: "./src/contracts/summon.rsh:128:15:dot",
						fs: [],
						msg: "sender correct",
						who: "Summoner",
					});
					const v848 = "CLAIMING            ";
					null;
					const v852 = stdlib.add(
						v837,
						stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"),
					);
					const v860 =
						v846[
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:152:41:application",
								stdlib.UInt_max,
								"1",
							)
						];
					const v861 =
						v860[
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:152:41:application",
								stdlib.UInt_max,
								"0",
							)
						];
					const v862 =
						v846[
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:153:41:application",
								stdlib.UInt_max,
								"0",
							)
						];
					const v863 =
						v862[
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:153:41:application",
								stdlib.UInt_max,
								"0",
							)
						];
					const v866 = stdlib.protect(ctc1, await interact.opt_in(v813), {
						at: "./src/contracts/summon.rsh:143:59:application",
						fs: [
							"at ./src/contracts/summon.rsh:142:22:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:142:26:function exp)",
						],
						msg: "opt_in",
						who: "Summoner",
					});

					const txn6 = await ctc.sendrecv({
						args: [v725, v729, v746, v747, v813, v846, v852, v860, v861, v863],
						evt_cnt: 0,
						funcNum: 9,
						lct: v837,
						onlyIf: v866,
						out_tys: [],
						pay: [
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:145:18:decimal",
								stdlib.UInt_max,
								"0",
							),
							[],
						],
						sim_p: async (txn6) => {
							const sim_r = { txns: [], mapRefs: [], maps: [] };
							let sim_txn_ctr = stdlib.UInt_max;
							const getSimTokCtr = () => {
								sim_txn_ctr = sim_txn_ctr.sub(1);
								return sim_txn_ctr;
							};

							const {
								data: [],
								secs: v869,
								time: v868,
								didSend: v321,
								from: v867,
							} = txn6;

							const v886 = stdlib.sub(v861, v861);
							const v890 = stdlib.Array_set(v860, "0", v886);
							const v891 = stdlib.Array_set(
								v846,
								stdlib.checkedBigNumberify(
									"./src/contracts/summon.rsh:161:45:application",
									stdlib.UInt_max,
									"1",
								),
								v890,
							);
							sim_r.txns.push({
								kind: "from",
								to: v729,
								tok: v813,
							});
							const v892 =
								v891[
									stdlib.checkedBigNumberify(
										"./src/contracts/summon.rsh:162:27:application",
										stdlib.UInt_max,
										"0",
									)
								];
							const v893 =
								v892[
									stdlib.checkedBigNumberify(
										"./src/contracts/summon.rsh:162:27:application",
										stdlib.UInt_max,
										"0",
									)
								];
							sim_r.txns.push({
								kind: "from",
								to: v746,
								tok: v747,
							});
							const v905 = "SUCCESS";
							null;
							sim_r.txns.push({
								kind: "halt",
								tok: v813,
							});
							sim_r.txns.push({
								kind: "halt",
								tok: v747,
							});
							sim_r.txns.push({
								kind: "halt",
								tok: undefined /* Nothing */,
							});
							sim_r.isHalt = true;

							return sim_r;
						},
						soloSend: true,
						timeoutAt: ["time", v852],
						tys: [ctc2, ctc2, ctc2, ctc0, ctc0, ctc5, ctc3, ctc4, ctc3, ctc3],
						waitIfNotPresent: false,
					});
					if (txn6.didTimeout) {
						const txn7 = await ctc.sendrecv({
							args: [v725, v729, v746, v747, v813, v846, v852, v860, v861, v863],
							evt_cnt: 0,
							funcNum: 10,
							lct: v837,
							onlyIf: true,
							out_tys: [],
							pay: [
								stdlib.checkedBigNumberify(
									"reach standard library:197:11:decimal",
									stdlib.UInt_max,
									"0",
								),
								[],
							],
							sim_p: async (txn7) => {
								const sim_r = { txns: [], mapRefs: [], maps: [] };
								let sim_txn_ctr = stdlib.UInt_max;
								const getSimTokCtr = () => {
									sim_txn_ctr = sim_txn_ctr.sub(1);
									return sim_txn_ctr;
								};

								const {
									data: [],
									secs: v920,
									time: v919,
									didSend: v418,
									from: v918,
								} = txn7;

								sim_r.txns.push({
									kind: "from",
									to: v746,
									tok: v813,
								});
								sim_r.txns.push({
									kind: "from",
									to: v746,
									tok: v747,
								});
								sim_r.txns.push({
									kind: "halt",
									tok: v813,
								});
								sim_r.txns.push({
									kind: "halt",
									tok: v747,
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
							tys: [ctc2, ctc2, ctc2, ctc0, ctc0, ctc5, ctc3, ctc4, ctc3, ctc3],
							waitIfNotPresent: false,
						});
						const {
							data: [],
							secs: v920,
							time: v919,
							didSend: v418,
							from: v918,
						} = txn7;
						const v921 = stdlib.addressEq(v746, v918);
						const v922 = stdlib.addressEq(v725, v918);
						const v923 = v921 ? true : v922;
						const v924 = stdlib.addressEq(v729, v918);
						const v925 = v923 ? true : v924;
						stdlib.assert(v925, {
							at: "reach standard library:197:11:dot",
							fs: [
								'at ./src/contracts/summon.rsh:151:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
							],
							msg: "sender correct",
							who: "Summoner",
						});
						const v947 = stdlib.sub(v861, v861);
						const v948 = stdlib.ge(
							v947,
							stdlib.checkedBigNumberify(
								"reach standard library:198:46:application",
								stdlib.UInt_max,
								"0",
							),
						);
						stdlib.assert(v948, {
							at: "reach standard library:198:46:application",
							fs: [
								'at ./src/contracts/summon.rsh:151:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
							],
							msg: "assume >= 0",
							who: "Summoner",
						});
						const v951 = stdlib.Array_set(v860, "0", v947);
						const v952 = stdlib.Array_set(
							v846,
							stdlib.checkedBigNumberify(
								"reach standard library:198:46:application",
								stdlib.UInt_max,
								"1",
							),
							v951,
						);
						const v953 =
							v952[
								stdlib.checkedBigNumberify(
									"reach standard library:198:46:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v954 =
							v953[
								stdlib.checkedBigNumberify(
									"reach standard library:198:46:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v958 = stdlib.sub(v954, v863);
						const v959 = stdlib.ge(
							v958,
							stdlib.checkedBigNumberify(
								"reach standard library:198:46:application",
								stdlib.UInt_max,
								"0",
							),
						);
						stdlib.assert(v959, {
							at: "reach standard library:198:46:application",
							fs: [
								'at ./src/contracts/summon.rsh:151:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
							],
							msg: "assume >= 0",
							who: "Summoner",
						});
						return;
					} else {
						const {
							data: [],
							secs: v869,
							time: v868,
							didSend: v321,
							from: v867,
						} = txn6;
						const v870 = stdlib.addressEq(v729, v867);
						stdlib.assert(v870, {
							at: "./src/contracts/summon.rsh:145:18:dot",
							fs: [],
							msg: "sender correct",
							who: "Summoner",
						});
						const v873 = stdlib.eq(
							v863,
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:157:33:decimal",
								stdlib.UInt_max,
								"1",
							),
						);
						stdlib.assert(v873, {
							at: "reach standard library:57:5:application",
							fs: [
								'at ./src/contracts/summon.rsh:157:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
							],
							msg: null,
							who: "Summoner",
						});
						const v877 = stdlib.eq(
							v861,
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:158:33:decimal",
								stdlib.UInt_max,
								"1",
							),
						);
						stdlib.assert(v877, {
							at: "reach standard library:57:5:application",
							fs: [
								'at ./src/contracts/summon.rsh:158:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
							],
							msg: null,
							who: "Summoner",
						});
						const v886 = stdlib.sub(v861, v861);
						const v887 = stdlib.ge(
							v886,
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:161:45:application",
								stdlib.UInt_max,
								"0",
							),
						);
						stdlib.assert(v887, {
							at: "./src/contracts/summon.rsh:161:45:application",
							fs: [],
							msg: "assume >= 0",
							who: "Summoner",
						});
						const v890 = stdlib.Array_set(v860, "0", v886);
						const v891 = stdlib.Array_set(
							v846,
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:161:45:application",
								stdlib.UInt_max,
								"1",
							),
							v890,
						);
						const v892 =
							v891[
								stdlib.checkedBigNumberify(
									"./src/contracts/summon.rsh:162:27:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v893 =
							v892[
								stdlib.checkedBigNumberify(
									"./src/contracts/summon.rsh:162:27:application",
									stdlib.UInt_max,
									"0",
								)
							];
						const v899 = stdlib.sub(v893, v893);
						const v900 = stdlib.ge(
							v899,
							stdlib.checkedBigNumberify(
								"./src/contracts/summon.rsh:162:45:application",
								stdlib.UInt_max,
								"0",
							),
						);
						stdlib.assert(v900, {
							at: "./src/contracts/summon.rsh:162:45:application",
							fs: [],
							msg: "assume >= 0",
							who: "Summoner",
						});
						const v905 = "SUCCESS";
						null;
						return;
					}
				}
			}
		}
	}
}
const _ALGO = {
	ABI: {
		impure: [
			`_reachp_0((uint64))void`,
			`_reachp_1((uint64,uint64))void`,
			`_reachp_10((uint64))void`,
			`_reachp_2((uint64))void`,
			`_reachp_3((uint64))void`,
			`_reachp_4((uint64))void`,
			`_reachp_5((uint64,uint64))void`,
			`_reachp_6((uint64))void`,
			`_reachp_7((uint64))void`,
			`_reachp_8((uint64))void`,
			`_reachp_9((uint64))void`,
		],
		pure: [],
		sigs: [
			`_reachp_0((uint64))void`,
			`_reachp_1((uint64,uint64))void`,
			`_reachp_10((uint64))void`,
			`_reachp_2((uint64))void`,
			`_reachp_3((uint64))void`,
			`_reachp_4((uint64))void`,
			`_reachp_5((uint64,uint64))void`,
			`_reachp_6((uint64))void`,
			`_reachp_7((uint64))void`,
			`_reachp_8((uint64))void`,
			`_reachp_9((uint64))void`,
		],
	},
	GlobalNumByteSlice: 3,
	GlobalNumUint: 0,
	LocalNumByteSlice: 0,
	LocalNumUint: 0,
	appApproval: `CCAPAAEIFAMFYKCNBgkHkgH///////////8BBIoBaCYEBEDs55MAAQABATEYQQYYKWRJIls1ASRbNQIqZCtkUIILBAodJkkEcGvbsQR1DuQGBIxAgLoEmUBBBgTBlK2ZBMjQULEE4lfE+QTsbzkPBO+vzkME8TfIRDYaAI4LBWcFUQVcBYgFfQU2BUYFkwWpBZ4FcgAxADUWNAsXNQyABILEYf40DBZQsDQMiAYTgRGvSTUMSVA1C4AUUFJFUEFSSU5HAAAAAAAAAAAAAAA1DCg0DFCwNBY1FTIGJQg1DjQLNBZQNBVQNA4WUIFRr1AjMgY1AjUBKksBVwB/ZytMV388Zyk0ARY0AhZQZzEZIhJEiAZBNANAAAqABBUffHU0BFCwI0MxADUUIzQBEkSIBgw0DCJbNQ00DCRbNROABMe2CtU0DRZQNBMWULA0DYgFcDIGNA4MRDQLSVcAESSvXABcADUOIQeIBWsiNBMyCogFX4AUUEFZSU5HAAAAAAAAAAAAAAAAAAA1Cyg0C1CwMgYlCDUMNBY0FVA0FFA0ExZQNA5QNAwWUIEpr1AhBDIGQv8/IQg0ARJEiAVDNAsXNQyABKeLwgs0DBZQsDQMiATwMgY0EA9ENBQxABI0FjEAEhE0FTEAEhFENA5JCUk1CyIPRDQONBI0FIgE1TQRNA80CxZcAFwRVwARIls0DQkiD0Q0DTQTNBSIBLYiNBIyCjIJiASmIjQTMgoyCYgEnDEZIQUSRIgFHSIyCjIJiAWjQv7RIzQBEkSIBPI0DBc1C4AEl073FzQLFlCwNAuIBGEyBjQOD0RC/8YhBDQBEkSIBGk0Cxc1DYAE1Axs1jQNFlCwNA2IBDoyBjQMDEQ0DlcAEUk1DSJbIwhJNQwhCw5ENA40DTQMFlwAXAA1CyM0E4gFCTQVMQASRIAUU1VNTU9OSU5HAAAAAAAAAAAAAAA1DCg0DFCwMgYlCDUONAtXABEiWzUNNBY0FVA0FFA0ExZQNAtQNA4WUDQNFlCBIa9QIQUyBkL96yEENAESRIgDyzQLFzUNgAT5i694NA0WULA0DYgDnDIGNAwPRDQUMQASNBYxABIRNBUxABIRRCI0EzIKMgmIA4RC/uUhBTQBEkSIBD80DCJbNQ00DCRbNRKABLNR9480DRZQNBIWULA0DYgDTjIGNA4MRDQLSVcRESSvXABcETUNNBI0ExNEIQeIA0MiNBIyCogDNzQUMQASRDIGJQg1DjQNVwARIls1DDQWNBVQNBRQNBMWUDQSFlA0DVA0DhZQNAwWUIEZr1AhCTIGQv0dIQU0ARJEiAO0NAwXNQuABHDt73o0CxZQsDQLiALOMgY0Dg9ENBQxABI0FjEAEhE0FTEAEhFENA1JCSIPRDQNNBM0FYgCtiI0EzIKMgmIAqZC/gchCTQBEkSIAzA0Cxc1DIAEcaixozQMFlCwNAyIAnsyBjQODEQ0DVcREUk1DCJbIwhJNQshCw5ENA00DDQLFlwAXBE1ESM0EogDSjQUMQASRIAUQ0xBSU1JTkcAAAAAAAAAAAAAAAA1Cyg0C1CwMgYlCDUQNBFXERFJNQ8iWzUONBFXABEiWzUNNBY0FVA0FFA0ExZQNBIWUDQRUDQQFlA0D1A0DhZQNA0WUCEIMgZC/BkhCTQBEkSIAn80Cxc1DYAEL9rpHTQNFlCwNA2IAcoyBjQOD0Q0FDEAEjQWMQASETQVMQASEUQ0DEkJIg9ENAw0EzQViAGyIjQSMgoyCYgBoiI0EzIKMgmIAZhC/PkhCDQBEkSIAcA0Cxc1DIAEY1dRXDQMFlCwNAyIAW0yBjQQDEQ0FTEAEkQ0DSMSRDQOIxJENA5JCUk1CyIPRDQONBI0FYgBVDQRNA80CxZcAFwRVwARIltJNQxJCSIPRDQMNBM0FIgBM4AHU1VDQ0VTUzULgASfo6H3NAtQsCI0EjIKMgmIAQ4iNBMyCjIJiAEEQvxliADwIQeIAQM2GgE1C0L6u4gA4DYaATUMQvtAiADVNhoBNQtC+8OIAMo2GgE1DEL8SIgAvzYaATULQvxjiAC0NhoBNQtC/PaIAKk2GgE1DEL9LogAnjYaATUMQv2uiACTNhoBNQtC/faIAIg2GgE1C0L+nIgAfTYaATULQv7uIjE0EkQhBDE1EkQiMTYSRCIxNxJEiABdgbsBryIiQvqJMRkiEkRC+qgisgEhDLIQshSyEbISs4kisgEjshCyB7IIs4lIiUwJSTUGMgmIAUeJCUlB/+5JNQYxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJIzUDiUkiEkw0AhIRRImxshVC/6CxQv+cNAYINQaJSVcAIDUWSVcgIDUVSVdAIDUUSSEGWzUTSVdoIjUOIQ1bNQyJSVcAIDUWSVcgIDUVSVdAIDUUSSEGWzUTSSEOWzUSSVdwIjURSSEKWzUQSVeaETUPSYGrAVs1DoGzAVs1DYlJVwAiNQtJVyIgNRZJV0IgNRWBYls1Dok0BjQHSg9B/zBC/zhJVwAgNRZJVyAgNRVJV0AgNRRJIQZbNRNJIQ5bNRJJV3AiNQ1JIQpbNQ6BmgFbNQyJSVcAIDUWSVcgIDUVSVdAIDUUSSEGWzUTSVdoIjULSSENWzUOIQpbNQ2JMRY0ACMISTUACUcDOBQyChJEOBAhDBJEOBFPAhJEOBISRImxQv6dsbIJQv6X`,
	appApprovalMap: {
		0: `2`,
		1: `2`,
		10: `2`,
		100: `21`,
		1000: `544`,
		1001: `545`,
		1002: `545`,
		1003: `546`,
		1004: `547`,
		1005: `548`,
		1006: `550`,
		1007: `550`,
		1008: `551`,
		1009: `551`,
		101: `21`,
		1010: `551`,
		1011: `552`,
		1012: `552`,
		1013: `553`,
		1014: `553`,
		1015: `554`,
		1016: `555`,
		1017: `556`,
		1018: `556`,
		1019: `557`,
		102: `21`,
		1020: `557`,
		1021: `558`,
		1022: `559`,
		1023: `559`,
		1024: `560`,
		1025: `560`,
		1026: `561`,
		1027: `562`,
		1028: `563`,
		1029: `563`,
		103: `21`,
		1030: `564`,
		1031: `564`,
		1032: `565`,
		1033: `566`,
		1034: `567`,
		1035: `571`,
		1036: `571`,
		1037: `572`,
		1038: `573`,
		1039: `574`,
		104: `21`,
		1040: `575`,
		1041: `576`,
		1042: `580`,
		1043: `580`,
		1044: `582`,
		1045: `582`,
		1046: `584`,
		1047: `584`,
		1048: `585`,
		1049: `585`,
		105: `21`,
		1050: `585`,
		1051: `587`,
		1052: `588`,
		1053: `588`,
		1054: `589`,
		1055: `589`,
		1056: `590`,
		1057: `590`,
		1058: `591`,
		1059: `591`,
		106: `21`,
		1060: `591`,
		1061: `592`,
		1062: `592`,
		1063: `592`,
		1064: `594`,
		1065: `594`,
		1066: `595`,
		1067: `595`,
		1068: `596`,
		1069: `597`,
		107: `21`,
		1070: `598`,
		1071: `598`,
		1072: `598`,
		1073: `599`,
		1074: `599`,
		1075: `600`,
		1076: `601`,
		1077: `601`,
		1078: `602`,
		1079: `602`,
		108: `21`,
		1080: `602`,
		1081: `602`,
		1082: `602`,
		1083: `602`,
		1084: `603`,
		1085: `603`,
		1086: `604`,
		1087: `605`,
		1088: `606`,
		1089: `608`,
		109: `21`,
		1090: `608`,
		1091: `609`,
		1092: `609`,
		1093: `609`,
		1094: `610`,
		1095: `610`,
		1096: `611`,
		1097: `611`,
		1098: `612`,
		1099: `613`,
		11: `2`,
		110: `21`,
		1100: `614`,
		1101: `614`,
		1102: `615`,
		1103: `615`,
		1104: `615`,
		1105: `616`,
		1106: `617`,
		1107: `617`,
		1108: `618`,
		1109: `619`,
		111: `21`,
		1110: `620`,
		1111: `621`,
		1112: `622`,
		1113: `623`,
		1114: `623`,
		1115: `624`,
		1116: `624`,
		1117: `625`,
		1118: `626`,
		1119: `629`,
		112: `21`,
		1120: `629`,
		1121: `630`,
		1122: `630`,
		1123: `631`,
		1124: `631`,
		1125: `632`,
		1126: `633`,
		1127: `633`,
		1128: `634`,
		1129: `634`,
		113: `21`,
		1130: `635`,
		1131: `635`,
		1132: `636`,
		1133: `637`,
		1134: `637`,
		1135: `638`,
		1136: `638`,
		1137: `638`,
		1138: `641`,
		1139: `641`,
		114: `21`,
		1140: `642`,
		1141: `642`,
		1142: `643`,
		1143: `644`,
		1144: `647`,
		1145: `647`,
		1146: `647`,
		1147: `647`,
		1148: `647`,
		1149: `647`,
		115: `21`,
		1150: `647`,
		1151: `647`,
		1152: `647`,
		1153: `647`,
		1154: `647`,
		1155: `647`,
		1156: `647`,
		1157: `647`,
		1158: `647`,
		1159: `647`,
		116: `21`,
		1160: `647`,
		1161: `647`,
		1162: `647`,
		1163: `647`,
		1164: `647`,
		1165: `647`,
		1166: `648`,
		1167: `648`,
		1168: `649`,
		1169: `650`,
		117: `21`,
		1170: `650`,
		1171: `651`,
		1172: `652`,
		1173: `654`,
		1174: `654`,
		1175: `655`,
		1176: `656`,
		1177: `657`,
		1178: `657`,
		1179: `658`,
		118: `21`,
		1180: `658`,
		1181: `659`,
		1182: `659`,
		1183: `659`,
		1184: `660`,
		1185: `661`,
		1186: `661`,
		1187: `662`,
		1188: `663`,
		1189: `664`,
		119: `21`,
		1190: `664`,
		1191: `665`,
		1192: `665`,
		1193: `666`,
		1194: `666`,
		1195: `666`,
		1196: `667`,
		1197: `668`,
		1198: `669`,
		1199: `669`,
		12: `2`,
		120: `21`,
		1200: `671`,
		1201: `671`,
		1202: `672`,
		1203: `672`,
		1204: `673`,
		1205: `674`,
		1206: `674`,
		1207: `675`,
		1208: `676`,
		1209: `676`,
		121: `22`,
		1210: `677`,
		1211: `678`,
		1212: `679`,
		1213: `679`,
		1214: `680`,
		1215: `681`,
		1216: `682`,
		1217: `682`,
		1218: `683`,
		1219: `684`,
		122: `22`,
		1220: `684`,
		1221: `685`,
		1222: `686`,
		1223: `687`,
		1224: `687`,
		1225: `688`,
		1226: `689`,
		1227: `689`,
		1228: `690`,
		1229: `691`,
		123: `22`,
		1230: `692`,
		1231: `692`,
		1232: `693`,
		1233: `694`,
		1234: `695`,
		1235: `695`,
		1236: `696`,
		1237: `696`,
		1238: `697`,
		1239: `697`,
		124: `23`,
		1240: `697`,
		1241: `699`,
		1242: `699`,
		1243: `700`,
		1244: `700`,
		1245: `701`,
		1246: `702`,
		1247: `703`,
		1248: `703`,
		1249: `703`,
		125: `23`,
		1250: `704`,
		1251: `704`,
		1252: `705`,
		1253: `706`,
		1254: `706`,
		1255: `707`,
		1256: `707`,
		1257: `707`,
		1258: `707`,
		1259: `707`,
		126: `23`,
		1260: `707`,
		1261: `708`,
		1262: `708`,
		1263: `709`,
		1264: `710`,
		1265: `711`,
		1266: `713`,
		1267: `713`,
		1268: `714`,
		1269: `714`,
		127: `23`,
		1270: `714`,
		1271: `715`,
		1272: `715`,
		1273: `716`,
		1274: `716`,
		1275: `717`,
		1276: `718`,
		1277: `719`,
		1278: `719`,
		1279: `720`,
		128: `23`,
		1280: `720`,
		1281: `721`,
		1282: `722`,
		1283: `722`,
		1284: `723`,
		1285: `723`,
		1286: `724`,
		1287: `725`,
		1288: `726`,
		1289: `726`,
		129: `23`,
		1290: `727`,
		1291: `727`,
		1292: `728`,
		1293: `729`,
		1294: `730`,
		1295: `734`,
		1296: `734`,
		1297: `735`,
		1298: `736`,
		1299: `737`,
		13: `2`,
		130: `23`,
		1300: `738`,
		1301: `739`,
		1302: `743`,
		1303: `743`,
		1304: `745`,
		1305: `745`,
		1306: `747`,
		1307: `747`,
		1308: `748`,
		1309: `748`,
		131: `23`,
		1310: `748`,
		1311: `750`,
		1312: `752`,
		1313: `752`,
		1314: `753`,
		1315: `753`,
		1316: `754`,
		1317: `754`,
		1318: `755`,
		1319: `755`,
		132: `23`,
		1320: `755`,
		1321: `756`,
		1322: `757`,
		1323: `757`,
		1324: `758`,
		1325: `758`,
		1326: `759`,
		1327: `759`,
		1328: `760`,
		1329: `760`,
		133: `23`,
		1330: `760`,
		1331: `761`,
		1332: `761`,
		1333: `761`,
		1334: `763`,
		1335: `763`,
		1336: `764`,
		1337: `764`,
		1338: `765`,
		1339: `766`,
		134: `23`,
		1340: `767`,
		1341: `767`,
		1342: `767`,
		1343: `768`,
		1344: `768`,
		1345: `769`,
		1346: `770`,
		1347: `770`,
		1348: `771`,
		1349: `771`,
		135: `23`,
		1350: `771`,
		1351: `771`,
		1352: `771`,
		1353: `771`,
		1354: `772`,
		1355: `772`,
		1356: `773`,
		1357: `774`,
		1358: `775`,
		1359: `777`,
		136: `23`,
		1360: `777`,
		1361: `778`,
		1362: `778`,
		1363: `778`,
		1364: `779`,
		1365: `779`,
		1366: `780`,
		1367: `780`,
		1368: `781`,
		1369: `782`,
		137: `23`,
		1370: `783`,
		1371: `783`,
		1372: `784`,
		1373: `784`,
		1374: `785`,
		1375: `786`,
		1376: `789`,
		1377: `789`,
		1378: `790`,
		1379: `791`,
		138: `23`,
		1380: `792`,
		1381: `796`,
		1382: `796`,
		1383: `797`,
		1384: `798`,
		1385: `799`,
		1386: `803`,
		1387: `803`,
		1388: `804`,
		1389: `805`,
		139: `23`,
		1390: `806`,
		1391: `807`,
		1392: `807`,
		1393: `808`,
		1394: `809`,
		1395: `810`,
		1396: `813`,
		1397: `813`,
		1398: `815`,
		1399: `815`,
		14: `2`,
		140: `23`,
		1400: `817`,
		1401: `817`,
		1402: `818`,
		1403: `818`,
		1404: `818`,
		1405: `819`,
		1406: `819`,
		1407: `820`,
		1408: `820`,
		1409: `821`,
		141: `23`,
		1410: `821`,
		1411: `822`,
		1412: `823`,
		1413: `823`,
		1414: `824`,
		1415: `824`,
		1416: `825`,
		1417: `825`,
		1418: `825`,
		1419: `826`,
		142: `23`,
		1420: `827`,
		1421: `828`,
		1422: `829`,
		1423: `829`,
		1424: `830`,
		1425: `831`,
		1426: `832`,
		1427: `833`,
		1428: `834`,
		1429: `837`,
		143: `23`,
		1430: `837`,
		1431: `839`,
		1432: `839`,
		1433: `841`,
		1434: `841`,
		1435: `842`,
		1436: `842`,
		1437: `842`,
		1438: `843`,
		1439: `843`,
		144: `23`,
		1440: `843`,
		1441: `843`,
		1442: `843`,
		1443: `843`,
		1444: `843`,
		1445: `843`,
		1446: `843`,
		1447: `844`,
		1448: `844`,
		1449: `845`,
		145: `23`,
		1450: `845`,
		1451: `845`,
		1452: `845`,
		1453: `845`,
		1454: `845`,
		1455: `846`,
		1456: `846`,
		1457: `847`,
		1458: `848`,
		1459: `851`,
		146: `23`,
		1460: `852`,
		1461: `852`,
		1462: `853`,
		1463: `853`,
		1464: `854`,
		1465: `854`,
		1466: `855`,
		1467: `855`,
		1468: `855`,
		1469: `856`,
		147: `23`,
		1470: `857`,
		1471: `857`,
		1472: `858`,
		1473: `858`,
		1474: `859`,
		1475: `859`,
		1476: `860`,
		1477: `860`,
		1478: `860`,
		1479: `861`,
		148: `25`,
		1480: `861`,
		1481: `861`,
		1482: `863`,
		1483: `863`,
		1484: `863`,
		1485: `864`,
		1486: `864`,
		1487: `865`,
		1488: `865`,
		1489: `865`,
		149: `27`,
		1490: `866`,
		1491: `866`,
		1492: `866`,
		1493: `867`,
		1494: `867`,
		1495: `868`,
		1496: `868`,
		1497: `868`,
		1498: `870`,
		1499: `870`,
		15: `2`,
		150: `27`,
		1500: `870`,
		1501: `871`,
		1502: `871`,
		1503: `871`,
		1504: `872`,
		1505: `872`,
		1506: `873`,
		1507: `873`,
		1508: `873`,
		1509: `875`,
		151: `28`,
		1510: `875`,
		1511: `875`,
		1512: `876`,
		1513: `876`,
		1514: `876`,
		1515: `877`,
		1516: `877`,
		1517: `878`,
		1518: `878`,
		1519: `878`,
		152: `28`,
		1520: `880`,
		1521: `880`,
		1522: `880`,
		1523: `881`,
		1524: `881`,
		1525: `881`,
		1526: `882`,
		1527: `882`,
		1528: `883`,
		1529: `883`,
		153: `29`,
		1530: `883`,
		1531: `885`,
		1532: `885`,
		1533: `885`,
		1534: `886`,
		1535: `886`,
		1536: `886`,
		1537: `887`,
		1538: `887`,
		1539: `888`,
		154: `29`,
		1540: `888`,
		1541: `888`,
		1542: `890`,
		1543: `890`,
		1544: `890`,
		1545: `891`,
		1546: `891`,
		1547: `891`,
		1548: `892`,
		1549: `892`,
		155: `30`,
		1550: `893`,
		1551: `893`,
		1552: `893`,
		1553: `895`,
		1554: `895`,
		1555: `895`,
		1556: `896`,
		1557: `896`,
		1558: `896`,
		1559: `897`,
		156: `31`,
		1560: `897`,
		1561: `898`,
		1562: `898`,
		1563: `898`,
		1564: `900`,
		1565: `900`,
		1566: `900`,
		1567: `901`,
		1568: `901`,
		1569: `901`,
		157: `31`,
		1570: `902`,
		1571: `902`,
		1572: `903`,
		1573: `903`,
		1574: `903`,
		1575: `905`,
		1576: `905`,
		1577: `905`,
		1578: `906`,
		1579: `906`,
		158: `32`,
		1580: `906`,
		1581: `907`,
		1582: `907`,
		1583: `908`,
		1584: `908`,
		1585: `908`,
		1586: `910`,
		1587: `910`,
		1588: `910`,
		1589: `911`,
		159: `32`,
		1590: `911`,
		1591: `911`,
		1592: `912`,
		1593: `912`,
		1594: `913`,
		1595: `913`,
		1596: `913`,
		1597: `915`,
		1598: `915`,
		1599: `915`,
		16: `2`,
		160: `32`,
		1600: `916`,
		1601: `916`,
		1602: `916`,
		1603: `917`,
		1604: `917`,
		1605: `918`,
		1606: `918`,
		1607: `918`,
		1608: `920`,
		1609: `921`,
		161: `32`,
		1610: `921`,
		1611: `922`,
		1612: `923`,
		1613: `924`,
		1614: `924`,
		1615: `925`,
		1616: `925`,
		1617: `926`,
		1618: `927`,
		1619: `928`,
		162: `32`,
		1620: `929`,
		1621: `929`,
		1622: `930`,
		1623: `931`,
		1624: `932`,
		1625: `933`,
		1626: `933`,
		1627: `934`,
		1628: `935`,
		1629: `936`,
		163: `32`,
		1630: `936`,
		1631: `936`,
		1632: `937`,
		1633: `937`,
		1634: `937`,
		1635: `938`,
		1636: `939`,
		1637: `940`,
		1638: `941`,
		1639: `941`,
		164: `33`,
		1640: `941`,
		1641: `943`,
		1642: `943`,
		1643: `944`,
		1644: `945`,
		1645: `946`,
		1646: `948`,
		1647: `948`,
		1648: `948`,
		1649: `950`,
		165: `33`,
		1650: `951`,
		1651: `951`,
		1652: `952`,
		1653: `952`,
		1654: `953`,
		1655: `953`,
		1656: `954`,
		1657: `954`,
		1658: `955`,
		1659: `955`,
		166: `34`,
		1660: `956`,
		1661: `956`,
		1662: `957`,
		1663: `958`,
		1664: `960`,
		1665: `961`,
		1666: `961`,
		1667: `962`,
		1668: `963`,
		1669: `963`,
		167: `35`,
		1670: `964`,
		1671: `964`,
		1672: `965`,
		1673: `965`,
		1674: `966`,
		1675: `967`,
		1676: `969`,
		1677: `970`,
		1678: `972`,
		1679: `973`,
		168: `36`,
		1680: `974`,
		1681: `975`,
		1682: `975`,
		1683: `976`,
		1684: `976`,
		1685: `977`,
		1686: `977`,
		1687: `977`,
		1688: `978`,
		1689: `980`,
		169: `38`,
		1690: `981`,
		1691: `982`,
		1692: `982`,
		1693: `982`,
		1694: `983`,
		1695: `984`,
		1696: `984`,
		1697: `987`,
		1698: `987`,
		1699: `988`,
		17: `2`,
		170: `38`,
		1700: `988`,
		1701: `989`,
		1702: `990`,
		1703: `991`,
		1704: `992`,
		1705: `992`,
		1706: `993`,
		1707: `994`,
		1708: `994`,
		1709: `995`,
		171: `39`,
		1710: `995`,
		1711: `996`,
		1712: `996`,
		1713: `997`,
		1714: `998`,
		1715: `999`,
		1716: `999`,
		1717: `1000`,
		1718: `1001`,
		1719: `1002`,
		172: `39`,
		1720: `1003`,
		1721: `1003`,
		1722: `1004`,
		1723: `1005`,
		1724: `1006`,
		1725: `1008`,
		1726: `1009`,
		1727: `1009`,
		1728: `1010`,
		1729: `1012`,
		173: `39`,
		1730: `1013`,
		1731: `1014`,
		1732: `1015`,
		1733: `1016`,
		1734: `1016`,
		1735: `1017`,
		1736: `1018`,
		1737: `1019`,
		1738: `1020`,
		1739: `1022`,
		174: `40`,
		1740: `1023`,
		1741: `1023`,
		1742: `1024`,
		1743: `1024`,
		1744: `1024`,
		1745: `1026`,
		1746: `1027`,
		1747: `1027`,
		1748: `1027`,
		1749: `1029`,
		175: `40`,
		1750: `1029`,
		1751: `1030`,
		1752: `1031`,
		1753: `1031`,
		1754: `1032`,
		1755: `1034`,
		1756: `1035`,
		1757: `1035`,
		1758: `1035`,
		1759: `1036`,
		176: `41`,
		1760: `1036`,
		1761: `1037`,
		1762: `1038`,
		1763: `1038`,
		1764: `1038`,
		1765: `1039`,
		1766: `1039`,
		1767: `1040`,
		1768: `1041`,
		1769: `1041`,
		177: `42`,
		1770: `1041`,
		1771: `1042`,
		1772: `1042`,
		1773: `1043`,
		1774: `1044`,
		1775: `1044`,
		1776: `1045`,
		1777: `1046`,
		1778: `1046`,
		1779: `1047`,
		178: `43`,
		1780: `1048`,
		1781: `1048`,
		1782: `1048`,
		1783: `1049`,
		1784: `1049`,
		1785: `1050`,
		1786: `1050`,
		1787: `1051`,
		1788: `1052`,
		1789: `1052`,
		179: `43`,
		1790: `1053`,
		1791: `1055`,
		1792: `1056`,
		1793: `1056`,
		1794: `1056`,
		1795: `1057`,
		1796: `1057`,
		1797: `1058`,
		1798: `1059`,
		1799: `1059`,
		18: `2`,
		180: `44`,
		1800: `1059`,
		1801: `1060`,
		1802: `1060`,
		1803: `1061`,
		1804: `1062`,
		1805: `1062`,
		1806: `1062`,
		1807: `1063`,
		1808: `1063`,
		1809: `1064`,
		181: `45`,
		1810: `1065`,
		1811: `1065`,
		1812: `1066`,
		1813: `1067`,
		1814: `1067`,
		1815: `1068`,
		1816: `1069`,
		1817: `1069`,
		1818: `1070`,
		1819: `1071`,
		182: `46`,
		1820: `1071`,
		1821: `1072`,
		1822: `1073`,
		1823: `1073`,
		1824: `1073`,
		1825: `1074`,
		1826: `1074`,
		1827: `1075`,
		1828: `1076`,
		1829: `1076`,
		183: `46`,
		1830: `1077`,
		1831: `1078`,
		1832: `1078`,
		1833: `1079`,
		1834: `1080`,
		1835: `1080`,
		1836: `1080`,
		1837: `1081`,
		1838: `1081`,
		1839: `1082`,
		184: `47`,
		1840: `1083`,
		1841: `1083`,
		1842: `1083`,
		1843: `1084`,
		1844: `1085`,
		1845: `1085`,
		1846: `1086`,
		1847: `1086`,
		1848: `1086`,
		1849: `1087`,
		185: `47`,
		1850: `1088`,
		1851: `1088`,
		1852: `1089`,
		1853: `1091`,
		1854: `1092`,
		1855: `1092`,
		1856: `1092`,
		1857: `1093`,
		1858: `1093`,
		1859: `1094`,
		186: `47`,
		1860: `1095`,
		1861: `1095`,
		1862: `1095`,
		1863: `1096`,
		1864: `1096`,
		1865: `1097`,
		1866: `1098`,
		1867: `1098`,
		1868: `1098`,
		1869: `1099`,
		187: `47`,
		1870: `1099`,
		1871: `1100`,
		1872: `1100`,
		1873: `1101`,
		1874: `1102`,
		1875: `1102`,
		1876: `1103`,
		1877: `1105`,
		1878: `1105`,
		1879: `1106`,
		188: `47`,
		1880: `1106`,
		1881: `1107`,
		1882: `1108`,
		1883: `1109`,
		1884: `1109`,
		1885: `1109`,
		1886: `1110`,
		1887: `1110`,
		1888: `1110`,
		1889: `1112`,
		189: `47`,
		1890: `1113`,
		1891: `1113`,
		1892: `1113`,
		1893: `1114`,
		1894: `1114`,
		1895: `1115`,
		1896: `1116`,
		1897: `1116`,
		1898: `1116`,
		1899: `1117`,
		19: `2`,
		190: `47`,
		1900: `1117`,
		1901: `1118`,
		1902: `1119`,
		1903: `1119`,
		1904: `1119`,
		1905: `1120`,
		1906: `1120`,
		1907: `1121`,
		1908: `1122`,
		1909: `1122`,
		191: `47`,
		1910: `1123`,
		1911: `1124`,
		1912: `1124`,
		1913: `1125`,
		1914: `1126`,
		1915: `1126`,
		1916: `1127`,
		1917: `1128`,
		1918: `1128`,
		1919: `1129`,
		192: `47`,
		1920: `1130`,
		1921: `1130`,
		1922: `1130`,
		1923: `1131`,
		1924: `1131`,
		1925: `1132`,
		1926: `1133`,
		1927: `1133`,
		1928: `1134`,
		1929: `1135`,
		193: `47`,
		1930: `1135`,
		1931: `1136`,
		1932: `1136`,
		1933: `1136`,
		1934: `1137`,
		1935: `1138`,
		1936: `1138`,
		1937: `1139`,
		1938: `1141`,
		1939: `1142`,
		194: `47`,
		1940: `1142`,
		1941: `1142`,
		1942: `1143`,
		1943: `1143`,
		1944: `1144`,
		1945: `1145`,
		1946: `1145`,
		1947: `1145`,
		1948: `1146`,
		1949: `1146`,
		195: `47`,
		1950: `1147`,
		1951: `1148`,
		1952: `1148`,
		1953: `1148`,
		1954: `1149`,
		1955: `1149`,
		1956: `1150`,
		1957: `1151`,
		1958: `1151`,
		1959: `1152`,
		196: `47`,
		1960: `1153`,
		1961: `1153`,
		1962: `1154`,
		1963: `1155`,
		1964: `1155`,
		1965: `1155`,
		1966: `1156`,
		1967: `1156`,
		1968: `1157`,
		1969: `1158`,
		197: `47`,
		1970: `1158`,
		1971: `1159`,
		1972: `1160`,
		1973: `1160`,
		1974: `1161`,
		1975: `1161`,
		1976: `1162`,
		1977: `1163`,
		1978: `1163`,
		1979: `1164`,
		198: `47`,
		1980: `1167`,
		1981: `1167`,
		1982: `1168`,
		1983: `1168`,
		1984: `1169`,
		1985: `1170`,
		1986: `1171`,
		1987: `1172`,
		1988: `1172`,
		1989: `1173`,
		199: `47`,
		1990: `1174`,
		1991: `1174`,
		1992: `1175`,
		1993: `1175`,
		1994: `1176`,
		1995: `1176`,
		1996: `1177`,
		1997: `1178`,
		1998: `1179`,
		1999: `1179`,
		2: `2`,
		20: `2`,
		200: `47`,
		2000: `1180`,
		2001: `1180`,
		2002: `1181`,
		2003: `1182`,
		2004: `1183`,
		2005: `1183`,
		2006: `1184`,
		2007: `1184`,
		2008: `1185`,
		2009: `1186`,
		201: `47`,
		2010: `1187`,
		2011: `1187`,
		2012: `1188`,
		2013: `1189`,
		2014: `1190`,
		2015: `1192`,
		2016: `1193`,
		2017: `1193`,
		2018: `1193`,
		2019: `1195`,
		202: `47`,
		2020: `1196`,
		2021: `1196`,
		2022: `1197`,
		203: `47`,
		204: `47`,
		205: `47`,
		206: `48`,
		207: `48`,
		208: `49`,
		209: `50`,
		21: `2`,
		210: `50`,
		211: `51`,
		212: `52`,
		213: `54`,
		214: `54`,
		215: `55`,
		216: `55`,
		217: `56`,
		218: `56`,
		219: `57`,
		22: `2`,
		220: `58`,
		221: `59`,
		222: `59`,
		223: `61`,
		224: `61`,
		225: `62`,
		226: `62`,
		227: `63`,
		228: `64`,
		229: `64`,
		23: `2`,
		230: `65`,
		231: `66`,
		232: `66`,
		233: `67`,
		234: `68`,
		235: `69`,
		236: `69`,
		237: `70`,
		238: `71`,
		239: `72`,
		24: `2`,
		240: `73`,
		241: `73`,
		242: `75`,
		243: `75`,
		244: `76`,
		245: `76`,
		246: `77`,
		247: `78`,
		248: `78`,
		249: `79`,
		25: `2`,
		250: `79`,
		251: `79`,
		252: `80`,
		253: `81`,
		254: `82`,
		255: `83`,
		256: `83`,
		257: `83`,
		258: `84`,
		259: `85`,
		26: `2`,
		260: `86`,
		261: `86`,
		262: `87`,
		263: `88`,
		264: `88`,
		265: `89`,
		266: `90`,
		267: `91`,
		268: `92`,
		269: `92`,
		27: `2`,
		270: `93`,
		271: `94`,
		272: `95`,
		273: `97`,
		274: `97`,
		275: `97`,
		276: `99`,
		277: `99`,
		278: `100`,
		279: `100`,
		28: `2`,
		280: `100`,
		281: `102`,
		282: `102`,
		283: `102`,
		284: `102`,
		285: `102`,
		286: `102`,
		287: `103`,
		288: `103`,
		289: `104`,
		29: `2`,
		290: `105`,
		291: `107`,
		292: `108`,
		293: `110`,
		294: `110`,
		295: `111`,
		296: `111`,
		297: `112`,
		298: `113`,
		299: `113`,
		3: `2`,
		30: `2`,
		300: `114`,
		301: `115`,
		302: `116`,
		303: `116`,
		304: `116`,
		305: `117`,
		306: `117`,
		307: `118`,
		308: `119`,
		309: `120`,
		31: `2`,
		310: `120`,
		311: `121`,
		312: `121`,
		313: `122`,
		314: `123`,
		315: `124`,
		316: `124`,
		317: `125`,
		318: `125`,
		319: `125`,
		32: `2`,
		320: `125`,
		321: `125`,
		322: `125`,
		323: `126`,
		324: `126`,
		325: `127`,
		326: `128`,
		327: `129`,
		328: `129`,
		329: `130`,
		33: `2`,
		330: `131`,
		331: `132`,
		332: `134`,
		333: `134`,
		334: `135`,
		335: `135`,
		336: `135`,
		337: `136`,
		338: `136`,
		339: `137`,
		34: `2`,
		340: `137`,
		341: `138`,
		342: `139`,
		343: `140`,
		344: `140`,
		345: `141`,
		346: `142`,
		347: `142`,
		348: `142`,
		349: `143`,
		35: `2`,
		350: `144`,
		351: `145`,
		352: `145`,
		353: `146`,
		354: `146`,
		355: `147`,
		356: `147`,
		357: `148`,
		358: `148`,
		359: `149`,
		36: `2`,
		360: `149`,
		361: `149`,
		362: `150`,
		363: `152`,
		364: `152`,
		365: `153`,
		366: `153`,
		367: `154`,
		368: `154`,
		369: `154`,
		37: `2`,
		370: `155`,
		371: `155`,
		372: `155`,
		373: `155`,
		374: `155`,
		375: `155`,
		376: `155`,
		377: `155`,
		378: `155`,
		379: `155`,
		38: `2`,
		380: `155`,
		381: `155`,
		382: `155`,
		383: `155`,
		384: `155`,
		385: `155`,
		386: `155`,
		387: `155`,
		388: `155`,
		389: `155`,
		39: `2`,
		390: `155`,
		391: `155`,
		392: `156`,
		393: `156`,
		394: `157`,
		395: `158`,
		396: `158`,
		397: `159`,
		398: `160`,
		399: `162`,
		4: `2`,
		40: `2`,
		400: `162`,
		401: `163`,
		402: `164`,
		403: `165`,
		404: `165`,
		405: `167`,
		406: `167`,
		407: `168`,
		408: `168`,
		409: `169`,
		41: `2`,
		410: `170`,
		411: `170`,
		412: `171`,
		413: `172`,
		414: `172`,
		415: `173`,
		416: `174`,
		417: `175`,
		418: `175`,
		419: `176`,
		42: `2`,
		420: `177`,
		421: `177`,
		422: `178`,
		423: `179`,
		424: `180`,
		425: `180`,
		426: `181`,
		427: `182`,
		428: `183`,
		429: `183`,
		43: `4`,
		430: `184`,
		431: `184`,
		432: `185`,
		433: `185`,
		434: `185`,
		435: `187`,
		436: `187`,
		437: `188`,
		438: `188`,
		439: `189`,
		44: `4`,
		440: `190`,
		441: `191`,
		442: `191`,
		443: `191`,
		444: `192`,
		445: `192`,
		446: `193`,
		447: `194`,
		448: `194`,
		449: `195`,
		45: `5`,
		450: `195`,
		451: `195`,
		452: `195`,
		453: `195`,
		454: `195`,
		455: `196`,
		456: `196`,
		457: `197`,
		458: `198`,
		459: `199`,
		46: `5`,
		460: `201`,
		461: `201`,
		462: `202`,
		463: `202`,
		464: `202`,
		465: `203`,
		466: `203`,
		467: `204`,
		468: `204`,
		469: `205`,
		47: `5`,
		470: `206`,
		471: `207`,
		472: `207`,
		473: `208`,
		474: `208`,
		475: `209`,
		476: `210`,
		477: `210`,
		478: `211`,
		479: `211`,
		48: `6`,
		480: `212`,
		481: `213`,
		482: `214`,
		483: `214`,
		484: `215`,
		485: `215`,
		486: `216`,
		487: `217`,
		488: `218`,
		489: `222`,
		49: `7`,
		490: `222`,
		491: `223`,
		492: `224`,
		493: `225`,
		494: `226`,
		495: `226`,
		496: `227`,
		497: `228`,
		498: `229`,
		499: `233`,
		5: `2`,
		50: `8`,
		500: `233`,
		501: `235`,
		502: `235`,
		503: `237`,
		504: `237`,
		505: `238`,
		506: `238`,
		507: `238`,
		508: `239`,
		509: `239`,
		51: `9`,
		510: `240`,
		511: `240`,
		512: `241`,
		513: `241`,
		514: `242`,
		515: `243`,
		516: `243`,
		517: `244`,
		518: `244`,
		519: `245`,
		52: `10`,
		520: `245`,
		521: `245`,
		522: `246`,
		523: `247`,
		524: `248`,
		525: `248`,
		526: `249`,
		527: `250`,
		528: `251`,
		529: `252`,
		53: `11`,
		530: `256`,
		531: `256`,
		532: `258`,
		533: `258`,
		534: `259`,
		535: `259`,
		536: `260`,
		537: `260`,
		538: `260`,
		539: `262`,
		54: `11`,
		540: `263`,
		541: `263`,
		542: `264`,
		543: `264`,
		544: `265`,
		545: `265`,
		546: `266`,
		547: `266`,
		548: `266`,
		549: `267`,
		55: `12`,
		550: `268`,
		551: `268`,
		552: `269`,
		553: `269`,
		554: `270`,
		555: `270`,
		556: `271`,
		557: `271`,
		558: `271`,
		559: `273`,
		56: `13`,
		560: `273`,
		561: `274`,
		562: `274`,
		563: `275`,
		564: `276`,
		565: `278`,
		566: `278`,
		567: `278`,
		568: `280`,
		569: `281`,
		57: `14`,
		570: `281`,
		571: `282`,
		572: `282`,
		573: `283`,
		574: `283`,
		575: `283`,
		576: `284`,
		577: `284`,
		578: `284`,
		579: `286`,
		58: `14`,
		580: `287`,
		581: `287`,
		582: `288`,
		583: `289`,
		584: `290`,
		585: `290`,
		586: `290`,
		587: `291`,
		588: `291`,
		589: `292`,
		59: `15`,
		590: `293`,
		591: `293`,
		592: `294`,
		593: `294`,
		594: `294`,
		595: `294`,
		596: `294`,
		597: `294`,
		598: `295`,
		599: `295`,
		6: `2`,
		60: `16`,
		600: `296`,
		601: `297`,
		602: `298`,
		603: `300`,
		604: `300`,
		605: `301`,
		606: `301`,
		607: `301`,
		608: `302`,
		609: `302`,
		61: `17`,
		610: `303`,
		611: `303`,
		612: `304`,
		613: `305`,
		614: `306`,
		615: `306`,
		616: `306`,
		617: `308`,
		618: `308`,
		619: `309`,
		62: `18`,
		620: `309`,
		621: `310`,
		622: `311`,
		623: `312`,
		624: `312`,
		625: `312`,
		626: `313`,
		627: `313`,
		628: `314`,
		629: `315`,
		63: `19`,
		630: `315`,
		631: `316`,
		632: `316`,
		633: `316`,
		634: `316`,
		635: `316`,
		636: `316`,
		637: `317`,
		638: `317`,
		639: `318`,
		64: `21`,
		640: `319`,
		641: `320`,
		642: `322`,
		643: `322`,
		644: `323`,
		645: `323`,
		646: `323`,
		647: `324`,
		648: `324`,
		649: `325`,
		65: `21`,
		650: `325`,
		651: `326`,
		652: `327`,
		653: `328`,
		654: `328`,
		655: `329`,
		656: `329`,
		657: `329`,
		658: `330`,
		659: `331`,
		66: `21`,
		660: `331`,
		661: `332`,
		662: `333`,
		663: `334`,
		664: `335`,
		665: `336`,
		666: `337`,
		667: `337`,
		668: `338`,
		669: `338`,
		67: `21`,
		670: `339`,
		671: `340`,
		672: `343`,
		673: `343`,
		674: `344`,
		675: `344`,
		676: `345`,
		677: `345`,
		678: `346`,
		679: `347`,
		68: `21`,
		680: `347`,
		681: `348`,
		682: `348`,
		683: `349`,
		684: `349`,
		685: `350`,
		686: `351`,
		687: `351`,
		688: `352`,
		689: `352`,
		69: `21`,
		690: `352`,
		691: `355`,
		692: `355`,
		693: `356`,
		694: `356`,
		695: `357`,
		696: `358`,
		697: `361`,
		698: `361`,
		699: `361`,
		7: `2`,
		70: `21`,
		700: `361`,
		701: `361`,
		702: `361`,
		703: `361`,
		704: `361`,
		705: `361`,
		706: `361`,
		707: `361`,
		708: `361`,
		709: `361`,
		71: `21`,
		710: `361`,
		711: `361`,
		712: `361`,
		713: `361`,
		714: `361`,
		715: `361`,
		716: `361`,
		717: `361`,
		718: `361`,
		719: `362`,
		72: `21`,
		720: `362`,
		721: `363`,
		722: `364`,
		723: `364`,
		724: `365`,
		725: `366`,
		726: `368`,
		727: `368`,
		728: `369`,
		729: `370`,
		73: `21`,
		730: `371`,
		731: `371`,
		732: `372`,
		733: `372`,
		734: `373`,
		735: `373`,
		736: `373`,
		737: `374`,
		738: `375`,
		739: `376`,
		74: `21`,
		740: `376`,
		741: `378`,
		742: `378`,
		743: `379`,
		744: `379`,
		745: `380`,
		746: `381`,
		747: `381`,
		748: `382`,
		749: `383`,
		75: `21`,
		750: `383`,
		751: `384`,
		752: `385`,
		753: `386`,
		754: `386`,
		755: `387`,
		756: `388`,
		757: `388`,
		758: `389`,
		759: `390`,
		76: `21`,
		760: `391`,
		761: `391`,
		762: `392`,
		763: `393`,
		764: `394`,
		765: `394`,
		766: `395`,
		767: `396`,
		768: `397`,
		769: `397`,
		77: `21`,
		770: `398`,
		771: `398`,
		772: `399`,
		773: `399`,
		774: `399`,
		775: `401`,
		776: `401`,
		777: `402`,
		778: `402`,
		779: `403`,
		78: `21`,
		780: `404`,
		781: `405`,
		782: `405`,
		783: `405`,
		784: `406`,
		785: `406`,
		786: `407`,
		787: `408`,
		788: `408`,
		789: `409`,
		79: `21`,
		790: `409`,
		791: `409`,
		792: `409`,
		793: `409`,
		794: `409`,
		795: `410`,
		796: `410`,
		797: `411`,
		798: `412`,
		799: `413`,
		8: `2`,
		80: `21`,
		800: `415`,
		801: `415`,
		802: `416`,
		803: `416`,
		804: `416`,
		805: `417`,
		806: `417`,
		807: `418`,
		808: `418`,
		809: `419`,
		81: `21`,
		810: `420`,
		811: `421`,
		812: `421`,
		813: `422`,
		814: `422`,
		815: `423`,
		816: `424`,
		817: `424`,
		818: `425`,
		819: `425`,
		82: `21`,
		820: `426`,
		821: `427`,
		822: `428`,
		823: `428`,
		824: `429`,
		825: `429`,
		826: `430`,
		827: `431`,
		828: `432`,
		829: `437`,
		83: `21`,
		830: `439`,
		831: `439`,
		832: `440`,
		833: `440`,
		834: `441`,
		835: `441`,
		836: `442`,
		837: `442`,
		838: `442`,
		839: `443`,
		84: `21`,
		840: `443`,
		841: `443`,
		842: `445`,
		843: `445`,
		844: `446`,
		845: `446`,
		846: `447`,
		847: `448`,
		848: `449`,
		849: `449`,
		85: `21`,
		850: `449`,
		851: `450`,
		852: `450`,
		853: `451`,
		854: `452`,
		855: `453`,
		856: `453`,
		857: `454`,
		858: `454`,
		859: `455`,
		86: `21`,
		860: `456`,
		861: `457`,
		862: `457`,
		863: `458`,
		864: `458`,
		865: `458`,
		866: `458`,
		867: `458`,
		868: `458`,
		869: `459`,
		87: `21`,
		870: `459`,
		871: `460`,
		872: `461`,
		873: `462`,
		874: `462`,
		875: `463`,
		876: `464`,
		877: `465`,
		878: `467`,
		879: `467`,
		88: `21`,
		880: `468`,
		881: `468`,
		882: `468`,
		883: `469`,
		884: `469`,
		885: `470`,
		886: `470`,
		887: `471`,
		888: `472`,
		889: `473`,
		89: `21`,
		890: `473`,
		891: `474`,
		892: `475`,
		893: `475`,
		894: `475`,
		895: `476`,
		896: `477`,
		897: `478`,
		898: `478`,
		899: `479`,
		9: `2`,
		90: `21`,
		900: `479`,
		901: `480`,
		902: `480`,
		903: `481`,
		904: `481`,
		905: `482`,
		906: `482`,
		907: `483`,
		908: `484`,
		909: `487`,
		91: `21`,
		910: `487`,
		911: `488`,
		912: `488`,
		913: `488`,
		914: `489`,
		915: `491`,
		916: `491`,
		917: `492`,
		918: `492`,
		919: `493`,
		92: `21`,
		920: `493`,
		921: `493`,
		922: `494`,
		923: `494`,
		924: `495`,
		925: `495`,
		926: `496`,
		927: `497`,
		928: `500`,
		929: `500`,
		93: `21`,
		930: `501`,
		931: `502`,
		932: `503`,
		933: `503`,
		934: `504`,
		935: `504`,
		936: `505`,
		937: `505`,
		938: `505`,
		939: `506`,
		94: `21`,
		940: `507`,
		941: `508`,
		942: `508`,
		943: `510`,
		944: `510`,
		945: `511`,
		946: `511`,
		947: `512`,
		948: `513`,
		949: `513`,
		95: `21`,
		950: `514`,
		951: `515`,
		952: `515`,
		953: `516`,
		954: `517`,
		955: `518`,
		956: `518`,
		957: `519`,
		958: `520`,
		959: `521`,
		96: `21`,
		960: `521`,
		961: `522`,
		962: `523`,
		963: `523`,
		964: `524`,
		965: `525`,
		966: `526`,
		967: `526`,
		968: `527`,
		969: `528`,
		97: `21`,
		970: `529`,
		971: `529`,
		972: `530`,
		973: `531`,
		974: `532`,
		975: `532`,
		976: `533`,
		977: `533`,
		978: `534`,
		979: `534`,
		98: `21`,
		980: `534`,
		981: `536`,
		982: `536`,
		983: `537`,
		984: `537`,
		985: `538`,
		986: `539`,
		987: `540`,
		988: `540`,
		989: `540`,
		99: `21`,
		990: `541`,
		991: `541`,
		992: `542`,
		993: `543`,
		994: `543`,
		995: `544`,
		996: `544`,
		997: `544`,
		998: `544`,
		999: `544`,
	},
	appClear: `CA==`,
	appClearMap: {},
	companionInfo: null,
	extraPages: 0,
	stateKeys: 2,
	stateSize: 187,
	unsupported: [],
	version: 13,
	warnings: [],
};
const _ETH = {
	ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1607","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e10","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e7","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e8","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e9","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes7","name":"v0","type":"bytes7"}],"name":"result","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"}],"name":"status","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T4","name":"v1610","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1637","type":"tuple"}],"name":"_reachp_10","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1613","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1616","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1619","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T4","name":"v1622","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1625","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1628","type":"tuple"}],"name":"_reachp_7","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1631","type":"tuple"}],"name":"_reachp_8","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1634","type":"tuple"}],"name":"_reachp_9","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
	Bytecode: `0x60806200301890813803601f1980601f83011683019360018060401b039284861084871117620003ec5780859260409788528339602094859181010312620003e7578451906200004f8262000402565b518152436003558451620000638162000402565b600080915285519462000076866200041e565b620000806200043a565b865280860192620000906200046a565b84528787019383855260609485890198858a5260049360ff855416620003d0577f87b51d26f290dc1fb530aed45f92ac77d813efb7cccb67b06c40d875955dde878c8051338152835189820152a1518015908115620003c3575b5015620003ac5785815152858582510152858b825101528051835152518483510152346200039557977fcb3acff3f437da359b4895d90b35b26b1a24e01a528ab6f7049fae3b3157a34f8480979a68505245504152494e4760b81b8091528c51908152a13381528951906200015f826200041e565b620001696200046a565b8252848201908682528b8301918783528b8401948886525180945233815260018060a01b0393848093511684526014430186528d60019d8e808c554381558a83519d8e018d945b60028610620003605750505050505050511660e0880152511661010086015251610120908186015284526101408401848110878211176200034d57885283519586116200033a57600254908782811c921680156200032f575b838310146200031c5750601f8111620002d0575b508093601f861160011462000268575050918394918493946200025c575b50501b916000199060031b1c1916176002555b51612b669081620004b28239f35b0151925038806200023b565b600283528183209493928692918316915b88838310620002b557505050106200029b575b505050811b016002556200024e565b015160001960f88460031b161c191690553880806200028c565b85870151885590960195948501948793509081019062000279565b60028352818320601f870160051c81019183881062000311575b601f0160051c019087905b828110620003055750506200021d565b848155018790620002f5565b9091508190620002ea565b634e487b7160e01b845260229052602483fd5b91607f169162000209565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b8697985080859697959394955180518452858101518685015201511515908201520194019201908f8f908896958c91620001b0565b895163100960cb60e01b8152600981850152602490fd5b8a5163100960cb60e01b8152600881860152602490fd5b90506001541438620000ea565b8b5163100960cb60e01b8152600781870152602490fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b03821117620003ec57604052565b608081019081106001600160401b03821117620003ec57604052565b60405190606082016001600160401b03811183821017620003ec5760405260006040838281528260208201520152565b6040805191908281016001600160401b03811184821017620003ec5781528260005b8281106200049957505050565b602090620004a66200043a565b81840152016200048c56fe60806040526004361015610018575b361561001657005b005b60003560e01c806306a723031461011c578063184f7aa4146101135780631e93b0f11461010a5780632e928421146101015780632f132302146100f857806341712c0a146100ef57806383230757146100e6578063ab53f2c6146100dd578063b3722a99146100d4578063bd184e9a146100cb578063d3c64a7a146100c2578063e249db95146100b95763f5a239bc0361000e576100b46112ee565b61000e565b506100b46110d4565b506100b4610fa1565b506100b4610de0565b506100b4610b6d565b506100b4610af8565b506100b4610ad9565b506100b46108a9565b506100b461061e565b506100b46104dc565b506100b46104bd565b506100b46102ce565b506100b461013b565b602090600319011261013657600490565b600080fd5b5061014536610125565b61025e6101646040519261015884611414565b600080945236906122de565b6101716007845414611a4a565b6101ee61018e61017f611495565b60208082518301019101612937565b916101aa6101a56101a160045460ff1690565b1590565b611a69565b7f90a060bb9517819ff9fcae31809040edc14dc784a4ce151b7d5b20fea1b5cc6b604051806101da8433836123c7565b0390a15180159081156102b1575b50611a89565b6101fe60c0820151431015611aa9565b6102083415611ac9565b60018060a01b03338161021e60408501516115a0565b160361029d5760015b1561027e576102366001611ae9565b61024360608301516115a0565b9060e061025360208501516115a0565b930151921690612459565b805561026a6000600155565b6102726123e1565b60405160008152602090f35b6102363361029761029260208601516115a0565b6115a0565b14611ae9565b336102ab61029284516115a0565b14610227565b905060015414386101e8565b604090600319011261013657600490565b506102d8366102bd565b6104a76102f6604092600084516102ee81611414565b5236906115bd565b6104a261030161158d565b61030f600160005414611b09565b61046461031a611495565b91600080516020612b3a8339815191526103d86103cd6103446020968780825183010191016116cb565b9361035c6103576101a160045460ff1690565b611b29565b7fd179e25bd63de01a033a078c79c6554f73b0e78df7c75ca4b70e1b8046ec33208b518061038b8c338361174f565b0390a16103a3895180159081156104b1575b50611b49565b6103b260608601514310611b69565b6103bc3415611b89565b65504159494e4760d01b9081905290565b895191829182611777565b0390a161043361042a846103ea6117de565b976104006103fa838701516115a0565b8a611834565b61041761040f8c8701516115a0565b838b01611834565b610423338c8b01611834565b01516115a0565b60608701611834565b5180519061045f8885840151930151151561044c611540565b9360008552868501528984019015159052565b612227565b60808401526014430160a084015261047c6003600055565b61048543600155565b610494855193849283016118b5565b03601f198101835282611472565b611967565b5160008152602090f35b9050600154143861039d565b5034610136576000366003190112610136576020600354604051908152f35b506104e636610125565b61025e6104f96040519261015884611414565b6105066005845414611ba9565b61057f610523610514611495565b602080825183010191016127cb565b9161053b6105366101a160045460ff1690565b611bc9565b7f85bba4f12ee548563e5364ae202a127c474a1931b802b9f898e735963540adcd6040518061056b8433836123c7565b0390a1518015908115610612575b50611be9565b61058f60a0820151431015611c09565b6105993415611c29565b60018060a01b0333816105af60408501516115a0565b16036105fe5760015b156105e4576105c76001611c49565b6105d460608301516115a0565b9060c061025360208501516115a0565b6105c7336105f861029260208601516115a0565b14611c49565b3361060c61029284516115a0565b146105b8565b90506001541438610579565b5061062836610125565b6106436040916000835161063b81611414565b5236906122de565b61064b6125ad565b9061065a600760005414611c69565b610662611495565b906106d561067a602093848082518301019101612937565b9161069261068d6101a160045460ff1690565b611c89565b7fa4850b05c9188495196ad609440a82393348559ec3e1eb1c2ab8d784a9e9d4018651806106c18433836123c7565b0390a151801590811561089d575b50611ca9565b60c081015143106106e590611cc9565b6106ef3415611ce9565b60a081018051602001515160010190818552519083820151868582015191015115159061071a611540565b928352858301521515868201526107309161228b565b9082840191825260808101908151610747906115a0565b610751903361272f565b61075a90611d09565b80860180519095879133906001600160a01b0390610777906115a0565b161461078290611d29565b67434c41494d494e4760c01b910181905286519081906107a29082611777565b03600080516020612b3a83398151915291a16107bc6129c4565b9481516107c8906115a0565b6107d29087611834565b848201516107df906115a0565b6107eb90878701611834565b516107f5906115a0565b61080190868801611834565b6060015161080e906115a0565b61081b9060608601611834565b51610825906115a0565b6108329060808501611834565b805160a08401526014430160c084015280516020015160e08401528051602001515161010084015251515161012083015261086d6009600055565b43600155825191829182019061088291612a3d565b03601f19810182526108949082611472565b6104a790611967565b905060015414386106cf565b506108b336610125565b6108c66040916000835161063b81611414565b6108ce6125ad565b906108dd600360005414611d49565b6108e5611495565b906109586108fd6020938480825183010191016125d3565b916109156109106101a160045460ff1690565b611d69565b7fd8b4bef0baf1b43e1c773ecc562857f82f7aa078ea677386f72396872c0e85158651806109448433836123c7565b0390a1518015908115610acd575b50611d89565b60a0810151431061096890611da9565b6109723415611dc9565b608081018051515160010190818552519081518685820151910151151590610998611540565b928352858301521515868201526109ae91612227565b9082840191825284606082019182516109c6906115a0565b6109d0903361272f565b6109d990611de9565b80850180519096839133906001600160a01b03906109f6906115a0565b1614610a0190611e09565b6853554d4d4f4e494e4760b81b91018190528251908190610a229082611777565b03600080516020612b3a83398151915291a1610a3c612670565b958151610a48906115a0565b610a529088611834565b51610a5c906115a0565b610a6890878701611834565b0151610a73906115a0565b610a7f90858701611834565b51610a89906115a0565b610a969060608501611834565b805160808401524360140160a084015251515160c0830152610ab86005600055565b436001558251918291820190610882916126cd565b90506001541438610952565b5034610136576000366003190112610136576020600154604051908152f35b503461013657600080600319360112610b6a578054610b15611495565b906040519283918252602090604082840152835191826040850152815b838110610b5357505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610b32565b80fd5b50610b7736610125565b7f29e3988fc6718f85dc64d3fb92613fce9b35f9723faa116ab5220e027759af84610dbb610da1610bb16040946000865161063b81611414565b610bb9612ae2565b610bc7600960005414611e29565b610d8e610bd2611495565b92610c45610bea60209586808251830101910161231a565b91610c02610bfd6101a160045460ff1690565b611e49565b7fd64d3134781556c6a626b018733c1e4f7a8f056da03bbd004578b0e46c1b667e8a5180610c318433836123c7565b0390a1518015908115610dd4575b50611e69565b610c5460c08201514310611e89565b610c5e3415611ea9565b83810190610ccd60018060a01b0392610c833385610c7c84516115a0565b1614611ec9565b610c94600161012085015114611ee9565b610100830190610ca76001835114611f09565b6000875284610cc3610cbc60808701516115a0565b92516115a0565b9251921690612459565b60a0810191610d848a610d168551885190610d118b60e08901958651610cf98284830151920151151590565b92610d02611540565b96875286015284019015159052565b61228b565b50610d368c8651610d118b8b51938651610cf98284830151920151151590565b50610d508c610d4860608701516115a0565b9501516115a0565b9451610d118d8951935190610d6b818d840151930151151590565b91610d74611540565b9586528c86015284019015159052565b5151921690612459565b665355434345535360c81b910181905290565b83516001600160c81b031990911681529081906020820190565b0390a160008055610dcc6000600155565b6104a76123e1565b90506001541438610c3f565b50610dea36610125565b604090610f5b610dff83519261015884611414565b610e0761158d565b610e146009855414611f29565b610e8c610e31610e22611495565b6020808251830101910161231a565b92610e49610e446101a160045460ff1690565b611f49565b7fedce43c37e9badb4abfd97a8f3d8873fd471a81a4cd5026126ad420fc829d71f875180610e788433836123c7565b0390a1518015908115610f95575b50611f69565b610e9c60c0830151431015611f89565b610ea63415611fa9565b84820190610f4060018060a01b03913383610ec186516115a0565b1603610f815760015b15610f6757610ed96001611fc9565b868152610f06610eec60808701516115a0565b610ef686516115a0565b9085610100890151921690612459565b60a0850151905190610d1160e0870151610f278b6020830151920151151590565b90610f30611540565b948552602085015215158a840152565b50610120610253610f5460608601516115a0565b93516115a0565b8055610dcc6000600155565b610ed933610f7b61029260208901516115a0565b14611fc9565b33610f8f61029287516115a0565b14610eca565b90506001541438610e86565b50610fab36610125565b610fc760405191610fbb83611414565b600080935236906122de565b610fd46003835414611fe9565b61104d610ff1610fe2611495565b602080825183010191016125d3565b916110096110046101a160045460ff1690565b612007565b7fa02f9e9e84cc99a78168965468765447ea5d90bf01d61078964695bb27c512d4604051806110398433836123c7565b0390a15180159081156110c8575b50612027565b61105d60a0820151431015612047565b6110673415612067565b604081015133906001600160a01b0390611080906115a0565b16036110b45760015b15611099575061025e6001612087565b61025e906110ae6102926020339301516115a0565b14612087565b336110c261029283516115a0565b14611089565b90506001541438611047565b506110de366102bd565b6110f1604091600083516102ee81611414565b6111256110fc6127b1565b61110a6005600054146120a7565b611112611495565b60209281848080945183010191016127cb565b9361113d6111386101a160045460ff1690565b6120c7565b7f6338cb77316498cf6739d540d767aba015e84a5e9d79b4519ba97cd813a77e8786518061116c84338361174f565b0390a1611184815180159081156112e2575b506120e7565b61119360a08601514310612107565b6111c860808601518381015190610d11898684015193015115156111b5611540565b9360008552878501528a84019015159052565b8352016111d581516115a0565b60608501906111e761029283516115a0565b6001600160a01b03918216036112d8576112016000612127565b61120b3415612147565b868601903390825161121c906115a0565b161461122790612167565b8461123061285f565b96805161123c906115a0565b6112469089611834565b0151611251906115a0565b61125d90878701611834565b51611267906115a0565b61127390868801611834565b5161127d906115a0565b61128a9060608601611834565b51611294906115a0565b6112a19060808501611834565b805160a08401524360140160c084015251515160e08301526112c36007600055565b436001558251918291820190610882916128c3565b6112016001612127565b9050600154143861117e565b5061139f606061130e61130036610125565b600060405161063b81611414565b61131c600160005414612187565b61139561133961132a611495565b602080825183010191016116cb565b9161135161134c6101a160045460ff1690565b6121a7565b7f794b69bffed607ab45148da3c7f9c613ba8e4d2d82b625153563a3a2f536190a604051806113818433836123c7565b0390a15180159081156113b7575b506121c7565b01514310156121e7565b6113a93415612207565b6000805561026a6000600155565b9050600154143861138f565b90600182811c921680156113f3575b60208310146113dd57565b634e487b7160e01b600052602260045260246000fd5b91607f16916113d2565b50634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761142f57604052565b6114376113fd565b604052565b606081019081106001600160401b0382111761142f57604052565b604081019081106001600160401b0382111761142f57604052565b601f909101601f19168101906001600160401b0382119082101761142f57604052565b60405190600082600254916114a9836113c3565b80835260019380851690811561151f57506001146114d1575b506114cf92500383611472565b565b60026000908152600080516020612b1a83398151915294602093509091905b8183106115075750506114cf9350820101386114c2565b855488840185015294850194879450918301916114f0565b90506114cf94506020925060ff191682840152151560051b820101386114c2565b604051906114cf8261143c565b6040519061014082016001600160401b0381118382101761142f57604052565b6040519061010082016001600160401b0381118382101761142f57604052565b6040519061159a82611414565b60008252565b6001600160a01b031690565b6001600160a01b0381160361013657565b919082604091031261013657604080519081016001600160401b038111828210176115ff575b6040526020808294803584520135916115fb836115ac565b0152565b6116076113fd565b6115e3565b5190811515820361013657565b919082606091031261013657604051606081016001600160401b03811182821017611663575b604052604061165e81839580518552602081015160208601520161160c565b910152565b61166b6113fd565b61163f565b81601f82011215610136576040519161168883611457565b829060c083019281841161013657915b8383106116a6575050505090565b60206060916116b58486611619565b815201920191611698565b51906114cf826115ac565b610120818303126101365760405191610100919061170390608085016001600160401b03811186821017611735575b60405282611670565b835260c0810151611713816115ac565b602084015260e0810151611726816115ac565b60408401520151606082015290565b61173d6113fd565b6116fa565b6001600160a01b03169052565b6001600160a01b03918216815282516020808301919091529092015116604082015260600190565b6001600160601b0319909116815260200190565b604051906117988261143c565b60006040838281528260208201520152565b6040908151916117b983611457565b8260005b8281106117c957505050565b6020906117d461178b565b81840152016117bd565b6040519060c082016001600160401b03811183821017611827575b604052600060a08382815282602082015282604082015282606082015261181e6117aa565b60808201520152565b61182f6113fd565b6117f9565b6001600160a01b039091169052565b9060028110156118545760051b0190565b634e487b7160e01b600052603260045260246000fd5b60408091805184526020810151602085015201511515910152565b906000905b6002821061189757505050565b60206060826118a9600194875161186a565b0193019101909161188a565b91909161014060a0610160830194600180831b03808251168552806020830151166020860152806040830151166040860152606082015116606085015261190460808201516080860190611885565b0151910152565b818110611916575050565b6000815560010161190b565b90601f821161192f575050565b6114cf9160026000526020600020906020601f840160051c8301931061195d575b601f0160051c019061190b565b9091508190611950565b80519091906001600160401b038111611a3d575b61198f8161198a6002546113c3565b611922565b602080601f83116001146119cb57508192936000926119c0575b50508160011b916000199060031b1c191617600255565b0151905038806119a9565b6002600052601f19831694909190600080516020612b1a833981519152926000905b878210611a25575050836001959610611a0c575b505050811b01600255565b015160001960f88460031b161c19169055388080611a01565b806001859682949686015181550195019301906119ed565b611a456113fd565b61197b565b15611a5157565b602460405163100960cb60e01b815260406004820152fd5b15611a7057565b60405163100960cb60e01b815260416004820152602490fd5b15611a9057565b60405163100960cb60e01b815260426004820152602490fd5b15611ab057565b60405163100960cb60e01b815260436004820152602490fd5b15611ad057565b60405163100960cb60e01b815260446004820152602490fd5b15611af057565b60405163100960cb60e01b815260456004820152602490fd5b15611b1057565b60405163100960cb60e01b8152600a6004820152602490fd5b15611b3057565b60405163100960cb60e01b8152600b6004820152602490fd5b15611b5057565b60405163100960cb60e01b8152600c6004820152602490fd5b15611b7057565b60405163100960cb60e01b8152600d6004820152602490fd5b15611b9057565b60405163100960cb60e01b8152600e6004820152602490fd5b15611bb057565b60405163100960cb60e01b815260316004820152602490fd5b15611bd057565b60405163100960cb60e01b815260326004820152602490fd5b15611bf057565b60405163100960cb60e01b815260336004820152602490fd5b15611c1057565b60405163100960cb60e01b815260346004820152602490fd5b15611c3057565b60405163100960cb60e01b815260356004820152602490fd5b15611c5057565b60405163100960cb60e01b815260366004820152602490fd5b15611c7057565b60405163100960cb60e01b815260386004820152602490fd5b15611c9057565b60405163100960cb60e01b815260396004820152602490fd5b15611cb057565b60405163100960cb60e01b8152603a6004820152602490fd5b15611cd057565b60405163100960cb60e01b8152603b6004820152602490fd5b15611cf057565b60405163100960cb60e01b8152603c6004820152602490fd5b15611d1057565b60405163100960cb60e01b8152603e6004820152602490fd5b15611d3057565b60405163100960cb60e01b8152603f6004820152602490fd5b15611d5057565b60405163100960cb60e01b8152601c6004820152602490fd5b15611d7057565b60405163100960cb60e01b8152601d6004820152602490fd5b15611d9057565b60405163100960cb60e01b8152601e6004820152602490fd5b15611db057565b60405163100960cb60e01b8152601f6004820152602490fd5b15611dd057565b60405163100960cb60e01b815260206004820152602490fd5b15611df057565b60405163100960cb60e01b815260226004820152602490fd5b15611e1057565b60405163100960cb60e01b815260236004820152602490fd5b15611e3057565b60405163100960cb60e01b815260476004820152602490fd5b15611e5057565b60405163100960cb60e01b815260486004820152602490fd5b15611e7057565b60405163100960cb60e01b815260496004820152602490fd5b15611e9057565b60405163100960cb60e01b8152604a6004820152602490fd5b15611eb057565b60405163100960cb60e01b8152604b6004820152602490fd5b15611ed057565b60405163100960cb60e01b8152604c6004820152602490fd5b15611ef057565b60405163100960cb60e01b8152604d6004820152602490fd5b15611f1057565b60405163100960cb60e01b8152604e6004820152602490fd5b15611f3057565b60405163100960cb60e01b8152600f6004820152602490fd5b15611f5057565b60405163100960cb60e01b815260106004820152602490fd5b15611f7057565b60405163100960cb60e01b815260116004820152602490fd5b15611f9057565b60405163100960cb60e01b815260126004820152602490fd5b15611fb057565b60405163100960cb60e01b815260136004820152602490fd5b15611fd057565b60405163100960cb60e01b815260146004820152602490fd5b15611ff057565b602460405163100960cb60e01b8152816004820152fd5b1561200e57565b60405163100960cb60e01b815260256004820152602490fd5b1561202e57565b60405163100960cb60e01b815260266004820152602490fd5b1561204e57565b60405163100960cb60e01b815260276004820152602490fd5b1561206e57565b60405163100960cb60e01b815260286004820152602490fd5b1561208e57565b60405163100960cb60e01b815260296004820152602490fd5b156120ae57565b60405163100960cb60e01b8152602a6004820152602490fd5b156120ce57565b60405163100960cb60e01b8152602b6004820152602490fd5b156120ee57565b60405163100960cb60e01b8152602c6004820152602490fd5b1561210e57565b60405163100960cb60e01b8152602d6004820152602490fd5b1561212e57565b60405163100960cb60e01b8152602e6004820152602490fd5b1561214e57565b60405163100960cb60e01b8152602f6004820152602490fd5b1561216e57565b60405163100960cb60e01b815260306004820152602490fd5b1561218e57565b60405163100960cb60e01b815260176004820152602490fd5b156121ae57565b60405163100960cb60e01b815260186004820152602490fd5b156121ce57565b60405163100960cb60e01b815260196004820152602490fd5b156121ee57565b60405163100960cb60e01b8152601a6004820152602490fd5b1561220e57565b60405163100960cb60e01b8152601b6004820152602490fd5b91906122316117aa565b926000805b60028110612245575050508252565b61224f8184611843565b5161225a8288611843565b526122658187611843565b50600019811461227757600101612236565b634e487b7160e01b82526011600452602482fd5b91906122956117aa565b926000805b600281106122ac575050506020830152565b6122b68184611843565b516122c18288611843565b526122cc8187611843565b5060001981146122775760010161229a565b919082602091031261013657604051602081016001600160401b0381118282101761230d575b60405291358252565b6123156113fd565b612304565b6102208183031261013657610200906123ab61233461154d565b9361233e836116c0565b855261234c602084016116c0565b602086015261235d604084016116c0565b604086015261236e606084016116c0565b606086015261237f608084016116c0565b60808601526123918160a08501611670565b60a086015261016083015160c08601526101808301611619565b60e08401526101e0810151610100840152015161012082015290565b6001600160a01b0390911681529051602082015260400190565b6123ec6002546113c3565b806123f45750565b601f811160011461240757506000600255565b600260005261244c90601f0160051c600080516020612b1a833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf61190b565b6000602081208160025555565b60405163a9059cbb60e01b602082019081526001600160a01b0393841660248301526044808301959095529381526124d593600093849392849190608081016001600160401b038111828210176124dc575b6040525193165af16124c56124be6124e9565b809261254d565b5060208082518301019101612536565b1561013657565b6124e46113fd565b6124ab565b3d15612531573d906001600160401b038211612524575b60405191612518601f8201601f191660200184611472565b82523d6000602084013e565b61252c6113fd565b612500565b606090565b908160209103126101365761254a9061160c565b90565b156125555790565b80511561256457805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156125855790565b80511561259457805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b604051906125ba8261143c565b60006040838281526125ca6117aa565b60208201520152565b61016081830312610136576040519161014091906126549060c085016001600160401b03811186821017612663575b6040528251612610816115ac565b85526020830151612620816115ac565b60208601526040830151612633816115ac565b60408601526060830151612646816115ac565b606086015260808301611670565b6080840152015160a082015290565b61266b6113fd565b612602565b6040519060e082016001600160401b038111838210176126c0575b6040528160c06000918281528260208201528260408201528260608201526126b16117aa565b60808201528260a08201520152565b6126c86113fd565b61268b565b91909161016060c061018083019460018060a01b03808251168552806020830151166020860152806040830151166040860152606082015116606085015261271d60808201516080860190611885565b60a08101516101408501520151910152565b6040516323b872dd60e01b602082019081526001600160a01b0392831660248301523060448301526001606480840191909152825261254a93600093849391929184919060a081016001600160401b038111828210176127a4575b6040525193165af16124c561279d6124e9565b809261257d565b6127ac6113fd565b61278a565b604051906127be82611414565b816127c76117aa565b9052565b61018081830312610136576040519161016091906128389060e085016001600160401b03811186821017612852575b6040528251612808816115ac565b8552612816602084016116c0565b6020860152612827604084016116c0565b6040860152612646606084016116c0565b608084015261014081015160a0840152015160c082015290565b61285a6113fd565b6127fa565b6040519061010082016001600160401b038111838210176128b6575b6040528160e06000918281528260208201528260408201528260608201528260808201526128a76117aa565b60a08201528260c08201520152565b6128be6113fd565b61287b565b91909161018060e06101a083019460018060a01b03808251168552806020830151166020860152806040830151166040860152606082015116606085015261291360808201516080860190611742565b61292560a082015160a0860190611885565b60c08101516101608501520151910152565b6101a08183031261013657610180906129aa61295161156d565b9361295b836116c0565b8552612969602084016116c0565b602086015261297a604084016116c0565b604086015261298b606084016116c0565b606086015261299c608084016116c0565b608086015260a08301611670565b60a084015261016081015160c0840152015160e082015290565b6040519061014082016001600160401b03811183821017612a30575b60405281610120600091828152826020820152826040820152826060820152826080820152612a0d6117aa565b60a08201528260c0820152612a2061178b565b60e0820152826101008201520152565b612a386113fd565b6129e0565b919091610200610120610220830194612a57848251611742565b612a6960208201516020860190611742565b612a7b60408201516040860190611742565b612a8d60608201516060860190611742565b612a9f60808201516080860190611742565b612ab160a082015160a0860190611885565b60c0810151610160850152612acf60e082015161018086019061186a565b6101008101516101e08501520151910152565b60408051919082016001600160401b03811183821017612b0c575b60405260006020838281520152565b612b146113fd565b612afd56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acecb3acff3f437da359b4895d90b35b26b1a24e01a528ab6f7049fae3b3157a34fa164736f6c6343000811000a`,
	BytecodeLen: 12312,
	version: 9,
	views: {},
};
export const _stateSourceMap = {
	1: {
		at: "./src/contracts/summon.rsh:75:17:after expr stmt semicolon",
		fs: [],
		msg: null,
		who: "Module",
	},
	2: {
		at: "reach standard library:199:11:after expr stmt semicolon",
		fs: [
			'at ./src/contracts/summon.rsh:89:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
		],
		msg: null,
		who: "Module",
	},
	3: {
		at: "./src/contracts/summon.rsh:92:17:after expr stmt semicolon",
		fs: [],
		msg: null,
		who: "Module",
	},
	4: {
		at: "reach standard library:199:11:after expr stmt semicolon",
		fs: [
			'at ./src/contracts/summon.rsh:104:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
		],
		msg: null,
		who: "Module",
	},
	5: {
		at: "./src/contracts/summon.rsh:107:17:after expr stmt semicolon",
		fs: [],
		msg: null,
		who: "Module",
	},
	6: {
		at: "reach standard library:199:11:after expr stmt semicolon",
		fs: [
			'at ./src/contracts/summon.rsh:125:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
		],
		msg: null,
		who: "Module",
	},
	7: {
		at: "./src/contracts/summon.rsh:127:17:after expr stmt semicolon",
		fs: [],
		msg: null,
		who: "Module",
	},
	8: {
		at: "reach standard library:199:11:after expr stmt semicolon",
		fs: [
			'at ./src/contracts/summon.rsh:131:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
		],
		msg: null,
		who: "Module",
	},
	9: {
		at: "./src/contracts/summon.rsh:134:17:after expr stmt semicolon",
		fs: [],
		msg: null,
		who: "Module",
	},
	10: {
		at: "reach standard library:199:11:after expr stmt semicolon",
		fs: [
			'at ./src/contracts/summon.rsh:151:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
		],
		msg: null,
		who: "Module",
	},
	11: {
		at: "./src/contracts/summon.rsh:165:17:after expr stmt semicolon",
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
	Summoner: Summoner,
};
export const _APIs = {};
