(function() {var implementors = {};
implementors["xcm_builder"] = [{"text":"impl&lt;T:&nbsp;Get&lt;Weight&gt;, C:&nbsp;Decode + GetDispatchInfo, M:&nbsp;Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;&gt; WeightBounds&lt;C&gt; for <a class=\"struct\" href=\"xcm_builder/struct.FixedWeightBounds.html\" title=\"struct xcm_builder::FixedWeightBounds\">FixedWeightBounds</a>&lt;T, C, M&gt;","synthetic":false,"types":["xcm_builder::weight::FixedWeightBounds"]},{"text":"impl&lt;W, C, M&gt; WeightBounds&lt;C&gt; for <a class=\"struct\" href=\"xcm_builder/struct.WeightInfoBounds.html\" title=\"struct xcm_builder::WeightInfoBounds\">WeightInfoBounds</a>&lt;W, C, M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"xcm_builder/test_utils/trait.XcmWeightInfo.html\" title=\"trait xcm_builder::test_utils::XcmWeightInfo\">XcmWeightInfo</a>&lt;C&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Decode + GetDispatchInfo,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"xcm_builder/test_utils/enum.Instruction.html\" title=\"enum xcm_builder::test_utils::Instruction\">Instruction</a>&lt;C&gt;: <a class=\"trait\" href=\"xcm/trait.GetWeight.html\" title=\"trait xcm::GetWeight\">GetWeight</a>&lt;W&gt;,&nbsp;</span>","synthetic":false,"types":["xcm_builder::weight::WeightInfoBounds"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()