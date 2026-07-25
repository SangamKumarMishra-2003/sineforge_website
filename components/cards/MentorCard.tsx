"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Linkedin,
  Github,
  Globe,
  ArrowRight,
  Award,
  Users,
} from "lucide-react";

export interface MentorCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  bio: string;
  experience: string;
  students: string;
  skills: string[];
  linkedin?: string;
  github?: string;
  website?: string;
  featured?: boolean;
}

export default function MentorCard({
  name,
  role,
  company,
  image,
  bio,
  experience,
  students,
  skills,
  linkedin,
  github,
  website,
  featured = false,
}: MentorCardProps) {
  return (
    <article
      className={`group overflow-hidden rounded-3xl border backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 ${
        featured
          ? "border-cyan-500/40 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-blue-500/10"
          : "border-gray-800 bg-gray-900/40"
      }`}
    >
      {/* Cover */}
      <div className="relative h-40 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600">
        {featured && (
          <span className="absolute right-5 top-5 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
            Featured Mentor
          </span>
        )}
      </div>

      {/* Avatar */}
      <div className="relative -mt-16 flex justify-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-gray-900">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-8 text-center">
        <h3 className="text-2xl font-bold text-white">
          {name}
        </h3>

        <p className="mt-2 text-cyan-400 font-medium">
          {role}
        </p>

        <p className="text-sm text-gray-500">
          {company}
        </p>

        <p className="mt-6 leading-7 text-gray-400">
          {bio}
        </p>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-gray-800 bg-black/20 p-4">
            <Award className="mx-auto h-6 w-6 text-cyan-400" />

            <h4 className="mt-3 text-xl font-bold text-white">
              {experience}
            </h4>

            <p className="mt-1 text-sm text-gray-500">
              Experience
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-black/20 p-4">
            <Users className="mx-auto h-6 w-6 text-cyan-400" />

            <h4 className="mt-3 text-xl font-bold text-white">
              {students}
            </h4>

            <p className="mt-1 text-sm text-gray-500">
              Students
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-4">
          {linkedin && (
            <a
              href={linkedin}
              rel="noreferrer"
              target="_blank"
              className="rounded-xl border border-gray-700 p-3 transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-black"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}

          {github && (
            <a
              href={github}
              rel="noreferrer"
              target="_blank"
              className="rounded-xl border border-gray-700 p-3 transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-black"
            >
              <Github className="h-5 w-5" />
            </a>
          )}

          {website && (
            <a
              href={website}
              rel="noreferrer"
              target="_blank"
              className="rounded-xl border border-gray-700 p-3 transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-black"
            >
              <Globe className="h-5 w-5" />
            </a>
          )}
        </div>

        {/* CTA */}
        <Link
          href="/mentors"
          className="mt-8 inline-flex items-center rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
        >
          View Profile
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
