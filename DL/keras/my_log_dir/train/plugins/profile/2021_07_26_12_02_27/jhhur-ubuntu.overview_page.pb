?	?'?>w+@?'?>w+@!?'?>w+@	?4?	+
???4?	+
??!?4?	+
??"w
=type.googleapis.com/tensorflow.profiler.PerGenericStepDetails6?'?>w+@%̴?+???1
???1@A?3??E`??IHo???J@Y???A???*	Zd;?U@2l
5Iterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat?#ӡ????!E???u?A@)????V`??1???G?A<@:Preprocessing2?
OIterator::Model::ParallelMapV2::Zip[0]::FlatMap[0]::Concatenate[0]::TensorSlicet???)??!???;0@)t???)??1???;0@:Preprocessing2U
Iterator::Model::ParallelMapV2???????!?k??-/@)???????1?k??-/@:Preprocessing2v
?Iterator::Model::ParallelMapV2::Zip[0]::FlatMap[0]::ConcatenateV?`????!bE^^2x<@)9?Վ???1?}?y(@:Preprocessing2F
Iterator::ModelH??0~??!??Y??:@)?`U??N??1?՗??a&@:Preprocessing2x
AIterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat::FromTensorS=??Mz?!?gi??}@)S=??Mz?1?gi??}@:Preprocessing2Z
#Iterator::Model::ParallelMapV2::Zip?=?N???!З)?NR@)?I?Ux?1u?1?
5@:Preprocessing2f
/Iterator::Model::ParallelMapV2::Zip[0]::FlatMapZ??c!??!W?n~J>@)?[X7?Y?1Q_2??:Preprocessing:?
]Enqueuing data: you may want to combine small input data chunks into fewer but larger chunks.
?Data preprocessing: you may increase num_parallel_calls in <a href="https://www.tensorflow.org/api_docs/python/tf/data/Dataset#map" target="_blank">Dataset map()</a> or preprocess the data OFFLINE.
?Reading data from files in advance: you may tune parameters in the following tf.data API (<a href="https://www.tensorflow.org/api_docs/python/tf/data/Dataset#prefetch" target="_blank">prefetch size</a>, <a href="https://www.tensorflow.org/api_docs/python/tf/data/Dataset#interleave" target="_blank">interleave cycle_length</a>, <a href="https://www.tensorflow.org/api_docs/python/tf/data/TFRecordDataset#class_tfrecorddataset" target="_blank">reader buffer_size</a>)
?Reading data from files on demand: you should read data IN ADVANCE using the following tf.data API (<a href="https://www.tensorflow.org/api_docs/python/tf/data/Dataset#prefetch" target="_blank">prefetch</a>, <a href="https://www.tensorflow.org/api_docs/python/tf/data/Dataset#interleave" target="_blank">interleave</a>, <a href="https://www.tensorflow.org/api_docs/python/tf/data/TFRecordDataset#class_tfrecorddataset" target="_blank">reader buffer</a>)
?Other data reading or processing: you may consider using the <a href="https://www.tensorflow.org/programmers_guide/datasets" target="_blank">tf.data API</a> (if you are not using it now)?
:type.googleapis.com/tensorflow.profiler.BottleneckAnalysis?
both?Your program is POTENTIALLY input-bound because 9.4% of the total step time sampled is spent on 'All Others' time (which could be due to I/O or Python execution or both).high"?44.2 % of the total step time sampled is spent on 'Kernel Launch'. It could be due to CPU contention with tf.data. In this case, you may try to set the environment variable TF_GPU_THREAD_MODE=gpu_private.*no9?4?	+
??Id?Q	??J@Q2!??`?F@Zno>Look at Section 3 for the breakdown of input time on the host.B?
@type.googleapis.com/tensorflow.profiler.GenericStepTimeBreakdown?
	%̴?+???%̴?+???!%̴?+???      ??!       "	
???1@
???1@!
???1@*      ??!       2	?3??E`???3??E`??!?3??E`??:	Ho???J@Ho???J@!Ho???J@B      ??!       J	???A??????A???!???A???R      ??!       Z	???A??????A???!???A???b      ??!       JGPUY?4?	+
??b qd?Q	??J@y2!??`?F@?"@
%sequential/embed/embedding_lookup/_15_Send???^???!???^???"g
;gradient_tape/sequential/conv1d/conv1d/Conv2DBackpropFilterConv2DBackpropFilter&x$?˵??!??DR??0"V
;gradient_tape/sequential/embed/embedding_lookup/Reshape/_39_Send8|^z֤??!????WR??"4
sequential/conv1d/conv1dConv2D?4?B????!0??6???"e
:gradient_tape/sequential/conv1d/conv1d/Conv2DBackpropInputConv2DBackpropInput?d	:/???!x????/??0"?
kgradient_tape/sequential/conv1d/conv1d/Conv2DBackpropFilter-0-TransposeNHWCToNCHW-LayoutOptimizer:TransposeUnknown?ͤ?bo??!????d??"?
lgradient_tape/sequential/conv1d/conv1d/Conv2DBackpropInput-0-1-TransposeNCHWToNHWC-LayoutOptimizer:TransposeUnknown?Ӂ?#ř?!???????"g
<gradient_tape/sequential/conv1d_1/conv1d/Conv2DBackpropInputConv2DBackpropInputh+?)???!0???3??0"F
(gradient_tape/sequential/conv1d/ReluGradReluGrad??0????!\GC?Ň??"[
:gradient_tape/sequential/max_pooling1d/MaxPool/MaxPoolGradMaxPoolGrad??k??A?!@"2I???Q      Y@YYS֔5e5@a*kʚ??S@qc?[?????y[pj1???"?

both?Your program is POTENTIALLY input-bound because 9.4% of the total step time sampled is spent on 'All Others' time (which could be due to I/O or Python execution or both).b
`input_pipeline_analyzer (especially Section 3 for the breakdown of input operations on the Host)Q
Otf_data_bottleneck_analysis (find the bottleneck in the tf.data input pipeline)m
ktrace_viewer (look at the activities on the timeline of each Host Thread near the bottom of the trace view)"O
Mtensorflow_stats (identify the time-consuming operations executed on the GPU)"U
Strace_viewer (look at the activities on the timeline of each GPU in the trace view)*?
?<a href="https://www.tensorflow.org/guide/data_performance_analysis" target="_blank">Analyze tf.data performance with the TF Profiler</a>*y
w<a href="https://www.tensorflow.org/guide/data_performance" target="_blank">Better performance with the tf.data API</a>2?
=type.googleapis.com/tensorflow.profiler.GenericRecommendation?
high?44.2 % of the total step time sampled is spent on 'Kernel Launch'. It could be due to CPU contention with tf.data. In this case, you may try to set the environment variable TF_GPU_THREAD_MODE=gpu_private.no*?Only 0.0% of device computation is 16 bit. So you might want to replace more 32-bit Ops by 16-bit Ops to improve performance (if the reduced accuracy is acceptable).2no:
Refer to the TF2 Profiler FAQ2"GPU(: B 