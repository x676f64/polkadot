(function() {var implementors = {};
implementors["kusama_runtime"] = [{"text":"impl TransactionPaymentCallApiV1&lt;Block&lt;Header&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, BlakeTwo256&gt;, UncheckedExtrinsic&lt;MultiAddress&lt;&lt;&lt;MultiSignature as Verify&gt;::Signer as IdentifyAccount&gt;::AccountId, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;, <a class=\"enum\" href=\"kusama_runtime/enum.RuntimeCall.html\" title=\"enum kusama_runtime::RuntimeCall\">RuntimeCall</a>, MultiSignature, (CheckNonZeroSender&lt;<a class=\"struct\" href=\"kusama_runtime/struct.Runtime.html\" title=\"struct kusama_runtime::Runtime\">Runtime</a>&gt;, CheckSpecVersion&lt;<a class=\"struct\" href=\"kusama_runtime/struct.Runtime.html\" title=\"struct kusama_runtime::Runtime\">Runtime</a>&gt;, CheckTxVersion&lt;<a class=\"struct\" href=\"kusama_runtime/struct.Runtime.html\" title=\"struct kusama_runtime::Runtime\">Runtime</a>&gt;, CheckGenesis&lt;<a class=\"struct\" href=\"kusama_runtime/struct.Runtime.html\" title=\"struct kusama_runtime::Runtime\">Runtime</a>&gt;, CheckMortality&lt;<a class=\"struct\" href=\"kusama_runtime/struct.Runtime.html\" title=\"struct kusama_runtime::Runtime\">Runtime</a>&gt;, CheckNonce&lt;<a class=\"struct\" href=\"kusama_runtime/struct.Runtime.html\" title=\"struct kusama_runtime::Runtime\">Runtime</a>&gt;, CheckWeight&lt;<a class=\"struct\" href=\"kusama_runtime/struct.Runtime.html\" title=\"struct kusama_runtime::Runtime\">Runtime</a>&gt;, ChargeTransactionPayment&lt;<a class=\"struct\" href=\"kusama_runtime/struct.Runtime.html\" title=\"struct kusama_runtime::Runtime\">Runtime</a>&gt;)&gt;&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>, <a class=\"enum\" href=\"kusama_runtime/enum.RuntimeCall.html\" title=\"enum kusama_runtime::RuntimeCall\">RuntimeCall</a>&gt; for <a class=\"struct\" href=\"kusama_runtime/struct.Runtime.html\" title=\"struct kusama_runtime::Runtime\">Runtime</a>","synthetic":false,"types":["kusama_runtime::Runtime"]}];
implementors["polkadot_runtime"] = [{"text":"impl TransactionPaymentCallApiV1&lt;Block&lt;Header&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, BlakeTwo256&gt;, UncheckedExtrinsic&lt;MultiAddress&lt;&lt;&lt;MultiSignature as Verify&gt;::Signer as IdentifyAccount&gt;::AccountId, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;, <a class=\"enum\" href=\"polkadot_runtime/enum.RuntimeCall.html\" title=\"enum polkadot_runtime::RuntimeCall\">RuntimeCall</a>, MultiSignature, (CheckNonZeroSender&lt;<a class=\"struct\" href=\"polkadot_runtime/struct.Runtime.html\" title=\"struct polkadot_runtime::Runtime\">Runtime</a>&gt;, CheckSpecVersion&lt;<a class=\"struct\" href=\"polkadot_runtime/struct.Runtime.html\" title=\"struct polkadot_runtime::Runtime\">Runtime</a>&gt;, CheckTxVersion&lt;<a class=\"struct\" href=\"polkadot_runtime/struct.Runtime.html\" title=\"struct polkadot_runtime::Runtime\">Runtime</a>&gt;, CheckGenesis&lt;<a class=\"struct\" href=\"polkadot_runtime/struct.Runtime.html\" title=\"struct polkadot_runtime::Runtime\">Runtime</a>&gt;, CheckMortality&lt;<a class=\"struct\" href=\"polkadot_runtime/struct.Runtime.html\" title=\"struct polkadot_runtime::Runtime\">Runtime</a>&gt;, CheckNonce&lt;<a class=\"struct\" href=\"polkadot_runtime/struct.Runtime.html\" title=\"struct polkadot_runtime::Runtime\">Runtime</a>&gt;, CheckWeight&lt;<a class=\"struct\" href=\"polkadot_runtime/struct.Runtime.html\" title=\"struct polkadot_runtime::Runtime\">Runtime</a>&gt;, ChargeTransactionPayment&lt;<a class=\"struct\" href=\"polkadot_runtime/struct.Runtime.html\" title=\"struct polkadot_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"polkadot_runtime_common/claims/struct.PrevalidateAttests.html\" title=\"struct polkadot_runtime_common::claims::PrevalidateAttests\">PrevalidateAttests</a>&lt;<a class=\"struct\" href=\"polkadot_runtime/struct.Runtime.html\" title=\"struct polkadot_runtime::Runtime\">Runtime</a>&gt;)&gt;&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>, <a class=\"enum\" href=\"polkadot_runtime/enum.RuntimeCall.html\" title=\"enum polkadot_runtime::RuntimeCall\">RuntimeCall</a>&gt; for <a class=\"struct\" href=\"polkadot_runtime/struct.Runtime.html\" title=\"struct polkadot_runtime::Runtime\">Runtime</a>","synthetic":false,"types":["polkadot_runtime::Runtime"]}];
implementors["polkadot_test_runtime"] = [{"text":"impl TransactionPaymentCallApiV1&lt;Block&lt;Header&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, BlakeTwo256&gt;, UncheckedExtrinsic&lt;MultiAddress&lt;&lt;&lt;MultiSignature as Verify&gt;::Signer as IdentifyAccount&gt;::AccountId, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;, <a class=\"enum\" href=\"polkadot_test_runtime/enum.RuntimeCall.html\" title=\"enum polkadot_test_runtime::RuntimeCall\">RuntimeCall</a>, MultiSignature, (CheckNonZeroSender&lt;<a class=\"struct\" href=\"polkadot_test_runtime/struct.Runtime.html\" title=\"struct polkadot_test_runtime::Runtime\">Runtime</a>&gt;, CheckSpecVersion&lt;<a class=\"struct\" href=\"polkadot_test_runtime/struct.Runtime.html\" title=\"struct polkadot_test_runtime::Runtime\">Runtime</a>&gt;, CheckTxVersion&lt;<a class=\"struct\" href=\"polkadot_test_runtime/struct.Runtime.html\" title=\"struct polkadot_test_runtime::Runtime\">Runtime</a>&gt;, CheckGenesis&lt;<a class=\"struct\" href=\"polkadot_test_runtime/struct.Runtime.html\" title=\"struct polkadot_test_runtime::Runtime\">Runtime</a>&gt;, CheckMortality&lt;<a class=\"struct\" href=\"polkadot_test_runtime/struct.Runtime.html\" title=\"struct polkadot_test_runtime::Runtime\">Runtime</a>&gt;, CheckNonce&lt;<a class=\"struct\" href=\"polkadot_test_runtime/struct.Runtime.html\" title=\"struct polkadot_test_runtime::Runtime\">Runtime</a>&gt;, CheckWeight&lt;<a class=\"struct\" href=\"polkadot_test_runtime/struct.Runtime.html\" title=\"struct polkadot_test_runtime::Runtime\">Runtime</a>&gt;, ChargeTransactionPayment&lt;<a class=\"struct\" href=\"polkadot_test_runtime/struct.Runtime.html\" title=\"struct polkadot_test_runtime::Runtime\">Runtime</a>&gt;)&gt;&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>, <a class=\"enum\" href=\"polkadot_test_runtime/enum.RuntimeCall.html\" title=\"enum polkadot_test_runtime::RuntimeCall\">RuntimeCall</a>&gt; for <a class=\"struct\" href=\"polkadot_test_runtime/struct.Runtime.html\" title=\"struct polkadot_test_runtime::Runtime\">Runtime</a>","synthetic":false,"types":["polkadot_test_runtime::Runtime"]}];
implementors["westend_runtime"] = [{"text":"impl TransactionPaymentCallApiV1&lt;Block&lt;Header&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, BlakeTwo256&gt;, UncheckedExtrinsic&lt;MultiAddress&lt;&lt;&lt;MultiSignature as Verify&gt;::Signer as IdentifyAccount&gt;::AccountId, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;, <a class=\"enum\" href=\"westend_runtime/enum.RuntimeCall.html\" title=\"enum westend_runtime::RuntimeCall\">RuntimeCall</a>, MultiSignature, (CheckNonZeroSender&lt;<a class=\"struct\" href=\"westend_runtime/struct.Runtime.html\" title=\"struct westend_runtime::Runtime\">Runtime</a>&gt;, CheckSpecVersion&lt;<a class=\"struct\" href=\"westend_runtime/struct.Runtime.html\" title=\"struct westend_runtime::Runtime\">Runtime</a>&gt;, CheckTxVersion&lt;<a class=\"struct\" href=\"westend_runtime/struct.Runtime.html\" title=\"struct westend_runtime::Runtime\">Runtime</a>&gt;, CheckGenesis&lt;<a class=\"struct\" href=\"westend_runtime/struct.Runtime.html\" title=\"struct westend_runtime::Runtime\">Runtime</a>&gt;, CheckMortality&lt;<a class=\"struct\" href=\"westend_runtime/struct.Runtime.html\" title=\"struct westend_runtime::Runtime\">Runtime</a>&gt;, CheckNonce&lt;<a class=\"struct\" href=\"westend_runtime/struct.Runtime.html\" title=\"struct westend_runtime::Runtime\">Runtime</a>&gt;, CheckWeight&lt;<a class=\"struct\" href=\"westend_runtime/struct.Runtime.html\" title=\"struct westend_runtime::Runtime\">Runtime</a>&gt;, ChargeTransactionPayment&lt;<a class=\"struct\" href=\"westend_runtime/struct.Runtime.html\" title=\"struct westend_runtime::Runtime\">Runtime</a>&gt;)&gt;&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>, <a class=\"enum\" href=\"westend_runtime/enum.RuntimeCall.html\" title=\"enum westend_runtime::RuntimeCall\">RuntimeCall</a>&gt; for <a class=\"struct\" href=\"westend_runtime/struct.Runtime.html\" title=\"struct westend_runtime::Runtime\">Runtime</a>","synthetic":false,"types":["westend_runtime::Runtime"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()