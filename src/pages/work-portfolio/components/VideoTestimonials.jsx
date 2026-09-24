import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VideoTestimonials = ({ caseStudies }) => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  const testimonials = caseStudies?.slice(0, 4) || [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear directly from founders and CMOs about their transformation journey with DESCALE
          </p>
        </motion.div>

        {/* Main Video Display */}
        <div className="mb-12">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 border border-gray-700">
            {activeVideo ? (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <Icon name="Play" size={64} className="mx-auto mb-4 opacity-60" />
                  <p className="text-lg">Video player simulation</p>
                  <p className="text-sm text-gray-400 mt-2">
                    {testimonials?.[selectedTestimonial]?.founder}
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <Icon name="PlayCircle" size={80} className="mx-auto mb-6 text-accent" />
                  <h3 className="text-2xl font-bold mb-4">
                    Watch Success Stories
                  </h3>
                  <p className="text-gray-400 mb-8 max-w-md">
                    Select a testimonial below to hear authentic transformation stories from our clients
                  </p>
                </div>
              </div>
            )}
            
            {/* Video Controls */}
            {activeVideo && (
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/60 rounded-lg p-4">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="text-white hover:text-accent transition-colors"
                  >
                    <Icon name="Pause" size={24} />
                  </button>
                  <div className="text-white text-sm">
                    {testimonials?.[selectedTestimonial]?.founder}
                  </div>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="text-white hover:text-accent transition-colors"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials?.map((testimonial, index) => (
            <motion.div
              key={testimonial?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`cursor-pointer group ${
                selectedTestimonial === index 
                  ? 'ring-2 ring-accent' :'hover:ring-2 hover:ring-accent/50'
              }`}
              onClick={() => {
                setSelectedTestimonial(index);
                setActiveVideo(testimonial?.video);
              }}
            >
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 group-hover:border-accent/50 transition-all duration-300">
                {/* Founder Avatar */}
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {testimonial?.founder?.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Play" size={12} className="text-white" />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-1">
                    {testimonial?.founder}
                  </h4>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-accent/20 rounded text-accent text-xs font-semibold">
                      {testimonial?.industry}
                    </span>
                    <span className="text-gray-400 text-xs">•</span>
                    <span className="text-gray-400 text-xs">
                      {testimonial?.results?.growth} growth
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed">
                    "{testimonial?.testimonial}"
                  </p>
                </div>

                {/* Play Button */}
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Play"
                  iconPosition="left"
                  className="w-full border-accent/30 text-accent hover:bg-accent hover:text-white transition-all duration-300"
                >
                  Watch Story
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-gray-900/50 rounded-2xl p-8 md:p-12 border border-gray-800">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {['Series A', 'Series B', 'Series C', 'IPO']?.map((stage, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{stage}</span>
                  </div>
                  <div className="text-gray-400 text-sm">{stage} Companies</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoTestimonials;