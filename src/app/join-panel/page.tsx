'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Stethoscope, Heart, Users, ArrowRight, ArrowLeft, CheckCircle2, Shield, DollarSign, Clock, Globe2, Upload, ChevronRight } from 'lucide-react';
import { images } from '@/lib/images';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';

type PanelType = 'hcp' | 'patient' | 'caregiver' | '';

const countries = ['United States', 'United Kingdom', 'Germany', 'France', 'Italy', 'Spain', 'Canada', 'Japan', 'Australia', 'Switzerland', 'Netherlands', 'Belgium', 'Sweden', 'Denmark', 'Norway', 'Austria', 'Ireland', 'Portugal', 'South Korea', 'Singapore', 'Brazil', 'Mexico', 'India', 'China', 'Poland', 'Czech Republic', 'Greece', 'Finland', 'New Zealand', 'Israel', 'Other'];
const languages = ['English', 'French', 'German', 'Spanish', 'Portuguese', 'Italian', 'Japanese', 'Mandarin', 'Korean', 'Dutch', 'Swedish', 'Danish', 'Norwegian', 'Other'];
const specialties = ['Oncology', 'Cardiology', 'Neurology', 'Dermatology', 'Endocrinology', 'Gastroenterology', 'Pulmonology', 'Rheumatology', 'Hematology', 'Infectious Disease', 'Psychiatry', 'Pediatrics', 'General Practice / Family Medicine', 'Internal Medicine', 'Surgery', 'Radiology', 'Pathology', 'Ophthalmology', 'Urology', 'Nephrology', 'Other'];
const titles = ['Physician', 'Surgeon', 'Pharmacist', 'Nurse', 'Nurse Practitioner', 'Physician Assistant', 'Lab Technician', 'Hospital Administrator', 'Other'];
const practiceSettings = ['Academic Medical Center', 'Community Hospital', 'Private Practice', 'Group Practice', 'Government / VA', 'Clinic', 'Other'];
const yearsOfPractice = ['0-5 years', '6-10 years', '11-15 years', '16-20 years', '21-25 years', '26+ years'];
const conditionAreas = ['Oncology / Cancer', 'Autoimmune / Inflammatory', 'Cardiovascular', 'Diabetes / Metabolic', 'Neurological', 'Respiratory', 'Rare Disease', 'Mental Health', 'Infectious Disease', 'Dermatological', 'Gastrointestinal', 'Musculoskeletal', 'Other'];
const diagnosisYears = ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', 'Before 2000'];
const treatmentTypes = ['Prescription Medication', 'Biologic / Infusion Therapy', 'Medical Device', 'Surgery', 'Clinical Trial', 'Radiation Therapy', 'Physical Therapy', 'Other'];
const relationships = ['Spouse / Partner', 'Parent', 'Child', 'Sibling', 'Other Family Member', 'Professional Caregiver', 'Other'];
const caregivingDurations = ['Less than 1 year', '1-2 years', '3-5 years', '6-10 years', '10+ years'];
const caregivingHours = ['Less than 10 hours', '10-20 hours', '21-40 hours', '40+ hours'];

const benefits = [
  { icon: DollarSign, title: 'Competitive Compensation', description: 'Receive fair payment for your time and expertise in every research study you participate in.' },
  { icon: Heart, title: 'Shape the Future of Healthcare', description: 'Your insights directly inform the development of new treatments, devices, and healthcare solutions.' },
  { icon: Clock, title: 'Flexible Participation', description: 'Choose from online surveys, telephone interviews, video advisory boards, and in-person sessions that fit your schedule.' },
  { icon: Shield, title: 'Complete Confidentiality', description: 'Your personal data is protected under strict GDPR and HIPAA-compliant protocols. All responses are anonymized.' },
  { icon: Globe2, title: 'Global Community', description: 'Join thousands of healthcare professionals, patients, and caregivers worldwide contributing to meaningful research.' },
];

const howItWorks = [
  { step: '01', title: 'Sign Up', description: 'Complete your profile with relevant professional or health information.' },
  { step: '02', title: 'Get Matched', description: 'Our team matches you to research studies relevant to your expertise or experience.' },
  { step: '03', title: 'Participate', description: 'Complete surveys, interviews, or advisory boards at times that work for you.' },
  { step: '04', title: 'Get Compensated', description: 'Receive prompt payment via your preferred method after each completed study.' },
];

