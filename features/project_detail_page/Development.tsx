import React from "react";
import { RiLightbulbFlashLine, RiTeamLine, RiToolsLine, RiCalendarEventLine } from "react-icons/ri";

interface Props {
  challenges: string | null;
  learnings: string | null;
  team_members: { name: string; role: string }[] | null;
  start_date: string | null;
  end_date: string | null;
}

export default function Development({ challenges, learnings, team_members, start_date, end_date }: Props) {
  
  // Format dates strictly for display
  const formatDate = (dateString: string | null) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  return (
    <div className="grid gap-12 lg:grid-cols-3">
      
      {/* LEFT COLUMN: The Story (Challenges & Learnings) */}
      <div className="space-y-12 lg:col-span-2">
        
        {/* Challenges */}
        {challenges && (
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
              <RiToolsLine className="text-red-500" />
              Key Challenges
            </h3>
            <div className="prose prose-gray dark:prose-invert max-w-none rounded-xl bg-red-50/50 p-6 text-gray-700 dark:bg-red-900/10 dark:text-gray-300">
              <p className="leading-relaxed whitespace-pre-line">{challenges}</p>
            </div>
          </div>
        )}

        {/* Learnings */}
        {learnings && (
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
              <RiLightbulbFlashLine className="text-amber-500" />
              What I Learned
            </h3>
            <div className="prose prose-gray dark:prose-invert max-w-none rounded-xl bg-amber-50/50 p-6 text-gray-700 dark:bg-amber-900/10 dark:text-gray-300">
              <p className="leading-relaxed whitespace-pre-line">{learnings}</p>
            </div>
          </div>
        )}
      </div>

      {/* RIGHT COLUMN: Metadata (Team & Timeline) */}
      <div className="space-y-8">
        
        {/* Timeline Widget */}
        {(start_date || end_date) && (
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="mb-4 flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
              <RiCalendarEventLine className="text-blue-500" />
              Timeline
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-gray-100 pb-2 dark:border-gray-700">
                <span className="text-sm text-gray-500">Started</span>
                <span className="font-medium text-gray-900 dark:text-white">{formatDate(start_date) || "N/A"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Completed</span>
                <span className="font-medium text-gray-900 dark:text-white">{formatDate(end_date) || "Ongoing"}</span>
              </div>
            </div>
          </div>
        )}

        {/* Team Widget */}
        {team_members && team_members.length > 0 && (
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="mb-4 flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
              <RiTeamLine className="text-emerald-500" />
              Team Members
            </h4>
            <ul className="space-y-4">
              {team_members.map((member, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{member.name}</p>
                    <p className="text-xs text-gray-500">{member.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}