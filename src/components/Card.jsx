import { motion } from "framer-motion";

export default function Card({ title, value, icon }) {
  return (
    <motion.div
      className="dashboard-card"
      whileHover={{ y: -6, scale: 1.04, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="icon">{icon}</div>
      <h4>{title}</h4>
      <p>{value}</p>
    </motion.div>
  );
}
