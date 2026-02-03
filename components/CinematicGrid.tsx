"use client";

import React from "react";
import { motion } from "framer-motion";

interface FeatureItem {
  title: string;
  desc: string;
  icon?: () => React.ReactNode;
  img?: string;
}

interface CinematicGridProps {
  features?: FeatureItem[];
  backgroundColor?: string;
  stickyTop?: string;
}

interface StickyCardProps {
  item: FeatureItem;
  index: number;
  stickyTop?: string;
}

const StickyCard: React.FC<StickyCardProps> = ({ item, index, stickyTop = "top-24" }) => {
  const Icon = item.icon;
  return (
    <div className={`sticky ${stickyTop} min-h-[50vh] flex items-center justify-center py-10`}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ margin: "-10% 0px -10% 0px" }}
        className="relative w-full h-[500px] rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 group"
      >
        <div className="absolute inset-0">
          {item.img && (
            <img src={item.img} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000" alt="" />
          )}
        </div>

        <div className="absolute inset-0 p-12 flex flex-col justify-end items-start z-10">
          {Icon && (
            <div className="mb-6 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white">
              <Icon />
            </div>
          )}
          <h2 className="text-6xl md:text-8xl font-medium tracking-tighter text-white mb-4 mix-blend-overlay">{item.title}</h2>
          <p className="text-xl text-neutral-400 max-w-md">{item.desc}</p>
        </div>

        <div className="absolute top-6 right-6 font-mono text-sm text-white/30">
          0{index + 1} — FEATURE
        </div>
      </motion.div>
    </div>
  );
};

const CinematicGrid: React.FC<CinematicGridProps> = ({
  features = [
    { title: "Global Edge", desc: "Latency is a choice. We chose zero.", img: "/Bharat%20Felicitation%202.jpg" },
    { title: "Neural Engine", desc: "Predictive scaling before the spike hits.", img: "/IMG_20260124_122318%202.jpg" },
    { title: "Vault Security", desc: "Encryption that physics can't break.", img: "/WhatsApp%20Image%202026-01-26%20at%2017.10.10%20(1).jpeg" },
    { title: "Fluid Workflow", desc: "Design to production in one breath.", img: "/WhatsApp%20Image%202026-01-26%20at%2017.10.10.jpeg" },
  ],
  backgroundColor = "#ffffff",
  stickyTop = "top-24",
}) => {
  return (
    <div className="min-h-screen py-24 px-4 md:px-12 font-sans" style={{ backgroundColor }}>
      <div className="max-w-5xl mx-auto space-y-32">
        {features.map((feat, i) => (
          <StickyCard key={i} item={feat} index={i} stickyTop={stickyTop} />
        ))}
      </div>
    </div>
  );
};

export default CinematicGrid;
