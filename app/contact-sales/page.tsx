"use client"

import { useState } from 'react'
import Link from "next/link"
import { ArrowLeft, Phone, Mail, Clock, CheckCircle, Building, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function ContactSalesPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    rooms: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to your backend
    console.log('Form submitted:', formData)
    setFormSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#3b6e96]">
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </Link>
          <div className="font-semibold">Contact Sales</div>
          <div className="w-20" />
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12">
        {/* Hero Section */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Badge className="mb-4 bg-green-100 text-green-700">Available Monday-Friday</Badge>
          <h1 className="text-3xl font-semibold tracking-tight">Let's Transform Your Hotel Operations</h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Get personalized pricing and see how HotelSuite can streamline your property management
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Response within 2 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Free 30-day trial</span>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Direct Contact Card */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Speak with Our Hotel Specialist</CardTitle>
              <CardDescription>
                Get immediate answers to your questions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Sales Rep Info */}
              <div className="flex items-start gap-4">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-semibold">
                  ZS
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">Zbigniew Stonoga</h3>
                  <p className="text-sm text-muted-foreground">Senior Hospitality Consultant</p>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm">15+ years in hotel technology</p>
                    <p className="text-sm">Speaks English, Polish, German</p>
                  </div>
                </div>
              </div>

              {/* Contact Options */}
              <div className="space-y-4 border-t pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <Phone className="h-5 w-5 text-[#4682B4]" />
                  </div>
                  <div>
                    <p className="font-medium">+48 123 456 789</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM CET</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <Mail className="h-5 w-5 text-[#4682B4]" />
                  </div>
                  <div>
                    <p className="font-medium">sales@hotelsuite.com</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <Clock className="h-5 w-5 text-[#4682B4]" />
                  </div>
                  <div>
                    <p className="font-medium">Schedule a Demo</p>
                    <p className="text-sm text-muted-foreground">
                      Book a 30-minute personalized walkthrough
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 border-t pt-6">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-[#4682B4]">500+</div>
                  <div className="text-sm text-muted-foreground">Hotels Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-[#4682B4]">4.8/5</div>
                  <div className="text-sm text-muted-foreground">Customer Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Prefer We Call You?</CardTitle>
              <CardDescription>
                Fill out this form and we'll reach out within 2 business hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Jan Kowalski"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jan@hotelmazurski.pl"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company">Hotel/Company Name *</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Hotel Mazurski Kraków"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+48 601 234 567"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rooms">Number of Rooms *</Label>
                    <Select 
                      required
                      onValueChange={(value) => setFormData({...formData, rooms: value})}
                    >
                      <SelectTrigger id="rooms">
                        <SelectValue placeholder="Select property size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-50">1-50 rooms</SelectItem>
                        <SelectItem value="51-100">51-100 rooms</SelectItem>
                        <SelectItem value="101-200">101-200 rooms</SelectItem>
                        <SelectItem value="201-500">201-500 rooms</SelectItem>
                        <SelectItem value="500+">500+ rooms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">How can we help? (Optional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your current challenges or what features interest you most..."
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#4682B4] hover:bg-[#3b6e96]"
                    size="lg"
                  >
                    Request a Callback
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you agree to our{' '}
                    <Link href="#" className="underline">Privacy Policy</Link> and{' '}
                    <Link href="#" className="underline">Terms of Service</Link>
                  </p>
                </form>
              ) : (
                <div className="py-12 text-center">
                  <CheckCircle className="mx-auto h-12 w-12 text-green-600" />
                  <h3 className="mt-4 text-lg font-semibold">Dziękujemy! / Thank You!</h3>
                  <p className="mt-2 text-muted-foreground">
                    We've received your request. Zbigniew or someone from our team will contact you within 2 business hours.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-6"
                    onClick={() => {
                      setFormSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        rooms: '',
                        message: ''
                      })
                    }}
                  >
                    Submit Another Request
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Trust Section */}
        <div className="mt-12 rounded-xl bg-blue-50 p-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xl font-semibold">Why Hotels Choose HotelSuite</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="flex flex-col items-center">
                <Building className="h-8 w-8 text-[#4682B4]" />
                <p className="mt-2 font-medium">Quick Setup</p>
                <p className="text-sm text-muted-foreground">Go live in under 48 hours</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-8 w-8 text-[#4682B4]" />
                <p className="mt-2 font-medium">Intuitive Design</p>
                <p className="text-sm text-muted-foreground">Staff ready in minutes, not days</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-[#4682B4]" />
                <p className="mt-2 font-medium">24/7 Support</p>
                <p className="text-sm text-muted-foreground">Always here when you need us</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}