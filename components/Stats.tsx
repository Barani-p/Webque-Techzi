import React from 'react';
import { BarChart, Bar, LineChart, Line, ResponsiveContainer, Cell, AreaChart, Area } from 'recharts';
import { ChartIcon1, ChartIcon2, ChartIcon3, ChartIcon4 } from './Icons';
import AnimatedNumber from './AnimatedNumber';

const barData1 = [ { v: 5 }, { v: 8 }, { v: 3 }, { v: 6 }, { v: 4 }];
const areaData = [ { v: 2 }, { v: 5 }, { v: 3 }, { v: 6 }, { v: 4 }, { v: 8 }, { v: 5 }];
const lineData = [ { v: 3 }, { v: 4 }, { v: 6 }, { v: 5 }, { v: 8 }, { v: 7 }, { v: 9 }];
const barData2 = [ { v: 2 }, { v: 3 }, { v: 4 }, { v: 5 }, { v: 8 }, { v: 6 } ];

const StatCard: React.FC<{ icon: React.ReactNode; title: string; value: string; chart: React.ReactNode; }> = ({ icon, title, value, chart }) => {
  const numericValue = parseInt(value) || 0;
  const suffix = value.replace(String(numericValue), '').trim();
  
  return (
    <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-start">
          <p className="text-gray-400">{title}</p>
          {icon}
        </div>
        <AnimatedNumber 
          target={numericValue} 
          suffix={suffix} 
          className="text-5xl font-bold mt-2"
          duration={1500}
        />
      </div>
      <div className="h-20 mt-4">
        {chart}
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<ChartIcon1 />}
          title="Hours Saved for Clients"
          value="190+"
          chart={
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData1}>
                <Bar dataKey="v" fill="#3B82F6" radius={[4, 4, 0, 0]} animationDuration={800} />
              </BarChart>
            </ResponsiveContainer>
          }
        />
        <StatCard
          icon={<ChartIcon2 />}
          title="Processes Automated"
          value="15+"
          chart={
            <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={areaData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="v" stroke="#8884d8" fill="url(#colorUv)" strokeWidth={2} animationDuration={800} />
              </AreaChart>
            </ResponsiveContainer>
          }
        />
        <StatCard
          icon={<ChartIcon3 />}
          title="Process Accuracy Rate"
          value="99%"
          chart={
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <Line type="monotone" dataKey="v" stroke="#f87171" strokeWidth={2} dot={false} animationDuration={1200} animationEasing="ease-in-out" />
              </LineChart>
            </ResponsiveContainer>
          }
        />
        <StatCard
          icon={<ChartIcon4 />}
          title="Faster Operations on Average"
          value="5X"
          chart={
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData2}>
                 <Bar dataKey="v" radius={[4, 4, 0, 0]} animationDuration={800}>
                    {barData2.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 4 ? '#2#0862c9ff' : '#4b5563'} />
                    ))}
                  </Bar>
              </BarChart>
            </ResponsiveContainer>
          }
        />
      </div>
    </section>
  );
};

export default Stats;