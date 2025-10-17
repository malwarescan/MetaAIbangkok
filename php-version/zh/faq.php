<?php
$baseUrl = 'https://metaesthetic.com';
$title = 'Meta Esthetic — 常见问题（医生与患者）';
$desc  = '为考虑引入 Meta Esthetic AI 的医疗机构与求美者提供深度解答：对接、疗效、合规与隐私。';
$langCode = 'zh';

// ---------- DATA: Doctors & Patients (ZH) ----------
$faqDoctors = [
  ['q'=>'AI 如何与激光或皮肤检测设备连接？',
   'a'=>'系统支持 USB/CSV 导入或简易 API，对接常见医疗设备。提供数据映射模板与人工上线协助，通常 1–2 周即可完成且不中断门诊运营。'],
  ['q'=>'AI 会改变我的治疗方案或替代医生决策吗？',
   'a'=>'不会。AI 仅提供数据支持的建议与风险提示，最终决策由执业医生做出。可按设备/适应症/角色精细化关闭或调节建议。'],
  ['q'=>'能否自动生成 EMR 病历摘要并减少文书工作？',
   'a'=>'可以。自动记录参数、皮肤类型与反应，生成 HL7/FHIR 兼容的摘要，平均可减少 30–60% 书写时间。'],
  ['q'=>'如何支持连锁机构与权限管理？',
   'a'=>'支持按总部/分院维度汇总或下钻查看；角色权限（院长/医生/护士/前台）与分院访问范围可独立配置。'],
  ['q'=>'如何满足合规要求（HIPAA/PDPA/PIPA/GDPR 以及中国 PIPL/CSL/DSL）？',
   'a'=>'数据在传输与存储全程加密，分诊所隔离、区域存储；提供审计日志、数据处理协议。中国地区可部署在境内合规云并按 PIPL/CSL/DSL 要求进行最小化与本地化存储。'],
  ['q'=>'能限制 AI 建议以避免超适应症或过度治疗吗？',
   'a'=>'可以。内置适应症列表、能量/fluence 安全区间与偏差告警，防止偏离诊所政策或患者历史。'],
  ['q'=>'实际疗效如何提升？',
   'a'=>'通过关联设置、肤质、前后护理与反应数据，持续优化方案，长期提升一致性并降低不良反应。'],
  ['q'=>'ROI 如何评估？',
   'a'=>'看板跟踪每诊次节省时间、复诊率、依从性、产品联动率以及并发症下降趋势。'],
  ['q'=>'网络不稳定怎么办？',
   'a'=>'本地缓存队列保障关键数据先保存，恢复网络后自动安全同步并回执确认。'],
  ['q'=>'如何管理前后对比照片与隐私？',
   'a'=>'照片进行哈希与访问控制，可自动与就诊记录关联；上传前可选择面部/识别信息模糊处理。'],
  ['q'=>'是否支持品牌化（白标）？',
   'a'=>'支持。可使用诊所品牌 UI，同时保留底层安全与合规模型。'],
  ['q'=>'新增设备是否容易？',
   'a'=>'我们维护持续扩充的设备配置库；可快速新增映射与表单。'],
  ['q'=>'是否支持多语言？',
   'a'=>'支持中文/英文/泰文/韩文界面与消息，医学术语由专家审核以确保一致。'],
];

$faqPatients = [
  ['q'=>'AI 如何帮助我选择合适的治疗？',
   'a'=>'用通俗语言解释方案，比较恢复期与大致费用，并依据肤质、历史与目标提供个性化建议。'],
  ['q'=>'我的个人数据安全吗？',
   'a'=>'安全。数据加密存储，仅授权医护可查看；遵循 PIPL 等隐私法规，不进行个人数据买卖。'],
  ['q'=>'还需要见医生吗？',
   'a'=>'需要。AI 用于沟通与记录辅助，最终诊疗由执业医生完成。'],
  ['q'=>'治疗后如何护理？',
   'a'=>'按愈合阶段提供分步护理与提醒，如上报异常反应将快速指引或转接医护。'],
  ['q'=>'语言沟通不畅怎么办？',
   'a'=>'界面与消息可在中文/英文/泰文/韩文间切换，术语经过临床审核。'],
  ['q'=>'如何追踪进展？',
   'a'=>'可记录症状、上传照片，并查看时间线与预约提醒。'],
  ['q'=>'会不会强行推销产品？',
   'a'=>'不会。推荐基于证据并经诊所审批，可随时关闭产品建议。'],
  ['q'=>'是否会加收费用？',
   'a'=>'不会。AI 助手属于诊所服务的一部分，旨在提升沟通与疗效体验。'],
  ['q'=>'紧急问题如何处理？',
   'a'=>'24/7 助手提供分诊与指引，并根据症状严重程度升级给诊所团队。'],
  ['q'=>'手机可用吗？需要安装 App 吗？',
   'a'=>'可直接在手机浏览器使用，无需安装应用，移动优先设计。'],
  ['q'=>'谁能看到我的照片与聊天记录？',
   'a'=>'仅经授权的医护。您可按当地法规申请删除或导出副本。'],
  ['q'=>'能随时切换语言吗？',
   'a'=>'可以，界面即时切换并记忆您的偏好。'],
];

// ---------- JSON-LD ----------
$mainEntity=[]; foreach(array_merge($faqDoctors,$faqPatients) as $it){
  $mainEntity[]=['@type'=>'Question','name'=>$it['q'],'acceptedAnswer'=>['@type'=>'Answer','text'=>strip_tags($it['a'])]];
}
$faqSchema=['@context'=>'https://schema.org','@type'=>'FAQPage','inLanguage'=>'zh','mainEntity'=>$mainEntity];

// ---------- VIEW ----------
ob_start(); ?>
<section class="bg-gradient-to-b from-white via-white to-me-silver">
  <div class="max-w-7xl mx-auto px-4 pt-12 pb-8 md:pt-20 md:pb-12">
    <h1 class="text-3xl md:text-5xl font-semibold">常见问题</h1>
    <p class="mt-3 md:mt-5 text-base md:text-lg text-black/70 max-w-3xl">面向医生与求美者的完整解答：设备对接、疗效、隐私与合规。</p>
  </div>
</section>
<section class="py-10 md:py-16">
  <div class="max-w-7xl mx-auto px-4 space-y-10 md:space-y-16">
    <div>
      <h2 class="text-xl md:text-2xl font-semibold mb-2">面向医生/机构</h2>
      <?php $items=$faqDoctors;$id='doc-faq-zh';include __DIR__.'/../views/partials/faq_accordion.php';?>
    </div>
    <div>
      <h2 class="text-xl md:text-2xl font-semibold mb-2">面向患者/求美者</h2>
      <?php $items=$faqPatients;$id='pt-faq-zh';include __DIR__.'/../views/partials/faq_accordion.php';?>
    </div>
  </div>
</section>
<?php
$content=ob_get_clean();
echo '<script type="application/ld+json">'.json_encode($faqSchema,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES).'</script>';
include __DIR__.'/../views/layout.php';
