export type Treatment = {
  slug: string;
  category: "Hip" | "Knee" | "Additional care";
  title: string;
  label: string;
  intro: string;
  overview: string;
  considerations: string[];
  discuss: string[];
};

export const treatments: Treatment[] = [
  {
    slug: "hip/hip-replacement", category: "Hip", title: "Total hip replacement", label: "Joint replacement",
    intro: "A treatment option for persistent hip pain and loss of function when other approaches have not helped enough.",
    overview: "Total hip replacement replaces damaged joint surfaces with an artificial joint. The original practice website describes both primary and revision hip replacement as areas of interest. The decision to operate, the implant and the surgical approach all depend on an individual assessment.",
    considerations: ["Your symptoms, examination and imaging", "Treatments already tried and what matters most to you", "Benefits, risks, recovery and the support you may need at home"],
    discuss: ["What are my alternatives at this stage?", "Which approach is suitable for me, and why?", "What should I expect during rehabilitation?"],
  },
  {
    slug: "hip/anterior-approach", category: "Hip", title: "Anterior hip approach", label: "Surgical approach",
    intro: "One way of reaching the hip joint during replacement surgery, considered according to individual anatomy and circumstances.",
    overview: "The direct anterior approach reaches the hip through a muscle interval at the front. It is one of several approaches described on the existing practice website. It is not appropriate for every patient or every revision procedure.",
    considerations: ["Whether this approach is suitable for your anatomy and condition", "How the approach compares with other options in your case", "Your personal recovery plan rather than a fixed timetable"],
    discuss: ["Why would you recommend this approach for me?", "Are there reasons to consider a different approach?", "What precautions and follow-up will I need?"],
  },
  {
    slug: "hip/hip-arthroscopy", category: "Hip", title: "Hip arthroscopy", label: "Keyhole procedure",
    intro: "A camera-guided procedure that may help assess or treat selected problems within the hip joint.",
    overview: "Hip arthroscopy uses small instruments and a camera to work inside the joint. Whether it is appropriate depends on the cause of symptoms, examination and imaging. The existing website lists it among its hip procedures.",
    considerations: ["A clear diagnosis and the aim of treatment", "Non-operative options that may be appropriate", "Expected rehabilitation and the limits of surgery"],
    discuss: ["What is causing my symptoms?", "What could arthroscopy change in my case?", "How long is the planned rehabilitation?"],
  },
  {
    slug: "hip/hip-resurfacing", category: "Hip", title: "Hip resurfacing", label: "Joint procedure",
    intro: "An alternative form of hip joint surgery for carefully selected patients.",
    overview: "Hip resurfacing covers the femoral head rather than removing it in the same way as a conventional total hip replacement. The original website describes indications and risks. Current suitability, implant options and long-term evidence need to be discussed with the treating surgeon.",
    considerations: ["Why resurfacing might or might not suit your case", "Implant-specific benefits and risks", "Follow-up and long-term monitoring"],
    discuss: ["How does resurfacing compare with total replacement for me?", "What implant would be used and why?", "What follow-up is recommended?"],
  },
  {
    slug: "hip/revision", category: "Hip", title: "Revision hip replacement", label: "Complex joint care",
    intro: "Assessment and possible replacement of part or all of an existing hip implant.",
    overview: "Revision surgery may be considered when an existing implant causes problems such as loosening, wear, instability or infection. The procedure can vary considerably. Prof. Edwards' existing biography identifies revision hip surgery as an area of interest.",
    considerations: ["The reason the existing joint is causing trouble", "Relevant imaging and investigation", "The possible extent of surgery, risks and recovery"],
    discuss: ["What investigations are needed first?", "Which parts might need replacing?", "How may recovery differ from a first replacement?"],
  },
  {
    slug: "knee/knee-replacement", category: "Knee", title: "Total knee replacement", label: "Joint replacement",
    intro: "A possible treatment when knee arthritis significantly affects daily life and other treatment has not helped enough.",
    overview: "Total knee replacement replaces damaged joint surfaces. The original practice website describes preparation, surgery, complications and rehabilitation. The expected outcome and timing should be based on your own health, goals and clinical assessment.",
    considerations: ["The extent and pattern of joint damage", "Non-operative treatments and what you hope to regain", "Risks, rehabilitation and practical support"],
    discuss: ["Is a total replacement the right option now?", "What are the main risks for me?", "What will the first weeks after surgery involve?"],
  },
  {
    slug: "knee/partial-replacement", category: "Knee", title: "Partial knee replacement", label: "Joint replacement",
    intro: "Replacement of one affected part of the knee in patients who meet specific selection criteria.",
    overview: "Also called unicondylar knee replacement, this procedure replaces part rather than all of the knee joint. The original website discusses who may be suitable. Imaging, ligament function and the pattern of arthritis help guide the decision.",
    considerations: ["Whether arthritis is limited to one compartment", "How partial and total replacement compare for you", "The possibility of future surgery"],
    discuss: ["Am I eligible for a partial replacement?", "What are the trade-offs compared with total replacement?", "What would follow-up involve?"],
  },
  {
    slug: "knee/revision", category: "Knee", title: "Revision knee replacement", label: "Complex joint care",
    intro: "Investigation and possible revision of a knee replacement that is no longer working as intended.",
    overview: "Revision can involve changing one component or more extensive reconstruction. Causes and treatment plans differ. The existing site describes pain, wear and other potential reasons for revision.",
    considerations: ["Identifying why symptoms have developed", "The tests and imaging required", "Potential complexity, risks and recovery"],
    discuss: ["What is the likely cause of my symptoms?", "Which components may need revision?", "How might this operation differ from my first?"],
  },
  {
    slug: "knee/arthroscopy", category: "Knee", title: "Knee arthroscopy", label: "Keyhole procedure",
    intro: "A camera-guided procedure used to assess or treat selected knee conditions.",
    overview: "An arthroscope allows the surgeon to see inside the knee through small incisions. It is important to establish which problem is being treated and whether arthroscopy is likely to help in that specific situation.",
    considerations: ["Diagnosis and the reason for considering surgery", "Appropriate non-operative options", "Likely recovery and realistic goals"],
    discuss: ["What will the procedure address?", "What happens if I do not have surgery now?", "What restrictions might follow the procedure?"],
  },
  {
    slug: "knee/acl-reconstruction", category: "Knee", title: "ACL reconstruction", label: "Sports injury",
    intro: "A surgical option for selected anterior cruciate ligament injuries, with rehabilitation central to the plan.",
    overview: "The anterior cruciate ligament helps stabilise the knee. The original website explains assessment, reconstruction and rehabilitation. Treatment choices depend on instability, activity goals and other injuries.",
    considerations: ["Your symptoms and intended activity", "Other injuries within the knee", "Commitment to rehabilitation and return-to-activity planning"],
    discuss: ["Would rehabilitation alone be reasonable for me?", "What graft and plan would you recommend?", "How will return to sport be assessed?"],
  },
  {
    slug: "knee/osteotomy", category: "Knee", title: "Femoral or tibial osteotomy", label: "Joint preservation",
    intro: "A procedure to change the alignment of the leg in selected people with uneven knee loading.",
    overview: "An osteotomy cuts and repositions bone to change how weight passes through the knee. The existing practice website presents it as an option for certain younger, active patients with early osteoarthritis and malalignment.",
    considerations: ["Where arthritis is located and how the leg is aligned", "How osteotomy compares with other options", "Bone healing and rehabilitation requirements"],
    discuss: ["Would correcting alignment help my situation?", "What healing time should I plan for?", "Could I still need a joint replacement later?"],
  },
  {
    slug: "knee/patella-stabilisation", category: "Knee", title: "Patella stabilisation", label: "Kneecap instability",
    intro: "Assessment and treatment planning for recurrent kneecap dislocation.",
    overview: "The original website describes a Fulkerson osteotomy for selected cases of recurrent patella dislocation. Treatment depends on the cause of instability and findings on examination and imaging.",
    considerations: ["How often the kneecap dislocates and why", "Non-operative management already tried", "Procedure choice, risks and recovery"],
    discuss: ["What is driving my instability?", "Why would an osteotomy be considered?", "What rehabilitation would follow?"],
  },
  {
    slug: "knee/cartilage", category: "Knee", title: "Cartilage restoration", label: "Joint preservation",
    intro: "Options for selected, localised areas of cartilage damage in the knee.",
    overview: "The existing site describes autologous cartilage implantation for isolated full-thickness defects and notes that it is not intended for established osteoarthritis. Suitability and currently available techniques require individual clinical review.",
    considerations: ["Size and location of the defect", "Other knee problems that may affect the result", "Stages of treatment and rehabilitation"],
    discuss: ["Is my cartilage damage suitable for repair?", "Which alternatives should I consider?", "What would the full rehabilitation programme involve?"],
  },
  {
    slug: "additional-care/shoulder", category: "Additional care", title: "Shoulder", label: "Additional care",
    intro: "Information on shoulder conditions and procedures listed on the existing practice website.",
    overview: "The source website lists topics including rotator cuff problems, shoulder arthritis and instability. This demo does not confirm the present availability of every procedure; please check current services with the practice.",
    considerations: ["Your symptoms and examination", "Imaging or other tests where needed", "Whether this service is currently available at the practice"],
    discuss: ["What may be causing the symptoms?", "Which treatment options are available?", "Is a referral to another specialist appropriate?"],
  },
  {
    slug: "additional-care/elbow", category: "Additional care", title: "Elbow", label: "Additional care",
    intro: "An entry point for elbow concerns described on the existing practice website.",
    overview: "The source website links to information on injuries, arthritis and tendon conditions around the elbow. This demo does not confirm the present availability of every procedure; please check current services with the practice.",
    considerations: ["A clear diagnosis", "Available non-operative care", "Current scope of the service"],
    discuss: ["What is the likely cause?", "What can I do before considering a procedure?", "Who is the right clinician for this problem?"],
  },
  {
    slug: "additional-care/hand-wrist", category: "Additional care", title: "Hand & wrist", label: "Additional care",
    intro: "Information on hand and wrist conditions mentioned on the existing practice website.",
    overview: "The original site discusses hand function and links to common conditions. This demo does not confirm the present availability of every procedure; please check current services with the practice.",
    considerations: ["How symptoms affect hand function", "Assessment and any required investigations", "Current scope of the service"],
    discuss: ["What may be causing the problem?", "Which options are available?", "Would specialist hand care be appropriate?"],
  },
  {
    slug: "additional-care/foot-ankle", category: "Additional care", title: "Foot & ankle", label: "Additional care",
    intro: "Information on foot and ankle topics listed on the existing practice website.",
    overview: "The source website lists ankle injuries, arthritis and other foot and ankle conditions. This demo does not confirm the present availability of every procedure; please check current services with the practice.",
    considerations: ["Symptoms, examination and imaging", "Treatment already tried", "Current scope of the service"],
    discuss: ["What is the most likely diagnosis?", "What are the non-operative options?", "Is this currently treated by the practice?"],
  },
];

export const treatmentBySlug = Object.fromEntries(treatments.map((item) => [item.slug, item]));
export const hipTreatments = treatments.filter((item) => item.category === "Hip");
export const kneeTreatments = treatments.filter((item) => item.category === "Knee");
export const additionalTreatments = treatments.filter((item) => item.category === "Additional care");
