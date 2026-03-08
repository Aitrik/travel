import { motion } from 'motion/react';
import { Compass } from 'lucide-react';

const Loader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
            <div className="flex flex-col items-center gap-6">
                <motion.div
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20"
                >
                    <Compass className="w-10 h-10 text-primary" />
                </motion.div>

                <div className="flex flex-col items-center gap-2">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl font-bold text-secondary tracking-tight"
                    >
                        Travel <span className="text-primary">Go</span>
                    </motion.h2>
                    <div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-full h-full bg-primary"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Loader;
