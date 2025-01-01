import React, { useState, useRef } from 'react';
import { Card } from '../ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Download, Upload } from 'lucide-react';

const CertificateEditor = () => {
  const [certificateData, setCertificateData] = useState({
    recipientName: '',
    courseName: '',
    completionDate: '',
    certificateId: ''
  });
  const [logoPreview, setLogoPreview] = useState(null);
  const certificateRef = useRef(null);

  const handleChange = (e) => {
    setCertificateData({
      ...certificateData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadCertificate = () => {
    const content = certificateRef.current.outerHTML;
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${certificateData.recipientName || 'certificate'}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <Card className="max-w-3xl mx-auto shadow-xl">
        <div className="p-8 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Certificate Editor
            </h1>
            <p className="text-gray-500">Create and customize your certificate</p>
          </div>

          <div className="flex gap-6">
            <div className="w-1/3 space-y-4">
              <Card className="p-4 shadow-md">
                <h2 className="font-semibold mb-4">Upload Logo</h2>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="hidden"
                      id="logo-upload"
                    />
                    <label 
                      htmlFor="logo-upload" 
                      className="cursor-pointer flex flex-col items-center space-y-2"
                    >
                      <Upload className="h-8 w-8 text-gray-400" />
                      <span className="text-sm text-gray-500">Click to upload logo</span>
                    </label>
                  </div>
                </div>
              </Card>

              <Card className="p-4 shadow-md space-y-4">
                <h2 className="font-semibold">Certificate Details</h2>
                <div className="space-y-4">
                  <Input
                    name="recipientName"
                    value={certificateData.recipientName}
                    onChange={handleChange}
                    placeholder="Recipient Name"
                  />
                  <Input
                    name="courseName"
                    value={certificateData.courseName}
                    onChange={handleChange}
                    placeholder="Course Name"
                  />
                  <Input
                    type="date"
                    name="completionDate"
                    value={certificateData.completionDate}
                    onChange={handleChange}
                  />
                  <Input
                    name="certificateId"
                    value={certificateData.certificateId}
                    onChange={handleChange}
                    placeholder="Certificate ID"
                  />
                </div>
              </Card>
            </div>

            <div className="w-2/3">
              <div 
                ref={certificateRef} 
                className="bg-white p-8 rounded-lg border-8 border-double border-gray-200 shadow-lg"
              >
                <div className="text-center space-y-6">
                  {logoPreview && (
                    <img src={logoPreview} alt="Logo" className="h-24 object-contain mx-auto" />
                  )}
                  
                  <div className="space-y-1">
                    <h2 className="text-3xl font-serif text-gray-800">Certificate of Completion</h2>
                    <p className="text-gray-500">This certifies that</p>
                  </div>

                  <div className="text-2xl font-serif font-bold text-blue-600">
                    {certificateData.recipientName || 'Recipient Name'}
                  </div>

                  <div className="space-y-1">
                    <p className="text-gray-500">has successfully completed</p>
                    <div className="text-xl font-semibold text-gray-800">
                      {certificateData.courseName || 'Course Name'}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8 text-sm text-gray-600 mt-8">
                    <div>
                      <p>Completion Date</p>
                      <p className="font-semibold">
                        {certificateData.completionDate || 'DD/MM/YYYY'}
                      </p>
                    </div>
                    <div>
                      <p>Certificate ID</p>
                      <p className="font-semibold">
                        {certificateData.certificateId || 'XXXXX'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button 
              className="w-full" 
              size="lg" 
              onClick={downloadCertificate}
              variant="default"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Certificate
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CertificateEditor;