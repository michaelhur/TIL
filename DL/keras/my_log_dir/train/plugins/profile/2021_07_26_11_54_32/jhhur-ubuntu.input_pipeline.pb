	82???\4@82???\4@!82???\4@	hu ????hu ????!hu ????"w
=type.googleapis.com/tensorflow.profiler.PerGenericStepDetails682???\4@????_??1?Yg|_?@AY?? d??I\?3???(@Y?&????*	6^?I?T@2l
5Iterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat?`??
???!H??(??@@)Qf?L2r??1??da?3:@:Preprocessing2U
Iterator::Model::ParallelMapV2,???ؐ?!I z?1?3@),???ؐ?1I z?1?3@:Preprocessing2F
Iterator::Model?e??E??!????A@)s??/و?1e????-@:Preprocessing2v
?Iterator::Model::ParallelMapV2::Zip[0]::FlatMap[0]::Concatenate?'??&2??!.???}h6@)?,??????1?I???&@:Preprocessing2?
OIterator::Model::ParallelMapV2::Zip[0]::FlatMap[0]::Concatenate[0]::TensorSlice?"ڎ????!??j,?%@)?"ڎ????1??j,?%@:Preprocessing2x
AIterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat::FromTensor-???ay?!????E@)-???ay?1????E@:Preprocessing2Z
#Iterator::Model::ParallelMapV2::Zip??;?2??!?$??=uP@)/?$?u?1??9?=@:Preprocessing2f
/Iterator::Model::ParallelMapV2::Zip[0]::FlatMap1[?*?M??!vB?D<	:@)???7??h?1B?MB?@:Preprocessing:?
]Enqueuing data: you may want to combine small input data chunks into fewer but larger chunks.
?Data preprocessing: you may increase num_parallel_calls in <a href="https://www.tensorflow.org/api_docs/python/tf/data/Dataset#map" target="_blank">Dataset map()</a> or preprocess the data OFFLINE.
?Reading data from files in advance: you may tune parameters in the following tf.data API (<a href="https://www.tensorflow.org/api_docs/python/tf/data/Dataset#prefetch" target="_blank">prefetch size</a>, <a href="https://www.tensorflow.org/api_docs/python/tf/data/Dataset#interleave" target="_blank">interleave cycle_length</a>, <a href="https://www.tensorflow.org/api_docs/python/tf/data/TFRecordDataset#class_tfrecorddataset" target="_blank">reader buffer_size</a>)
?Reading data from files on demand: you should read data IN ADVANCE using the following tf.data API (<a href="https://www.tensorflow.org/api_docs/python/tf/data/Dataset#prefetch" target="_blank">prefetch</a>, <a href="https://www.tensorflow.org/api_docs/python/tf/data/Dataset#interleave" target="_blank">interleave</a>, <a href="https://www.tensorflow.org/api_docs/python/tf/data/TFRecordDataset#class_tfrecorddataset" target="_blank">reader buffer</a>)
?Other data reading or processing: you may consider using the <a href="https://www.tensorflow.org/programmers_guide/datasets" target="_blank">tf.data API</a> (if you are not using it now)?
:type.googleapis.com/tensorflow.profiler.BottleneckAnalysis?
both?Your program is POTENTIALLY input-bound because 9.0% of the total step time sampled is spent on 'All Others' time (which could be due to I/O or Python execution or both).high"?60.3 % of the total step time sampled is spent on 'Kernel Launch'. It could be due to CPU contention with tf.data. In this case, you may try to set the environment variable TF_GPU_THREAD_MODE=gpu_private.*no9hu ????I_???]Q@Qi?UtBr>@Zno>Look at Section 3 for the breakdown of input time on the host.B?
@type.googleapis.com/tensorflow.profiler.GenericStepTimeBreakdown?
	????_??????_??!????_??      ??!       "	?Yg|_?@?Yg|_?@!?Yg|_?@*      ??!       2	Y?? d??Y?? d??!Y?? d??:	\?3???(@\?3???(@!\?3???(@B      ??!       J	?&?????&????!?&????R      ??!       Z	?&?????&????!?&????b      ??!       JGPUYhu ????b q_???]Q@yi?UtBr>@