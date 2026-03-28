import React, { useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

interface Project {
  title: string;
  description: string;
  highlights?: string[];
  year: string;
  category: string;
  tags: string[];
  href: string;
  featured?: boolean;
  image?: string;
  video?: string;
  customVisual?: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "GutSync AI",
    description: "A production-grade multi-agent architecture orchestrated by LangGraph to analyze digestive health symptoms via natural language processing, document vision, and targeted research integration.",
    highlights: [
      "Engineered an advanced LangGraph state machine with dynamic routing and parallel asynchronous research execution.",
      "Integrated state-of-the-art vision-capable LLMs for robust multi-modal structure extraction from medical text, PDFs, and clinical imagery.",
      "Implemented stringent medical safety guardrails including automated schema validation, red flag detection, and strict reasoning constraints.",
      "Optimized latency and cloud inference costs via deterministic generation pipelines, concurrent data fetching, and granular prompt optimizations."
    ],
    year: "2026",
    category: "Agentic AI / Healthcare",
    tags: ["LangGraph", "FastAPI", "Agentic AI", "LLMs", "Pydantic"],
    href: "https://github.com/Sid3503/gut-sync",
    featured: true,
    video: "/videos/gut-sync-demo.mp4"
  },
  {
    title: "AI Sahayak",
    description: "Proactive intelligence platform for 63+ million Indian MSMEs, acting as a smart business partner with early warnings.",
    highlights: [
      "LangGraph multi-agent backend with Amazon Bedrock (Nova Lite) for Hinglish chat, reasoning, and pricing explanations.",
      "Proactive Pipeline using AWS Lambda, EventBridge, and Systems Manager to push scheduled personalized alerts.",
      "SageMaker DeepAR integration for demand forecasting with Prophet ensemble fallback.",
      "Voice input/output support using Amazon Transcribe and Amazon Polly.",
      "Built for the AWS AI for Bharat Hackathon."
    ],
    year: "2026",
    category: "Agentic AI / LLM",
    tags: ["AWS Bedrock", "LangGraph", "FastAPI", "React", "EventBridge"],
    href: "https://github.com/Sid3503/ai-sahayak",
    featured: true,
    video: "/videos/ai_sahayak.mp4"
  },
  {
    title: "Bristol Stool AI",
    description: "A production-grade deep learning system to classify stool images across 7 Bristol Stool Scale types via an ensemble of 7 neural network models.",
    highlights: [
      "Engineered custom multi-task CNN architectures (StoolNetTriple) built on top of pre-trained ResNet50 and DenseNet121 backbones.",
      "Developed a TypeAttention module using multi-scale (3×3, 5×5, 7×7) and depthwise separable convolutions for advanced texture analysis.",
      "Built an ensemble of 7 models utilizing 5-fold cross-validation, progressive augmentation, and mixup to handle class imbalances.",
      "Implemented Test-Time Augmentation (TTA×8) alongside Focal Loss, boosting final type classification accuracy by up to 7%."
    ],
    year: "2026",
    category: "AI / Healthcare",
    tags: ["PyTorch", "AWS EC2", "FastAPI", "Computer Vision", "Ensemble Models"],
    href: "https://github.com/Sid3503",
    featured: true,
    customVisual: (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#070707] overflow-hidden p-4 md:p-6 font-mono">
        <div className="text-[10px] text-white/50 mb-8 tracking-widest uppercase text-center relative z-10 w-full">
          Triple Attention Architecture
          <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
        
        <div className="relative flex items-center justify-center gap-4 md:gap-8 w-full z-10 scale-90 md:scale-100 mt-2">
          {/* Input Feature Map */}
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-6 h-6 md:w-8 md:h-8 rounded-sm border border-white/20 bg-white/5 backdrop-blur-sm"
                  style={{ top: i * 4, left: i * 4, zIndex: 3 - i }}
                  animate={{ borderColor: ['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.1)'] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
            <span className="text-[7px] md:text-[8px] text-white/30 tracking-widest mt-2 md:mt-3">FEATURES</span>
          </div>

          {/* Split indicator */}
          <div className="flex flex-col justify-between h-24 w-4 md:w-6 opacity-40">
            <motion.div className="w-full h-px bg-gradient-to-r from-white/10 to-[#3b82f6]/50 origin-left" animate={{ scaleX: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
            <motion.div className="w-full h-px bg-gradient-to-r from-white/10 to-[#10b981]/50 origin-left" animate={{ scaleX: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
            <motion.div className="w-full h-px bg-gradient-to-r from-white/10 to-[#8b5cf6]/50 origin-left" animate={{ scaleX: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />
          </div>

          {/* 3 Parallel Attention Channels */}
          <div className="flex flex-col gap-2 md:gap-3 w-36 md:w-44">
            {/* Position Attention */}
            <motion.div 
              className="w-full flex items-center justify-between p-2 md:p-2.5 rounded bg-gradient-to-r from-[#3b82f6]/10 to-transparent border border-[#3b82f6]/20 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col relative z-10">
                <span className="text-[9px] md:text-[10px] font-bold text-[#3b82f6]">POSITION</span>
                <span className="text-[6px] md:text-[7px] text-white/40 mt-0.5 whitespace-nowrap">Spatial [Q×K] map</span>
              </div>
              <motion.div className="w-2 h-2 rounded-full bg-[#3b82f6] shadow-[0_0_8px_rgba(59,130,246,0.6)]" animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }} />
            </motion.div>

            {/* Channel Attention */}
            <motion.div 
              className="w-full flex items-center justify-between p-2 md:p-2.5 rounded bg-gradient-to-r from-[#10b981]/10 to-transparent border border-[#10b981]/20 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col relative z-10">
                <span className="text-[9px] md:text-[10px] font-bold text-[#10b981]">CHANNEL</span>
                <span className="text-[6px] md:text-[7px] text-white/40 mt-0.5 whitespace-nowrap">Inter-channel [C×C]</span>
              </div>
              <div className="flex gap-[2px] items-end h-[10px]">
                {[1, 2, 3].map(i => (
                  <motion.div key={i} className="w-[2px] bg-[#10b981] rounded-t-sm shadow-[0_0_6px_rgba(16,185,129,0.5)]" animate={{ height: ['40%', '100%', '40%'] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }} />
                ))}
              </div>
            </motion.div>

            {/* Type Attention */}
            <motion.div 
              className="w-full flex items-center justify-between p-2 md:p-2.5 rounded bg-gradient-to-r from-[#8b5cf6]/10 to-transparent border border-[#8b5cf6]/20 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col relative z-10">
                <span className="text-[9px] md:text-[10px] font-bold text-[#8b5cf6]">TYPE</span>
                <span className="text-[6px] md:text-[7px] text-white/40 mt-0.5 whitespace-nowrap">Multi-scale Texture</span>
              </div>
              <div className="flex gap-[3px] items-end h-[12px]">
                <motion.div className="w-[4px] border border-[#8b5cf6] bg-[#8b5cf6]/30 shadow-[0_0_6px_rgba(139,92,246,0.4)]" animate={{ height: ['40%', '70%', '40%'] }} transition={{ duration: 2, repeat: Infinity }} />
                <motion.div className="w-[6px] border border-[#8b5cf6] bg-[#8b5cf6]/30 shadow-[0_0_6px_rgba(139,92,246,0.4)]" animate={{ height: ['60%', '90%', '60%'] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
                <motion.div className="w-[8px] border border-[#8b5cf6] bg-[#8b5cf6]/30 shadow-[0_0_6px_rgba(139,92,246,0.4)]" animate={{ height: ['80%', '100%', '80%'] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />
              </div>
            </motion.div>
          </div>

          {/* Join indicator */}
          <div className="flex flex-col justify-between h-24 w-4 md:w-6 opacity-40">
            <motion.div className="w-full h-px bg-gradient-to-l from-white/20 to-[#3b82f6]/50 origin-right" animate={{ scaleX: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
            <motion.div className="w-full h-px bg-gradient-to-l from-white/20 to-[#10b981]/50 origin-right" animate={{ scaleX: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
            <motion.div className="w-full h-px bg-gradient-to-l from-white/20 to-[#8b5cf6]/50 origin-right" animate={{ scaleX: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />
          </div>

          {/* Fusion / Classification */}
          <div className="flex flex-col items-center gap-1 z-10">
            <motion.div 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-dashed border-white/20 flex items-center justify-center relative p-1 object-contain"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-2 rounded-full border-[2px] border-t-white/40 border-r-transparent border-b-transparent border-l-transparent" />
              <div className="absolute inset-2 rounded-full bg-white/5" />
            </motion.div>
            <div className="absolute flex flex-col items-center">
              <span className="text-[7px] md:text-[8px] font-bold text-white mb-[-2px]">FUSED</span>
              <span className="text-[6px] text-white/50">OUT</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "English – Hebrew Transformer",
    description: "A PyTorch implementation of a Transformer model for English-to-Hebrew translation, trained on the OPUS100 multilingual dataset.",
    highlights: [
      "End-to-end training pipeline: data prep → model → training → inference in one notebook.",
      "Custom BilingualDataset builds encoder/decoder inputs with [SOS]/[EOS]/[PAD] tokens and masks.",
      "Sinusoidal positional encoding + scaled token embeddings for stable Transformer training.",
      "Causal masking for decoder ensures autoregressive translation correctness.",
      "Kaggle-ready setup with configurable hyperparameters and checkpointed weights."
    ],
    year: "2024",
    category: "Deep Learning",
    tags: ["PyTorch", "Transformer", "Seq2Seq", "OPUS100", "NLP", "Translation"],
    href: "https://github.com/Sid3503/EngHebrew-Transformer",
    featured: true,
    image: "/images/eng2heb.png"
  },
  {
    title: "Cancero",
    description: "Catch it fast, prevent the pain — an AI-powered cancer-detection tool combining computer vision and NLP for early screening.",
    highlights: [
      "CNN-based image classification for medical scans (e.g., MRI, CT, X-ray).",
      "PDF upload with markdown summaries and AI-generated diagnostic insights.",
      "Confidence plots for predictions, plus doctor recommendations and booking flow.",
      "Real-time cancer research updates via News API integration."
    ],
    year: "2024",
    category: "AI / Healthcare",
    tags: ["Flask", "Computer Vision", "Medical Imaging", "NLP", "PDF Summarization", "News API"],
    href: "https://github.com/Sid3503/Cancero",
    featured: true,
    image: "/images/cancero.png",
    video: "/videos/cancero.mp4"
  },

  {
    title: "AnimeGAN",
    description: "Generate anime-style images using a Generative Adversarial Network trained from scratch with custom architecture choices.",
    highlights: [
      "DCGAN architecture optimized for anime face generation in PyTorch.",
      "Trained on the 63k+ Anime Face Dataset with a full preprocessing pipeline.",
      "Training visualization tools and video output of generation progress.",
      "Configurable hyperparameters for faster experimentation and tuning."
    ],
    year: "2023",
    category: "Generative AI",
    tags: ["PyTorch", "DCGAN", "GANs", "Computer Vision", "Image Generation", "Anime Faces"],
    href: "https://github.com/Sid3503/AnimeGAN",
    video: "/videos/gans_training.mp4"
  },
  {
    title: "VQGAN",
    description: "Implemented VQGAN (Vector Quantized GAN) combining vector quantization with adversarial training for high-fidelity image synthesis.",
    highlights: [
      "VQ-VAE + GAN pipeline that learns a discrete visual codebook.",
      "Explains encoder → quantizer → decoder flow with training loop intuition.",
      "Minimal implementation focused on MNIST digit generation examples."
    ],
    year: "2023",
    category: "Advanced GANs",
    tags: ["VQGAN", "VQ-VAE", "Vector Quantization", "GANs", "Image Synthesis", "MNIST"],
    href: "https://github.com/Sid3503/VQgan",
    image: "/images/vqgan_samples.png",
    featured: true
  },
  {
    title: "Token-Shuffle-MLLMs",
    description: "Efficient High-Resolution Image Generation via Token Shuffling in Multimodal LLMs.",
    highlights: [
      "Leverages inherent redundancy in visual token representations to compress sequences during transformer processing.",
      "Token-Shuffle Mechanism: Combines spatially adjacent tokens and applies dimensional reduction via MLP.",
      "Reduces self-attention FLOPs by approximately s^4 to achieve massive computational savings.",
      "Restores spatial relationships post-transformer via a Token-Unshuffle (Split) mechanism."
    ],
    year: "2025",
    category: "Multimodal LLMs",
    tags: ["Research", "Image Generation", "Transformers", "Efficiency"],
    href: "https://github.com/Sid3503/Token-shuffle-MLLMs",
    featured: true,
    image: "https://github.com/user-attachments/assets/4006d117-adcb-4ae0-b6c9-018a3da74e3d"
  },
  {
    title: "NoProp",
    description: "Training Neural Networks Without Forward/Backward Propagation through denoising diffusion.",
    highlights: [
      "Propagation-Free Training: Layers train independently via denoising without sequential passes.",
      "Diffusion-Based Learning: Progressively corrupts labels where each layer learns a distinct noise level.",
      "Biologically Plausible: Avoids weight transport problem and purely relies on local learning.",
      "Enables massively parallel layer training while remaining memory efficient."
    ],
    year: "2025",
    category: "Deep Learning Research",
    tags: ["Diffusion Models", "NoProp", "Neural Networks", "PyTorch"],
    href: "https://github.com/Sid3503/NoProp",
    featured: true,
    customVisual: (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden p-6 font-mono">
        <div className="text-[10px] text-white/40 mb-6 tracking-widest uppercase text-center">Parallel Layer Denoising<br/><span className="text-[8px] opacity-70">(No Propagation)</span></div>
        <div className="flex gap-4">
          {[1, 2, 3].map((layer, i) => (
            <div key={layer} className="flex flex-col items-center gap-2">
              <div className="text-[9px] text-white/30">L{layer}</div>
              <motion.div 
                className="w-8 h-12 md:w-10 md:h-16 rounded border border-white/20 relative overflow-hidden flex items-center justify-center bg-white/5"
              >
                <motion.div
                  className="absolute inset-0 bg-white"
                  style={{ backgroundImage: 'radial-gradient(circle, #555 1px, transparent 1px)', backgroundSize: '4px 4px' }}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
                />
                <motion.span 
                  className="relative text-white/80 text-lg font-bold"
                  animate={{ opacity: [0, 1, 0], scale: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
                >
                  Y
                </motion.span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Sparse Attention",
    description: "Implementation of sparse attention techniques to address the long sequence processing bottleneck in Transformers.",
    highlights: [
      "Implemented Vertical Slash Attention which intuitively combines local window attention with global tokens.",
      "Explored techniques including Local Window Attention, Global Tokens, and Block Attention.",
      "Addresses memory constraints where full attention memory scales quadratically O(n^2)."
    ],
    year: "2025",
    category: "Deep Learning",
    tags: ["Transformers", "Sparse Attention", "LLMs"],
    href: "https://github.com/Sid3503/sparse-attention",
    customVisual: (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#050505] overflow-hidden p-6">
        <div className="grid grid-cols-7 gap-1 md:gap-1.5 opacity-90 mb-4">
          {[...Array(49)].map((_, i) => {
            const row = Math.floor(i / 7);
            const col = i % 7;
            const isCenter = row === 3 && col === 3;
            // Global (0) + Local Window
            const isAttending = row === 0 || col === 0 || (Math.abs(row - 3) <= 1 && Math.abs(col - 3) <= 1);
            
            return (
              <motion.div 
                key={i} 
                className={`w-3 h-3 md:w-4 md:h-4 rounded-[2px] ${isCenter ? 'bg-white' : 'bg-white/10'}`}
                animate={{
                  opacity: isCenter ? 1 : isAttending ? [0.1, 0.8, 0.1] : 0.05,
                  scale: isCenter ? [1, 1.2, 1] : isAttending ? [1, 1.1, 1] : 1
                }}
                transition={{ duration: 2, repeat: Infinity, delay: isAttending && !isCenter ? (row + col) * 0.1 : 0, ease: "easeInOut" }}
              />
            );
          })}
        </div>
        <div className="font-mono text-[9px] md:text-[10px] tracking-widest text-white/50 uppercase mt-2">
          Global + Local Window Search
        </div>
      </div>
    )
  },
  {
    title: "TFT Forecasting",
    description: "Temporal Fusion Transformer for interpretable multi-horizon time series forecasting.",
    highlights: [
      "Features Gating (GRN) to turn off unnecessary networks and dynamically selects features per time step.",
      "Processes past exogenous covariates alongside known future inputs systematically.",
      "Generates multi-horizon probabilistic forecasts via quantile regression (p10, p50, p90)."
    ],
    year: "2025",
    category: "Time Series",
    tags: ["TFT", "Transformers", "Time Series", "Forecasting", "PyTorch"],
    href: "https://github.com/Sid3503/TFT-Forecasting",
    customVisual: (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0d0d0d] overflow-hidden">
        <div className="text-[9px] md:text-[10px] text-white/50 mb-6 font-mono uppercase tracking-wider text-center">Multi-Horizon Quantiles</div>
        <div className="relative w-40 h-20 flex items-end justify-start border-l border-b border-white/20 pl-4 pb-2">
          <motion.div 
            className="absolute left-[30px] bottom-0 origin-bottom-left border-t-2 border-r-2 border-[#4ade80]/40 bg-[#4ade80]/10 rounded-tr-[100%]"
            style={{ width: '100px' }}
            animate={{ height: ['0px', '70px', '0px'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute left-[30px] bottom-0 origin-bottom-left border-t-2 border-r-2 border-white/60 bg-white/10 rounded-tr-[100%]"
            style={{ width: '80px' }}
            animate={{ height: ['0px', '45px', '0px'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          />
          <motion.div 
            className="absolute left-[30px] bottom-0 origin-bottom-left border-t-2 border-r-2 border-white/30 bg-white/5 rounded-tr-[100%]"
            style={{ width: '60px' }}
            animate={{ height: ['0px', '20px', '0px'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />
          <motion.div 
            className="absolute bottom-[2px] left-[30px] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]"
            animate={{ x: [-30, 0, 0, -30] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="flex gap-6 mt-6 font-mono text-[9px] text-white/40">
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-[#4ade80]/40"></span> p90</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-white/60"></span> p50</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-white/30"></span> p10</span>
        </div>
      </div>
    )
  },
  {
    title: "PPO Reward Fine-Tuning",
    description: "Reward-based fine-tuning of language models to strictly follow target word count instructions.",
    highlights: [
      "Developed a custom PPO-inspired pipeline using TinyLlama-1.1B for word count restricted summarization.",
      "Uses selective masking: only generated tokens are rewarded or penalized based on matching the word count.",
      "Optimized generation purely through gradient ascent to map high expected task success."
    ],
    year: "2025",
    category: "LLMs / RL",
    tags: ["Fine-Tuning", "PPO", "LLM", "Hugging Face"],
    href: "https://github.com/Sid3503/ppo-reward",
    customVisual: (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#09090b] overflow-hidden font-mono px-4">
        <div className="relative w-full max-w-[240px] h-14 flex items-center border border-white/10 rounded overflow-hidden bg-white/5 mb-4">
          <div className="absolute right-0 top-0 bottom-0 w-20 border-l border-[#4ade80]/40 bg-[#4ade80]/10 flex flex-col items-center justify-center z-10 shadow-[-10px_0_15px_rgba(9,9,11,0.8)]">
            <span className="text-[8px] text-[#4ade80] tracking-widest">+1 REWARD</span>
            <span className="text-[7px] text-[#4ade80]/60 mt-0.5">(Scored)</span>
          </div>
          <div className="absolute inset-0 flex items-center px-4">
            <motion.div 
              className="flex gap-2"
              animate={{ x: ['100%', '-120%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(3)].map((_, i) => (
                <div key={`p-t-${i}`} className="w-12 h-6 bg-white/10 rounded border border-white/20 flex items-center justify-center shrink-0"><span className="text-[8px] text-white/50">Prompt</span></div>
              ))}
              {[...Array(4)].map((_, i) => (
                <div key={`g-t-${i}`} className="w-12 h-6 bg-[#4ade80]/20 border border-[#4ade80]/40 rounded flex items-center justify-center shrink-0"><span className="text-[8px] text-[#4ade80]">Output</span></div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="text-[10px] text-white/60 tracking-widest uppercase">Targeted Masking</div>
          <div className="text-[8px] text-white/40 mt-1.5 max-w-[200px]">Prompt tokens are bypassed.<br/>Generator output receives targeted signal.</div>
        </div>
      </div>
    )
  },
  {
    title: "U-Net",
    description: "U-shaped architecture consisting of an encoder and decoder for precise image segmentation tasks.",
    highlights: [
      "Contracting Path (Encoder): Repeated convolutions and max pooling to capture context and reduce spatial dimensions.",
      "Expansive Path (Decoder): Transposed convolutions enable precise localization by combining contracting features.",
      "Skip Connections: Connects encoder to decoder layers to effortlessly recover lost spatial downsampling information.",
      "Highly efficient for biomedical imaging datasets like Oxford-IIIT Pet."
    ],
    year: "2025",
    category: "Computer Vision",
    tags: ["U-Net", "Segmentation", "PyTorch", "Deep Learning"],
    href: "https://github.com/Sid3503/UNet",
    featured: true,
    customVisual: (
      <div className="absolute inset-0 flex items-center justify-center bg-[#07070a] overflow-hidden p-4">
        <div className="flex flex-col items-center mt-4">
          <div className="text-[10px] text-white/50 mb-6 font-mono uppercase tracking-wider text-center">U-Net Architecture</div>
          <div className="relative flex justify-between w-48 h-28">
            {/* Encoder */}
            <div className="flex flex-col justify-between h-full items-end gap-2 pr-6 border-r border-white/5">
              <motion.div className="w-10 h-3 bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 rounded-sm" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} />
              <motion.div className="w-8 h-5 bg-[#8b5cf6]/40 border border-[#8b5cf6]/50 rounded-sm" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} />
              <motion.div className="w-6 h-8 bg-[#8b5cf6]/60 border border-[#8b5cf6]/60 rounded-sm" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.8 }} />
            </div>
            
            {/* Bottleneck */}
            <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-8 h-4 bg-[#8b5cf6] rounded flex items-center justify-center">
              <motion.div className="w-2/3 h-[2px] bg-white/50" animate={{ scaleX: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1.0 }} />
            </div>

            {/* Skip Connections */}
            <div className="absolute inset-0 flex flex-col justify-start gap-[28px] pt-[5px] pointer-events-none z-10 w-full">
              <div className="relative w-full h-[1px]">
                <motion.div className="absolute left-8 w-[calc(100%-64px)] h-[1px] bg-white/40 border-t border-dashed border-white/50 origin-left" animate={{ scaleX: [0, 1, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} />
              </div>
              <div className="relative w-full h-[1px]">
                <motion.div className="absolute left-10 w-[calc(100%-80px)] h-[1px] bg-white/40 border-t border-dashed border-white/50 origin-left" animate={{ scaleX: [0, 1, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} />
              </div>
              <div className="relative w-full h-[1px]">
                <motion.div className="absolute left-12 w-[calc(100%-96px)] h-[1px] bg-white/40 border-t border-dashed border-white/50 origin-left" animate={{ scaleX: [0, 1, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.8 }} />
              </div>
            </div>

            {/* Decoder */}
            <div className="flex flex-col-reverse justify-between h-full items-start gap-2 pl-6 border-l border-white/5">
              <motion.div className="w-10 h-3 bg-[#4ade80]/20 border border-[#4ade80]/40 rounded-sm" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 2.0 }} />
              <motion.div className="w-8 h-5 bg-[#4ade80]/40 border border-[#4ade80]/50 rounded-sm" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 1.6 }} />
              <motion.div className="w-6 h-8 bg-[#4ade80]/60 border border-[#4ade80]/60 rounded-sm" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 1.2 }} />
            </div>
          </div>
          <div className="font-mono text-[8px] text-white/30 mt-8 tracking-widest text-center">
            ENCODER &nbsp;&nbsp; ➔ &nbsp;&nbsp; DECODER + SKIP
          </div>
        </div>
      </div>
    )
  },
  {
    title: "LoRA Fine-Tuning",
    description: "Low-Rank Adaptation technique that inherently reduces trainable parameters via rank decomposed matrices.",
    highlights: [
      "Freezes the pre-trained weights, avoiding expensive full fine-tuning constraints.",
      "Injects trainable decomposition matrices A and B within the transformer's dense layers.",
      "Reduces trainable parameters drastically (e.g. 400x fewer parameters for the same layer output approximation).",
      "Easily merges matrices back into the frozen weights during standard inference with α scaling."
    ],
    year: "2025",
    category: "LLMs / PEFT",
    tags: ["LoRA", "PEFT", "LLM", "Fine-Tuning", "PyTorch"],
    href: "https://github.com/Sid3503/LoRA",
    featured: true,
    customVisual: (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a09] overflow-hidden p-6 font-mono">
        <div className="text-[10px] text-white/50 mb-8 tracking-widest uppercase text-center">Low-Rank Adaptation</div>
        <div className="flex items-center justify-center gap-6 w-full mt-4">
          {/* Pre-trained Weights */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-[60px] h-[80px] bg-white/5 border border-white/10 rounded flex flex-col items-center justify-center relative shadow-[inset_0_0_15px_rgba(255,255,255,0.02)]">
              <span className="text-white/40 text-[10px] font-bold">W</span>
              <span className="text-[6px] text-white/20 mt-1">FROZEN</span>
              <div className="absolute inset-0 overflow-hidden rounded">
                <motion.div 
                   className="w-full h-[1px] bg-white/20"
                   animate={{ y: [0, 80] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
          </div>
          
          <div className="text-white/30 text-lg font-light">+</div>

          {/* LoRA Matrices */}
          <div className="flex flex-col gap-2 items-center justify-center relative w-[80px]">
            <div className="flex items-end justify-center gap-1.5 z-10">
              <motion.div 
                className="w-4 h-14 bg-[#3b82f6]/20 border border-[#3b82f6]/40 rounded flex items-center justify-center"
                animate={{ borderColor: ['rgba(59,130,246,0.3)', 'rgba(59,130,246,0.8)', 'rgba(59,130,246,0.3)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-[8px] text-[#3b82f6]">A</span>
              </motion.div>
              <span className="text-white/40 text-[10px] mb-4">×</span>
              <motion.div 
                className="w-14 h-4 bg-[#3b82f6]/20 border border-[#3b82f6]/40 rounded flex items-center justify-center"
                animate={{ borderColor: ['rgba(59,130,246,0.3)', 'rgba(59,130,246,0.8)', 'rgba(59,130,246,0.3)'] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-[8px] text-[#3b82f6]">B</span>
              </motion.div>
            </div>
            {/* Outline showing they expand back to W size */}
            <motion.div 
              className="absolute -top-3 left-[10px] w-[60px] h-[80px] border border-dashed border-[#3b82f6]/40 rounded"
              animate={{ backgroundColor: ['rgba(59,130,246,0.0)', 'rgba(59,130,246,0.1)', 'rgba(59,130,246,0.0)'] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="absolute -bottom-6 text-[7px] text-[#3b82f6]/80 tracking-widest whitespace-nowrap bg-[#0a0a09] px-1 z-20">ΔW = AB (Trainable)</div>
          </div>
        </div>
      </div>
    )
  }
];

const ProjectsPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="blur-content">

        {/* Hero */}
        <section ref={heroRef} className="relative px-6 md:px-12 lg:px-20 pt-32 pb-0">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <motion.h1
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-display font-bold leading-[1.0] tracking-[-0.03em] text-foreground"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              projects
            </motion.h1>

            <motion.p
              className="font-mono text-xs text-muted-foreground pb-3 max-w-xs md:text-right"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              a selection of work spanning machine learning, deep learning, and software engineering
            </motion.p>
          </div>

          <motion.div
            className="max-w-7xl mx-auto mt-10 h-px bg-border"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
        </section>

        {/* Projects Cards List */}
        <section className="px-6 md:px-12 lg:px-20 py-16 pb-32">
          <div className="max-w-7xl mx-auto flex flex-col gap-32">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start relative group">
                {/* Left Card Area */}
                <motion.a 
                  href={project.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full lg:w-[75%] rounded-[32px] overflow-hidden block relative group/card bg-[#111111] text-foreground border border-border/20 hover:border-primary/40 transition-colors"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  <div className="p-8 md:p-12 flex flex-col h-full">
                    {/* Top Bar */}
                    <div 
                      className="flex justify-between items-center pb-4 mb-8 border-b border-border/40 group-hover/card:border-primary/30 transition-colors duration-500"
                    >
                      <span className="font-mono text-sm tracking-tight text-white/50 group-hover/card:text-primary transition-colors duration-500">{project.year}</span>
                      <span className="font-mono text-sm tracking-tight text-white/50 group-hover/card:text-primary transition-colors duration-500">{project.category}</span>
                    </div>
                    
                    {/* Title & Arrow */}
                    <div className="flex justify-between items-start mb-12">
                      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight pr-4 leading-[1.1] text-white">
                        {project.title.toLowerCase()}
                      </h2>
                      <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shrink-0 mt-2">
                        <motion.svg 
                          width="100%" height="100%" viewBox="0 0 14 14" fill="none"
                          className="origin-center text-white/30 group-hover/card:text-primary transition-colors duration-500"
                          variants={{
                            rest: { scale: 1, rotate: 0 },
                            hover: { scale: 1.15, rotate: -15 }
                          }}
                          initial="rest"
                          whileHover="hover"
                          animate="rest"
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </motion.svg>
                      </div>
                    </div>

                    {/* Image/Video Container */}
                    <div className="w-full relative aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden mt-auto bg-black/5" style={{ transform: "translateZ(0)" }}>
                      <motion.div
                        className="w-full h-full"
                        variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {project.video ? (
                          <video 
                            src={project.video} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="absolute inset-0 w-full h-full object-cover" 
                          />
                        ) : project.image ? (
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            loading="lazy" 
                            className="absolute inset-0 w-full h-full object-cover bg-white/5" 
                          />
                        ) : project.customVisual ? (
                          project.customVisual
                        ) : (
                          <div className="absolute inset-0 w-full h-full bg-white/5 flex flex-col items-center justify-center p-6 text-center border-y border-white/5">
                            <span className="font-display text-3xl md:text-4xl text-white/20 tracking-tight">
                              {project.title.toLowerCase()}
                            </span>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </motion.a>

                {/* Right Text Area */}
                <motion.div 
                  className="w-full lg:w-[25%] lg:pt-[128px]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <p className="font-mono text-[13px] md:text-sm leading-[1.8] max-w-sm text-muted-foreground group-hover:text-primary/90 transition-colors duration-500">
                    {project.description}
                  </p>

                  {project.highlights && project.highlights.length > 0 && (
                    <div className="mt-6">
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 group-hover:text-primary/70 transition-colors duration-500">
                        highlights
                      </p>
                      <ul className="mt-3 space-y-2 text-[13px] md:text-sm leading-[1.6] text-muted-foreground">
                        {project.highlights.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex gap-2">
                            <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-white/40 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.tags.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border/40 bg-white/5 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-6">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-white/60 hover:text-primary transition-colors"
                    >
                      view repo
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    </SmoothScroll>
  );
};

export default ProjectsPage;
