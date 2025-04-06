"use client"
import { motion } from "framer-motion"

export function PaymentMethods() {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-sm font-medium">Payment Methods</h3>
      <div className="flex flex-wrap gap-3">
        <motion.div
          className="flex items-center justify-center p-2 bg-white rounded-md shadow-sm border"
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="relative w-12 h-8">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-bold">BB</span>
            </div>
          </div>
          <span className="ml-2 text-xs font-medium">Bangladesh Bank</span>
        </motion.div>

        <motion.div
          className="flex items-center justify-center p-2 bg-white rounded-md shadow-sm border"
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="relative w-12 h-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-bold">VISA</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center p-2 bg-white rounded-md shadow-sm border"
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="relative w-12 h-8">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-bold">MC</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center p-2 bg-white rounded-md shadow-sm border"
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="relative w-12 h-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-bold">bKash</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center p-2 bg-white rounded-md shadow-sm border"
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="relative w-12 h-8">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-bold">Nagad</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

