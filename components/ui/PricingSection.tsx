"use client";

import React from 'react';
import { CheckIcon, ClockIcon, UsersIcon, SparklesIcon } from 'lucide-react';

interface Course {
  title: string;
  subtitle: string;
  image: string;
  goals: string;
  schedule: string;
  groupSize: string;
  monthlyPrice: string;
  threeMonthPrice: string;
  privateMonthlyPrice: string;
  privateThreeMonthPrice: string;
  benefits: string;
}

const courses: Course[] = [
  {
    title: "Beginner",
    subtitle: "0 – 1000 Rating",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80",
    goals:
      "Learn chess fundamentals, rules, basic tactics, and opening principles. Build confidence to play complete games.",
    schedule: "8 classes / month · 60 minutes each",
    groupSize: "Small online groups",
    monthlyPrice: "₹3,500 · AED 155",
    threeMonthPrice: "₹10,500 · AED 465",
    privateMonthlyPrice: "₹12,000 · AED 535",
    privateThreeMonthPrice: "₹36,000 · AED 1,605",
    benefits: "Guided practice sessions and structured improvement plan."
  },
  {
    title: "Intermediate",
    subtitle: "1000 – 1500 Rating",
    image: "https://thechessmate.org/images/md2.png",
    goals:
      "Improve tactical vision, middlegame planning, and tournament confidence. Prepare for competitive play.",
    schedule: "8 classes / month · 60 minutes each",
    groupSize: "Small online groups",
    monthlyPrice: "₹4,500 · AED 200",
    threeMonthPrice: "₹13,500 · AED 600",
    privateMonthlyPrice: "₹12,000 · AED 535",
    privateThreeMonthPrice: "₹36,000 · AED 1,605",
    benefits: "Advanced analysis, practical exercises, and game reviews."
  },
  {
    title: "Advanced",
    subtitle: "1500+ / Tournament Players",
    image: "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?auto=format&fit=crop&w=800&q=80",
    goals:
      "Deep opening preparation, endgame mastery, and performance optimization for FIDE-rated tournaments.",
    schedule: "8 classes / month · 60 minutes each",
    groupSize: "Focused small groups",
    monthlyPrice: "₹5,500 · AED 245",
    threeMonthPrice: "₹16,500 · AED 735",
    privateMonthlyPrice: "₹12,000 · AED 535",
    privateThreeMonthPrice: "₹36,000 · AED 1,605",
    benefits: "High-level training, tournament strategy, and performance reviews."
  }
];

const CoursesSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-purple-700 bg-purple-100 rounded-full">
            ♟️ Chessmate Academy
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a4b] tracking-tight">
            Chess Course <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Fees</span>
          </h2>
          <p className="mt-4 text-sm text-gray-500">
            Class Duration: <strong>60 Minutes</strong> · Minimum Enrollment: <strong>3 Months</strong>
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white rounded-[24px] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-6 z-20 text-white">
                  <h3 className="text-2xl font-bold">{course.title}</h3>
                  <p className="text-sm opacity-90">{course.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">

                {/* Goals */}
                <div className="mb-6">
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase text-gray-400 mb-2">
                    <SparklesIcon className="w-4 h-4" /> Goals
                  </h4>
                  <p className="text-sm text-gray-600">{course.goals}</p>
                </div>

                <hr className="border-dashed border-gray-200 mb-6" />

                {/* Details */}
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex gap-3">
                    <ClockIcon className="w-5 h-5 text-blue-500 mt-0.5" />
                    <span className="text-sm text-gray-700">{course.schedule}</span>
                  </li>
                  <li className="flex gap-3">
                    <UsersIcon className="w-5 h-5 text-blue-500 mt-0.5" />
                    <span className="text-sm text-gray-700">{course.groupSize}</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckIcon className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-sm text-gray-700">{course.benefits}</span>
                  </li>
                </ul>

                {/* Pricing */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="mb-3">
                    <p className="text-sm font-semibold text-gray-700">Group Classes</p>
                    <p className="text-lg font-bold text-[#1a1a4b]">
                      {course.monthlyPrice}
                    </p>
                    <p className="text-xs text-gray-500">
                      3 Months: {course.threeMonthPrice}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm font-semibold text-gray-700">1-to-1 Coaching</p>
                    <p className="text-sm font-bold text-purple-600">
                      {course.privateMonthlyPrice}
                    </p>
                    <p className="text-xs text-gray-500">
                      3 Months: {course.privateThreeMonthPrice}
                    </p>
                  </div>
                </div>

                <button className="w-full mt-6 py-3 rounded-xl border-2 border-[#1a1a4b] text-[#1a1a4b] font-bold text-sm uppercase hover:bg-[#1a1a4b] hover:text-white transition">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
