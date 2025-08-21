"use client";
import { Container, Row, Col } from "react-bootstrap";
import { Clock, Utensils, Smartphone, MapPin, Users, BarChart3 } from "lucide-react";

export default function FeaturesPage() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-16 pt-5">
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4 pt-5">
            🍴 Daily Dine – Transforming the Dining Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Skip the wait, pre-order your meals, and enjoy seamless dining powered by 
            geolocation, smart restaurant management, and real-time updates.
          </p>
        </div>

        {/* Features Grid */}
        <Row className="g-4">
          <Col md={4}>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 text-center h-100">
              <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pre-Order & Skip the Wait</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Order your food in advance and save precious time – no more standing in long queues.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 text-center h-100">
              <MapPin className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Geolocation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Discover the best nearby restaurants instantly with personalized recommendations.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 text-center h-100">
              <Smartphone className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-Time Meal Updates</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get live order tracking and know exactly when your food is ready.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="g-4 mt-4">
          <Col md={4}>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 text-center h-100">
              <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Optimized for Restaurants</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Manage seating, staffing, and pre-orders efficiently to deliver better service.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 text-center h-100">
              <BarChart3 className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Leverage analytics on customer behavior to boost revenue and loyalty.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 text-center h-100">
              <Utensils className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Delightful Experience</h3>
              <p className="text-gray-600 dark:text-gray-400">
                A smooth, stress-free dining experience for customers and restaurants alike.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
