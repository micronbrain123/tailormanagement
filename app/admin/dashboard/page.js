"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  Settings,
  LogOut,
  Bell,
  Search,
  Menu,
  X,
  Eye,
  DollarSign,
  Activity,
  Calendar,
  Scissors,
  Shirt,
  Ruler,
  Truck,
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  Star,
  PlusCircle,
  Edit,
  ChevronRight
} from 'lucide-react';

// Import the actual components
import Orders from './Orders';
import Agencies from './Agencies';
import Vendors from './Vendors';
import Items from './Items';
import Deliveries from './Deliveries';
import Billing from './Billing';
import SettingsPage from './SettingsPage';

export default function TailoringDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'agencies', label: 'Agencies', icon: Users },
    { id: 'orders', label: 'Orders', icon: FileText },
    { id: 'vendors', label: 'Vendors', icon: Scissors },
    { id: 'items', label: 'Items', icon: Package },
    { id: 'deliveries', label: 'Deliveries', icon: Truck },
    { id: 'billing', label: 'Billing', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const statsData = [
    { title: 'Active Orders', value: '47', color: 'from-blue-400 to-blue-600', icon: Shirt, trend: '+12%' },
    { title: 'Customers', value: '156', color: 'from-green-400 to-green-600', icon: Users, trend: '+8%' },
    { title: 'Tailors', value: '12', color: 'from-purple-400 to-purple-600', icon: Scissors, trend: '+2' },
    { title: 'Pending Deliveries', value: '23', color: 'from-orange-400 to-orange-600', icon: Truck, trend: '-5' },
    { title: 'Revenue (₹)', value: '₹1,24,500', color: 'from-cyan-400 to-cyan-600', icon: DollarSign, trend: '+15%' },
    { title: 'Completed Orders', value: '89', color: 'from-pink-400 to-pink-600', icon: CheckCircle, trend: '+18%' },
  ];

  const recentOrders = [
    { 
      id: 'ORD-001', 
      customer: 'Rajesh Kumar', 
      item: 'Wedding Suit', 
      status: 'Cutting', 
      delivery: '2025-07-15', 
      amount: '₹8,500',
      priority: 'High'
    },
    { 
      id: 'ORD-002', 
      customer: 'Priya Sharma', 
      item: 'Saree Blouse', 
      status: 'Stitching', 
      delivery: '2025-07-12', 
      amount: '₹2,200',
      priority: 'Medium'
    },
    { 
      id: 'ORD-003', 
      customer: 'Amit Patel', 
      item: 'Formal Shirt', 
      status: 'Quality Check', 
      delivery: '2025-07-10', 
      amount: '₹1,800',
      priority: 'Low'
    },
    { 
      id: 'ORD-004', 
      customer: 'Sneha Joshi', 
      item: 'Lehenga', 
      status: 'Ready', 
      delivery: '2025-07-09', 
      amount: '₹15,000',
      priority: 'High'
    },
  ];

  const topTailors = [
    { name: 'Ramesh Mistri', orders: 15, rating: 4.9, specialty: 'Suits' },
    { name: 'Sunita Devi', orders: 12, rating: 4.8, specialty: 'Blouses' },
    { name: 'Mohan Lal', orders: 10, rating: 4.7, specialty: 'Kurtas' },
    { name: 'Kavita Sharma', orders: 8, rating: 4.6, specialty: 'Sarees' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Cutting': return 'bg-yellow-100 text-yellow-800';
      case 'Stitching': return 'bg-blue-100 text-blue-800';
      case 'Quality Check': return 'bg-purple-100 text-purple-800';
      case 'Ready': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleViewAllOrders = () => {
    setCurrentPage('orders');
    setSidebarOpen(false);
  };

  const handleViewAllTailors = () => {
    setCurrentPage('vendors');
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        
        {/* Logo */}
        <div className="flex items-center justify-between p-4 lg:p-6 border-b">
          <div className="flex items-center">
            <Scissors className="w-6 h-6 lg:w-8 lg:h-8 text-blue-600 mr-2" />
            <h1 className="text-lg lg:text-xl font-bold text-gray-800">TailorPro</h1>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-4 lg:mt-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center px-4 lg:px-6 py-3 text-left transition-colors ${
                  currentPage === item.id
                    ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 w-full p-4 lg:p-6 border-t">
        <Link href="/admin">
          <button className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 lg:px-6 py-3 lg:py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-500 hover:text-gray-700 mr-3"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h2 className="text-lg lg:text-xl font-semibold text-gray-800 capitalize">
                {currentPage === 'dashboard' ? 'Dashboard' : currentPage}
              </h2>
            </div>
            
            <div className="flex items-center space-x-2 lg:space-x-4">
              {/* Notifications */}
              <button className="relative p-2 text-gray-600 hover:text-gray-800">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  7
                </span>
              </button>
              
              {/* User Profile */}
              <div className="flex items-center space-x-2 lg:space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">A</span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-800">Shop Owner</p>
                  <p className="text-xs text-gray-500">admin@tailorpro.com</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-3 lg:p-6">
          {currentPage === 'dashboard' && (
            <div className="space-y-4 lg:space-y-6">
              {/* Welcome Message */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 lg:p-6 text-white">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-lg font-semibold mb-2">Welcome to TailorPro</h3>
                    <p className="text-blue-100 text-sm lg:text-base">Today: Monday, July 07, 2025</p>
                    <p className="text-blue-100 text-sm lg:text-base">Urgent deliveries: 3 orders due today</p>
                  </div>
                  <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                    <PlusCircle className="w-4 h-4" />
                    <span>New Order</span>
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {statsData.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 lg:p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                          <p className="text-2xl lg:text-3xl font-bold text-gray-900">{stat.value}</p>
                          <p className="text-sm text-green-600 mt-1">{stat.trend}</p>
                        </div>
                        <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center ml-4`}>
                          <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Recent Orders and Top Tailors */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6">
                {/* Recent Orders */}
                <div className="xl:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="p-4 lg:p-6 border-b border-gray-200 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
                    <button 
                      onClick={handleViewAllOrders}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                    >
                      View All
                    </button>
                  </div>
                  
                  {/* Mobile Card View */}
                  <div className="block lg:hidden">
                    {recentOrders.map((order, index) => (
                      <div key={index} className="p-4 border-b border-gray-100 last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-blue-600">{order.id}</span>
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-gray-900">{order.customer}</p>
                          <p className="text-sm text-gray-600">{order.item}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">{order.delivery}</span>
                            <span className="text-sm font-medium text-gray-900">{order.amount}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Desktop Table View */}
                  <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Order ID
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Customer
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Item
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Delivery
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {recentOrders.map((order, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                              {order.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {order.customer}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {order.item}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(order.status)}`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {order.delivery}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {order.amount}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Top Tailors */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="p-4 lg:p-6 border-b border-gray-200 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800">Top Tailors</h3>
                    <button 
                      onClick={handleViewAllTailors}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                    >
                      View All
                    </button>
                  </div>
                  <div className="p-4 lg:p-6 space-y-3 lg:space-y-4">
                    {topTailors.map((tailor, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-medium">
                              {tailor.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{tailor.name}</p>
                            <p className="text-xs text-gray-500">{tailor.specialty}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">{tailor.orders} orders</p>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="text-xs text-gray-600">{tailor.rating}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Pages */}
          {currentPage === 'orders' && <Orders />}
          {currentPage === 'agencies' && <Agencies />}
          {currentPage === 'vendors' && <Vendors />}
          {currentPage === 'items' && <Items />}
          {currentPage === 'deliveries' && <Deliveries />}
          {currentPage === 'billing' && <Billing />}
          {currentPage === 'settings' && <SettingsPage />}
        </main>
      </div>
    </div>
  );
}