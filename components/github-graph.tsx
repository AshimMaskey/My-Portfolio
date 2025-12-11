"use client";

import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

const USERNAME = "AshimMaskey";

interface ContributionDay {
  contributionCount: number;
  date: string;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface GitHubCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

// current streak
function calculateStreak(weeks: ContributionWeek[]): number {
  const allDays = weeks.flatMap((week) => week.contributionDays).reverse();
  let streak = 0;

  for (const day of allDays) {
    if (day.contributionCount > 0) {
      streak++;
    } else if (streak > 0) {
      break;
    }
  }

  return streak;
}

// color intensity
function getColorIntensity(count: number): string {
  if (count === 0) return "bg-[#ebedf0] dark:bg-[#161b22]";
  if (count < 3) return "bg-[#9be9a8] dark:bg-[#0e4429]";
  if (count < 6) return "bg-[#40c463] dark:bg-[#006d32]";
  if (count < 9) return "bg-[#30a14e] dark:bg-[#26a641]";
  return "bg-[#216e39] dark:bg-[#39d353]";
}

// month labels
function getMonthLabels(
  weeks: ContributionWeek[]
): { month: string; index: number }[] {
  const labels: { month: string; index: number }[] = [];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let currentMonth = -1;

  weeks.forEach((week, index) => {
    const firstDay = week.contributionDays.find((day) => day.date);
    if (firstDay) {
      const date = new Date(firstDay.date);
      const month = date.getMonth();

      if (month !== currentMonth && index > 0) {
        labels.push({
          month: monthNames[month],
          index: index,
        });
        currentMonth = month;
      }
    }
  });

  return labels;
}

export default function GithubGraph() {
  const [calendar, setCalendar] = useState<GitHubCalendar | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `/api/github-contributions?username=${USERNAME}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch contributions");
        }

        const data = await response.json();
        setCalendar(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <Card className="p-6 border-primary/10 bg-linear-to-br from-primary/5 to-accent/5">
        <div className="space-y-4 animate-pulse">
          <div className="flex items-center justify-between">
            <div className="h-6 w-40 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-5 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
          <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="flex gap-6">
            <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        </div>
      </Card>
    );
  }

  if (error || !calendar) {
    return (
      <Card className="p-6 border-primary/10 bg-linear-to-br from-primary/5 to-accent/5">
        <div className="text-center text-muted-foreground">
          <p>Unable to load GitHub contributions</p>
          {error && <p className="text-sm mt-2">{error}</p>}
        </div>
      </Card>
    );
  }

  const currentYear = new Date().getFullYear();
  const currentStreak = calculateStreak(calendar.weeks);
  const monthLabels = getMonthLabels(calendar.weeks);

  return (
    <div
      id="github"
      className="max-w-6xl px-4 lg:px-0 mt-2 mb-18 mx-auto space-y-10 scroll-mt-16"
    >
      <div>
        <h2 className="text-5xl mb-4 font-bold">
          <span className="text-5xl">📈</span> Github Contributions
        </h2>
        <p className="text-lg text-foreground/70">
          My GitHub activity over the past year.
        </p>
      </div>
      <Card className="p-6 border-primary/10 ">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">GitHub Contributions</h3>
            <span className="text-sm text-muted-foreground">{currentYear}</span>
          </div>

          {/* Contribution Grid with Month Labels */}
          <div className="overflow-x-auto">
            <div className="inline-block">
              {/* Month Labels */}
              <div
                className="flex mb-1 relative"
                style={{ paddingLeft: "20px" }}
              >
                {monthLabels.map((label, i) => (
                  <div
                    key={i}
                    className="text-xs text-muted-foreground absolute"
                    style={{
                      left: `${label.index * 15 + 20}px`,
                    }}
                  >
                    {label.month}
                  </div>
                ))}
              </div>

              <div className="flex gap-[3px]" style={{ paddingTop: "20px" }}>
                {/* Day Labels */}
                <div className="flex flex-col gap-[3px] pr-2">
                  <div className="h-3" />
                  <div className="h-3 text-xs text-muted-foreground flex items-center">
                    Mon
                  </div>
                  <div className="h-3" />
                  <div className="h-3 text-xs text-muted-foreground flex items-center">
                    Wed
                  </div>
                  <div className="h-3" />
                  <div className="h-3 text-xs text-muted-foreground flex items-center">
                    Fri
                  </div>
                  <div className="h-3" />
                </div>

                {/* Contribution Squares */}
                {calendar.weeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-[3px]">
                    {week.contributionDays.map((day, dayIndex) => (
                      <div
                        key={dayIndex}
                        className={`w-3 h-3 rounded-[2px] transition-all hover:ring-1 hover:ring-gray-400 dark:hover:ring-gray-600 cursor-pointer ${getColorIntensity(
                          day.contributionCount
                        )}`}
                        title={`${
                          day.contributionCount
                        } contributions on ${new Date(
                          day.date
                        ).toLocaleDateString("en-US", {
                          weekday: "short",
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 text-sm pt-2">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Total:</span>
              <span className="font-semibold">
                {calendar.totalContributions}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Current Streak:</span>
              <span className="font-semibold">{currentStreak} days</span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-[2px] bg-[#ebedf0] dark:bg-[#161b22]" />
              <div className="w-3 h-3 rounded-[2px] bg-[#9be9a8] dark:bg-[#0e4429]" />
              <div className="w-3 h-3 rounded-[2px] bg-[#40c463] dark:bg-[#006d32]" />
              <div className="w-3 h-3 rounded-[2px] bg-[#30a14e] dark:bg-[#26a641]" />
              <div className="w-3 h-3 rounded-[2px] bg-[#216e39] dark:bg-[#39d353]" />
            </div>
            <span>More</span>
          </div>
        </div>
        <div className="pt-4 text-sm">
          <a
            href="https://github.com/ashimmaskey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View full contributions on GitHub
          </a>
        </div>
      </Card>
    </div>
  );
}