const faqs = [
  { q: 'How much will I be compensated?', a: 'Compensation varies by study type and duration. Online surveys typically pay $50-$200, telephone interviews $150-$500, and advisory board participation $500-$2,000+. Healthcare professionals generally receive higher compensation reflecting their specialized expertise.' },
  { q: 'How often will I be contacted?', a: 'We respect your time. Most panelists receive 2-4 study invitations per month. You are never obligated to participate and can decline any invitation. You control your availability preferences in your profile.' },
  { q: 'Is my information kept confidential?', a: 'Absolutely. We comply with GDPR, HIPAA, and all applicable data protection regulations. Your personal information is never shared with clients. All research responses are anonymized and reported in aggregate.' },
  { q: 'What types of research will I participate in?', a: 'Studies include online surveys (15-30 minutes), telephone or video interviews (30-60 minutes), advisory boards (60-90 minutes), online focus groups, diary studies, and concept evaluation exercises. All research is for market research purposes only.' },
  { q: 'Can I opt out at any time?', a: 'Yes. You can update your preferences, pause your participation, or permanently remove your profile at any time. There are no commitments or obligations.' },
];

function toFieldName(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function SelectField({ label, options, required, placeholder, name }: { label: string; options: string[]; required?: boolean; placeholder?: string; name?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">{label} {required && <span className="text-red-500">*</span>}</label>
      <select name={name || toFieldName(label)} required={required} className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 text-slate-700">
        <option value="">{placeholder || `Select ${label.toLowerCase()}`}</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function TextField({ label, type = 'text', required, placeholder, name }: { label: string; type?: string; required?: boolean; placeholder?: string; name?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">{label} {required && <span className="text-red-500">*</span>}</label>
      <input name={name || toFieldName(label)} type={type} required={required} placeholder={placeholder} className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20" />
    </div>
  );
}

function FileUploadField({ label, description, name }: { label: string; description: string; name?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">{label}</label>
      <p className="text-xs text-slate-500 mb-3">{description}</p>
      <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-accent transition-colors">
        <Upload className="w-8 h-8 text-slate-400 mx-auto" />
        <p className="mt-2 text-sm text-slate-600">Drag and drop or <span className="text-accent font-medium cursor-pointer">browse files</span></p>
        <p className="mt-1 text-xs text-slate-400">PDF, JPG, or PNG up to 10MB</p>
        <input name={name || toFieldName(label)} type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" />
      </div>
    </div>
  );
}

export default function JoinPanelPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [panelType, setPanelType] = useState<PanelType>('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [receivingTreatment, setReceivingTreatment] = useState('');

  const FORMSPREE_PANEL = process.env.NEXT_PUBLIC_FORMSPREE_PANEL || '';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    if (FORMSPREE_PANEL) {
      const formData = new FormData(e.currentTarget);
      // Add panel type and multi-select conditions (which aren't in DOM natively)
      formData.append('panel_type', panelType);
      if (selectedConditions.length > 0) {
        formData.append('conditions', selectedConditions.join(', '));
      }
      if (receivingTreatment) {
        formData.append('receiving_treatment', receivingTreatment);
      }
      await fetch(`https://formspree.io/f/${FORMSPREE_PANEL}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  const toggleCondition = (condition: string) => {
    setSelectedConditions(prev => prev.includes(condition) ? prev.filter(c => c !== condition) : [...prev, condition]);
  };

  if (submitted) {
    return (
      <>
        <section className="relative bg-primary text-white pt-32 pb-20"><div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"><CheckCircle2 className="w-20 h-20 text-accent mx-auto" /><h1 className="mt-6 text-4xl font-bold">Thank You for Joining!</h1><p className="mt-4 text-xl text-white/70 max-w-2xl mx-auto">Your application has been received. Our team will review your profile and you&apos;ll receive a confirmation email within 2-3 business days.</p><Link href="/" className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition-all">Return to Home <ArrowRight className="w-5 h-5" /></Link></div></section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Join Our Panel"
        title="Share your expertise. Shape healthcare."
        description="Join our global panel of healthcare professionals, patients, and caregivers. Participate in meaningful market research studies, share your insights, and receive competitive compensation for your time."
        image={images.heroPanel}
      />

      {/* Benefits */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((b, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="text-center p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mx-auto"><b.icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="mt-3 font-bold text-slate-900 text-sm">{b.title}</h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{b.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Progress */}
          <div className="flex items-center justify-between mb-12">
            {['Role', 'Basic Info', 'Profile', 'Submit'].map((label, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${currentStep > i + 1 ? 'bg-accent text-white' : currentStep === i + 1 ? 'bg-primary text-white' : 'bg-slate-200 text-slate-500'}`}>{currentStep > i + 1 ? <CheckCircle2 className="w-4 h-4" /> : i + 1}</div>
                <span className={`text-sm hidden sm:block ${currentStep === i + 1 ? 'font-semibold text-slate-900' : 'text-slate-400'}`}>{label}</span>
                {i < 3 && <ChevronRight className="w-4 h-4 text-slate-300 mx-2 hidden sm:block" />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm">
            {/* Step 1: Role Selection */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Select Your Role</h2>
                <p className="mt-2 text-slate-600">Choose the category that best describes you.</p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { type: 'hcp' as PanelType, icon: Stethoscope, label: 'Healthcare Professional', desc: 'Physicians, pharmacists, nurses, and other HCPs' },
                    { type: 'patient' as PanelType, icon: Heart, label: 'Patient', desc: 'Currently diagnosed with a medical condition' },
                    { type: 'caregiver' as PanelType, icon: Users, label: 'Caregiver', desc: 'Caring for someone with a medical condition' },
                  ].map(role => (
                    <button key={role.type} onClick={() => setPanelType(role.type)} className={`p-6 rounded-xl border-2 text-center transition-all ${panelType === role.type ? 'border-accent bg-accent/5' : 'border-slate-200 hover:border-slate-300'}`}>
                      <role.icon className={`w-10 h-10 mx-auto ${panelType === role.type ? 'text-accent' : 'text-slate-400'}`} />
                      <h3 className="mt-3 font-bold text-slate-900 text-sm">{role.label}</h3>
                      <p className="mt-1 text-xs text-slate-500">{role.desc}</p>
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex justify-end">
                  <button type="button" onClick={() => panelType && setCurrentStep(2)} disabled={!panelType} className="btn-primary px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed">Next <ArrowRight className="w-4 h-4" /></button>
                </div>
              </div>
            )}

            {/* Step 2: Basic Info */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Basic Information</h2>
                <p className="mt-2 text-slate-600">Tell us about yourself.</p>
                <div className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <TextField label="First Name" required placeholder="John" />
                    <TextField label="Last Name" required placeholder="Smith" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <TextField label="Email Address" type="email" required placeholder="john@email.com" />
                    <TextField label="Phone Number" type="tel" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <SelectField label="Country" options={countries} required />
                    <TextField label="City" placeholder="New York" />
                  </div>
                  <SelectField label="Preferred Language" options={languages} required />
                </div>
                <div className="mt-8 flex justify-between">
                  <button type="button" onClick={() => setCurrentStep(1)} className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium"><ArrowLeft className="w-4 h-4" /> Back</button>
                  <button type="button" onClick={() => setCurrentStep(3)} className="btn-primary px-6 py-3">Next <ArrowRight className="w-4 h-4" /></button>
                </div>
              </div>
            )}

            {/* Step 3: Role-Specific Profiling */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  {panelType === 'hcp' ? 'Professional Profile' : panelType === 'patient' ? 'Health Profile' : 'Caregiving Profile'}
                </h2>
                <p className="mt-2 text-slate-600">This information helps us match you with relevant studies.</p>

                <div className="mt-8 space-y-6">
                  {panelType === 'hcp' && (
                    <>
                      <SelectField label="Professional Title" options={titles} required />
                      <SelectField label="Medical Specialty" options={specialties} required />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <SelectField label="Years of Practice" options={yearsOfPractice} required />
                        <SelectField label="Practice Setting" options={practiceSettings} required />
                      </div>
                      <TextField label="NPI Number or Medical License Number" placeholder="Enter your license number" />
                      <FileUploadField label="Proof of Medical Credentials" description="Upload a copy of your medical license, board certification, or institutional ID." />
                    </>
                  )}

                  {panelType === 'patient' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-3">Condition / Diagnosis Area <span className="text-red-500">*</span></label>
                        <div className="grid grid-cols-2 gap-2">
                          {conditionAreas.map(c => (
                            <label key={c} className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors ${selectedConditions.includes(c) ? 'border-accent bg-accent/5' : 'border-slate-200 hover:border-slate-300'}`}>
                              <input type="checkbox" checked={selectedConditions.includes(c)} onChange={() => toggleCondition(c)} className="accent-accent" /><span className="text-sm text-slate-700">{c}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <SelectField label="Year of Diagnosis" options={diagnosisYears} required />
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Currently Receiving Treatment? <span className="text-red-500">*</span></label>
                        <div className="flex gap-4">
                          {['Yes', 'No'].map(v => (
                            <label key={v} className={`flex items-center gap-2 px-4 py-3 rounded-xl border cursor-pointer ${receivingTreatment === v ? 'border-accent bg-accent/5' : 'border-slate-200'}`}>
                              <input type="radio" name="treatment" value={v} checked={receivingTreatment === v} onChange={() => setReceivingTreatment(v)} className="accent-accent" />{v}
                            </label>
                          ))}
                        </div>
                      </div>
                      {receivingTreatment === 'Yes' && (
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-3">Treatment Type</label>
                          <div className="grid grid-cols-2 gap-2">
                            {treatmentTypes.map(t => (
                              <label key={t} className="flex items-center gap-2 p-3 rounded-lg border border-slate-200 hover:border-slate-300 cursor-pointer">
                                <input type="checkbox" className="accent-accent" /><span className="text-sm text-slate-700">{t}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      )}
                      <FileUploadField label="Proof of Diagnosis" description="Upload a medical letter, prescription, or diagnostic report. This helps us verify eligibility." />
                    </>
                  )}

                  {panelType === 'caregiver' && (
                    <>
                      <SelectField label="Relationship to Patient" options={relationships} required />
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-3">Patient&apos;s Condition Area <span className="text-red-500">*</span></label>
                        <div className="grid grid-cols-2 gap-2">
                          {conditionAreas.map(c => (
                            <label key={c} className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors ${selectedConditions.includes(c) ? 'border-accent bg-accent/5' : 'border-slate-200 hover:border-slate-300'}`}>
                              <input type="checkbox" checked={selectedConditions.includes(c)} onChange={() => toggleCondition(c)} className="accent-accent" /><span className="text-sm text-slate-700">{c}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <SelectField label="Duration of Caregiving" options={caregivingDurations} required />
                        <SelectField label="Hours Per Week" options={caregivingHours} required />
                      </div>
                      <FileUploadField label="Proof of Caregiving Relationship" description="Upload a letter from physician, legal guardianship document, or other supporting documentation." />
                    </>
                  )}
                </div>
                <div className="mt-8 flex justify-between">
                  <button type="button" onClick={() => setCurrentStep(2)} className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium"><ArrowLeft className="w-4 h-4" /> Back</button>
                  <button type="button" onClick={() => setCurrentStep(4)} className="btn-primary px-6 py-3">Next <ArrowRight className="w-4 h-4" /></button>
                </div>
              </div>
            )}

            {/* Step 4: Consent & Submit */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Review & Submit</h2>
                <p className="mt-2 text-slate-600">Please review and accept the terms below to complete your registration.</p>
                <div className="mt-8 space-y-4">
                  {[
                    'I agree to participate in market research studies conducted by Medinsights+ and its clients. I understand that participation in individual studies is always voluntary.',
                    'I consent to the collection and processing of my personal data in accordance with the Medinsights+ Privacy Policy and applicable data protection regulations (GDPR, HIPAA).',
                    'I confirm that all information provided in this application is accurate and truthful. I understand that providing false information may result in removal from the panel.',
                  ].map((text, i) => (
                    <label key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 cursor-pointer hover:border-slate-300">
                      <input type="checkbox" required className="accent-accent mt-1 shrink-0" />
                      <span className="text-sm text-slate-700 leading-relaxed">{text}</span>
                    </label>
                  ))}
                </div>
                <div className="mt-8 flex justify-between">
                  <button type="button" onClick={() => setCurrentStep(3)} className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium"><ArrowLeft className="w-4 h-4" /> Back</button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary px-8 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'} <CheckCircle2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection><div className="text-center"><p className="text-accent font-semibold text-sm uppercase tracking-wider">How It Works</p><h2 className="mt-3 text-3xl font-bold text-slate-900">Four Simple Steps</h2></div></AnimatedSection>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
            {howItWorks.map((step, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="text-center"><div className="text-5xl font-bold text-primary/10">{step.step}</div><h3 className="mt-2 text-lg font-bold text-slate-900">{step.title}</h3><p className="mt-2 text-sm text-slate-600">{step.description}</p></div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection><div className="text-center"><p className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</p><h2 className="mt-3 text-3xl font-bold text-slate-900">Common Questions</h2></div></AnimatedSection>
          <div className="mt-12 max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="bg-white rounded-xl p-6 border border-slate-200"><h3 className="font-semibold text-slate-900">{faq.q}</h3><p className="mt-2 text-sm text-slate-600 leading-relaxed">{faq.a}</p></div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
