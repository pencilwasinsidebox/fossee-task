import { useState } from 'react'

const teams = [
  {
    id: 1,
    members: [
      { name: 'Ravi Kumar', workshops: 12 },
      { name: 'Priya Sharma', workshops: 8 },
      { name: 'Anil Mehta', workshops: 15 },
      { name: 'Sneha Patil', workshops: 6 },
    ],
  },
  {
    id: 2,
    members: [
      { name: 'Kiran Das', workshops: 10 },
      { name: 'Meera Iyer', workshops: 14 },
      { name: 'Raj Patel', workshops: 9 },
    ],
  },
  {
    id: 3,
    members: [
      { name: 'Suresh Nair', workshops: 7 },
      { name: 'Anita Joshi', workshops: 11 },
      { name: 'Vivek Reddy', workshops: 13 },
      { name: 'Pooja Singh', workshops: 5 },
    ],
  },
]

export default function TeamStatistics() {
  const [activeTeam, setActiveTeam] = useState(1)

  const team = teams.find(t => t.id === activeTeam)
  const maxVal = Math.max(...team.members.map(m => m.workshops))

  return (
    <div className="min-h-screen bg-gray-50 px-3 sm:px-6 py-6 sm:py-8">
      <div className="max-w-6xl mx-auto">

        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-medium text-gray-900">Team Statistics</h1>
          <p className="text-sm text-gray-400 mt-1">Workshops conducted per team member</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-start">

          {/* sidebar */}
          <div className="w-full md:w-48 flex-shrink-0">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Teams</p>
            <div className="flex flex-row md:flex-col gap-2 overflow-x-auto pb-1">
              {teams.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTeam(t.id)}
                  className={`shrink-0 text-sm px-4 py-2 rounded-lg transition-colors border ${
                    activeTeam === t.id
                      ? 'bg-[#e85d04] text-white border-[#e85d04]'
                      : 'text-gray-600 border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  Team {i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* main */}
          <div className="flex-1 min-w-0 w-full">

            <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 mb-4">
              <p className="text-sm text-gray-500 mb-6">
                Team {activeTeam}: workshops per member
              </p>

              {/* bar chart */}
              <div className="overflow-x-auto mb-6">
                <div className="flex items-end gap-2" style={{ height: '140px', minWidth: `${team.members.length * 60}px` }}>
                  {team.members.map((m, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-0.5" style={{ height: '100%' }}>
                      <div className="flex-1 w-full flex items-end">
                        <div
                          className="w-full bg-[#e85d04] rounded-t hover:opacity-75 transition-opacity"
                          style={{ height: `${(m.workshops / maxVal) * 100}%`, minHeight: '4px' }}
                          title={`${m.name}: ${m.workshops}`}
                        />
                      </div>
                      <span className="text-[10px] text-gray-400 leading-none">{m.workshops}</span>
                      <span className="text-[10px] text-gray-400 leading-none truncate w-full text-center">
                        {m.name.split(' ')[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* table */}
              <div className="border-t border-gray-100 pt-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left">
                      <th className="text-xs font-medium text-gray-500 uppercase tracking-wide pb-3">Member</th>
                      <th className="text-xs font-medium text-gray-500 uppercase tracking-wide pb-3">Workshops</th>
                    </tr>
                  </thead>
                  <tbody>
                    {team.members.map((m, i) => (
                      <tr key={i} className="border-t border-gray-100">
                        <td className="py-2.5 text-gray-700">{m.name}</td>
                        <td className="py-2.5 text-gray-600">{m.workshops}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}