import { motion, AnimatePresence } from "framer-motion";
import SettingMain from "./SettingsComponents/SettingMain";
import About from "./SettingsComponents/About";
import Skills from "./SettingsComponents/Skills";
import Projects from "./SettingsComponents/Projects";
import Experiences from "./SettingsComponents/Experiences";
import Education from "./SettingsComponents/Education";

const Settings = () => {
  return (
    <AnimatePresence>
      <motion.div layout className="p-7 relative w-[450px]">
        <SettingMain />
        <About />
        <Skills />
        <Education />
        <Experiences />
        <Projects />
      </motion.div>
    </AnimatePresence>
  );
};

export default Settings;