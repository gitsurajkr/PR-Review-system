'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import Header from "@/components/Header"
const Setting = () => {

    const [emailNotifications, setEmailNotifications] = useState(true)
    const [pushNotifications, setPushNotifications] = useState(false)
    const [aiSensitivity, setAiSensitivity] = useState(50)


    const handleSaveSettings = () => {
        console.log('Saving settings:', { emailNotifications, pushNotifications, aiSensitivity })
    }

    return (

        <div className=" space-y-2">
            <Header />
            <div className='p-3 space-y-4'>
            <h1 className="mb-3 text-2xl font-bold">Settings and Configurations</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="email-notifications">Email Notifications</Label>
                        <Switch
                            id="email-notifications"
                            checked={emailNotifications}
                            onCheckedChange={setEmailNotifications}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <Label htmlFor="push-notifications">Push Notifications</Label>
                        <Switch
                            id="push-notifications"
                            checked={pushNotifications}
                            onCheckedChange={setPushNotifications}
                        />
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>AI Model Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label htmlFor="ai-sensitivity">AI Sensitivity</Label>
                        <Slider
                            id="ai-sensitivity"
                            min={0}
                            max={100}
                            step={1}
                            value={[aiSensitivity]}
                            onValueChange={(value) => setAiSensitivity(value[0])}
                        />
                        <p className="text-sm text-muted-foreground mt-1">Current value: {aiSensitivity}</p>
                    </div>
                    <Button onClick={handleSaveSettings}>Save Settings</Button>
                </CardContent>
            </Card>
        </div>
        </div>
    );
}

export default Setting;