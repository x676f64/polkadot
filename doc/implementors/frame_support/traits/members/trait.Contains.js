(function() {var implementors = {};
implementors["kusama_runtime"] = [{"text":"impl Contains&lt;<a class=\"struct\" href=\"xcm/v1/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v1::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"kusama_runtime/xcm_config/struct.OnlyParachains.html\" title=\"struct kusama_runtime::xcm_config::OnlyParachains\">OnlyParachains</a>","synthetic":false,"types":["kusama_runtime::xcm_config::OnlyParachains"]},{"text":"impl Contains&lt;<a class=\"enum\" href=\"kusama_runtime/enum.Call.html\" title=\"enum kusama_runtime::Call\">Call</a>&gt; for <a class=\"struct\" href=\"kusama_runtime/struct.BaseFilter.html\" title=\"struct kusama_runtime::BaseFilter\">BaseFilter</a>","synthetic":false,"types":["kusama_runtime::BaseFilter"]}];
implementors["pallet_xcm"] = [{"text":"impl&lt;Prefix:&nbsp;Get&lt;<a class=\"struct\" href=\"xcm/v1/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v1::multilocation::MultiLocation\">MultiLocation</a>&gt;, Body:&nbsp;Get&lt;<a class=\"enum\" href=\"xcm/v0/junction/enum.BodyId.html\" title=\"enum xcm::v0::junction::BodyId\">BodyId</a>&gt;&gt; Contains&lt;<a class=\"struct\" href=\"xcm/v1/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v1::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"pallet_xcm/struct.IsMajorityOfBody.html\" title=\"struct pallet_xcm::IsMajorityOfBody\">IsMajorityOfBody</a>&lt;Prefix, Body&gt;","synthetic":false,"types":["pallet_xcm::IsMajorityOfBody"]}];
implementors["polkadot_runtime"] = [{"text":"impl Contains&lt;<a class=\"struct\" href=\"xcm/v1/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v1::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"polkadot_runtime/xcm_config/struct.OnlyParachains.html\" title=\"struct polkadot_runtime::xcm_config::OnlyParachains\">OnlyParachains</a>","synthetic":false,"types":["polkadot_runtime::xcm_config::OnlyParachains"]},{"text":"impl Contains&lt;<a class=\"enum\" href=\"polkadot_runtime/enum.Call.html\" title=\"enum polkadot_runtime::Call\">Call</a>&gt; for <a class=\"struct\" href=\"polkadot_runtime/struct.BaseFilter.html\" title=\"struct polkadot_runtime::BaseFilter\">BaseFilter</a>","synthetic":false,"types":["polkadot_runtime::BaseFilter"]}];
implementors["rococo_runtime"] = [{"text":"impl Contains&lt;<a class=\"struct\" href=\"xcm/v1/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v1::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"rococo_runtime/xcm_config/struct.OnlyParachains.html\" title=\"struct rococo_runtime::xcm_config::OnlyParachains\">OnlyParachains</a>","synthetic":false,"types":["rococo_runtime::xcm_config::OnlyParachains"]},{"text":"impl Contains&lt;<a class=\"enum\" href=\"rococo_runtime/enum.Call.html\" title=\"enum rococo_runtime::Call\">Call</a>&gt; for <a class=\"struct\" href=\"rococo_runtime/struct.BaseFilter.html\" title=\"struct rococo_runtime::BaseFilter\">BaseFilter</a>","synthetic":false,"types":["rococo_runtime::BaseFilter"]}];
implementors["westend_runtime"] = [{"text":"impl Contains&lt;<a class=\"enum\" href=\"westend_runtime/enum.Call.html\" title=\"enum westend_runtime::Call\">Call</a>&gt; for <a class=\"struct\" href=\"westend_runtime/struct.BaseFilter.html\" title=\"struct westend_runtime::BaseFilter\">BaseFilter</a>","synthetic":false,"types":["westend_runtime::BaseFilter"]}];
implementors["xcm_builder"] = [{"text":"impl&lt;ParaId:&nbsp;<a class=\"trait\" href=\"polkadot_parachain/primitives/trait.IsSystem.html\" title=\"trait polkadot_parachain::primitives::IsSystem\">IsSystem</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;&gt; Contains&lt;<a class=\"struct\" href=\"xcm_builder/test_utils/struct.MultiLocation.html\" title=\"struct xcm_builder::test_utils::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"xcm_builder/struct.IsChildSystemParachain.html\" title=\"struct xcm_builder::IsChildSystemParachain\">IsChildSystemParachain</a>&lt;ParaId&gt;","synthetic":false,"types":["xcm_builder::barriers::IsChildSystemParachain"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()